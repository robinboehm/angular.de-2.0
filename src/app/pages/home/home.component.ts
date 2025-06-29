import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SEOService } from '../../services/seo.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="hero-section bg-gradient-to-br from-angular-red to-red-600 text-white">
      <div class="container-max py-20 md:py-32">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-6">
            Angular.de
          </h1>
          <p class="text-xl md:text-2xl mb-8 text-red-100">
            Die größte deutschsprachige Angular Community
          </p>
          <p class="text-lg mb-10 text-red-200 max-w-2xl mx-auto">
            Tutorials, Artikel, News und Events rund um Angular, TypeScript und moderne Webentwicklung. 
            Von Grundlagen bis zu fortgeschrittenen Themen - alles auf Deutsch.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              routerLink="/artikel" 
              class="btn-primary bg-white text-angular-red hover:bg-gray-100"
            >
              Artikel entdecken
            </a>
            <a 
              routerLink="/community" 
              class="btn-secondary border-white text-white hover:bg-white hover:text-angular-red"
            >
              Community beitreten
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Features Section -->
    <div class="section-padding">
      <div class="container-max">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Warum Angular.de?
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Deine zentrale Anlaufstelle für alles rund um Angular in deutscher Sprache
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-angular-red rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Umfassende Tutorials</h3>
            <p class="text-gray-600">Von Grundlagen bis zu fortgeschrittenen Themen - strukturiert und verständlich erklärt</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-angular-red rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Aktive Community</h3>
            <p class="text-gray-600">Tausche dich mit anderen Angular-Entwicklern aus und lerne von Experten</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-angular-red rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Aktuelle Inhalte</h3>
            <p class="text-gray-600">Immer auf dem neuesten Stand mit den aktuellsten Angular-Features und Best Practices</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Latest Articles Preview -->
    <div class="section-padding bg-gray-50">
      <div class="container-max">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Neueste Artikel
          </h2>
          <p class="text-xl text-gray-600">
            Entdecke die aktuellsten Tutorials und Artikel aus der Angular-Welt
          </p>
        </div>
        
        <div class="text-center">
          <a routerLink="/artikel" class="btn-primary">
            Alle Artikel ansehen
          </a>
        </div>
      </div>
    </div>

    <!-- Training Section -->
    <div class="section-padding">
      <div class="container-max">
        <div class="bg-gradient-to-r from-angular-red to-red-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            Angular Training & Workshops
          </h2>
          <p class="text-xl mb-8 text-red-100">
            Lerne Angular von Experten in intensiven Workshops und Schulungen
          </p>
          <div class="flex items-center justify-center space-x-2 mb-8">
            <span class="text-red-200">Powered by</span>
            <a href="https://workshops.de" 
               target="_blank" 
               rel="noopener noreferrer"
               class="inline-flex items-center space-x-2 group">
              <div class="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center group-hover:bg-opacity-30 transition-all">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
              </div>
              <span class="font-semibold text-white group-hover:underline">Workshops.de</span>
            </a>
          </div>
          <a routerLink="/training" class="btn-primary bg-white text-angular-red hover:bg-gray-100">
            Training entdecken
          </a>
        </div>
      </div>
    </div>
  `
})
export class HomeComponent implements OnInit {
  
  constructor(private seoService: SEOService) {}

  ngOnInit(): void {
    this.seoService.setHomepageSEO();
  }
}
