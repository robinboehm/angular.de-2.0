import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-community',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-purple-600 to-purple-800 text-white section-padding">
      <div class="container-max text-center">
        <h1 class="text-4xl md:text-6xl font-bold mb-6">
          Angular Community
        </h1>
        <p class="text-xl md:text-2xl mb-8 text-purple-100 max-w-3xl mx-auto">
          Vernetze dich mit anderen Angular-Entwicklern, teile dein Wissen 
          und wachse gemeinsam mit der Community.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button class="btn-primary bg-white text-purple-600 hover:bg-gray-100">
            Community beitreten
          </button>
          <button class="btn-secondary border-white text-white hover:bg-white hover:text-purple-600">
            Events entdecken
          </button>
        </div>
      </div>
    </section>

    <!-- Community Stats -->
    <section class="section-padding bg-white">
      <div class="container-max">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div *ngFor="let stat of communityStats" class="p-8">
            <div class="text-4xl md:text-5xl font-bold text-angular-red mb-2">
              {{ stat.value }}
            </div>
            <div class="text-gray-600 text-lg">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Community Channels -->
    <section class="section-padding bg-gray-50">
      <div class="container-max">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Wo findest du uns?
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Die Angular.de Community ist auf verschiedenen Plattformen aktiv. 
            Wähle den Kanal, der am besten zu dir passt.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let channel of communityChannels" class="card group hover:scale-105 transition-transform duration-300">
            <div class="p-8 text-center">
              <div [class]="'w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 ' + channel.bgColor">
                <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path [attr.d]="channel.icon"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-4 group-hover:text-angular-red transition-colors">
                {{ channel.name }}
              </h3>
              <p class="text-gray-600 mb-6">
                {{ channel.description }}
              </p>
              <div class="text-sm text-gray-500 mb-6">
                <strong>{{ channel.members }}</strong> Mitglieder
              </div>
              <button [class]="'w-full btn-primary ' + channel.btnClass">
                {{ channel.action }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Upcoming Events -->
    <section class="section-padding bg-white">
      <div class="container-max">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Kommende Events
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Bleib auf dem Laufenden mit unseren regelmäßigen Events, 
            Meetups und Konferenzen.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div *ngFor="let event of upcomingEvents" class="card">
            <div class="p-8">
              <div class="flex items-start justify-between mb-4">
                <div [class]="'px-3 py-1 rounded-full text-sm font-medium ' + getEventTypeClass(event.type)">
                  {{ event.type }}
                </div>
                <div class="text-right">
                  <div class="font-semibold text-gray-900">{{ event.date }}</div>
                  <div class="text-gray-500 text-sm">{{ event.time }}</div>
                </div>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">
                {{ event.title }}
              </h3>
              <p class="text-gray-600 mb-4">
                {{ event.description }}
              </p>
              <div class="flex items-center space-x-4 mb-6">
                <div class="flex items-center space-x-2 text-gray-500">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <span class="text-sm">{{ event.location }}</span>
                </div>
                <div class="flex items-center space-x-2 text-gray-500">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                  <span class="text-sm">{{ event.attendees }} Teilnehmer</span>
                </div>
              </div>
              <button class="btn-primary w-full">
                Jetzt anmelden
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Community Guidelines -->
    <section class="section-padding bg-angular-dark text-white">
      <div class="container-max">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            Community Guidelines
          </h2>
          <p class="text-xl text-gray-300 max-w-2xl mx-auto">
            Unsere Community lebt von Respekt, Hilfsbereitschaft und gemeinsamen Lernen. 
            Hier sind unsere wichtigsten Grundsätze.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let guideline of communityGuidelines" class="text-center">
            <div [class]="'w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ' + guideline.bgColor">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" [attr.d]="guideline.icon"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold mb-2">{{ guideline.title }}</h3>
            <p class="text-gray-300">{{ guideline.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding bg-gradient-to-r from-angular-red to-red-600 text-white">
      <div class="container-max text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">
          Bereit, Teil der Community zu werden?
        </h2>
        <p class="text-xl mb-8 text-red-100 max-w-2xl mx-auto">
          Schließe dich über 1000 Angular-Entwicklern an und werde Teil 
          der aktivsten deutschen Angular Community.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button class="btn-primary bg-white text-angular-red hover:bg-gray-100">
            Discord beitreten
          </button>
          <button class="btn-secondary border-white text-white hover:bg-white hover:text-angular-red">
            Nächstes Event anzeigen
          </button>
        </div>
      </div>
    </section>
  `
})
export class CommunityComponent {
  communityStats = [
    { value: '1,200+', label: 'Community Mitglieder' },
    { value: '50+', label: 'Events pro Jahr' },
    { value: '200+', label: 'Artikel & Tutorials' },
    { value: '15+', label: 'Expert Contributors' }
  ];

  communityChannels = [
    {
      name: 'Discord Server',
      description: 'Unser Hauptkommunikationskanal für tägliche Diskussionen, Fragen und schnelle Hilfe.',
      members: '800+',
      action: 'Discord beitreten',
      icon: 'M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z',
      bgColor: 'bg-purple-500',
      btnClass: 'bg-purple-500 hover:bg-purple-600'
    },
    {
      name: 'GitHub Organization',
      description: 'Open Source Projekte, Code-Beispiele und Beiträge zur Angular.de Website.',
      members: '300+',
      action: 'GitHub folgen',
      icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z',
      bgColor: 'bg-gray-800',
      btnClass: 'bg-gray-800 hover:bg-gray-900'
    },
    {
      name: 'Twitter Community',
      description: 'Folge uns für Angular News, Updates und Tipps direkt in deinem Twitter Feed.',
      members: '2,500+',
      action: 'Twitter folgen',
      icon: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z',
      bgColor: 'bg-blue-400',
      btnClass: 'bg-blue-400 hover:bg-blue-500'
    }
  ];

  upcomingEvents = [
    {
      title: 'Angular München Meetup',
      description: 'Monatliches Meetup der Münchener Angular Community mit spannenden Talks und Networking.',
      date: '25. Jan',
      time: '19:00 Uhr',
      location: 'München',
      attendees: '45',
      type: 'Meetup'
    },
    {
      title: 'Angular Workshop: Testing',
      description: 'Hands-on Workshop zum Thema Testing in Angular mit Unit Tests, Integration Tests und E2E Tests.',
      date: '2. Feb',
      time: '10:00 Uhr',
      location: 'Online',
      attendees: '20',
      type: 'Workshop'
    },
    {
      title: 'AngularJS.DE Conference 2025',
      description: 'Die größte deutsche Angular Konferenz mit internationalen Speakern und neuesten Trends.',
      date: '15. März',
      time: '09:00 Uhr',
      location: 'Berlin',
      attendees: '300',
      type: 'Konferenz'
    },
    {
      title: 'Angular Beginners Webinar',
      description: 'Kostenloses Webinar für Angular-Einsteiger mit Grundlagen und ersten Schritten.',
      date: '20. Feb',
      time: '18:00 Uhr',
      location: 'Online',
      attendees: '100',
      type: 'Webinar'
    }
  ];

  communityGuidelines = [
    {
      title: 'Respektvoller Umgang',
      description: 'Behandle alle Mitglieder mit Respekt und Höflichkeit, unabhängig von Erfahrungslevel.',
      icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
      bgColor: 'bg-red-500'
    },
    {
      title: 'Hilfsbereitschaft',
      description: 'Hilf anderen bei Fragen und teile dein Wissen großzügig mit der Community.',
      icon: 'M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z',
      bgColor: 'bg-blue-500'
    },
    {
      title: 'Konstruktives Feedback',
      description: 'Gib konstruktives Feedback und sei offen für Kritik und Verbesserungsvorschläge.',
      icon: 'M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z',
      bgColor: 'bg-green-500'
    },
    {
      title: 'Keine Spam/Werbung',
      description: 'Vermeide übermäßige Eigenwerbung und halte dich an die Community-Richtlinien.',
      icon: 'M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L12 12m6.364 6.364L12 12m0 0L5.636 5.636M12 12l6.364-6.364M12 12l-6.364 6.364',
      bgColor: 'bg-yellow-500'
    },
    {
      title: 'Aktive Teilnahme',
      description: 'Nimm aktiv an Diskussionen teil und bringe dich in die Community ein.',
      icon: 'M13 10V3L4 14h7v7l9-11h-7z',
      bgColor: 'bg-purple-500'
    },
    {
      title: 'Kontinuierliches Lernen',
      description: 'Bleib neugierig, lerne ständig dazu und teile neue Erkenntnisse.',
      icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253',
      bgColor: 'bg-indigo-500'
    }
  ];

  getEventTypeClass(type: string): string {
    switch (type) {
      case 'Meetup':
        return 'bg-blue-100 text-blue-800';
      case 'Workshop':
        return 'bg-green-100 text-green-800';
      case 'Konferenz':
        return 'bg-purple-100 text-purple-800';
      case 'Webinar':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  }
}