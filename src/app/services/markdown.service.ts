import { Injectable } from '@angular/core';
import { marked } from 'marked';
import { Article } from './article.service';

export interface MarkdownArticle {
  slug: string;
  frontmatter: {
    title: string;
    description: string;
    author: string;
    published_at: string;
    categories: string[];
    tags?: string[];
    header_image?: string;
    [key: string]: any;
  };
  content: string;
  htmlContent: string;
  articlePath?: string; // Path to article folder
}

@Injectable({
  providedIn: 'root'
})
export class MarkdownService {
  
  constructor() {
    // Configure marked options
    marked.setOptions({
      gfm: true,
      breaks: false,
      pedantic: false,
    });
  }

  /**
   * Parse markdown content and extract frontmatter
   */
  parseMarkdown(markdownContent: string, slug: string, articlePath?: string): MarkdownArticle {
    const { frontmatter, content } = this.extractFrontmatter(markdownContent);
    let processedContent = content;

    // Process relative image paths if articlePath is provided
    if (articlePath) {
      processedContent = this.processImagePaths(content, articlePath);
    }

    const htmlContent = marked(processedContent) as string;

    return {
      slug,
      frontmatter,
      content: processedContent,
      htmlContent,
      articlePath
    };
  }

  /**
   * Convert MarkdownArticle to Article interface
   */
  convertToArticle(markdownArticle: MarkdownArticle): Article {
    const readTime = this.calculateReadTime(markdownArticle.content);
    
    // Handle header image path
    let headerImage: string | undefined;
    if (markdownArticle.frontmatter.header_image && markdownArticle.articlePath) {
      headerImage = `${markdownArticle.articlePath}${markdownArticle.frontmatter.header_image}`;
    }
    
    return {
      slug: markdownArticle.slug,
      title: markdownArticle.frontmatter.title,
      excerpt: markdownArticle.frontmatter.description || this.generateExcerpt(markdownArticle.content),
      author: markdownArticle.frontmatter.author,
      date: this.formatDate(markdownArticle.frontmatter.published_at),
      category: this.mapCategory(markdownArticle.frontmatter.categories),
      readTime,
      tags: markdownArticle.frontmatter.tags || markdownArticle.frontmatter.categories || [],
      headerImage,
      articlePath: markdownArticle.articlePath
    };
  }

