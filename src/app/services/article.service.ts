import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, forkJoin, from } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { MarkdownService, MarkdownArticle } from './markdown.service';

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  readTime: number;
  tags: string[];
  headerImage?: string;
  articlePath?: string; // Path to article folder
}

export interface ArticleFolder {
  name: string;
  path: string;
  markdownFile: string;
}

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private articles: Article[] = [];
  private markdownArticles: MarkdownArticle[] = [];
  private articlesLoaded = false;

  // Standalone markdown files (fallback for simple articles)
  private standaloneMarkdownFiles = [
    '2025-01-angular-20-neue-features.md',
    '2025-01-reactive-forms-advanced.md',
    '2025-01-testing-angular-applications.md'
  ];

  private categories = [
    'Alle',
    'Angular Grundlagen',
    'AngularJS',
    'Angular Updates',
    'Components',
    'Services', 
    'Routing',
    'Forms',
    'HTTP',
    'Testing',
    'Performance',
    'Ionic',
    'Community',
    'Interviews',
    'Tutorials',
    'Tools & Development'
  ];

  constructor(
    private http: HttpClient,
    private markdownService: MarkdownService
  ) {
    this.loadAllArticles();
  }

  /**
   * Load both folder-based and standalone articles
   */
  private loadAllArticles(): void {
    if (this.articlesLoaded) return;

    // First, try to load the articles index to get folder information
    this.loadArticleFolders().subscribe({
      next: (folders) => {
        if (folders.length > 0) {
          this.loadFolderBasedArticles(folders);
        } else {
          // Fallback to standalone files
          this.loadStandaloneArticles();
        }
      },
      error: () => {
        // Fallback to standalone files if folder loading fails
        this.loadStandaloneArticles();
      }
    });
  }

  /**
   * Discover article folders by trying to load a known article structure
   */
  private loadArticleFolders(): Observable<ArticleFolder[]> {
    // All available article folders from the assets/articles directory
    const knownFolders = [
      '2025-06-09-angular-20-die-zukunft-ist-da',
      '2025-06-11-ng-de-conference-2025-ankuendigung',
      '2025-06-09-angular-tutorial-deutsch',
      '2024-08-26-webdave-im-gespraech-mit-mark-thompson',
      '2024-06-18-open-community',
      '2024-06-18-open-community-marvin-heilemann',
      '2024-06-11-angular-18-die-renaissance-geht-weiter',
      '2024-05-02-angular-signal-inputs',
      '2024-04-09-bonn-ruft-ngde-and-vuejsde-2024-suchen-speaker-call-for-paper-endet-morgen',
      '2024-03-15-webdave-im-gespraech-mit-juri-strumpflohner',
      '2024-02-11-angular-hydration-kurz-erklaert',
      '2024-02-26-einfuehrung-in-den-ngrx-signal-store',
      '2024-01-19-angular-17-eine-renaissance',
      '2023-12-10-angular-kurz-erklaert-signals',
      '2023-11-27-angular-17',
      '2023-08-23-developer-ergonomics-hier-kommen-angular-signals',
      '2023-03-09-angular-konferenz-2022',
      '2022-11-16-angular-15-features',
      '2020-09-21-david-muellerchen-my-way-into-tech',
      '2020-08-24-stackblitz',
      '2020-08-10-angular-environments',
      '2020-08-03-angular-10',
      '2020-07-27-oauth-odic-plugin',
      '2020-06-22-sidion-workshop-experience',
      '2020-07-13-ladeanzeigen-in-angular',
      '2020-05-07-vscode-extension-nx-workspace',
      '2020-04-15-remote-schulungen-5-halbe-tage',
      '2020-03-30-angular-cypress-typescript-e2e-testing',
      '2019-07-15-nestjs-tutorial',
      '2019-06-20-angular-8-ivy-bazel-update',
      '2018-08-09-spring-to-typescript-definitions',
      '2018-05-01-angular-komplexitaet-messen',
      '2017-09-19-angular-electron',
      '2017-08-04-angular-testing',
      '2017-07-27-angular-styling',
      '2017-07-24-angular-redux-einfuehrung',
      '2017-03-19-angular-deployment-docker',
      '2017-03-26-was-ist-angular',
      '2017-01-12-angular-e2e-protractor-test-saucelabs',
      '2016-10-04-ngupgrade-migration-angularjs-angular',
      '2016-09-27-angular-cli-einfuehrung',
      '2016-09-01-angular-bootstrap-scss-angular-cli',
      '2016-06-03-ionic2-tutorial-deutsch',
      '2016-08-29-migration-angularjs-angular2',
      '2016-05-27-angular2-observables',
      '2016-05-18-ionic2-advanced-tutorial-deutsch',
      '2016-05-15-ionic2-content-tutorial-deutsch',
      '2016-05-17-angular2-output-events',
      '2016-04-25-angular-2-component-lifecycle',
      '2016-03-12-ionic-tutorial-deutsch',
      '2016-02-25-ionic-tutorial-deutsch-ionicons',
      '2016-02-18-angular-routing-tutorial-deutsch',
      '2016-01-28-angularjs-und-typescript',
      '2016-01-27-ionic-tutorial-deutsch-configuration',
      '2016-01-25-ionic-tutorial-deutsch-modals',
      '2016-01-25-ionic-tutorial-deutsch-scss',
      '2016-01-23-ionic-tutorial-deutsch-popups',
      '2015-12-13-ionic-framework-new-slider',
      '2015-12-11-ngquill-wysiwyg-editor-angularjs',
      '2015-12-13-angularjs-component-helper',
      '2015-08-25-angularjs-compile-interpolate-parse',
      '2015-08-13-angular-watcher-chrome-extension',
      '2015-08-20-angularjs-es6-browserify-babel-module-laden',
      '2015-02-02-mark-highlight-search-results',
      '2015-01-07-form-handling-via-ng-fab-form',
      '2015-01-05-controller-as-syntax',
      '2014-12-03-angularjs-access-scope-via-console',
      '2014-12-12-service-factory-provider',
      '2014-11-27-ng-model-options',
      '2014-11-11-ng-show-vs-ng-if',
      '2014-11-17-navigation-menu-bootstrap',
      '2014-11-03-angularjs-access-services-via-console',
      '2014-07-07-angularjs-baconjs',
      '2014-10-27-angularjs-one-time-binding',
      '2014-06-10-angularjs-spring-web-mvc',
      '2014-05-13-ng-show-verhalten',
      '2014-06-02-angularjs-browserify',
      '2014-03-26-was-ist-angularjs',
      '2014-04-09-test-directive-templateurl',
      '2014-03-23-angularjs-tutorial-deutsch',
      '2014-03-25-expression-filter',
      '2014-03-11-deregister-event-listener-watcher',
      '2014-03-12-service-decorator-erstellen',
      '2014-03-03-ng-repeat-duplicates-in-repeater-are-not-allowed',
      '2014-02-27-http-request-loading-box',
      '2014-02-28-angularjs-directives-d3-nvd3',
      '2014-02-22-angularjs-limit-filter-last-element',
      '2014-02-24-angularjs-animationen-ng-animate',
      '2014-02-17-angularjs-web-worker',
      '2014-02-21-angularjs-svg-clock',
      '2013-08-09-richtig-debuggen',
      '2013-07-23-angularjs-login-sicherheit',
      '2013-06-05-angularjs-ng-repeat',
      '2013-06-13-angularjs-i18n-ng-translate',
      '2013-05-02-angularjs-d3-wordcloud',
      '2013-05-30-angularjs-test'
    ];

    const folderChecks = knownFolders.map(folderName => 
      this.http.get(`/assets/articles/${folderName}/${folderName}.md`, { responseType: 'text' }).pipe(
        map(() => ({
          name: folderName,
          path: `/assets/articles/${folderName}/`,
          markdownFile: `${folderName}.md`
        })),
        catchError(() => of(null))
      )
    );

    return forkJoin(folderChecks).pipe(
      map(results => results.filter(folder => folder !== null) as ArticleFolder[])
    );
  }

  /**
   * Load articles from folders
   */
  private loadFolderBasedArticles(folders: ArticleFolder[]): void {
    const requests = folders.map(folder => 
      this.http.get(`${folder.path}${folder.markdownFile}`, { responseType: 'text' }).pipe(
        map(content => {
          const slug = folder.name;
          const markdownArticle = this.markdownService.parseMarkdown(content, slug, folder.path);
          return markdownArticle;
        }),
        catchError(error => {
          console.error(`Error loading article from folder ${folder.name}:`, error);
          return of(null);
        })
      )
    );

    forkJoin(requests).subscribe(results => {
      this.markdownArticles = results.filter(article => article !== null) as MarkdownArticle[];
      this.articles = this.markdownArticles.map(article => 
        this.markdownService.convertToArticle(article)
      );
      this.articlesLoaded = true;
    });
  }

  /**
   * Fallback: Load standalone markdown files
   */
  private loadStandaloneArticles(): void {
    const requests = this.standaloneMarkdownFiles.map(filename => 
      this.http.get(`/assets/articles/${filename}`, { responseType: 'text' }).pipe(
        map(content => {
          const slug = filename.replace('.md', '');
          return this.markdownService.parseMarkdown(content, slug);
        }),
        catchError(error => {
          console.error(`Error loading article ${filename}:`, error);
          return of(null);
        })
      )
    );

    forkJoin(requests).subscribe(results => {
      this.markdownArticles = results.filter(article => article !== null) as MarkdownArticle[];
      this.articles = this.markdownArticles.map(article => 
        this.markdownService.convertToArticle(article)
      );
      this.articlesLoaded = true;
    });
  }

  /**
   * Get all articles as Observable
   */
  getAllArticles(): Observable<Article[]> {
    if (this.articlesLoaded) {
      return of(this.articles);
    }
    
    return new Observable(observer => {
      const checkLoaded = () => {
        if (this.articlesLoaded) {
          observer.next(this.articles);
          observer.complete();
        } else {
          setTimeout(checkLoaded, 100);
        }
      };
      checkLoaded();
    });
  }

  /**
   * Get articles by category as Observable
   */
  getArticlesByCategory(category: string): Observable<Article[]> {
    return this.getAllArticles().pipe(
      map(articles => {
        if (category === 'Alle') {
          return articles;
        }
        return articles.filter(article => article.category === category);
      })
    );
  }

  /**
   * Get article by slug
   */
  getArticleBySlug(slug: string): Observable<Article | undefined> {
    return this.getAllArticles().pipe(
      map(articles => articles.find(article => article.slug === slug))
    );
  }

  /**
   * Get markdown article with HTML content by slug
   */
  getMarkdownArticleBySlug(slug: string): Observable<MarkdownArticle | undefined> {
    return new Observable(observer => {
      const checkLoaded = () => {
        if (this.articlesLoaded) {
          const article = this.markdownArticles.find(article => article.slug === slug);
          observer.next(article);
          observer.complete();
        } else {
          setTimeout(checkLoaded, 100);
        }
      };
      checkLoaded();
    });
  }

  /**
   * Get categories
   */
  getCategories(): string[] {
    return this.categories;
  }

  /**
   * Get articles count by category
   */
  getArticleCountByCategory(): Observable<{ [category: string]: number }> {
    return this.getAllArticles().pipe(
      map(articles => {
        const counts: { [category: string]: number } = {};
        
        this.categories.forEach(category => {
          if (category === 'Alle') {
            counts[category] = articles.length;
          } else {
            counts[category] = articles.filter(article => article.category === category).length;
          }
        });
        
        return counts;
      })
    );
  }
} 