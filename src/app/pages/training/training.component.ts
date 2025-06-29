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
            Der beste Weg mit<br>Angular zu starten
          </h1>
          <p class="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Unsere Schulungen machen dich fit für den produktiven Einsatz von Angular.
            Vertraue wie über 2000 Teilnehmer:innen vor dir auf unsere Expertise.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="https://workshops.de/schulungsthemen/angular" target="_blank" 
               class="btn-primary bg-white text-angular-blue hover:bg-gray-100">
              Training buchen
            </a>
            <button class="btn-secondary border-white text-white hover:bg-white hover:text-angular-blue">
              Kostenlose Beratung
            </button>
          </div>
          <p class="text-lg text-blue-200">
            Verfügbar als Öffentliche, Remote oder Inhouse Schulung
          </p>
        </div>
      </div>
    </section>

    <!-- 3=2 Offer Banner -->
    <section class="bg-yellow-400 py-4">
      <div class="container-max text-center">
        <p class="text-lg font-semibold text-gray-900">
          🎉 <strong>3=2 Rabatt</strong> auf Schulungen! Buche 2 Teilnehmer:innen und der/die Dritte ist kostenfrei.
        </p>
      </div>
    </section>

    <!-- What is Angular/TypeScript -->
    <section class="section-padding bg-gray-50">
      <div class="container-max">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Was sind Angular bzw. TypeScript?
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Ein Kurzüberblick, um was es geht.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="card p-8">
            <div class="flex items-center mb-6">
              <img src="/assets/angular-logo.svg" alt="Angular Logo" class="w-16 h-16 mr-4">
              <h3 class="text-2xl font-bold text-gray-900">Angular</h3>
            </div>
            <p class="text-gray-600">
              Angular ist ein weltweit millionenfach eingesetztes clientseitiges JavaScript-Framework 
              zur Erstellung von Webanwendungen. Das Framework gibt klare Strukturen und unterstützt 
              u. a. Modularisierung und Lazy-Loading. Es wird von Google entwickelt und richtet sich 
              an Entwickler:innen von komplexen Enterprise-Anwendungen.
            </p>
          </div>

          <div class="card p-8">
            <div class="flex items-center mb-6">
              <img src="/assets/typescript-logo.svg" alt="TypeScript Logo" class="w-16 h-16 mr-4">
              <h3 class="text-2xl font-bold text-gray-900">TypeScript</h3>
            </div>
            <p class="text-gray-600">
              TypeScript wird seit 2012 von Microsoft entwickelt und ist ein Aufsatz auf die Sprache 
              JavaScript. Es erweitert diese u.a. um ein Typensystem, das die Entwicklung und Pflege 
              von Webanwendungen stark unterstützt. Gerade Entwickler:innen, die vorher Programmiersprachen 
              wie Java oder C# gelernt haben, finden sich so deutlich leichter zurecht.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Training Courses -->
    <section class="section-padding bg-white">
      <div class="container-max">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Unsere Angular Schulungen
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Von Grundlagen bis zu Enterprise-Patterns - wähle das Training, das zu deinen Zielen passt.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
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

              <h3 class="text-xl font-bold text-gray-900 mb-4 group-hover:text-angular-red transition-colors">
                {{ course.title }}
              </h3>
              <p class="text-gray-600 mb-6">
                {{ course.description }}
              </p>

              <!-- Features -->
              <ul class="space-y-3 mb-8">
                <li *ngFor="let feature of course.features.slice(0, 5)" class="flex items-center space-x-3">
                  <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-gray-700">{{ feature }}</span>
                </li>
              </ul>

              <a [href]="course.link" target="_blank" class="block w-full btn-primary text-center">
                Training buchen →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Interactive Workshop -->
    <section class="section-padding bg-angular-blue text-white">
      <div class="container-max">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl md:text-4xl font-bold mb-6">
              Interaktiver Workshop
            </h2>
            <p class="text-xl text-blue-100 mb-6">
              Schneller und angenehmer lernen.
            </p>
            <p class="text-blue-100 mb-6">
              Bücher und Videokurse sind heute nicht mehr wegzudenken. 
              Allerdings kannst du in unserer Schulung:
            </p>
            <ul class="space-y-3">
              <li class="flex items-start space-x-3">
                <svg class="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Durch direktes Feedback schneller lernen.</span>
              </li>
              <li class="flex items-start space-x-3">
                <svg class="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Trainer:in nach konkreten Lösungsansätzen für dein Projekt fragen.</span>
              </li>
              <li class="flex items-start space-x-3">
                <svg class="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Gemeinsam Lernhürden überwinden.</span>
              </li>
              <li class="flex items-start space-x-3">
                <svg class="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Einfach eine gute Zeit mit anderen Entwicklern in der gleichen Situation haben.</span>
              </li>
            </ul>
          </div>
          <div class="bg-white/10 backdrop-blur-lg rounded-lg p-8">
            <div class="aspect-video bg-white/20 rounded-lg flex items-center justify-center">
              <svg class="w-20 h-20 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
              </svg>
            </div>
            <p class="text-center mt-4 text-blue-100">
              Remote Session zur Angular Schulung
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Agenda -->
    <section class="section-padding bg-white">
      <div class="container-max">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Agenda - Wissen aus der Praxis
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Wir arbeiten mit Beispielen aus der echten Welt. 
            Der <strong>Praxis-Anteil liegt bei 60%</strong>.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div *ngFor="let topic of agendaTopics" class="card p-6">
            <div class="flex items-center mb-4">
              <img [src]="topic.icon" alt="" class="w-12 h-12 mr-3">
              <h3 class="text-lg font-bold text-gray-900">{{ topic.title }}</h3>
            </div>
            <p class="text-gray-600 mb-4">{{ topic.description }}</p>
            <ul class="space-y-2">
              <li *ngFor="let item of topic.items" class="flex items-start space-x-2">
                <span class="text-angular-red mt-1">•</span>
                <span class="text-gray-700 text-sm">{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Advanced Topics -->
    <section class="section-padding bg-gray-50">
      <div class="container-max">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Erweiterte Themen
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Über 20 Module stehen zur Verfügung. Gemeinsam mit euer:m Trainer:in 
            entscheidet ihr, welche Themen für euch am relevantesten sind.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div *ngFor="let module of advancedModules" 
               class="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 class="text-lg font-semibold text-gray-900 mb-3">{{ module.title }}</h3>
            <p class="text-gray-600 text-sm">{{ module.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Our Training -->
    <section class="section-padding bg-white">
      <div class="container-max">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Kosteneffizienz
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Fehler ganz am Anfang eines Projektes sind die Teuersten. 
            Nutze unsere Erfahrung und vermeide die häufigsten Anfängerfehler.
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

    <!-- Prerequisites -->
    <section class="section-padding bg-gray-50">
      <div class="container-max">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 class="text-3xl font-bold text-gray-900 mb-6">
              Voraussetzungen
            </h2>
            <p class="text-gray-600 mb-6">
              Ohne viel Vorwissen direkt starten.
            </p>
            <p class="text-gray-600 mb-4">
              Voraussetzung sind <strong>Grundlagenkenntnisse in JavaScript und HTML</strong>. 
              Innerhalb des Workshops gehen wir auf die individuelle Situation der Gruppe ein 
              und passen sowohl den Fokus als auch die Geschwindigkeit an.
            </p>
            <p class="text-gray-600">
              <strong>Technische Voraussetzung:</strong> Notebook mit Windows, Linux oder MacOSX. 
              Weiterhin wird NodeJS benötigt. Du bekommst eine Schritt-für-Schritt-Anleitung 
              nach deiner Anmeldung.
            </p>
          </div>

          <div>
            <h2 class="text-3xl font-bold text-gray-900 mb-6">
              Enthaltene Leistungen
            </h2>
            <ul class="space-y-4">
              <li class="flex items-start space-x-3">
                <svg class="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <div>
                  <h4 class="font-semibold text-gray-900">Vorgespräch mit Trainer:in</h4>
                  <p class="text-gray-600 text-sm">
                    Damit wir den Workshop optimal konzipieren können.
                  </p>
                </div>
              </li>
              <li class="flex items-start space-x-3">
                <svg class="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <div>
                  <h4 class="font-semibold text-gray-900">Essen & Trinken</h4>
                  <p class="text-gray-600 text-sm">
                    In öffentlichen Schulungen für die komplette Veranstaltungszeit enthalten.
                  </p>
                </div>
              </li>
              <li class="flex items-start space-x-3">
                <svg class="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <div>
                  <h4 class="font-semibold text-gray-900">Kursunterlagen inkl. Aktualisierungen</h4>
                  <p class="text-gray-600 text-sm">
                    Lebenslanger Zugriff auf alle Materialien über unser virtuelles Klassenzimmer.
                  </p>
                </div>
              </li>
            </ul>
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
          <p class="text-lg text-gray-600">
            Aus insgesamt 2529 Bewertungen erreichen wir eine durchschnittliche 
            <strong>Bewertung von 4,7 Sternen</strong>.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div *ngFor="let testimonial of testimonials" class="card p-6">
            <div class="flex justify-center mb-4">
              <div class="flex space-x-1">
                <svg *ngFor="let star of [1,2,3,4,5]" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </div>
            </div>
            <blockquote class="text-gray-600 mb-4 italic text-sm">
              "{{ testimonial.quote }}"
            </blockquote>
            <div class="font-semibold text-gray-900 text-sm">{{ testimonial.name }}</div>
            <div class="text-gray-500 text-xs">{{ testimonial.position }}</div>
          </div>
        </div>

        <!-- Company Testimonials -->
        <div class="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-gray-50 rounded-lg p-8">
            <blockquote class="text-gray-700 mb-4">
              "Die Trainer:innen sind absolute Profis und übermitteln ihre Begeisterung für das Thema. 
              Unsere Mitarbeiter profitieren von intensiven, praktischen Trainings, in denen auf ihre 
              Bedürfnisse eingegangen wird. Das Feedback ist ausgesprochen gut."
            </blockquote>
            <div>
              <div class="font-semibold text-gray-900">Annika Stille</div>
              <div class="text-gray-600 text-sm">Verantwortliche für interne Weiterbildung</div>
              <div class="text-gray-500 text-sm">Adesso AG</div>
            </div>
          </div>

          <div class="bg-gray-50 rounded-lg p-8">
            <blockquote class="text-gray-700 mb-4">
              "Die Schulungen sind immer an die aktuellen Themen am Markt gerichtet und passen 
              maßgeschneidert auf unsere Bedarfe. Sie helfen unseren Mitarbeitern sich schnell 
              und effizient auf bevorstehende Projekte vorzubereiten."
            </blockquote>
            <div>
              <div class="font-semibold text-gray-900">Christian Janz</div>
              <div class="text-gray-600 text-sm">Lead Softwarearchitekt</div>
              <div class="text-gray-500 text-sm">bridgingIT</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Client Logos -->
    <section class="section-padding bg-gray-50">
      <div class="container-max">
        <div class="text-center mb-8">
          <h3 class="text-xl font-semibold text-gray-900 mb-2">
            Vertrauen von führenden Unternehmen
          </h3>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          <div *ngFor="let company of companies" class="text-center">
            <div class="text-gray-600 font-medium">{{ company }}</div>
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
          <a href="https://workshops.de/schulungsthemen/angular" target="_blank"
             class="btn-primary bg-white text-angular-red hover:bg-gray-100">
            Termine ansehen & buchen
          </a>
          <button class="btn-secondary border-white text-white hover:bg-white hover:text-angular-red">
            Kostenloses Beratungsgespräch
          </button>
        </div>
        <div class="mt-8">
          <p class="text-red-100">
            <strong>Kontakt:</strong> info@angular.de | +49 201 / 87535773
          </p>
        </div>
      </div>
    </section>
  `
})
export class TrainingComponent {
  courses = [
    {
      title: 'Angular & TypeScript Intensiv-Schulung',
      level: 'Einsteiger',
      price: 'ab €1.299',
      duration: '3 Tage',
      description: 'Der beste Weg mit Angular zu starten. Lerne die Grundlagen von Angular und TypeScript in einer intensiven 3-tägigen Schulung.',
      features: [
        'TypeScript Grundlagen (ca. 3 Stunden)',
        'Angular Komponenten und Services',
        'Formulare und REST-APIs',
        'Routing inkl. Lazy Loading',
        'Change Detection & Dependency Injection',
        'Praktische Übungen mit 60% Praxisanteil',
        'Vorgespräch mit Trainer:in',
        'Lebenslanger Zugriff auf Kursmaterialien'
      ],
      link: 'https://workshops.de/schulungsthemen/angular'
    },
    {
      title: 'Modern Angular - 2025 Edition',
      level: 'Fortgeschritten',
      price: 'ab €1.699',
      duration: '4 Tage',
      description: 'Lerne die neuesten Features von Angular 20 und moderne Entwicklungspraktiken für zukunftssichere Anwendungen.',
      features: [
        'Angular 20 neue Features',
        'Signals und Signal Components',
        'Standalone Components',
        'Modern State Management',
        'Performance Optimierung',
        'Server-Side Rendering mit SSR',
        'Testing mit Jasmine & Cypress',
        'CI/CD Best Practices'
      ],
      link: 'https://workshops.de/schulungsthemen/angular'
    },
    {
      title: 'Angular & Agentic AI Engineering',
      level: 'Expert',
      price: 'ab €2.199',
      duration: '4 Tage',
      description: 'Kombiniere Angular mit KI-gestützter Entwicklung. Lerne, wie du AI-Tools und Copilots effektiv in deinen Angular-Workflow integrierst.',
      features: [
        'AI-gestützte Angular Entwicklung',
        'GitHub Copilot & AI Tools',
        'Prompt Engineering für Angular',
        'Automatisierte Code-Generierung',
        'AI-powered Testing',
        'LLM Integration in Angular Apps',
        'Best Practices für AI Development',
        'Zukunftssichere Architekturen'
      ],
      link: 'https://workshops.de/schulungsthemen/angular'
    },
    {
      title: 'Angular Advanced',
      level: 'Expert',
      price: 'ab €1.899',
      duration: '4 Tage', 
      description: 'Für erfahrene Angular-Entwickler. Vertiefte Kenntnisse in Architektur, Performance und Enterprise-Patterns.',
      features: [
        'Architektur großer Anwendungen',
        'RxJS für reaktive Architekturen',
        'Advanced State Management',
        'Micro Frontend Architecture',
        'Web Components & Angular Elements',
        'Performance Deep Dive',
        'Security Best Practices',
        'Enterprise Patterns'
      ],
      link: 'https://workshops.de/schulungsthemen/angular'
    }
  ];

  agendaTopics = [
    {
      title: 'Grundlagen TypeScript',
      icon: '/assets/typescript-logo.svg',
      description: 'Kurze Einführung in TypeScript als Basis für Angular.',
      items: [
        'Unterschiede zu ES6',
        'Typen, Klassen & Interfaces',
        'Decorators / Annotationen',
        'Modul-System',
        'Generics & Destructuring'
      ]
    },
    {
      title: 'Angular Komponenten',
      icon: '/assets/angular-logo.svg',
      description: 'Die Grundkonzepte von Angular verstehen und anwenden.',
      items: [
        'Komponentenarchitektur',
        'Inputs und Outputs',
        'Direktiven & Pipes',
        'Services & DI',
        'Change Detection'
      ]
    },
    {
      title: 'Formulare & APIs',
      icon: '/assets/angular-logo.svg',
      description: 'Der Kern jeder Anwendung - Datenverarbeitung.',
      items: [
        'Template Driven Forms',
        'Reactive Forms',
        'Validierung',
        'REST-API Zugriff',
        'Authentifizierung'
      ]
    }
  ];

  advancedModules = [
    {
      title: 'Observables & RxJS',
      description: 'Reactive Programming mit Observables, Operatoren und Subjects im Detail.'
    },
    {
      title: 'Angular Signals',
      description: 'Die neue reaktive API für State Management und Performance.'
    },
    {
      title: 'Testing & Debugging',
      description: 'Unit Tests mit Jasmine/Karma und E2E Tests mit Cypress.'
    },
    {
      title: 'State Management',
      description: 'Redux-Pattern mit NgRx, Effekte und Immutable State.'
    },
    {
      title: 'Performance',
      description: 'AOT-Kompilierung, Lazy Loading, Service Worker und Web Worker.'
    },
    {
      title: 'Micro Frontends',
      description: 'Module Federation, Web Components und Angular Elements.'
    }
  ];

  benefits = [
    {
      title: 'Praxisorientiert',
      description: '60% Praxisanteil mit echten Beispielen aus der Praxis.',
      icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
      bgColor: 'bg-angular-red'
    },
    {
      title: 'Erfahrene Trainer',
      description: 'Lerne von Angular-Experten mit über 6 Jahren Erfahrung.',
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
      quote: 'Ich habe viel für die Zukunft gelernt und freue mich irgendwann einmal wieder einen Workshop mit Euch machen zu dürfen!',
      name: 'Michael Weber',
      position: 'Senior Frontend Developer'
    },
    {
      quote: 'Sehr gut strukturierter Workshop mit allen notwendigen Informationen! Ich werde ihn zu 100% weiter empfehlen.',
      name: 'Sarah Müller',
      position: 'Lead Developer'
    },
    {
      quote: 'Super-Workshop! Ich habe viel Neues in einer angenehmen Lernatmosphäre gelernt und freue mich darauf, es anwenden zu können.',
      name: 'Thomas Schmidt',
      position: 'Fullstack Developer'
    },
    {
      quote: 'Sehr guter und übersichtlicher Einblick in Angular und Typescript, hat meine Erwartungen erfüllt.',
      name: 'Julia Becker',
      position: 'Software Engineer'
    }
  ];

  companies = [
    'RWE Group',
    'Commerzbank',
    'Allianz',
    'Robert Bosch',
    'Galeria Kaufhof',
    'SWR'
  ];

  getLevelBadgeClass(level: string): string {
    switch (level) {
      case 'Einsteiger':
        return 'bg-green-100 text-green-800';
      case 'Fortgeschritten':
        return 'bg-yellow-100 text-yellow-800';
      case 'Expert':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  }
}