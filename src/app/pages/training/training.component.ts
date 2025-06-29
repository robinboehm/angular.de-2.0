import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-training',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-angular-blue to-blue-600 text-white section-padding">
      <div class="container-max">
        <div class="text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-6">
            Angular Training & Workshops
          </h1>
          <p class="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Erweitere deine Angular-Kenntnisse mit professionellen Trainings. 
            Von Grundlagen bis zu Enterprise-Patterns.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button class="btn-primary bg-white text-angular-blue hover:bg-gray-100">
              Training buchen
            </button>
            <button class="btn-secondary border-white text-white hover:bg-white hover:text-angular-blue">
              Kostenlose Beratung
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Training Courses -->
    <section class="section-padding bg-white">
      <div class="container-max">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Unsere Trainings
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Wähle das Training, das zu deinem Erfahrungslevel und deinen Zielen passt.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div *ngFor="let course of courses" class="card group hover:scale-105 transition-transform duration-300">
            <div class="p-8">
              <!-- Level Badge -->
              <div class="flex justify-between items-start mb-6">
                <span [class]="'px-3 py-1 rounded-full text-sm font-medium ' + getLevelBadgeClass(course.level)">
                  {{ course.level }}
                </span>
                <div class="text-right">
                  <div class="text-2xl font-bold text-gray-900">{{ course.price }}</div>
                  <div class="text-gray-500 text-sm">{{ course.duration }}</div>
                </div>
              </div>

              <!-- Course Icon -->
              <div [class]="'w-16 h-16 rounded-full flex items-center justify-center mb-6 ' + getIconBgClass(course.level)">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" [attr.d]="course.icon"></path>
                </svg>
              </div>

              <h3 class="text-xl font-bold text-gray-900 mb-4 group-hover:text-angular-red transition-colors">
                {{ course.title }}
              </h3>
              <p class="text-gray-600 mb-6">
                {{ course.description }}
              </p>

              <!-- Features -->
              <ul class="space-y-3 mb-8">
                <li *ngFor="let feature of course.features" class="flex items-center space-x-3">
                  <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-gray-700">{{ feature }}</span>
                </li>
              </ul>

              <button class="w-full btn-primary">
                Training buchen
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Our Training -->
    <section class="section-padding bg-gray-50">
      <div class="container-max">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Warum unser Training?
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Wir bieten mehr als nur Theorie. Unsere Trainings sind praxisorientiert 
            und auf reale Projekterfahrungen ausgerichtet.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div *ngFor="let benefit of benefits" class="text-center">
            <div [class]="'w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ' + benefit.bgColor">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" [attr.d]="benefit.icon"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ benefit.title }}</h3>
            <p class="text-gray-600">{{ benefit.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="section-padding bg-white">
      <div class="container-max">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Das sagen unsere Teilnehmer
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div *ngFor="let testimonial of testimonials" class="card p-8 text-center">
            <div class="flex justify-center mb-4">
              <div class="flex space-x-1">
                <svg *ngFor="let star of [1,2,3,4,5]" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </div>
            </div>
            <blockquote class="text-gray-600 mb-6 italic">
              "{{ testimonial.quote }}"
            </blockquote>
            <div class="font-semibold text-gray-900">{{ testimonial.name }}</div>
            <div class="text-gray-500 text-sm">{{ testimonial.position }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding bg-angular-red text-white">
      <div class="container-max text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">
          Bereit für dein Angular Training?
        </h2>
        <p class="text-xl mb-8 text-red-100 max-w-2xl mx-auto">
          Starte jetzt deine Angular-Lernreise und werde zum Experten. 
          Kontaktiere uns für eine kostenlose Beratung.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button class="btn-primary bg-white text-angular-red hover:bg-gray-100">
            Kostenloses Beratungsgespräch
          </button>
          <button class="btn-secondary border-white text-white hover:bg-white hover:text-angular-red">
            Training-Katalog anfordern
          </button>
        </div>
      </div>
    </section>
  `
})
export class TrainingComponent {
  courses = [
    {
      title: 'Angular Grundlagen',
      level: 'Beginner',
      price: '€1.299',
      duration: '3 Tage',
      description: 'Perfekt für Einsteiger in Angular. Lerne die Grundlagen und erstelle deine erste Anwendung.',
      features: [
        'TypeScript Grundlagen',
        'Components & Templates',
        'Data Binding & Directives',
        'Services & Dependency Injection',
        'Routing Basics',
        'Praktische Übungen'
      ],
      icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253'
    },
    {
      title: 'Advanced Angular',
      level: 'Fortgeschritten',
      price: '€1.699',
      duration: '4 Tage',
      description: 'Vertiefte Angular-Kenntnisse für erfahrene Entwickler. Advanced Patterns und Best Practices.',
      features: [
        'Advanced Components & Directives',
        'Reactive Forms',
        'HTTP Client & Interceptors',
        'State Management (NgRx)',
        'Testing Strategies',
        'Performance Optimization'
      ],
      icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
    },
    {
      title: 'Enterprise Angular',
      level: 'Expert',
      price: '€2.199',
      duration: '5 Tage',
      description: 'Angular für Enterprise-Anwendungen. Architektur, Skalierung und Team-Entwicklung.',
      features: [
        'Micro Frontend Architecture',
        'Enterprise State Management',
        'Advanced Testing',
        'CI/CD Integration',
        'Monitoring & Analytics',
        'Team Best Practices'
      ],
      icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
    }
  ];

  benefits = [
    {
      title: 'Praxisorientiert',
      description: 'Echte Projekte und praktische Übungen statt nur Theorie.',
      icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
      bgColor: 'bg-angular-red'
    },
    {
      title: 'Erfahrene Trainer',
      description: 'Lerne von Angular-Experten mit jahrelanger Praxiserfahrung.',
      icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
      bgColor: 'bg-angular-blue'
    },
    {
      title: 'Kleine Gruppen',
      description: 'Maximal 12 Teilnehmer für intensive Betreuung.',
      icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
      bgColor: 'bg-green-500'
    },
    {
      title: 'Zertifikat',
      description: 'Anerkannte Zertifizierung für deine Karriere.',
      icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z',
      bgColor: 'bg-purple-500'
    }
  ];

  testimonials = [
    {
      quote: 'Das beste Angular Training, das ich je besucht habe. Praxisnah und mit viel Expertise vermittelt.',
      name: 'Michael Weber',
      position: 'Senior Frontend Developer, BMW'
    },
    {
      quote: 'Hervorragende Trainer und sehr gut strukturierte Inhalte. Kann ich jedem empfehlen!',
      name: 'Sarah Müller',
      position: 'Lead Developer, SAP'
    },
    {
      quote: 'Nach dem Training konnte ich sofort die gelernten Konzepte in meinem Projekt umsetzen.',
      name: 'Thomas Schmidt',
      position: 'Fullstack Developer, Siemens'
    }
  ];

  getLevelBadgeClass(level: string): string {
    switch (level) {
      case 'Beginner':
        return 'bg-green-100 text-green-800';
      case 'Fortgeschritten':
        return 'bg-yellow-100 text-yellow-800';
      case 'Expert':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  }

  getIconBgClass(level: string): string {
    switch (level) {
      case 'Beginner':
        return 'bg-green-500';
      case 'Fortgeschritten':
        return 'bg-yellow-500';
      case 'Expert':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  }
}