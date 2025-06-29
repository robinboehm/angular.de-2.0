import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ArticleService } from './article.service';

export interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: string;
}

@Injectable({
  providedIn: 'root'
})
export class SitemapService {
  private readonly baseUrl = 'https://angular.de';

  constructor(private articleService: ArticleService) {}

  /**
   * Generate complete sitemap data
   */
  generateSitemap(): Observable<SitemapUrl[]> {
    return this.articleService.getAllArticles().pipe(
      map(articles => {
        const urls: SitemapUrl[] = [];

        // Add static pages
        urls.push({
          loc: this.baseUrl,
          lastmod: new Date().toISOString().split('T')[0],
          changefreq: 'weekly',
          priority: '1.0'
        });

        urls.push({
          loc: `${this.baseUrl}/artikel`,
          lastmod: new Date().toISOString().split('T')[0],
          changefreq: 'daily',
          priority: '0.9'
        });

        urls.push({
          loc: `${this.baseUrl}/training`,
          lastmod: new Date().toISOString().split('T')[0],
          changefreq: 'monthly',
          priority: '0.8'
        });

        urls.push({
          loc: `${this.baseUrl}/community`,
          lastmod: new Date().toISOString().split('T')[0],
          changefreq: 'weekly',
          priority: '0.7'
        });

        urls.push({
          loc: `${this.baseUrl}/ressourcen`,
          lastmod: new Date().toISOString().split('T')[0],
          changefreq: 'monthly',
          priority: '0.6'
        });

        // Add category pages
        const categories = this.articleService.getCategories();
        categories.forEach(category => {
          if (category !== 'Alle') {
            urls.push({
              loc: `${this.baseUrl}/artikel?category=${encodeURIComponent(category)}`,
              lastmod: new Date().toISOString().split('T')[0],
              changefreq: 'weekly',
              priority: '0.7'
            });
          }
        });

        // Add individual articles
        articles.forEach(article => {
          urls.push({
            loc: `${this.baseUrl}/artikel/${article.slug}`,
            lastmod: this.parseDate(article.date),
            changefreq: 'monthly',
            priority: '0.8'
          });
        });

        return urls;
      })
    );
  }

  /**
   * Generate XML sitemap string
   */
  generateXmlSitemap(): Observable<string> {
    return this.generateSitemap().pipe(
      map(urls => {
        let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
        xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

        urls.forEach(url => {
          xml += '  <url>\n';
          xml += `    <loc>${this.escapeXml(url.loc)}</loc>\n`;
          xml += `    <lastmod>${url.lastmod}</lastmod>\n`;
          xml += `    <changefreq>${url.changefreq}</changefreq>\n`;
          xml += `    <priority>${url.priority}</priority>\n`;
          xml += '  </url>\n';
        });

        xml += '</urlset>';
        return xml;
      })
    );
  }

  /**
   * Generate robots.txt content
   */
  generateRobotsTxt(): string {
    return `User-agent: *
Allow: /

# Allow all common crawlers
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Slurp
Allow: /

User-agent: DuckDuckBot
Allow: /

User-agent: Baiduspider
Allow: /

User-agent: YandexBot
Allow: /

User-agent: facebookexternalhit
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: LinkedInBot
Allow: /

# Disallow search results and filtered pages with query parameters
Disallow: /artikel?*
Disallow: /*?search=*
Disallow: /*?category=*
Disallow: /*?filter=*

# Allow specific important parameter combinations
Allow: /artikel?category=Alle

# Block common unwanted bots
User-agent: AhrefsBot
Disallow: /

User-agent: SemrushBot
Disallow: /

User-agent: MJ12bot
Disallow: /

# Crawl delay for better server performance
Crawl-delay: 1

# Sitemap location
Sitemap: ${this.baseUrl}/sitemap.xml`;
  }

  private parseDate(dateString: string): string {
    try {
      // Try to parse the German date format
      const parts = dateString.split('.');
      if (parts.length === 3) {
        const day = parts[0].trim();
        const monthName = parts[1].trim();
        const year = parts[2].trim();
        
        const monthMap: { [key: string]: string } = {
          'Jan': '01', 'Feb': '02', 'Mär': '03', 'Apr': '04',
          'Mai': '05', 'Jun': '06', 'Jul': '07', 'Aug': '08',
          'Sep': '09', 'Okt': '10', 'Nov': '11', 'Dez': '12'
        };
        
        const month = monthMap[monthName] || '01';
        return `${year}-${month}-${day.padStart(2, '0')}`;
      }
      
      // Fallback: try to parse as ISO date
      const date = new Date(dateString);
      if (!isNaN(date.getTime())) {
        return date.toISOString().split('T')[0];
      }
    } catch (error) {
      console.warn('Could not parse date:', dateString);
    }
    
    // Ultimate fallback
    return new Date().toISOString().split('T')[0];
  }

  private escapeXml(str: string): string {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }
} 