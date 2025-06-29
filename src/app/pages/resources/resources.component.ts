import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resources',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-angular-blue to-blue-600 text-white section-padding">
      <div class="container-max text-center">
        <h1 class="text-4xl md:text-6xl font-bold mb-6">
          Angular Ressourcen
        </h1>
        <p class="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
          Umfassende Sammlung von Tools, Libraries, Dokumentationen 
          und hilfreichen Links für Angular-Entwickler.
        </p>
      </div>
    </section>

    <!-- Resource Categories -->
    <section class="section-padding bg-white">
      <div class="container-max">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Kategorien
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Finde schnell die Ressourcen, die du für dein Angular-Projekt benötigst.
          </p>
        </div>

        <!-- Category Filter -->
        <div class="flex flex-wrap justify-center gap-4 mb-12">
          <button 
            *ngFor="let category of categories"
            (click)="setActiveCategory(category)"
            [class]="'px-6 py-3 rounded-full transition-colors font-medium ' + 
            (activeCategory === category ? 
              'bg-angular-blue text-white' : 
              'bg-gray-100 text-gray-700 hover:bg-gray-200')"
          >
            {{ category }}
          </button>
        </div>

        <!-- Resources Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let resource of filteredResources" class="card group hover:scale-105 transition-transform duration-300">
            <div class="p-6">
              <!-- Resource Icon -->
              <div [class]="'w-12 h-12 rounded-lg flex items-center justify-center mb-4 ' + getIconBgClass(resource.category)">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" [attr.d]="resource.icon"></path>
                </svg>
              </div>

              <!-- Resource Header -->
              <div class="flex items-start justify-between mb-4">
                <div>
                  <h3 class="text-lg font-semibold text-gray-900 group-hover:text-angular-blue transition-colors">
                    {{ resource.name }}
                  </h3>
                  <span [class]="'text-xs px-2 py-1 rounded-full font-medium ' + getCategoryBadgeClass(resource.category)">
                    {{ resource.category }}
                  </span>
                </div>
                <div class="flex items-center space-x-1">
                  <svg *ngFor="let star of getStars(resource.rating)" class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </div>
              </div>

              <!-- Resource Description -->
              <p class="text-gray-600 mb-4">
                {{ resource.description }}
              </p>

              <!-- Resource Tags -->
              <div class="flex flex-wrap gap-2 mb-6">
                <span *ngFor="let tag of resource.tags" 
                      class="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                  {{ tag }}
                </span>
              </div>

              <!-- Resource Actions -->
              <div class="flex space-x-2">
                <a [href]="resource.url" target="_blank" 
                   class="flex-1 btn-primary text-center text-sm py-2">
                  Besuchen
                </a>
                <button *ngIf="resource.github" 
                        class="btn-secondary text-sm py-2 px-4">
                  GitHub
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Official Resources -->
    <section class="section-padding bg-gray-50">
      <div class="container-max">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Offizielle Angular Ressourcen
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Die wichtigsten offiziellen Quellen direkt vom Angular Team.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div *ngFor="let official of officialResources" class="card text-center">
            <div class="p-6">
              <div [class]="'w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ' + official.bgColor">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" [attr.d]="official.icon"></path>
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">
                {{ official.name }}
              </h3>
              <p class="text-gray-600 mb-4 text-sm">
                {{ official.description }}
              </p>
              <a [href]="official.url" target="_blank" class="btn-primary text-sm">
                Besuchen
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Learning Path -->
    <section class="section-padding bg-angular-dark text-white">
      <div class="container-max">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            Angular Lernpfad
          </h2>
          <p class="text-xl text-gray-300 max-w-2xl mx-auto">
            Strukturierter Lernpfad für Angular-Entwickler - von Anfänger bis Experte.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div *ngFor="let step of learningPath; let i = index" class="relative">
            <!-- Step Number -->
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-angular-red rounded-full flex items-center justify-center text-white font-bold text-lg">
                {{ i + 1 }}
              </div>
              <div class="ml-4">
                <h3 class="text-xl font-semibold">{{ step.title }}</h3>
                <span class="text-gray-300 text-sm">{{ step.duration }}</span>
              </div>
            </div>

            <!-- Step Content -->
            <div class="bg-gray-800 rounded-lg p-6 mb-4">
              <p class="text-gray-300 mb-4">{{ step.description }}</p>
              <ul class="space-y-2">
                <li *ngFor="let topic of step.topics" class="flex items-center space-x-3">
                  <svg class="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-gray-300 text-sm">{{ topic }}</span>
                </li>
              </ul>
            </div>

            <!-- Connection Line -->
            <div *ngIf="i < learningPath.length - 1" 
                 class="hidden md:block absolute top-6 left-full w-8 h-0.5 bg-angular-red transform translate-x-4">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Newsletter Signup -->
    <section class="section-padding bg-gradient-to-r from-angular-red to-red-600 text-white">
      <div class="container-max text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">
          Bleib auf dem Laufenden
        </h2>
        <p class="text-xl mb-8 text-red-100 max-w-2xl mx-auto">
          Erhalte wöchentlich neue Angular-Ressourcen, Tutorials 
          und Community-Updates direkt in dein Postfach.
        </p>
        <div class="max-w-md mx-auto">
          <div class="flex flex-col sm:flex-row gap-4">
            <input type="email" placeholder="Deine E-Mail-Adresse" 
                   class="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white">
            <button class="btn-primary bg-white text-angular-red hover:bg-gray-100 whitespace-nowrap">
              Newsletter abonnieren
            </button>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ResourcesComponent {
  activeCategory = 'Alle';
  
  categories = [
    'Alle',
    'Dokumentation',
    'UI Libraries',
    'State Management',
    'Testing',
    'Tools',
    'Learning',
    'Deployment'
  ];

  resources = [
    {
      name: 'Angular Material',
      category: 'UI Libraries',
      description: 'Offizielle Material Design UI-Komponenten für Angular.',
      url: 'https://material.angular.io',
      github: true,
      rating: 5,
      icon: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z',
      tags: ['Material Design', 'UI Components', 'Google']
    },
    {
      name: 'NgRx',
      category: 'State Management',
      description: 'Reactive State Management für Angular basierend auf Redux Pattern.',
      url: 'https://ngrx.io',
      github: true,
      rating: 5,
      icon: 'M4 7v10c0 2.21 1.79 4 4 4h8c2.21 0 4-1.79 4-4V7c0-2.21-1.79-4-4-4H8c-2.21 0-4 1.79-4 4z',
      tags: ['Redux', 'State Management', 'RxJS']
    },
    {
      name: 'Angular CLI',
      category: 'Tools',
      description: 'Kommandozeilen-Interface für Angular Entwicklung und Build-Prozesse.',
      url: 'https://cli.angular.io',
      github: true,
      rating: 5,
      icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
      tags: ['CLI', 'Build Tools', 'Scaffolding']
    },
    {
      name: 'Jasmine',
      category: 'Testing',
      description: 'Behavior-driven development Framework für JavaScript Testing.',
      url: 'https://jasmine.github.io',
      github: true,
      rating: 4,
      icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
      tags: ['Unit Testing', 'BDD', 'JavaScript']
    },
    {
      name: 'Cypress',
      category: 'Testing',
      description: 'Next generation front end testing tool für End-to-End Tests.',
      url: 'https://cypress.io',
      github: true,
      rating: 5,
      icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
      tags: ['E2E Testing', 'Integration Testing', 'UI Testing']
    },
    {
      name: 'Angular University',
      category: 'Learning',
      description: 'Umfassende Angular Kurse und Tutorials für alle Skill-Level.',
      url: 'https://angular-university.io',
      github: false,
      rating: 5,
      icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253',
      tags: ['Courses', 'Video Tutorials', 'Learning']
    },
    {
      name: 'PrimeNG',
      category: 'UI Libraries',
      description: 'Umfassende UI-Komponenten Suite für Angular Anwendungen.',
      url: 'https://primeng.org',
      github: true,
      rating: 4,
      icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17v4a2 2 0 002 2h4a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2z',
      tags: ['UI Components', 'Enterprise', 'Rich UI']
    },
    {
      name: 'Netlify',
      category: 'Deployment',
      description: 'Moderne Web-Hosting und Deployment-Plattform für Angular Apps.',
      url: 'https://netlify.com',
      github: false,
      rating: 5,
      icon: 'M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12',
      tags: ['Hosting', 'CI/CD', 'Static Sites']
    }
  ];

  officialResources = [
    {
      name: 'Angular.io',
      description: 'Offizielle Angular Dokumentation und Guides.',
      url: 'https://angular.io',
      icon: 'M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16',
      bgColor: 'bg-angular-red'
    },
    {
      name: 'Angular.dev',
      description: 'Neue interaktive Angular Dokumentation und Tutorials.',
      url: 'https://angular.dev',
      icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253',
      bgColor: 'bg-angular-blue'
    },
    {
      name: 'Angular Blog',
      description: 'Offizielle News und Updates vom Angular Team.',
      url: 'https://blog.angular.io',
      icon: 'M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z',
      bgColor: 'bg-green-500'
    },
    {
      name: 'Angular GitHub',
      description: 'Source Code, Issues und Contributions zum Angular Framework.',
      url: 'https://github.com/angular/angular',
      icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
      bgColor: 'bg-gray-800'
    }
  ];

  learningPath = [
    {
      title: 'Grundlagen',
      duration: '2-4 Wochen',
      description: 'Lerne die Basics von Angular und TypeScript.',
      topics: [
        'TypeScript Grundlagen',
        'Angular CLI Setup',
        'Components & Templates',
        'Data Binding',
        'Directives'
      ]
    },
    {
      title: 'Fortgeschritten',
      duration: '4-6 Wochen',
      description: 'Vertiefte Angular-Konzepte und Best Practices.',
      topics: [
        'Services & DI',
        'Routing & Navigation',
        'Forms (Template & Reactive)',
        'HTTP Client',
        'Pipes & Custom Pipes'
      ]
    },
    {
      title: 'Expert',
      duration: '6-8 Wochen',
      description: 'Enterprise-Patterns und Advanced Topics.',
      topics: [
        'State Management (NgRx)',
        'Testing (Unit & E2E)',
        'Performance Optimization',
        'Custom Libraries',
        'Deployment Strategies'
      ]
    }
  ];

  get filteredResources() {
    if (this.activeCategory === 'Alle') {
      return this.resources;
    }
    return this.resources.filter(resource => resource.category === this.activeCategory);
  }

  setActiveCategory(category: string) {
    this.activeCategory = category;
  }

  getIconBgClass(category: string): string {
    const colorMap: { [key: string]: string } = {
      'UI Libraries': 'bg-purple-500',
      'State Management': 'bg-blue-500',
      'Testing': 'bg-green-500',
      'Tools': 'bg-yellow-500',
      'Learning': 'bg-red-500',
      'Deployment': 'bg-indigo-500',
      'Dokumentation': 'bg-gray-500'
    };
    return colorMap[category] || 'bg-gray-500';
  }

  getCategoryBadgeClass(category: string): string {
    const colorMap: { [key: string]: string } = {
      'UI Libraries': 'bg-purple-100 text-purple-800',
      'State Management': 'bg-blue-100 text-blue-800',
      'Testing': 'bg-green-100 text-green-800',
      'Tools': 'bg-yellow-100 text-yellow-800',
      'Learning': 'bg-red-100 text-red-800',
      'Deployment': 'bg-indigo-100 text-indigo-800',
      'Dokumentation': 'bg-gray-100 text-gray-800'
    };
    return colorMap[category] || 'bg-gray-100 text-gray-800';
  }

  getStars(rating: number): number[] {
    return Array(rating).fill(0);
  }
}