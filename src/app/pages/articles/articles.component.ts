import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ArticleService, Article } from '../../services/article.service';
import { SEOService } from '../../services/seo.service';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="section-padding bg-gray-50">
      <div class="container-max">
        <!-- Header -->
        <div class="text-center mb-12">
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Angular Artikel & Tutorials
          </h1>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Umfassende Sammlung von Artikeln, Tutorials und Guides rund um Angular. 
            Von Grundlagen bis zu fortgeschrittenen Themen.
          </p>
        </div>

        <!-- Loading Indicator -->
        <div *ngIf="isLoading" class="text-center mb-12">
          <div class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-angular-red"></div>
          <p class="mt-2 text-gray-600">Artikel werden geladen...</p>
        </div>

        <!-- Filter Categories -->
        <div class="flex flex-wrap justify-center gap-4 mb-12" *ngIf="!isLoading">
          <button 
            *ngFor="let category of categories"
            (click)="setActiveCategory(category)"
            [class]="'px-6 py-3 rounded-full transition-colors font-medium ' + 
            (activeCategory === category ? 
              'bg-angular-red text-white' : 
              'bg-white text-gray-700 hover:bg-gray-100')"
          >
            {{ category }}
            <span *ngIf="categoryCount[category] > 0" class="ml-2 text-sm opacity-75">
              ({{ categoryCount[category] }})
            </span>
          </button>
        </div>

        <!-- Articles Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" *ngIf="!isLoading">
          <article 
            *ngFor="let article of filteredArticles" 
            class="card group cursor-pointer hover:scale-105 transition-transform duration-300"
            [routerLink]="['/artikel', article.slug]"
          >
            <!-- Header Image or Gradient Background -->
            <div class="aspect-video relative overflow-hidden">
              <!-- Header Image if available -->
              <img 
                *ngIf="article.headerImage" 
                [src]="article.headerImage" 
                [alt]="article.title"
                class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                (error)="onImageError($event)"
              />
              
              <!-- Fallback Gradient Background -->
              <div 
                *ngIf="!article.headerImage" 
                class="w-full h-full bg-gradient-to-br from-angular-red to-red-600"
              ></div>
              
              <!-- Overlay -->
              <div class="absolute inset-0 bg-black/20"></div>
              
              <!-- Category Badge -->
              <div class="absolute top-4 left-4">
                <span class="bg-white/90 text-angular-red px-3 py-1 rounded-full text-sm font-medium">
                  {{ article.category }}
                </span>
              </div>
              
              <!-- Read Time Badge -->
              <div class="absolute bottom-4 right-4">
                <div class="bg-white/90 text-angular-red px-3 py-1 rounded-full text-sm font-medium">
                  {{ article.readTime }} min
                </div>
              </div>
            </div>
            
            <!-- Article Content -->
            <div class="p-6">
              <h2 class="text-xl font-semibold text-gray-900 mb-3 group-hover:text-angular-red transition-colors">
                {{ article.title }}
              </h2>
              <p class="text-gray-600 mb-4 line-clamp-3">
                {{ article.excerpt }}
              </p>
              <div class="flex items-center justify-between text-sm text-gray-500">
                <div class="flex items-center space-x-2">
                  <div class="w-8 h-8 bg-angular-red rounded-full flex items-center justify-center text-white text-xs font-bold">
                    {{ article.author.charAt(0) }}
                  </div>
                  <span>{{ article.author }}</span>
                </div>
                <span>{{ article.date }}</span>
              </div>
              <div class="flex flex-wrap gap-2 mt-4">
                <span 
                  *ngFor="let tag of article.tags" 
                  class="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </article>
        </div>

        <!-- No Articles Message -->
        <div *ngIf="!isLoading && filteredArticles.length === 0" class="text-center py-12">
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Keine Artikel gefunden</h3>
          <p class="text-gray-600">In dieser Kategorie sind noch keine Artikel verfügbar.</p>
        </div>

        <!-- Load More Button -->
        <div class="text-center mt-12" *ngIf="!isLoading && filteredArticles.length >= 9">
          <button class="btn-secondary">
            Mehr Artikel laden
          </button>
        </div>
      </div>
    </div>
  `
})
export class ArticlesComponent implements OnInit, OnDestroy {
  activeCategory = 'Alle';
  categories: string[] = [];
  filteredArticles: Article[] = [];
  categoryCount: { [category: string]: number } = {};
  isLoading = true;
  
  private destroy$ = new Subject<void>();

  constructor(
    private articleService: ArticleService,
    private seoService: SEOService
  ) {}

  ngOnInit(): void {
    // Set SEO for articles page
    this.seoService.setArticlesPageSEO();
    
    this.categories = this.articleService.getCategories();
    this.loadArticles();
    this.loadCategoryCounts();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  setActiveCategory(category: string): void {
    this.activeCategory = category;
    this.loadArticles();
    
    // Update SEO when category changes
    this.updateCategorySEO(category);
  }

  onImageError(event: any): void {
    // Hide the broken image and show fallback background
    const imgElement = event.target as HTMLImageElement;
    imgElement.style.display = 'none';
  }

  private updateCategorySEO(category: string): void {
    let title = 'Angular Artikel & Tutorials';
    let description = 'Umfassende Sammlung von Angular Artikeln und Tutorials. Von Grundlagen bis zu fortgeschrittenen Themen - alles auf Deutsch.';
    
    if (category !== 'Alle') {
      title = `${category} - Angular Artikel & Tutorials`;
      description = `Entdecke ${category} Artikel und Tutorials auf Angular.de. Lerne ${category} mit praktischen Beispielen und Schritt-für-Schritt Anleitungen.`;
    }

    this.seoService.updateSEO({
      title,
      description,
      keywords: `Angular ${category}, ${category} Tutorial, Angular Grundlagen, TypeScript`,
      type: 'website',
      url: `https://angular.de/artikel?category=${encodeURIComponent(category)}`
    });
  }

  private loadArticles(): void {
    this.isLoading = true;
    
    this.articleService.getArticlesByCategory(this.activeCategory)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (articles) => {
          this.filteredArticles = articles;
          this.isLoading = false;
        },
        error: (error) => {
          console.error('Error loading articles:', error);
          this.isLoading = false;
        }
      });
  }

  private loadCategoryCounts(): void {
    this.articleService.getArticleCountByCategory()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (counts) => {
          this.categoryCount = counts;
        },
        error: (error) => {
          console.error('Error loading category counts:', error);
        }
      });
  }
}