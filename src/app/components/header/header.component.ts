import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header class="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <nav class="container-max section-padding py-4">
        <div class="flex items-center justify-between">
          <!-- Logo -->
          <div class="flex items-center space-x-3">
            <a routerLink="/" class="flex items-center space-x-3">
              <div class="w-10 h-10 bg-angular-red rounded-lg flex items-center justify-center">
                <svg viewBox="0 0 24 24" class="w-6 h-6 text-white" fill="currentColor">
                  <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7l-10-5z"/>
                  <path d="M12 6L8 10h3v6h2v-6h3l-4-4z" fill="#fff"/>
                </svg>
              </div>
              <span class="text-xl font-bold text-gray-900">Angular.de</span>
            </a>
            <div class="hidden lg:flex items-center ml-4 pl-4 border-l border-gray-300">
              <span class="text-xs text-gray-500 mr-1">powered by</span>
              <a href="https://workshops.de" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 class="text-xs font-semibold text-angular-red hover:underline">
                workshops.de
              </a>
            </div>
          </div>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center space-x-8">
            <a routerLink="/artikel" 
               routerLinkActive="text-angular-red border-b-2 border-angular-red"
               class="text-gray-700 hover:text-angular-red transition-colors duration-200 py-2 border-b-2 border-transparent">
              Artikel
            </a>
            <a routerLink="/training" 
               routerLinkActive="text-angular-red border-b-2 border-angular-red"
               class="text-gray-700 hover:text-angular-red transition-colors duration-200 py-2 border-b-2 border-transparent">
              Training
            </a>
            <a routerLink="/community" 
               routerLinkActive="text-angular-red border-b-2 border-angular-red"
               class="text-gray-700 hover:text-angular-red transition-colors duration-200 py-2 border-b-2 border-transparent">
              Community
            </a>
            <a routerLink="/ressourcen" 
               routerLinkActive="text-angular-red border-b-2 border-angular-red"
               class="text-gray-700 hover:text-angular-red transition-colors duration-200 py-2 border-b-2 border-transparent">
              Ressourcen
            </a>
          </div>

          <!-- Mobile Menu Button -->
          <button 
            (click)="toggleMobileMenu()"
            class="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Menü öffnen">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    [attr.d]="mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'">
              </path>
            </svg>
          </button>
        </div>

        <!-- Mobile Navigation -->
        <div class="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4" 
             [class.hidden]="!mobileMenuOpen">
          <div class="space-y-2">
            <a routerLink="/artikel" 
               (click)="closeMobileMenu()"
               routerLinkActive="text-angular-red bg-red-50"
               class="block px-4 py-3 rounded-lg text-gray-700 hover:text-angular-red hover:bg-gray-50 transition-colors">
              Artikel
            </a>
            <a routerLink="/training" 
               (click)="closeMobileMenu()"
               routerLinkActive="text-angular-red bg-red-50"
               class="block px-4 py-3 rounded-lg text-gray-700 hover:text-angular-red hover:bg-gray-50 transition-colors">
              Training
            </a>
            <a routerLink="/community" 
               (click)="closeMobileMenu()"
               routerLinkActive="text-angular-red bg-red-50"
               class="block px-4 py-3 rounded-lg text-gray-700 hover:text-angular-red hover:bg-gray-50 transition-colors">
              Community
            </a>
            <a routerLink="/ressourcen" 
               (click)="closeMobileMenu()"
               routerLinkActive="text-angular-red bg-red-50"
               class="block px-4 py-3 rounded-lg text-gray-700 hover:text-angular-red hover:bg-gray-50 transition-colors">
              Ressourcen
            </a>
          </div>
        </div>
      </nav>
    </header>
  `
})
export class HeaderComponent implements OnInit, OnDestroy {
  mobileMenuOpen = false;

  ngOnInit() {
    document.addEventListener('click', this.handleDocumentClick.bind(this));
  }

  ngOnDestroy() {
    document.removeEventListener('click', this.handleDocumentClick.bind(this));
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu() {
    this.mobileMenuOpen = false;
  }

  private handleDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('nav')) {
      this.mobileMenuOpen = false;
    }
  }
}