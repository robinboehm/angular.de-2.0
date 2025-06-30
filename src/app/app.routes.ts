import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    title: 'Angular.de - Die deutsche Angular Community'
  },
  {
    path: 'artikel',
    loadComponent: () => import('./pages/articles/articles.component').then(m => m.ArticlesComponent),
    title: 'Artikel - Angular.de'
  },
  {
    path: 'artikel/:slug',
    loadComponent: () => import('./pages/article-detail/article-detail.component').then(m => m.ArticleDetailComponent),
    title: 'Artikel - Angular.de'
  },
  {
    path: 'training',
    loadComponent: () => import('./pages/training/training.component').then(m => m.TrainingComponent),
    title: 'Angular Training - Angular.de'
  },
  {
    path: 'community',
    loadComponent: () => import('./pages/community/community.component').then(m => m.CommunityComponent),
    title: 'Community - Angular.de'
  },
  {
    path: 'ressourcen',
    loadComponent: () => import('./pages/resources/resources.component').then(m => m.ResourcesComponent),
    title: 'Ressourcen - Angular.de'
  },
  {
    path: 'team',
    loadComponent: () => import('./pages/team/team.component').then(m => m.TeamComponent),
    title: 'Team - Angular.de'
  },
  {
    path: '**',
    redirectTo: ''
  }
];