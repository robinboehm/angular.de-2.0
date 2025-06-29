import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ArticleService, Article } from '../../services/article.service';
import { MarkdownArticle } from '../../services/markdown.service';

@Component({
  selector: 'app-article-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="bg-white" *ngIf="article">
      <!-- Header Image Section -->
      <div *ngIf="article.headerImage" class="relative h-96 md:h-[500px] overflow-hidden">
        <img 
          [src]="article.headerImage" 
          [alt]="article.title"
          class="w-full h-full object-cover"
          (error)="onImageError($event)"
        />
        <div class="absolute inset-0 bg-black/40"></div>
        
        <!-- Header Content Overlay -->
        <div class="absolute inset-0 flex items-end">
          <div class="container-max w-full text-white p-8">
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="bg-angular-red text-white px-3 py-1 rounded-full text-sm font-medium">
                {{ article.category }}
              </span>
              <span *ngFor="let tag of article.tags" 
                    class="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                {{ tag }}
              </span>
            </div>
            
            <h1 class="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              {{ article.title }}
            </h1>
            
            <p class="text-lg md:text-xl mb-6 max-w-3xl opacity-90">
              {{ article.excerpt }}
            </p>
            
            <div class="flex items-center space-x-6">
              <div class="flex items-center space-x-3">
                <div class="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold">
                  {{ article.author.charAt(0) }}
                </div>
                <div>
                  <div class="font-semibold">{{ article.author }}</div>
                  <div class="text-sm opacity-75">{{ article.date }}</div>
                </div>
              </div>
              <div class="text-sm">
                <span class="opacity-75">Lesezeit:</span>
                <span class="font-semibold ml-1">{{ article.readTime }} Min.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Content Section -->
      <div class="section-padding">
        <div class="container-max max-w-4xl">
          <!-- Breadcrumb -->
          <nav class="mb-8">
            <ol class="flex items-center space-x-2 text-sm text-gray-500">
              <li><a routerLink="/" class="hover:text-angular-red">Home</a></li>
              <li>→</li>
              <li><a routerLink="/artikel" class="hover:text-angular-red">Artikel</a></li>
              <li>→</li>
              <li class="text-gray-900">{{ article.title }}</li>
            </ol>
          </nav>

          <!-- Article Header (for articles without header image) -->
          <header class="mb-12" *ngIf="!article.headerImage">
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="bg-angular-red text-white px-3 py-1 rounded-full text-sm font-medium">
                {{ article.category }}
              </span>
              <span *ngFor="let tag of article.tags" 
                    class="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                {{ tag }}
              </span>
            </div>
            
            <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {{ article.title }}
            </h1>
            
            <p class="text-xl text-gray-600 mb-8">
              {{ article.excerpt }}
            </p>
            
            <div class="flex items-center justify-between py-6 border-t border-b border-gray-200">
              <div class="flex items-center space-x-4">
                <div class="w-12 h-12 bg-angular-red rounded-full flex items-center justify-center text-white font-bold">
                  {{ article.author.charAt(0) }}
                </div>
                <div>
                  <div class="font-semibold text-gray-900">{{ article.author }}</div>
                  <div class="text-gray-500 text-sm">{{ article.date }}</div>
                </div>
              </div>
              <div class="text-right">
                <div class="text-gray-500 text-sm">Lesezeit</div>
                <div class="font-semibold text-gray-900">{{ article.readTime }} Minuten</div>
              </div>
            </div>
          </header>

          <!-- Article Content -->
          <article class="prose prose-lg max-w-none">
            <div [innerHTML]="markdownContent"></div>
          </article>

          <!-- Article Footer -->
          <footer class="mt-12 pt-8 border-t border-gray-200">
            <div class="text-center">
              <h3 class="text-2xl font-bold text-gray-900 mb-4">
                Hat dir dieser Artikel gefallen?
              </h3>
              <p class="text-gray-600 mb-6">
                Teile ihn mit anderen Angular-Entwicklern!
              </p>
              <div class="flex justify-center space-x-4">
                <button class="btn-primary">
                  Artikel teilen
                </button>
                <a routerLink="/artikel" class="btn-secondary">
                  Weitere Artikel
                </a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>

    <!-- Loading State -->
    <div class="section-padding" *ngIf="isLoading">
      <div class="container-max text-center">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-angular-red mx-auto mb-4"></div>
        <p class="text-gray-600">Artikel wird geladen...</p>
      </div>
    </div>

    <!-- Error State -->
    <div class="section-padding" *ngIf="!isLoading && !article">
      <div class="container-max text-center">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">Artikel nicht gefunden</h2>
        <p class="text-gray-600 mb-6">Der angeforderte Artikel konnte nicht gefunden werden.</p>
        <a routerLink="/artikel" class="btn-primary">
          Zurück zu den Artikeln
        </a>
      </div>
    </div>
  `,
  styles: [`
    .prose {
      color: #374151;
    }
    
    .prose h1, .prose h2, .prose h3, .prose h4, .prose h5, .prose h6 {
      color: #111827;
      font-weight: 700;
      margin-top: 2rem;
      margin-bottom: 1rem;
    }
    
    .prose h1 {
      font-size: 2.25rem;
      margin-top: 0;
    }
    
    .prose h2 {
      font-size: 1.875rem;
    }
    
    .prose h3 {
      font-size: 1.5rem;
      font-weight: 600;
      margin-top: 1.5rem;
      margin-bottom: 0.75rem;
    }
    
    .prose p {
      margin-bottom: 1.5rem;
      line-height: 1.75;
    }
    
    .prose code {
      background-color: #f3f4f6;
      color: #dd0031;
      padding: 0.125rem 0.375rem;
      border-radius: 0.25rem;
      font-size: 0.875rem;
      font-family: 'Courier New', monospace;
    }
    
    .prose pre {
      background-color: #1f2937;
      color: #f9fafb;
      padding: 1.5rem;
      border-radius: 0.5rem;
      overflow-x: auto;
      margin: 1.5rem 0;
      border: 1px solid #374151;
    }
    
    .prose pre code {
      background-color: transparent;
      color: inherit;
      padding: 0;
      border-radius: 0;
    }
    
    .prose ul, .prose ol {
      margin: 1.5rem 0;
      padding-left: 1.5rem;
    }
    
    .prose li {
      margin-bottom: 0.5rem;
    }
    
    .prose blockquote {
      border-left: 4px solid #dd0031;
      padding-left: 1rem;
      margin: 1.5rem 0;
      font-style: italic;
      background-color: #f9fafb;
      padding: 1rem;
      border-radius: 0.25rem;
    }
    
    .prose strong {
      color: #111827;
      font-weight: 700;
    }
    
    .prose a {
      color: #dd0031;
      text-decoration: underline;
    }
    
    .prose a:hover {
      color: #b91c1c;
    }
    
    .prose table {
      width: 100%;
      margin: 1.5rem 0;
      border-collapse: collapse;
    }
    
    .prose th, .prose td {
      border: 1px solid #d1d5db;
      padding: 0.75rem;
      text-align: left;
    }
    
    .prose th {
      background-color: #f3f4f6;
      font-weight: 600;
    }

    .prose img {
      margin: 1.5rem 0;
      border-radius: 0.5rem;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    }

    .prose iframe {
      margin: 1.5rem 0;
      border-radius: 0.5rem;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    }
  `]
})
export class ArticleDetailComponent implements OnInit, OnDestroy {
  article: Article | null = null;
  markdownContent: string = '';
  isLoading = true;
  
  private destroy$ = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(takeUntil(this.destroy$))
      .subscribe(params => {
        const slug = params.get('slug');
        if (slug) {
          this.loadArticle(slug);
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onImageError(event: any): void {
    console.error('Error loading header image:', event);
    // Optionally hide the image container or show a fallback
  }

  private loadArticle(slug: string): void {
    this.isLoading = true;
    this.article = null;
    this.markdownContent = '';

    // Load basic article info
    this.articleService.getArticleBySlug(slug)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (article) => {
          this.article = article || null;
          if (article) {
            this.loadMarkdownContent(slug);
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

  private loadMarkdownContent(slug: string): void {
    this.articleService.getMarkdownArticleBySlug(slug)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (markdownArticle) => {
          if (markdownArticle) {
            this.markdownContent = markdownArticle.htmlContent;
          }
          this.isLoading = false;
        },
        error: (error) => {
          console.error('Error loading markdown content:', error);
          this.isLoading = false;
        }
      });
  }
}