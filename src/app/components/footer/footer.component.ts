import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <footer class="bg-angular-dark text-white">
      <div class="container-max section-padding">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <!-- Brand Section -->
          <div class="md:col-span-2">
            <div class="flex items-center space-x-3 mb-4">
              <div class="w-8 h-8 bg-angular-red rounded-lg flex items-center justify-center">
                <svg viewBox="0 0 24 24" class="w-5 h-5 text-white" fill="currentColor">
                  <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7l-10-5z"/>
                  <path d="M12 6L8 10h3v6h2v-6h3l-4-4z" fill="#fff"/>
                </svg>
              </div>
              <span class="text-lg font-bold">Angular.de</span>
            </div>
            <p class="text-angular-gray mb-4 max-w-md">
              Die zentrale Anlaufstelle für die deutsche Angular Community. 
              Hier findest Du Tutorials, Artikel, Training und News rund um Angular.
            </p>
            <div class="flex space-x-4">
              <a href="https://twitter.com/angularjs_de" 
                 class="text-angular-gray hover:text-white transition-colors"
                 aria-label="Angular.de auf Twitter">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="https://github.com/angularjs-de" 
                 class="text-angular-gray hover:text-white transition-colors"
                 aria-label="Angular.de auf GitHub">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://discord.gg/angular" 
                 class="text-angular-gray hover:text-white transition-colors"
                 aria-label="Angular Community Discord">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418Z"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Quick Links -->
          <div>
            <h3 class="font-semibold mb-4">Navigation</h3>
            <ul class="space-y-2">
              <li><a routerLink="/artikel" class="text-angular-gray hover:text-white transition-colors">Artikel</a></li>
              <li><a routerLink="/training" class="text-angular-gray hover:text-white transition-colors">Training</a></li>
              <li><a routerLink="/community" class="text-angular-gray hover:text-white transition-colors">Community</a></li>
              <li><a routerLink="/ressourcen" class="text-angular-gray hover:text-white transition-colors">Ressourcen</a></li>
            </ul>
          </div>

          <!-- Resources -->
          <div>
            <h3 class="font-semibold mb-4">Ressourcen</h3>
            <ul class="space-y-2">
              <li><a href="https://angular.io" class="text-angular-gray hover:text-white transition-colors">Angular.io</a></li>
              <li><a href="https://angular.dev" class="text-angular-gray hover:text-white transition-colors">Angular.dev</a></li>
              <li><a href="https://blog.angular.io" class="text-angular-gray hover:text-white transition-colors">Angular Blog</a></li>
              <li><a href="https://github.com/angular/angular" class="text-angular-gray hover:text-white transition-colors">GitHub</a></li>
            </ul>
          </div>
        </div>

        <!-- Community Portals Section -->
        <div class="border-t border-gray-700 mt-8 pt-8">
          <h3 class="font-semibold mb-6 text-center">Community Portale</h3>
          <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            <!-- Discord -->
            <a href="https://discord.gg/angular" 
               class="flex flex-col items-center p-4 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all hover:scale-105 group">
              <svg class="w-8 h-8 mb-2 text-purple-400 group-hover:text-purple-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418Z"/>
              </svg>
              <span class="text-sm text-angular-gray group-hover:text-white">Discord</span>
            </a>

            <!-- Twitter -->
            <a href="https://twitter.com/angularjs_de" 
               class="flex flex-col items-center p-4 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all hover:scale-105 group">
              <svg class="w-8 h-8 mb-2 text-blue-400 group-hover:text-blue-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
              <span class="text-sm text-angular-gray group-hover:text-white">Twitter</span>
            </a>

            <!-- GitHub -->
            <a href="https://github.com/angularjs-de" 
               class="flex flex-col items-center p-4 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all hover:scale-105 group">
              <svg class="w-8 h-8 mb-2 text-gray-400 group-hover:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span class="text-sm text-angular-gray group-hover:text-white">GitHub</span>
            </a>

            <!-- Newsletter -->
            <a href="#newsletter" 
               class="flex flex-col items-center p-4 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all hover:scale-105 group">
              <svg class="w-8 h-8 mb-2 text-green-400 group-hover:text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <span class="text-sm text-angular-gray group-hover:text-white">Newsletter</span>
            </a>

            <!-- Meetups -->
            <a href="https://www.meetup.com/topics/angular/" 
               class="flex flex-col items-center p-4 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all hover:scale-105 group">
              <svg class="w-8 h-8 mb-2 text-red-400 group-hover:text-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
              </svg>
              <span class="text-sm text-angular-gray group-hover:text-white">Meetups</span>
            </a>

            <!-- YouTube -->
            <a href="https://www.youtube.com/@angularjs_de" 
               class="flex flex-col items-center p-4 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all hover:scale-105 group">
              <svg class="w-8 h-8 mb-2 text-red-500 group-hover:text-red-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <span class="text-sm text-angular-gray group-hover:text-white">YouTube</span>
            </a>

            <!-- NG-DE Konferenz -->
            <a href="https://ng-de.org" 
               class="flex flex-col items-center p-4 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all hover:scale-105 group">
              <svg class="w-8 h-8 mb-2 text-angular-red group-hover:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
              <span class="text-sm text-angular-gray group-hover:text-white">NG-DE</span>
            </a>
          </div>
        </div>

        <!-- Partner Communities -->
        <div class="border-t border-gray-700 mt-8 pt-8">
          <h3 class="font-semibold mb-4 text-center">Partner Communities</h3>
          <div class="flex flex-wrap justify-center gap-4">
            <a href="https://reactjs.de" class="text-angular-gray hover:text-white text-sm transition-colors">ReactJS.DE</a>
            <span class="text-gray-600">•</span>
            <a href="https://vuejs.de" class="text-angular-gray hover:text-white text-sm transition-colors">VueJS.DE</a>
            <span class="text-gray-600">•</span>
            <a href="https://cloudnative.eu" class="text-angular-gray hover:text-white text-sm transition-colors">CloudNative.EU</a>
            <span class="text-gray-600">•</span>
            <a href="https://workshops.de" class="text-angular-gray hover:text-white text-sm transition-colors">Workshops.DE</a>
            <span class="text-gray-600">•</span>
            <a href="https://codingbootcamp.eu" class="text-angular-gray hover:text-white text-sm transition-colors">Coding Bootcamp Europe</a>
          </div>
        </div>

        <div class="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p class="text-angular-gray text-sm">
            © {{ currentYear }} Angular.de Community. Made with ❤️ for Angular developers.
          </p>
          <div class="flex space-x-6 mt-4 md:mt-0">
            <a href="/impressum" class="text-angular-gray hover:text-white text-sm transition-colors">Impressum</a>
            <a href="/datenschutz" class="text-angular-gray hover:text-white text-sm transition-colors">Datenschutz</a>
            <a href="/rss.xml" class="text-angular-gray hover:text-white text-sm transition-colors">RSS-Feed</a>
          </div>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}