  /**
   * Process relative image paths in markdown content
   */
  private processImagePaths(content: string, articlePath: string): string {
    // Replace relative image paths with absolute paths
    return content.replace(
      /!\[([^\]]*)\]\((?!https?:\/\/)([^)]+)\)/g,
      (match, alt, imagePath) => {
        // Skip if already absolute path or external URL
        if (imagePath.startsWith('/') || imagePath.startsWith('http')) {
          return match;
        }
        
        // Convert relative path to absolute path
        const absolutePath = `${articlePath}${imagePath}`;
        return `![${alt}](${absolutePath})`;
      }
    );
  }

  /**
   * Extract frontmatter from markdown content
   */
  private extractFrontmatter(markdownContent: string): { frontmatter: any; content: string } {
    const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
    const match = markdownContent.match(frontmatterRegex);

    if (!match) {
      return {
        frontmatter: {},
        content: markdownContent
      };
    }

    const frontmatterStr = match[1];
    const content = match[2];
    const frontmatter: any = {};

    // Simple YAML parser for frontmatter
    frontmatterStr.split('\n').forEach(line => {
      const colonIndex = line.indexOf(':');
      if (colonIndex > -1) {
        const key = line.substring(0, colonIndex).trim();
        let value = line.substring(colonIndex + 1).trim();
        
        // Remove quotes
        if ((value.startsWith('"') && value.endsWith('"')) || 
            (value.startsWith("'") && value.endsWith("'"))) {
          value = value.slice(1, -1);
        }

        // Handle arrays
        if (value.startsWith('[') && value.endsWith(']')) {
          const arrayValue = value.slice(1, -1).split(',').map(item => item.trim().replace(/['"]/g, ''));
          frontmatter[key] = arrayValue;
        } else {
          frontmatter[key] = value;
        }
      }
    });

    // Handle categories as string (convert to array)
    if (frontmatter.categories && typeof frontmatter.categories === 'string') {
      frontmatter.categories = frontmatter.categories.split(' ').filter((cat: string) => cat.length > 0);
    }

    return { frontmatter, content };
  }

  /**
   * Calculate estimated reading time
   */
  private calculateReadTime(content: string): number {
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    return Math.ceil(wordCount / wordsPerMinute);
  }

  /**
   * Generate excerpt from content
   */
  private generateExcerpt(content: string, maxLength: number = 160): string {
    const cleanContent = content.replace(/[#*`]/g, '').trim();
    if (cleanContent.length <= maxLength) {
      return cleanContent;
    }
    return cleanContent.substring(0, maxLength) + '...';
  }

  /**
   * Format date string
   */
  private formatDate(dateString: string): string {
    if (!dateString) return '';
    
    const date = new Date(dateString);
    return date.toLocaleDateString('de-DE', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  }

  /**
   * Map category from original to our categories
   */
  private mapCategory(originalCategories: string[] | string): string {
    if (!originalCategories) {
      return 'Angular Grundlagen';
    }

    // Convert to array if string
    const categories = Array.isArray(originalCategories) 
      ? originalCategories 
      : [originalCategories];

    // Define category mapping with priorities (first match wins)
    const categoryMappings: { [key: string]: string } = {
      // AngularJS specific
      'angularjs': 'AngularJS',
      
      // Angular releases and updates
      'release': 'Angular Updates',
      'update': 'Angular Updates',
      
      // Testing related
      'testing': 'Testing',
      'cypress': 'Testing',
      'test': 'Testing',
      'e2e': 'Testing',
      'unit': 'Testing',
      
      // Ionic specific
      'ionic': 'Ionic',
      'ionic2': 'Ionic',
      
      // Components and architecture
      'components': 'Components',
      'component': 'Components',
      'directives': 'Components',
      'directive': 'Components',
      
      // Services and DI
      'services': 'Services',
      'service': 'Services',
      'dependency': 'Services',
      'injection': 'Services',
      
      // Routing
      'routing': 'Routing',
      'router': 'Routing',
      'routes': 'Routing',
      'navigation': 'Routing',
      
      // Forms
      'forms': 'Forms',
      'form': 'Forms',
      'reactive': 'Forms',
      'validation': 'Forms',
      
      // HTTP and APIs
      'http': 'HTTP',
      'api': 'HTTP',
      'rest': 'HTTP',
      'ajax': 'HTTP',
      
      // Performance
      'performance': 'Performance',
      'optimization': 'Performance',
      'lazy': 'Performance',
      'loading': 'Performance',
      
      // Community and events
      'community': 'Community',
      'conference': 'Community',
      'event': 'Community',
      'meetup': 'Community',
      'ng-de': 'Community',
      'ngde': 'Community',
      
      // Interviews
      'interview': 'Interviews',
      'gespraech': 'Interviews',
      'im-gespraech': 'Interviews',
      
      // Tutorials and learning
      'tutorial': 'Tutorials',
      'guide': 'Tutorials',
      'learning': 'Tutorials',
      'beginner': 'Tutorials',
      'einsteiger': 'Tutorials',
      'deutsch': 'Tutorials',
      
      // Tools and development
      'cli': 'Tools & Development',
      'development': 'Tools & Development',
      'tools': 'Tools & Development',
      'vscode': 'Tools & Development',
      'webpack': 'Tools & Development',
      'build': 'Tools & Development',
      'deployment': 'Tools & Development',
      'docker': 'Tools & Development',
      'environment': 'Tools & Development',
      'environments': 'Tools & Development',
      'typescript': 'Tools & Development',
      'javascript': 'Tools & Development',
      'stackblitz': 'Tools & Development',
      'debugging': 'Tools & Development',
      'chrome': 'Tools & Development',
      'extension': 'Tools & Development',
      
      // General Angular (fallback)
      'angular': 'Angular Grundlagen',
      'angular2': 'Angular Grundlagen',
      'angular4': 'Angular Grundlagen',
      'angular15': 'Angular Grundlagen',
      'angular17': 'Angular Grundlagen',
      'angular18': 'Angular Grundlagen',
      'angular20': 'Angular Grundlagen',
      'signals': 'Angular Grundlagen',
      'observables': 'Angular Grundlagen',
      'rxjs': 'Angular Grundlagen',
      'zoneless': 'Angular Grundlagen',
      'hydration': 'Angular Grundlagen',
      'ssr': 'Angular Grundlagen'
    };

    // Find the best matching category
    for (const category of categories) {
      const normalizedCategory = category.toLowerCase().trim();
      
      // Check for exact matches first
      if (categoryMappings[normalizedCategory]) {
        return categoryMappings[normalizedCategory];
      }
      
      // Check for partial matches
      for (const [key, value] of Object.entries(categoryMappings)) {
        if (normalizedCategory.includes(key) || key.includes(normalizedCategory)) {
          return value;
        }
      }
    }

    // Default fallback
    return 'Angular Grundlagen';
  }
} 