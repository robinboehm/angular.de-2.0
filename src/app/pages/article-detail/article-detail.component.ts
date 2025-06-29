import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil, switchMap } from 'rxjs/operators';
import { ArticleService, Article } from '../../services/article.service';
import { MarkdownService, MarkdownArticle } from '../../services/markdown.service';
import { SEOService } from '../../services/seo.service';

@Component({
  selector: 'app-article-detail',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Loading State -->
    <div *ngIf="isLoading" class="min-h-screen flex items-center justify-center">
      <div class="text-center">
        <div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-angular-red mb-4"></div>
        <p class="text-gray-600">Artikel wird geladen...</p>
      </div>
    </div>

    <!-- Article Not Found -->
    <div *ngIf="!isLoading && !article" class="min-h-screen flex items-center justify-center">
      <div class="text-center">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">Artikel nicht gefunden</h1>
        <p class="text-xl text-gray-600 mb-8">Der angeforderte Artikel konnte nicht gefunden werden.</p>
        <a routerLink="/artikel" class="btn-primary">Zurück zu den Artikeln</a>
      </div>
    </div>

    <!-- Article Content -->
    <article *ngIf="!isLoading && article" class="min-h-screen">
      <!-- Hero Section with Header Image -->
      <div class="relative h-96 bg-gradient-to-br from-angular-red to-red-600 overflow-hidden">
        <!-- Header Image if available -->
        <img 
          *ngIf="article.headerImage" 
          [src]="article.headerImage" 
          [alt]="article.title"
          class="absolute inset-0 w-full h-full object-cover"
          (error)="onImageError($event)"
        />
        
        <!-- Overlay -->
        <div class="absolute inset-0 bg-black/40"></div>
        
        <!-- Content -->
        <div class="relative h-full flex items-end">
          <div class="container-max pb-12">
            <div class="max-w-4xl">
              <!-- Breadcrumb -->
              <nav class="mb-6">
                <ol class="flex items-center space-x-2 text-sm text-white/80">
                  <li><a routerLink="/" class="hover:text-white">Home</a></li>
                  <li><span class="mx-2">/</span></li>
                  <li><a routerLink="/artikel" class="hover:text-white">Artikel</a></li>
                  <li><span class="mx-2">/</span></li>
                  <li class="text-white font-medium">{{ article.title }}</li>
                </ol>
              </nav>

              <!-- Article Meta -->
              <div class="flex flex-wrap items-center gap-4 mb-6">
                <span class="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                  {{ article.category }}
                </span>
                <span class="text-white/90 text-sm">{{ article.readTime }} min Lesezeit</span>
                <span class="text-white/90 text-sm">{{ article.date }}</span>
              </div>
              
              <!-- Article Title -->
              <h1 class="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                {{ article.title }}
              </h1>
              
              <!-- Article Excerpt -->
              <p class="text-xl text-white/90 mb-6 leading-relaxed max-w-3xl">
                {{ article.excerpt }}
              </p>
              
              <!-- Author Info -->
              <div class="flex items-center space-x-4">
                <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <span class="text-angular-red font-bold text-lg">{{ article.author.charAt(0) }}</span>
                </div>
                <div>
                  <div class="text-white font-medium">{{ article.author }}</div>
                  <div class="text-white/80 text-sm">Autor</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Article Body -->
      <div class="section-padding bg-white">
        <div class="container-max">
          <div class="max-w-4xl mx-auto">
            <!-- Article Content -->
            <div 
              class="prose prose-lg prose-red max-w-none mb-12"
              [innerHTML]="markdownArticle?.htmlContent"
            ></div>
            
            <!-- Article Tags -->
            <div *ngIf="article.tags.length > 0" class="mb-12">
              <h3 class="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
              <div class="flex flex-wrap gap-2">
                <span 
                  *ngFor="let tag of article.tags" 
                  class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors"
                >
                  {{ tag }}
                </span>
              </div>
            </div>

            <!-- Share Section -->
            <div class="border-t border-gray-200 pt-8 mb-12">
              <h3 class="text-lg font-semibold text-gray-900 mb-4">Artikel teilen</h3>
              <div class="flex space-x-4">
                <a 
                  [href]="'https://twitter.com/intent/tweet?text=' + encodeURIComponent(article.title) + '&url=' + encodeURIComponent(getArticleUrl())"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Twitter
                </a>
                <a 
                  [href]="'https://www.linkedin.com/sharing/share-offsite/?url=' + encodeURIComponent(getArticleUrl())"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors"
                >
                  LinkedIn
                </a>
                <button 
                  (click)="copyToClipboard()"
                  class="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
                >
                  Link kopieren
                </button>
              </div>
            </div>

            <!-- Navigation to Articles -->
            <div class="text-center">
              <a routerLink="/artikel" class="btn-secondary">
                ← Zurück zu den Artikeln
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  `
})
export class ArticleDetailComponent implements OnInit, OnDestroy {
  article: Article | null = null;
  markdownArticle: MarkdownArticle | null = null;
  isLoading = true;
  
  private destroy$ = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private articleService: ArticleService,
    private markdownService: MarkdownService,
    private seoService: SEOService
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap(params => {
          const slug = params['slug'];
          if (!slug) {
            this.router.navigate(['/artikel']);
            return [];
          }
          return this.articleService.getArticleBySlug(slug);
        }),
        takeUntil(this.destroy$)
      )
      .subscribe({
        next: (article) => {
          if (article) {
            this.article = article;
            this.loadMarkdownContent(article.slug);
            this.updateSEO(article);
          } else {
            this.isLoading = false;
          }
        },
        error: (error) => {
          console.error('Error loading article:', error);
          this.isLoading = false;
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onImageError(event: any): void {
    const imgElement = event.target as HTMLImageElement;
    imgElement.style.display = 'none';
  }

  getArticleUrl(): string {
    return `https://angular.de/artikel/${this.article?.slug}`;
  }

  copyToClipboard(): void {
    if (navigator.clipboard && this.article) {
      navigator.clipboard.writeText(this.getArticleUrl()).then(() => {
        // You could show a toast notification here
        console.log('URL copied to clipboard');
      });
    }
  }

  encodeURIComponent(str: string): string {
    return encodeURIComponent(str);
  }

  private loadMarkdownContent(slug: string): void {
    this.articleService.getMarkdownArticleBySlug(slug)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (markdownArticle) => {
          this.markdownArticle = markdownArticle || null;
          this.isLoading = false;
        },
        error: (error) => {
          console.error('Error loading markdown content:', error);
          this.isLoading = false;
        }
      });
  }

  private updateSEO(article: Article): void {
    this.seoService.setArticleSEO({
      title: article.title,
      excerpt: article.excerpt,
      author: article.author,
      date: article.date,
      slug: article.slug,
      tags: article.tags,
      readTime: article.readTime,
      headerImage: article.headerImage
    });
  }
}