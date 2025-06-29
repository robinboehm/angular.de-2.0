import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-angular-red to-red-600 text-white section-padding">
      <div class="container-max">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 class="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Die deutsche
              <span class="bg-gradient-to-r from-white to-red-200 bg-clip-text text-transparent">
                Angular
              </span>
              Community
            </h1>
            <p class="text-xl md:text-2xl mb-8 text-red-100 leading-relaxed">
              Entdecke Tutorials, Artikel und Training rund um Angular. 
              Von Entwicklern für Entwickler – komplett auf Deutsch.
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <a routerLink="/artikel" class="btn-primary bg-white text-angular-red hover:bg-gray-100">
                Artikel entdecken
              </a>
              <a routerLink="/training" class="btn-secondary border-white text-white hover:bg-white hover:text-angular-red">
                Training anzeigen
              </a>
            </div>
          </div>
          <div class="relative">
            <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div class="flex items-center space-x-3 mb-6">
                <div class="w-3 h-3 bg-red-400 rounded-full"></div>
                <div class="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div class="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
              <pre class="text-sm text-red-100 overflow-x-auto"><code [innerText]="code"></code></pre>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Articles -->
    <section class="section-padding bg-white">
      <div class="container-max">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Neueste Artikel
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Bleib auf dem Laufenden mit den neuesten Angular-Entwicklungen, 
            Best Practices und Tutorials.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article *ngFor="let article of featuredArticles" class="card group cursor-pointer">
            <div class="aspect-video bg-gradient-to-br from-angular-red to-red-600 relative overflow-hidden">
              <div class="absolute inset-0 bg-black/20"></div>
              <div class="absolute bottom-4 left-4 right-4">
                <span class="bg-white/90 text-angular-red px-3 py-1 rounded-full text-sm font-medium">
                  {{ article.category }}
                </span>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-900 mb-3 group-hover:text-angular-red transition-colors">
                {{ article.title }}
              </h3>
              <p class="text-gray-600 mb-4 line-clamp-3">
                {{ article.excerpt }}
              </p>
              <div class="flex items-center justify-between text-sm text-gray-500">
                <span>{{ article.author }}</span>
                <span>{{ article.date }}</span>
              </div>
            </div>
          </article>
        </div>
        
        <div class="text-center mt-12">
          <a routerLink="/artikel" class="btn-primary">
            Alle Artikel anzeigen
          </a>
        </div>
      </div>
    </section>

    <!-- Training Section -->
    <section class="section-padding bg-gray-50">
      <div class="container-max">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Angular Training & Workshops
            </h2>
            <p class="text-xl text-gray-600 mb-8">
              Erweitere deine Angular-Kenntnisse mit professionellen Trainings. 
              Von Grundlagen bis zu fortgeschrittenen Themen.
            </p>
            <ul class="space-y-4 mb-8">
              <li class="flex items-center space-x-3">
                <div class="w-2 h-2 bg-angular-red rounded-full"></div>
                <span class="text-gray-700">Grundlagen & Best Practices</span>
              </li>
              <li class="flex items-center space-x-3">
                <div class="w-2 h-2 bg-angular-red rounded-full"></div>
                <span class="text-gray-700">Advanced Angular Patterns</span>
              </li>
              <li class="flex items-center space-x-3">
                <div class="w-2 h-2 bg-angular-red rounded-full"></div>
                <span class="text-gray-700">Testing & Performance</span>
              </li>
              <li class="flex items-center space-x-3">
                <div class="w-2 h-2 bg-angular-red rounded-full"></div>
                <span class="text-gray-700">Enterprise Angular</span>
              </li>
            </ul>
            <a routerLink="/training" class="btn-primary">
              Training entdecken
            </a>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div class="card p-6 text-center">
              <div class="w-12 h-12 bg-angular-red rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                </svg>
              </div>
              <h3 class="font-semibold text-gray-900 mb-2">50+ Tutorials</h3>
              <p class="text-gray-600 text-sm">Umfassende Lernmaterialien</p>
            </div>
            <div class="card p-6 text-center">
              <div class="w-12 h-12 bg-angular-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
              </div>
              <h3 class="font-semibold text-gray-900 mb-2">Expert Community</h3>
              <p class="text-gray-600 text-sm">Aktive Entwickler-Community</p>
            </div>
            <div class="card p-6 text-center">
              <div class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 class="font-semibold text-gray-900 mb-2">Zertifiziert</h3>
              <p class="text-gray-600 text-sm">Anerkannte Qualifikationen</p>
            </div>
            <div class="card p-6 text-center">
              <div class="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 class="font-semibold text-gray-900 mb-2">Hands-On</h3>
              <p class="text-gray-600 text-sm">Praktische Projekte</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Community Section -->
    <section class="section-padding bg-angular-dark text-white">
      <div class="container-max text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">
          Werde Teil der Community
        </h2>
        <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Vernetze dich mit anderen Angular-Entwicklern, teile dein Wissen 
          und lerne von den Besten der Branche.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div class="text-center">
            <div class="text-4xl font-bold text-angular-red mb-2">500+</div>
            <div class="text-gray-300">Aktive Mitglieder</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-angular-red mb-2">1000+</div>
            <div class="text-gray-300">Artikel & Tutorials</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-angular-red mb-2">50+</div>
            <div class="text-gray-300">Expert Contributors</div>
          </div>
        </div>
        <a routerLink="/community" class="btn-primary bg-angular-red hover:bg-red-700">
          Community beitreten
        </a>
      </div>
    </section>
  `,
})
export class HomeComponent {
  code = `import { Component } from '@angular/core';
  @Component({
    selector: 'app-welcome',
    template:  
      <h1>Willkommen bei Angular.de!</h1>
      <p>{{ message }}</p>
  })
  export class WelcomeComponent {
    message = 'Lerne Angular auf Deutsch';
  }`;
  featuredArticles = [
    {
      title: 'Angular 20: Neue Features und Verbesserungen',
      excerpt:
        'Entdecke die neuesten Features in Angular 20 und erfahre, wie sie deine Entwicklung verbessern können.',
      author: 'Max Mustermann',
      date: '15. Jan 2025',
      category: 'Angular Updates',
    },
    {
      title: 'Standalone Components: Best Practices',
      excerpt:
        'Lerne, wie du Standalone Components effektiv in deinen Angular-Projekten einsetzt.',
      author: 'Anna Schmidt',
      date: '12. Jan 2025',
      category: 'Best Practices',
    },
    {
      title: 'Performance Optimization in Angular',
      excerpt:
        'Tipps und Tricks zur Optimierung der Performance deiner Angular-Anwendungen.',
      author: 'Tom Weber',
      date: '10. Jan 2025',
      category: 'Performance',
    },
  ];
}
