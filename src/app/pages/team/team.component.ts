import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  expertise: string[];
  social?: {
    twitter?: string;
    github?: string;
    linkedin?: string;
    website?: string;
  };
  isGDE?: boolean;
}

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="team-container">
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="hero-content">
          <h1 class="hero-title">
            <span class="gradient-text">Das Team</span> von Angular.DE
          </h1>
          <p class="hero-subtitle">
            Leidenschaftliche Expert:innen, die ihr Wissen teilen
          </p>
        </div>
        <div class="hero-pattern"></div>
      </section>

      <!-- About Section -->
      <section class="about-section">
        <div class="content-wrapper">
          <div class="about-grid">
            <div class="about-text">
              <h2>Wer sind wir?</h2>
              <p>
                Wir sind eine lebendige deutsche Trainer:innen-Community mit über 10 Jahren Erfahrung 
                in der Vermittlung von Web-Technologien. Unser Team besteht aus Google Developer Experts, 
                Buchautor:innen, internationalen Speaker:innen und leidenschaftlichen Entwickler:innen.
              </p>
              <p>
                Durch kontinuierlichen Austausch und gemeinsame Weiterentwicklung unserer Materialien 
                bieten wir erstklassige Workshops zu Angular, React und verwandten Technologien an.
              </p>
            </div>
            <div class="stats-grid">
              <div class="stat-card">
                <div class="stat-number">10+</div>
                <div class="stat-label">Jahre Erfahrung</div>
              </div>
              <div class="stat-card">
                <div class="stat-number">5000+</div>
                <div class="stat-label">Teilnehmer:innen</div>
              </div>
              <div class="stat-card">
                <div class="stat-number">100+</div>
                <div class="stat-label">Workshops</div>
              </div>
              <div class="stat-card">
                <div class="stat-number">2</div>
                <div class="stat-label">Google Developer Experts</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Team Members Section -->
      <section class="team-section">
        <div class="content-wrapper">
          <h2 class="section-title">Unser Team</h2>
          <div class="team-grid">
            <article class="team-member" *ngFor="let member of teamMembers">
              <div class="member-card">
                <div class="member-image-wrapper">
                  <img [src]="member.image" [alt]="member.name" class="member-image">
                  <span class="gde-badge" *ngIf="member.isGDE">
                    <img src="/assets/gde-badge.svg" alt="Google Developer Expert">
                  </span>
                </div>
                <div class="member-content">
                  <h3 class="member-name">{{ member.name }}</h3>
                  <p class="member-role">{{ member.role }}</p>
                  <p class="member-bio">{{ member.bio }}</p>
                  <div class="expertise-tags">
                    <span class="tag" *ngFor="let skill of member.expertise">{{ skill }}</span>
                  </div>
                  <div class="social-links" *ngIf="member.social">
                    <a *ngIf="member.social.twitter" 
                       [href]="'https://twitter.com/' + member.social.twitter" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       class="social-link"
                       aria-label="Twitter">
                      <svg class="social-icon" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </a>
                    <a *ngIf="member.social.github" 
                       [href]="'https://github.com/' + member.social.github" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       class="social-link"
                       aria-label="GitHub">
                      <svg class="social-icon" viewBox="0 0 24 24">
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                      </svg>
                    </a>
                    <a *ngIf="member.social.linkedin" 
                       [href]="'https://linkedin.com/in/' + member.social.linkedin" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       class="social-link"
                       aria-label="LinkedIn">
                      <svg class="social-icon" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <a *ngIf="member.social.website" 
                       [href]="member.social.website" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       class="social-link"
                       aria-label="Website">
                      <svg class="social-icon" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <!-- Values Section -->
      <section class="values-section">
        <div class="content-wrapper">
          <h2 class="section-title">Unsere Werte</h2>
          <div class="values-grid">
            <div class="value-card">
              <div class="value-icon">
                <svg viewBox="0 0 24 24" class="icon">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3>Exzellenz</h3>
              <p>Wir streben nach höchster Qualität in allen unseren Schulungen und Materialien.</p>
            </div>
            <div class="value-card">
              <div class="value-icon">
                <svg viewBox="0 0 24 24" class="icon">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3>Praxisnähe</h3>
              <p>Unsere Workshops basieren auf realen Projekterfahrungen und Best Practices.</p>
            </div>
            <div class="value-card">
              <div class="value-icon">
                <svg viewBox="0 0 24 24" class="icon">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                </svg>
              </div>
              <h3>Community</h3>
              <p>Wir fördern den Austausch und das gemeinsame Lernen in unserer Community.</p>
            </div>
            <div class="value-card">
              <div class="value-icon">
                <svg viewBox="0 0 24 24" class="icon">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                </svg>
              </div>
              <h3>Innovation</h3>
              <p>Wir bleiben stets auf dem neuesten Stand der Technologie und Methodik.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="cta-section">
        <div class="content-wrapper">
          <div class="cta-content">
            <h2>Bereit für den nächsten Schritt?</h2>
            <p>Entdecke unsere Workshops und bring deine Angular-Skills auf das nächste Level!</p>
            <div class="cta-buttons">
              <a href="/schulungen" class="btn btn-primary">Zu den Schulungen</a>
              <a href="/kontakt" class="btn btn-secondary">Kontakt aufnehmen</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }

    .team-container {
      min-height: 100vh;
    }

    /* Hero Section */
    .hero-section {
      position: relative;
      padding: 120px 0 80px;
      background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
      overflow: hidden;
    }

    .hero-content {
      position: relative;
      z-index: 2;
      text-align: center;
      max-width: 800px;
      margin: 0 auto;
      padding: 0 20px;
    }

    .hero-title {
      font-size: clamp(2.5rem, 5vw, 4rem);
      font-weight: 800;
      margin-bottom: 20px;
      color: #1a1a1a;
    }

    .gradient-text {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .hero-subtitle {
      font-size: clamp(1.2rem, 2vw, 1.5rem);
      color: #666;
      font-weight: 300;
    }

    .hero-pattern {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: 
        radial-gradient(circle at 20% 80%, rgba(102, 126, 234, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(118, 75, 162, 0.1) 0%, transparent 50%);
    }

    /* Content Wrapper */
    .content-wrapper {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }

    /* About Section */
    .about-section {
      padding: 80px 0;
      background: #fff;
    }

    .about-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 60px;
      align-items: center;
    }

    .about-text h2 {
      font-size: 2.5rem;
      margin-bottom: 20px;
      color: #1a1a1a;
    }

    .about-text p {
      font-size: 1.1rem;
      line-height: 1.8;
      color: #666;
      margin-bottom: 20px;
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }

    .stat-card {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 30px;
      border-radius: 16px;
      text-align: center;
      color: white;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;
    }

    .stat-card:hover {
      transform: translateY(-5px);
    }

    .stat-number {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 5px;
    }

    .stat-label {
      font-size: 0.9rem;
      opacity: 0.9;
    }

    /* Team Section */
    .team-section {
      padding: 80px 0;
      background: #f8f9fa;
    }

    .section-title {
      font-size: 2.5rem;
      text-align: center;
      margin-bottom: 60px;
      color: #1a1a1a;
    }

    .team-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 40px;
    }

    .member-card {
      background: white;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .member-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    }

    .member-image-wrapper {
      position: relative;
      height: 300px;
      overflow: hidden;
    }

    .member-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    .member-card:hover .member-image {
      transform: scale(1.05);
    }

    .gde-badge {
      position: absolute;
      top: 20px;
      right: 20px;
      width: 50px;
      height: 50px;
      background: white;
      border-radius: 50%;
      padding: 5px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    }

    .gde-badge img {
      width: 100%;
      height: 100%;
    }

    .member-content {
      padding: 30px;
    }

    .member-name {
      font-size: 1.5rem;
      font-weight: 700;
      color: #1a1a1a;
      margin-bottom: 5px;
    }

    .member-role {
      font-size: 1.1rem;
      color: #667eea;
      margin-bottom: 15px;
    }

    .member-bio {
      font-size: 1rem;
      line-height: 1.6;
      color: #666;
      margin-bottom: 20px;
    }

    .expertise-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-bottom: 20px;
    }

    .tag {
      background: #f0f0f0;
      padding: 5px 12px;
      border-radius: 20px;
      font-size: 0.85rem;
      color: #666;
    }

    .social-links {
      display: flex;
      gap: 15px;
    }

    .social-link {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: #f0f0f0;
      transition: all 0.3s ease;
    }

    .social-link:hover {
      background: #667eea;
      transform: translateY(-3px);
    }

    .social-icon {
      width: 20px;
      height: 20px;
      fill: #666;
      transition: fill 0.3s ease;
    }

    .social-link:hover .social-icon {
      fill: white;
    }

    /* Values Section */
    .values-section {
      padding: 80px 0;
      background: white;
    }

    .values-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 40px;
    }

    .value-card {
      text-align: center;
      padding: 40px 30px;
      border-radius: 16px;
      background: #f8f9fa;
      transition: transform 0.3s ease;
    }

    .value-card:hover {
      transform: translateY(-5px);
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
    }

    .value-icon {
      width: 80px;
      height: 80px;
      margin: 0 auto 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: white;
      border-radius: 50%;
      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
    }

    .value-icon .icon {
      width: 40px;
      height: 40px;
      fill: #667eea;
    }

    .value-card:hover .value-icon {
      background: rgba(255, 255, 255, 0.2);
    }

    .value-card:hover .value-icon .icon {
      fill: white;
    }

    .value-card h3 {
      font-size: 1.3rem;
      margin-bottom: 15px;
      color: #1a1a1a;
    }

    .value-card:hover h3 {
      color: white;
    }

    .value-card p {
      font-size: 1rem;
      line-height: 1.6;
      color: #666;
    }

    .value-card:hover p {
      color: rgba(255, 255, 255, 0.9);
    }

    /* CTA Section */
    .cta-section {
      padding: 100px 0;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      text-align: center;
    }

    .cta-content h2 {
      font-size: 2.5rem;
      margin-bottom: 20px;
    }

    .cta-content p {
      font-size: 1.2rem;
      margin-bottom: 40px;
      opacity: 0.9;
    }

    .cta-buttons {
      display: flex;
      gap: 20px;
      justify-content: center;
      flex-wrap: wrap;
    }

    .btn {
      display: inline-block;
      padding: 15px 40px;
      border-radius: 50px;
      text-decoration: none;
      font-weight: 600;
      transition: all 0.3s ease;
    }

    .btn-primary {
      background: white;
      color: #667eea;
    }

    .btn-primary:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    }

    .btn-secondary {
      background: transparent;
      color: white;
      border: 2px solid white;
    }

    .btn-secondary:hover {
      background: white;
      color: #667eea;
    }

    /* Responsive */
    @media (max-width: 768px) {
      .about-grid {
        grid-template-columns: 1fr;
        gap: 40px;
      }

      .stats-grid {
        grid-template-columns: 1fr;
      }

      .team-grid {
        grid-template-columns: 1fr;
      }

      .values-grid {
        grid-template-columns: 1fr;
        gap: 20px;
      }

      .hero-section {
        padding: 80px 0 60px;
      }

      .section-title {
        font-size: 2rem;
      }
    }
  `]
})
export class TeamComponent {
  teamMembers: TeamMember[] = [
    {
      name: 'Robin Böhm',
      role: 'Gründer & Lead Trainer',
      image: '/assets/team/robin-boehm.jpg',
      bio: 'Entwickler, Trainer und Buchautor mit über 15 Jahren Erfahrung in der Webentwicklung. Spezialisiert auf Angular und moderne Web-Architekturen.',
      expertise: ['Angular', 'TypeScript', 'Software Architecture', 'Team Leadership'],
      social: {
        twitter: 'robinboehm',
        github: 'robinboehm',
        linkedin: 'robinboehm',
        website: 'https://robinboehm.de'
      }
    },
    {
      name: 'Gregor Woiwode',
      role: 'Google Developer Expert',
      image: '/assets/team/gregor-woiwode.jpg',
      bio: 'Software Engineer, internationaler Speaker und Blogger. Teilt seine Expertise in Angular und RxJS auf Konferenzen weltweit.',
      expertise: ['Angular', 'RxJS', 'State Management', 'Testing'],
      social: {
        twitter: 'GregOnNet',
        github: 'GregOnNet',
        linkedin: 'gregorwoiwode'
      },
      isGDE: true
    },
    {
      name: 'Martina Kraus',
      role: 'Google Developer Expert',
      image: '/assets/team/martina-kraus.jpg',
      bio: 'Speakerin, Trainerin und NG-Girls Organisatorin. Setzt sich für Diversität in der Tech-Community ein.',
      expertise: ['Angular', 'Web Components', 'Accessibility', 'Community Building'],
      social: {
        twitter: 'MartinaKraus11',
        github: 'martinakraus',
        linkedin: 'martinakraus'
      },
      isGDE: true
    },
    {
      name: 'Britta Lenzen',
      role: 'Head of Training Operations',
      image: '/assets/team/britta-lenzen.jpg',
      bio: 'Verantwortlich für die Organisation und Koordination aller Schulungen. Sorgt für reibungslose Abläufe und zufriedene Teilnehmer:innen.',
      expertise: ['Projektmanagement', 'Kundenbetreuung', 'Event-Organisation'],
      social: {
        linkedin: 'brittalenzen'
      }
    },
    {
      name: 'Sascha Nuissl',
      role: 'Senior Developer & Designer',
      image: '/assets/team/sascha-nuissl.jpg',
      bio: 'Remote-Entwickler und Designer mit Fokus auf moderne UI/UX und Performance-Optimierung.',
      expertise: ['Angular', 'UI/UX Design', 'Performance', 'PWA'],
      social: {
        github: 'saschanuissl',
        twitter: 'saschanuissl'
      }
    }
  ];

  constructor(
    private title: Title,
    private meta: Meta
  ) {
    this.title.setTitle('Team - Angular.DE');
    this.meta.updateTag({ name: 'description', content: 'Lerne das Team von Angular.DE kennen - Expert:innen, Trainer:innen und Google Developer Experts mit Leidenschaft für Angular' });
    this.meta.updateTag({ property: 'og:title', content: 'Das Team von Angular.DE' });
    this.meta.updateTag({ property: 'og:description', content: 'Lerne unser Team aus Expert:innen und Trainer:innen kennen' });
  }
}