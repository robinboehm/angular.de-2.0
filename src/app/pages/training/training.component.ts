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
            Werde zum Angular-Experten<br>in nur 3 Tagen
          </h1>
          <p class="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Profitiere von über 10 Jahren Angular-Erfahrung. Über 2000 Entwickler haben 
            bereits ihre Karriere mit unseren praxisorientierten Workshops beschleunigt.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="https://workshops.de/schulungsthemen/angular" target="_blank" 
               class="btn-primary bg-white text-angular-blue hover:bg-gray-100">
              Jetzt Platz sichern →
            </a>
            <button class="btn-secondary border-white text-white hover:bg-white hover:text-angular-blue">
              Gratis Beratungstermin
            </button>
          </div>
          <p class="text-lg text-blue-200">
            💻 Präsenz | 🏠 Remote | 🏢 Inhouse - Du entscheidest!
          </p>
        </div>
      </div>
    </section>

    <!-- Limited Offer Banner -->
    <section class="bg-gradient-to-r from-yellow-400 to-orange-400 py-4">
      <div class="container-max text-center">
        <p class="text-lg font-semibold text-gray-900">
          🎯 <strong>Spare 33%!</strong> Bei 3 Teilnehmern zahlen Sie nur für 2 - Jetzt Teamrabatt sichern!
        </p>
      </div>
    </section>

    <!-- Technology Overview -->
    <section class="section-padding bg-gray-50">
      <div class="container-max">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Warum Angular & TypeScript deine Zukunft sind
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Die perfekte Kombination für moderne, skalierbare Web-Anwendungen
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="card p-8 hover:shadow-lg transition-shadow">
            <div class="flex items-center mb-6">
              <div class="w-16 h-16 bg-angular-red rounded-full flex items-center justify-center mr-4">
                <span class="text-white text-2xl font-bold">A</span>
              </div>
              <h3 class="text-2xl font-bold text-gray-900">Angular 20</h3>
            </div>
            <p class="text-gray-600 mb-4">
              Das führende Enterprise-Framework von Google powert Millionen von Anwendungen weltweit. 
              Mit Angular 20 entwickelst du blitzschnelle, wartbare Applikationen mit modernsten Features 
              wie Signals, Standalone Components und verbesserter Performance.
            </p>
            <ul class="space-y-2">
              <li class="flex items-center space-x-2">
                <span class="text-green-500">✓</span>
                <span class="text-gray-700">Strukturierte Architektur für große Teams</span>
              </li>
              <li class="flex items-center space-x-2">
                <span class="text-green-500">✓</span>
                <span class="text-gray-700">Integrierte Tools & Best Practices</span>
              </li>
              <li class="flex items-center space-x-2">
                <span class="text-green-500">✓</span>
                <span class="text-gray-700">Zukunftssicher durch Google-Support</span>
              </li>
            </ul>
          </div>

          <div class="card p-8 hover:shadow-lg transition-shadow">
            <div class="flex items-center mb-6">
              <div class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                <span class="text-white text-2xl font-bold">TS</span>
              </div>
              <h3 class="text-2xl font-bold text-gray-900">TypeScript 5.4</h3>
            </div>
            <p class="text-gray-600 mb-4">
              Microsofts geniale Erweiterung von JavaScript macht deinen Code robuster und wartbarer. 
              TypeScript ist der Standard für professionelle Webentwicklung und wird von allen großen 
              Tech-Unternehmen eingesetzt.
            </p>
            <ul class="space-y-2">
              <li class="flex items-center space-x-2">
                <span class="text-green-500">✓</span>
                <span class="text-gray-700">Fehler zur Compile-Zeit statt Runtime</span>
              </li>
              <li class="flex items-center space-x-2">
                <span class="text-green-500">✓</span>
                <span class="text-gray-700">Perfekte IDE-Unterstützung</span>
              </li>
              <li class="flex items-center space-x-2">
                <span class="text-green-500">✓</span>
                <span class="text-gray-700">Einfacher Einstieg für Java/C#-Entwickler</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Training Courses -->
    <section class="section-padding bg-white">
      <div class="container-max">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Finde deinen perfekten Angular-Workshop
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Maßgeschneiderte Trainings für jedes Level - vom Einsteiger bis zum Architekten
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div *ngFor="let course of courses" class="card group hover:scale-105 transition-all duration-300 relative overflow-hidden">
            <!-- Popular Badge -->
            <div *ngIf="course.popular" class="absolute top-0 right-0 bg-angular-red text-white px-4 py-1 text-sm font-semibold">
              Beliebtester Kurs
            </div>
            
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

              <!-- Key Benefits -->
              <div class="mb-6 p-4 bg-blue-50 rounded-lg">
                <p class="text-sm font-semibold text-blue-900 mb-2">Das lernst du:</p>
                <p class="text-sm text-blue-800">{{ course.keyBenefit }}</p>
              </div>

              <!-- Features -->
              <ul class="space-y-3 mb-8">
                <li *ngFor="let feature of course.features.slice(0, 5)" class="flex items-start space-x-3">
                  <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-gray-700 text-sm">{{ feature }}</span>
                </li>
              </ul>

              <a [href]="course.link" target="_blank" class="block w-full btn-primary text-center group-hover:bg-angular-red group-hover:border-angular-red">
                Workshop buchen →
              </a>
            </div>
          </div>
        </div>

        <div class="mt-8 text-center">
          <p class="text-gray-600">
            Nicht sicher, welcher Kurs der richtige ist? 
            <a href="#" class="text-angular-red hover:underline font-semibold">Lass dich kostenlos beraten →</a>
          </p>
        </div>
      </div>
    </section>

    <!-- Interactive Benefits -->
    <section class="section-padding bg-angular-blue text-white">
      <div class="container-max">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl md:text-4xl font-bold mb-6">
              Warum Live-Training der Game-Changer ist
            </h2>
            <p class="text-xl text-blue-100 mb-6">
              Online-Kurse sind gut. Live-Workshops sind besser.
            </p>
            <p class="text-blue-100 mb-6">
              Während du bei Videos nur zuschauen kannst, bieten dir unsere interaktiven 
              Workshops echte Vorteile:
            </p>
            <ul class="space-y-4">
              <li class="flex items-start space-x-3">
                <div class="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span class="text-angular-blue font-bold">1</span>
                </div>
                <div>
                  <h4 class="font-semibold text-white mb-1">Sofortiges Experten-Feedback</h4>
                  <p class="text-blue-100 text-sm">Stelle Fragen zu deinem konkreten Projekt und erhalte maßgeschneiderte Lösungen.</p>
                </div>
              </li>
              <li class="flex items-start space-x-3">
                <div class="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span class="text-angular-blue font-bold">2</span>
                </div>
                <div>
                  <h4 class="font-semibold text-white mb-1">Netzwerk mit Gleichgesinnten</h4>
                  <p class="text-blue-100 text-sm">Tausche dich mit anderen Angular-Entwicklern aus und erweitere dein Netzwerk.</p>
                </div>
              </li>
              <li class="flex items-start space-x-3">
                <div class="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span class="text-angular-blue font-bold">3</span>
                </div>
                <div>
                  <h4 class="font-semibold text-white mb-1">Strukturiertes Lernen ohne Ablenkung</h4>
                  <p class="text-blue-100 text-sm">3 Tage voller Fokus bringen dich weiter als Monate des Selbststudiums.</p>
                </div>
              </li>
              <li class="flex items-start space-x-3">
                <div class="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span class="text-angular-blue font-bold">4</span>
                </div>
                <div>
                  <h4 class="font-semibold text-white mb-1">Praxis-Challenges mit Code-Review</h4>
                  <p class="text-blue-100 text-sm">Löse echte Aufgaben und lass deinen Code von Profis reviewen.</p>
                </div>
              </li>
            </ul>
          </div>
          <div class="relative">
            <div class="bg-white/10 backdrop-blur-lg rounded-lg p-8">
              <div class="aspect-video bg-white/20 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-20 h-20 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                </svg>
              </div>
              <p class="text-center text-blue-100">
                Live-Coding Sessions mit Screen-Sharing
              </p>
            </div>
            <div class="absolute -bottom-4 -right-4 bg-yellow-400 text-angular-blue rounded-lg p-4 shadow-lg">
              <p class="font-bold text-sm">60% Praxis</p>
              <p class="text-xs">Hands-on Learning</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Modern Agenda -->
    <section class="section-padding bg-white">
      <div class="container-max">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Moderne Agenda für Angular 20
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Lerne die neuesten Features und Best Practices. 
            <strong class="text-angular-red">60% praktische Übungen</strong> garantiert!
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div *ngFor="let topic of agendaTopics; let i = index" class="card p-6 hover:shadow-lg transition-shadow relative">
            <!-- Day indicator -->
            <div class="absolute -top-3 -right-3 w-12 h-12 bg-angular-red rounded-full flex items-center justify-center text-white font-bold">
              Tag {{ i + 1 }}
            </div>
            
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-gradient-to-br from-angular-blue to-blue-600 rounded-lg flex items-center justify-center mr-3">
                <span class="text-white font-bold text-lg">{{ i + 1 }}</span>
              </div>
              <h3 class="text-lg font-bold text-gray-900">{{ topic.title }}</h3>
            </div>
            <p class="text-gray-600 mb-4 text-sm">{{ topic.description }}</p>
            <ul class="space-y-2">
              <li *ngFor="let item of topic.items" class="flex items-start space-x-2">
                <span class="text-angular-red mt-1">▸</span>
                <span class="text-gray-700 text-sm">{{ item }}</span>
              </li>
            </ul>
            <div class="mt-4 pt-4 border-t border-gray-200">
              <p class="text-xs text-gray-500">
                <span class="font-semibold">Highlight:</span> {{ topic.highlight }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Advanced Modules -->
    <section class="section-padding bg-gray-50">
      <div class="container-max">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Deep-Dive Module für Fortgeschrittene
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Individuell anpassbar! Wähle gemeinsam mit deinem Trainer die Module, 
            die für dein Team am wichtigsten sind.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div *ngFor="let module of advancedModules" 
               class="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
            <div class="flex items-start space-x-3">
              <div class="w-10 h-10 bg-angular-red/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-angular-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ module.title }}</h3>
                <p class="text-gray-600 text-sm">{{ module.description }}</p>
                <p class="text-xs text-angular-red mt-2 font-semibold">{{ module.duration }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ROI Section -->
    <section class="section-padding bg-white">
      <div class="container-max">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Deine Investition zahlt sich aus
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Spare Monate an Trial-and-Error. Unsere Erfahrung ist dein Shortcut zum Erfolg.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div *ngFor="let benefit of benefits" class="text-center group hover:scale-105 transition-transform">
            <div [class]="'w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform ' + benefit.bgColor">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" [attr.d]="benefit.icon"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ benefit.title }}</h3>
            <p class="text-gray-600 text-sm">{{ benefit.description }}</p>
          </div>
        </div>

        <div class="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
          <div class="text-center">
            <h3 class="text-2xl font-bold text-gray-900 mb-4">
              💰 Return on Investment
            </h3>
            <p class="text-gray-700 max-w-2xl mx-auto">
              Unsere Teilnehmer berichten von <strong>30% schnellerer Entwicklung</strong> und 
              <strong>50% weniger Bugs</strong> nach dem Training. Bei einem durchschnittlichen 
              Entwicklergehalt amortisiert sich die Schulung in weniger als 2 Monaten!
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Prerequisites & Included -->
    <section class="section-padding bg-gray-50">
      <div class="container-max">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 class="text-3xl font-bold text-gray-900 mb-6">
              Dein Weg zum Angular-Profi
            </h2>
            <p class="text-gray-600 mb-6">
              <strong>Niedrige Einstiegshürde</strong> - Starte mit Basis-Kenntnissen
            </p>
            <p class="text-gray-600 mb-4">
              Du brauchst nur <strong>grundlegende JavaScript und HTML-Kenntnisse</strong>. 
              TypeScript lernen wir gemeinsam! Unsere Trainer passen Tempo und Tiefe 
              individuell an deine Gruppe an.
            </p>
            <div class="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
              <p class="text-sm text-blue-800">
                <strong>Pro-Tipp:</strong> Nutze unser kostenloses Vorgespräch, um dein Level 
                einzuschätzen und den perfekten Kurs zu finden.
              </p>
            </div>
            <p class="text-gray-600">
              <strong>Setup:</strong> Bring nur deinen Laptop mit (Windows, Mac oder Linux). 
              Eine detaillierte Installationsanleitung erhältst du vorab per E-Mail.
            </p>
          </div>

          <div>
            <h2 class="text-3xl font-bold text-gray-900 mb-6">
              All-Inclusive Paket
            </h2>
            <p class="text-gray-600 mb-6">
              Konzentriere dich aufs Lernen - wir kümmern uns um den Rest
            </p>
            <ul class="space-y-4">
              <li class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900">Persönliches Vorgespräch</h4>
                  <p class="text-gray-600 text-sm">
                    30 Min. mit deinem Trainer zur optimalen Kursvorbereitung
                  </p>
                </div>
              </li>
              <li class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900">Premium Verpflegung</h4>
                  <p class="text-gray-600 text-sm">
                    Frühstück, Mittagessen, Snacks & Getränke bei Präsenz-Trainings
                  </p>
                </div>
              </li>
              <li class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900">Lifetime Access</h4>
                  <p class="text-gray-600 text-sm">
                    Alle Materialien, Code-Beispiele & Updates für immer verfügbar
                  </p>
                </div>
              </li>
              <li class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900">Support nach dem Training</h4>
                  <p class="text-gray-600 text-sm">
                    30 Tage E-Mail-Support für Fragen zu deinem ersten Projekt
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
            2529 zufriedene Entwickler können nicht irren
          </h2>
          <div class="flex items-center justify-center space-x-2 mb-4">
            <div class="flex space-x-1">
              <svg *ngFor="let star of [1,2,3,4,5]" class="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            </div>
            <span class="text-2xl font-bold text-gray-900">4,7 von 5 Sternen</span>
          </div>
          <p class="text-lg text-gray-600">
            Echtes Feedback von echten Entwicklern
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div *ngFor="let testimonial of testimonials" class="card p-6 hover:shadow-lg transition-shadow">
            <div class="flex justify-between items-start mb-4">
              <div class="flex space-x-1">
                <svg *ngFor="let star of [1,2,3,4,5]" class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </div>
              <span class="text-xs text-gray-500">{{ testimonial.date }}</span>
            </div>
            <blockquote class="text-gray-700 mb-4 text-sm">
              "{{ testimonial.quote }}"
            </blockquote>
            <div>
              <div class="font-semibold text-gray-900 text-sm">{{ testimonial.name }}</div>
              <div class="text-gray-500 text-xs">{{ testimonial.position }}</div>
            </div>
          </div>
        </div>

        <!-- Company Testimonials -->
        <div class="mt-12 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8">
          <h3 class="text-2xl font-bold text-center text-gray-900 mb-8">
            Trusted by Enterprise Teams
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="bg-white rounded-lg p-8 shadow-sm">
              <div class="flex items-start space-x-3 mb-4">
                <img src="/assets/company-logo-placeholder.svg" alt="Adesso" class="w-12 h-12">
                <div>
                  <div class="font-semibold text-gray-900">Annika Stille</div>
                  <div class="text-gray-600 text-sm">Head of Training, Adesso AG</div>
                </div>
              </div>
              <blockquote class="text-gray-700 italic">
                "Die Qualität der Angular-Schulungen ist außergewöhnlich. Unsere Teams sind nach 
                dem Training sofort produktiv und können moderne Best Practices anwenden. 
                Die Investition hat sich bereits nach dem ersten Projekt ausgezahlt."
              </blockquote>
            </div>

            <div class="bg-white rounded-lg p-8 shadow-sm">
              <div class="flex items-start space-x-3 mb-4">
                <img src="/assets/company-logo-placeholder.svg" alt="bridgingIT" class="w-12 h-12">
                <div>
                  <div class="font-semibold text-gray-900">Christian Janz</div>
                  <div class="text-gray-600 text-sm">Lead Architect, bridgingIT</div>
                </div>
              </div>
              <blockquote class="text-gray-700 italic">
                "Die Trainer verstehen es, komplexe Angular-Konzepte verständlich zu vermitteln. 
                Besonders wertvoll sind die praktischen Tipps aus echten Enterprise-Projekten. 
                Absolute Empfehlung!"
              </blockquote>
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
            Diese Unternehmen vertrauen auf unsere Angular-Expertise
          </h3>
          <p class="text-gray-600">
            Join the club der erfolgreichsten deutschen Unternehmen
          </p>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          <div *ngFor="let company of companies" class="text-center group">
            <div class="text-gray-400 font-medium text-lg group-hover:text-gray-600 transition-colors">
              {{ company }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding bg-gradient-to-br from-angular-red to-red-600 text-white">
      <div class="container-max text-center">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-bold mb-6">
            Starte jetzt deine Angular-Karriere
          </h2>
          <p class="text-xl mb-8 text-red-100">
            Werde Teil von über 2000 erfolgreichen Angular-Entwicklern. 
            Sichere dir jetzt deinen Platz im nächsten Workshop!
          </p>
          
          <!-- Next dates -->
          <div class="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8 max-w-md mx-auto">
            <p class="text-sm text-red-100 mb-2">Nächste Termine:</p>
            <p class="font-semibold">
              📅 15.-17. April 2025 (Remote)<br>
              📅 06.-08. Mai 2025 (München)<br>
              📅 27.-29. Mai 2025 (Remote)
            </p>
          </div>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://workshops.de/schulungsthemen/angular" target="_blank"
               class="btn-primary bg-white text-angular-red hover:bg-gray-100 text-lg px-8 py-4">
              Jetzt Platz sichern →
            </a>
            <button class="btn-secondary border-white text-white hover:bg-white hover:text-angular-red text-lg px-8 py-4">
              Erst beraten lassen
            </button>
          </div>
          <div class="mt-8">
            <p class="text-red-100 text-lg">
              📞 <strong>Direkter Draht:</strong> +49 201 / 87535773<br>
              ✉️ <strong>E-Mail:</strong> training@angular.de
            </p>
          </div>
          
          <!-- Trust badges -->
          <div class="mt-8 flex flex-wrap justify-center gap-6 text-sm text-red-100">
            <div class="flex items-center space-x-2">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
              <span>Geld-zurück-Garantie</span>
            </div>
            <div class="flex items-center space-x-2">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
              <span>Kleine Gruppen (max. 12)</span>
            </div>
            <div class="flex items-center space-x-2">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
              <span>Zertifikat inklusive</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class TrainingComponent {
  courses = [
    {
      title: 'Angular & TypeScript Bootcamp',
      level: 'Einsteiger',
      price: 'ab €1.299',
      duration: '3 intensive Tage',
      description: 'Der perfekte Einstieg in die Angular-Welt. Von null auf produktiv in nur 3 Tagen.',
      keyBenefit: 'Nach diesem Kurs kannst du selbstständig moderne Angular-Apps entwickeln und verstehst alle wichtigen Konzepte.',
      features: [
        'TypeScript Crash-Kurs (3h intensiv)',
        'Angular 20 Komponenten-Architektur',
        'Reactive Forms & Template Forms',
        'HTTP & REST-API Integration',
        'Routing mit Guards & Lazy Loading',
        'RxJS Grundlagen für Angular',
        'Testing-Basics mit Jasmine',
        'Deployment & Build-Optimierung'
      ],
      link: 'https://workshops.de/schulungsthemen/angular',
      popular: true
    },
    {
      title: 'Modern Angular 2025',
      level: 'Fortgeschritten',
      price: 'ab €1.699',
      duration: '4 Power-Tage',
      description: 'Meistere Angular 20 mit Signals, Standalone Components und modernsten Patterns.',
      keyBenefit: 'Lerne die Zukunft von Angular kennen und wie du hochperformante, wartbare Apps baust.',
      features: [
        'Angular 20 Signals Deep-Dive',
        'Standalone Components Architektur',
        'Modern State Management Patterns',
        'Advanced RxJS Patterns',
        'Performance-Tuning & Optimierung',
        'SSR & Hydration verstehen',
        'Micro-Frontend Strategien',
        'AI-Integration in Angular Apps'
      ],
      link: 'https://workshops.de/schulungsthemen/angular'
    },
    {
      title: 'Angular AI Engineering',
      level: 'Expert',
      price: 'ab €2.199',
      duration: '4 Tage',
      description: 'Die Zukunft: Angular-Entwicklung mit KI-Unterstützung auf Enterprise-Level.',
      keyBenefit: 'Verdopple deine Produktivität durch intelligente Tools und AI-gestützte Entwicklung.',
      features: [
        'GitHub Copilot für Angular',
        'AI-Prompt Engineering Workshop',
        'Automatisierte Code-Generation',
        'KI-gestützte Code-Reviews',
        'LLM-Integration (ChatGPT & Co.)',
        'AI-Testing Strategien',
        'Intelligent Error Handling',
        'Future-Proof Architekturen'
      ],
      link: 'https://workshops.de/schulungsthemen/angular'
    },
    {
      title: 'Angular Enterprise Mastery',
      level: 'Expert',
      price: 'ab €1.899',
      duration: '4 Tage',
      description: 'Skalierbare Angular-Architekturen für große Teams und komplexe Projekte.',
      keyBenefit: 'Werde zum Angular-Architekten und führe dein Team zu besserer Code-Qualität.',
      features: [
        'Domain-Driven Design mit Angular',
        'Nx Monorepo Management',
        'Advanced Testing Strategies',
        'CI/CD Pipeline Setup',
        'Security Best Practices',
        'Performance Monitoring',
        'Team Collaboration Tools',
        'Code Quality Automation'
      ],
      link: 'https://workshops.de/schulungsthemen/angular'
    }
  ];

  agendaTopics = [
    {
      title: 'Foundation Day',
      description: 'Solide Grundlagen schaffen - TypeScript & Angular Basics',
      items: [
        'TypeScript 5.4 Power-Features',
        'Angular 20 Projektstruktur',
        'Komponenten & Lifecycle',
        'Data Binding Deep-Dive',
        'Direktiven & Pipes meistern'
      ],
      highlight: 'Hands-on: Erste funktionierende App am Ende von Tag 1!'
    },
    {
      title: 'Interactive Day',
      description: 'User Interaction & Datenfluss perfektionieren',
      items: [
        'Signals vs. Observables',
        'Smart & Dumb Components',
        'Form Handling wie die Profis',
        'HTTP & Interceptors',
        'Error Handling Patterns'
      ],
      highlight: 'Live-Coding: Baue ein Real-World Dashboard mit API-Anbindung'
    },
    {
      title: 'Professional Day',
      description: 'Enterprise-Features & Best Practices anwenden',
      items: [
        'Advanced Routing Patterns',
        'State Management Strategien',
        'Performance Optimization',
        'Testing & Debugging',
        'Deployment & DevOps'
      ],
      highlight: 'Challenge: Optimiere eine langsame App auf Profi-Niveau'
    }
  ];

  advancedModules = [
    {
      title: 'Angular Signals Mastery',
      description: 'Die revolutionäre Art, State in Angular zu managen - einfacher und performanter.',
      duration: '2-3 Stunden'
    },
    {
      title: 'RxJS Power Patterns',
      description: 'Meistere komplexe Datenflüsse mit reaktiver Programmierung.',
      duration: '3-4 Stunden'
    },
    {
      title: 'Testing wie ein Profi',
      description: 'Unit-, Integration- und E2E-Tests die wirklich Sinn machen.',
      duration: '2-3 Stunden'
    },
    {
      title: 'NgRx State Management',
      description: 'Predictable State für große Apps mit Redux-Pattern.',
      duration: '3-4 Stunden'
    },
    {
      title: 'Performance Deep-Dive',
      description: 'Von Lazy Loading bis Web Workers - mache deine App blitzschnell.',
      duration: '2-3 Stunden'
    },
    {
      title: 'Micro-Frontend Architecture',
      description: 'Module Federation und unabhängige Team-Entwicklung.',
      duration: '3-4 Stunden'
    }
  ];

  benefits = [
    {
      title: '100% Praxisfokus',
      description: 'Keine langweilige Theorie - du codest vom ersten Moment an.',
      icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
      bgColor: 'bg-angular-red'
    },
    {
      title: 'Top-Experten',
      description: 'Unsere Trainer entwickeln täglich mit Angular in Enterprise-Projekten.',
      icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
      bgColor: 'bg-angular-blue'
    },
    {
      title: 'Kleine Gruppen',
      description: 'Max. 12 Teilnehmer - jeder bekommt individuelle Unterstützung.',
      icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
      bgColor: 'bg-green-500'
    },
    {
      title: 'Zertifikat',
      description: 'Offizieller Nachweis deiner Angular-Expertise für deinen CV.',
      icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z',
      bgColor: 'bg-purple-500'
    }
  ];

  testimonials = [
    {
      quote: 'Endlich ein Training, das wirklich praxisnah ist! Nach 3 Tagen konnte ich direkt in unserem Projekt durchstarten.',
      name: 'Michael Weber',
      position: 'Senior Developer',
      date: 'März 2024'
    },
    {
      quote: 'Die Trainer haben ein unglaubliches Fachwissen und können es super vermitteln. Absolute Empfehlung!',
      name: 'Sarah Müller',
      position: 'Tech Lead',
      date: 'Februar 2024'
    },
    {
      quote: 'Besonders die Angular 20 Features und Signals haben mir die Augen geöffnet. Game Changer!',
      name: 'Thomas Schmidt',
      position: 'Full-Stack Developer',
      date: 'Januar 2024'
    },
    {
      quote: 'Perfekter Mix aus Theorie und Praxis. Die Übungen waren challenging aber machbar.',
      name: 'Julia Becker',
      position: 'Frontend Engineer',
      date: 'März 2024'
    }
  ];

  companies = [
    'RWE',
    'Commerzbank',
    'Allianz',
    'Bosch',
    'Kaufhof',
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