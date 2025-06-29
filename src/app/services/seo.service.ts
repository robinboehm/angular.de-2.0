import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

export interface SEOData {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'blog';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  tags?: string[];
  readingTime?: number;
}

@Injectable({
  providedIn: 'root'
})
export class SEOService {
  private readonly baseUrl = 'https://angular.de';
  private readonly siteName = 'Angular.de';
  private readonly defaultImage = '/assets/images/angular-de-og-image.jpg';

  constructor(
    private meta: Meta,
    private title: Title,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  /**
   * Update page SEO with comprehensive meta tags
   */
  updateSEO(seoData: SEOData): void {
    // Set page title
    this.title.setTitle(`${seoData.title} | ${this.siteName}`);

    // Basic meta tags
    this.meta.updateTag({ name: 'description', content: seoData.description });
    this.meta.updateTag({ name: 'keywords', content: seoData.keywords || '' });
    this.meta.updateTag({ name: 'author', content: seoData.author || 'Angular.de Team' });

    // Canonical URL
    const canonicalUrl = seoData.url || `${this.baseUrl}${this.router.url}`;
    this.updateCanonicalUrl(canonicalUrl);

    // Open Graph tags
    this.updateOpenGraphTags(seoData, canonicalUrl);

    // Twitter Card tags
    this.updateTwitterCardTags(seoData);

    // Article-specific tags
    if (seoData.type === 'article') {
      this.updateArticleTags(seoData);
    }

    // Structured data
    this.updateStructuredData(seoData, canonicalUrl);

    // Additional SEO meta tags
    this.updateAdditionalSEOTags(seoData);
  }

  /**
   * Set homepage SEO
   */
  setHomepageSEO(): void {
    const seoData: SEOData = {
      title: 'Angular.de - Deutsche Angular Community',
      description: 'Die größte deutschsprachige Angular Community. Tutorials, Artikel, News und Events rund um Angular, TypeScript und moderne Webentwicklung.',
      keywords: 'Angular, TypeScript, JavaScript, Frontend, Webentwicklung, Tutorial, Community, Deutschland',
      type: 'website',
      url: this.baseUrl
    };

    this.updateSEO(seoData);
  }

  /**
   * Set articles page SEO
   */
  setArticlesPageSEO(): void {
    const seoData: SEOData = {
      title: 'Angular Artikel & Tutorials',
      description: 'Umfassende Sammlung von Angular Artikeln und Tutorials. Von Grundlagen bis zu fortgeschrittenen Themen - alles auf Deutsch.',
      keywords: 'Angular Artikel, Angular Tutorial, Angular Grundlagen, Angular Fortgeschritten, TypeScript Tutorial',
      type: 'website',
      url: `${this.baseUrl}/artikel`
    };

    this.updateSEO(seoData);
  }

  /**
   * Set article detail SEO
   */
  setArticleSEO(article: {
    title: string;
    excerpt: string;
    author: string;
    date: string;
    slug: string;
    tags: string[];
    readTime: number;
    headerImage?: string;
  }): void {
    const seoData: SEOData = {
      title: article.title,
      description: article.excerpt,
      keywords: article.tags.join(', '),
      image: article.headerImage || this.defaultImage,
      type: 'article',
      author: article.author,
      publishedTime: new Date(article.date).toISOString(),
      tags: article.tags,
      readingTime: article.readTime,
      url: `${this.baseUrl}/artikel/${article.slug}`
    };

    this.updateSEO(seoData);
  }

  /**
   * Update canonical URL
   */
  private updateCanonicalUrl(url: string): void {
    if (isPlatformBrowser(this.platformId)) {
      // Remove existing canonical link
      const existingCanonical = document.querySelector('link[rel="canonical"]');
      if (existingCanonical) {
        existingCanonical.remove();
      }

      // Add new canonical link
      const link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      link.setAttribute('href', url);
      document.head.appendChild(link);
    }
  }

  /**
   * Update Open Graph tags
   */
  private updateOpenGraphTags(seoData: SEOData, canonicalUrl: string): void {
    this.meta.updateTag({ property: 'og:title', content: `${seoData.title} | ${this.siteName}` });
    this.meta.updateTag({ property: 'og:description', content: seoData.description });
    this.meta.updateTag({ property: 'og:type', content: seoData.type || 'website' });
    this.meta.updateTag({ property: 'og:url', content: canonicalUrl });
    this.meta.updateTag({ property: 'og:site_name', content: this.siteName });
    this.meta.updateTag({ property: 'og:image', content: seoData.image || this.defaultImage });
    this.meta.updateTag({ property: 'og:image:alt', content: `${seoData.title} - ${this.siteName}` });
    this.meta.updateTag({ property: 'og:locale', content: 'de_DE' });

    if (seoData.type === 'article') {
      if (seoData.author) {
        this.meta.updateTag({ property: 'article:author', content: seoData.author });
      }
      if (seoData.publishedTime) {
        this.meta.updateTag({ property: 'article:published_time', content: seoData.publishedTime });
      }
      if (seoData.tags) {
        // Remove existing article:tag meta tags
        const existingTags = document.querySelectorAll('meta[property="article:tag"]');
        existingTags.forEach(tag => tag.remove());
        
        // Add new article:tag meta tags
        seoData.tags.forEach(tag => {
          this.meta.addTag({ property: 'article:tag', content: tag });
        });
      }
    }
  }

  /**
   * Update Twitter Card tags
   */
  private updateTwitterCardTags(seoData: SEOData): void {
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:site', content: '@angular_de' });
    this.meta.updateTag({ name: 'twitter:title', content: `${seoData.title} | ${this.siteName}` });
    this.meta.updateTag({ name: 'twitter:description', content: seoData.description });
    this.meta.updateTag({ name: 'twitter:image', content: seoData.image || this.defaultImage });
    
    if (seoData.author) {
      this.meta.updateTag({ name: 'twitter:creator', content: `@${seoData.author.replace(/\s+/g, '').toLowerCase()}` });
    }
  }

  /**
   * Update article-specific tags
   */
  private updateArticleTags(seoData: SEOData): void {
    if (seoData.readingTime) {
      this.meta.updateTag({ name: 'reading-time', content: `${seoData.readingTime} min` });
    }
    
    this.meta.updateTag({ name: 'article:section', content: 'Angular Development' });
    
    if (seoData.tags) {
      this.meta.updateTag({ name: 'news_keywords', content: seoData.tags.join(', ') });
    }
  }

  /**
   * Update structured data (JSON-LD)
   */
  private updateStructuredData(seoData: SEOData, canonicalUrl: string): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    // Remove existing structured data
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    let structuredData: any;

    if (seoData.type === 'article') {
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: seoData.title,
        description: seoData.description,
        author: {
          '@type': 'Person',
          name: seoData.author || 'Angular.de Team'
        },
        publisher: {
          '@type': 'Organization',
          name: this.siteName,
          logo: {
            '@type': 'ImageObject',
            url: `${this.baseUrl}/assets/images/angular-de-logo.png`
          }
        },
        datePublished: seoData.publishedTime,
        dateModified: seoData.modifiedTime || seoData.publishedTime,
        url: canonicalUrl,
        image: seoData.image || this.defaultImage,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': canonicalUrl
        },
        keywords: seoData.keywords,
        articleSection: 'Angular Development',
        inLanguage: 'de-DE'
      };

      if (seoData.readingTime) {
        structuredData.timeRequired = `PT${seoData.readingTime}M`;
      }
    } else {
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: this.siteName,
        url: this.baseUrl,
        description: seoData.description,
        potentialAction: {
          '@type': 'SearchAction',
          target: `${this.baseUrl}/artikel?search={search_term_string}`,
          'query-input': 'required name=search_term_string'
        },
        publisher: {
          '@type': 'Organization',
          name: this.siteName,
          logo: {
            '@type': 'ImageObject',
            url: `${this.baseUrl}/assets/images/angular-de-logo.png`
          }
        }
      };
    }

    // Add structured data to page
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);
  }

  /**
   * Update additional SEO tags
   */
  private updateAdditionalSEOTags(seoData: SEOData): void {
    // Language and region
    this.meta.updateTag({ name: 'language', content: 'de' });
    this.meta.updateTag({ name: 'geo.region', content: 'DE' });
    this.meta.updateTag({ name: 'geo.country', content: 'Deutschland' });

    // Content categorization
    this.meta.updateTag({ name: 'category', content: 'Technology' });
    this.meta.updateTag({ name: 'coverage', content: 'Worldwide' });
    this.meta.updateTag({ name: 'distribution', content: 'Global' });
    this.meta.updateTag({ name: 'rating', content: 'General' });

    // Robots and indexing
    this.meta.updateTag({ name: 'robots', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' });
    this.meta.updateTag({ name: 'googlebot', content: 'index, follow' });

    // Additional meta tags for better SEO
    this.meta.updateTag({ name: 'theme-color', content: '#dd0031' });
    this.meta.updateTag({ name: 'msapplication-TileColor', content: '#dd0031' });
    this.meta.updateTag({ name: 'apple-mobile-web-app-capable', content: 'yes' });
    this.meta.updateTag({ name: 'apple-mobile-web-app-status-bar-style', content: 'default' });
  }

  /**
   * Generate sitemap data
   */
  generateSitemapUrls(): { url: string; lastmod: string; changefreq: string; priority: string }[] {
    const baseUrls = [
      { url: '/', lastmod: new Date().toISOString().split('T')[0], changefreq: 'weekly', priority: '1.0' },
      { url: '/artikel', lastmod: new Date().toISOString().split('T')[0], changefreq: 'daily', priority: '0.9' },
      { url: '/training', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: '0.8' },
      { url: '/community', lastmod: new Date().toISOString().split('T')[0], changefreq: 'weekly', priority: '0.7' },
      { url: '/ressourcen', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: '0.6' }
    ];

    return baseUrls;
  }
} 