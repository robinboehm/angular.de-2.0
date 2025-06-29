# Markdown-Integration für Angular.de

Diese Implementierung ermöglicht es, Artikel als Markdown-Dateien zu verwalten und dynamisch in der Angular-Anwendung anzuzeigen.

## 🚀 Features

- **Markdown-Parser**: Verwendet `marked` für die Konvertierung von Markdown zu HTML
- **Frontmatter-Support**: Extrahiert Metadaten aus YAML-Frontmatter
- **Asynchrones Laden**: Lädt Artikel dynamisch über HTTP
- **Typsichere Services**: Vollständig typisierte TypeScript-Services
- **Responsive Design**: Optimierte Darstellung für alle Geräte

## 📁 Struktur

```
src/
├── app/
│   ├── services/
│   │   ├── article.service.ts      # Hauptservice für Artikel
│   │   └── markdown.service.ts     # Markdown-Parser-Service
│   └── pages/
│       ├── articles/               # Artikel-Übersicht
│       └── article-detail/         # Artikel-Detailansicht
└── assets/
    └── articles/                   # Markdown-Dateien
        ├── 2025-01-angular-20-neue-features.md
        ├── 2025-01-reactive-forms-advanced.md
        └── 2025-01-testing-angular-applications.md
```

## 📝 Markdown-Datei Format

Jede Markdown-Datei muss folgende Struktur haben:

```markdown
---
title: "Artikel-Titel"
description: "Kurze Beschreibung des Artikels"
author: "Autor Name"
published_at: "2025-01-15"
categories: ["kategorie1", "kategorie2"]
tags: ["tag1", "tag2", "tag3"]
---

# Artikel-Titel

Hier beginnt der eigentliche Artikel-Inhalt...

## Unterüberschrift

Weiterer Inhalt...
```

## 🔧 Services

### ArticleService

Der `ArticleService` ist der Hauptservice für die Artikel-Verwaltung:

```typescript
// Alle Artikel laden
getAllArticles(): Observable<Article[]>

// Artikel nach Kategorie filtern
getArticlesByCategory(category: string): Observable<Article[]>

// Einzelnen Artikel laden
getArticleBySlug(slug: string): Observable<Article | undefined>

// Markdown-Artikel mit HTML-Content laden
getMarkdownArticleBySlug(slug: string): Observable<MarkdownArticle | undefined>
```

### MarkdownService

Der `MarkdownService` verarbeitet Markdown-Dateien:

```typescript
// Markdown parsen
parseMarkdown(content: string, slug: string): MarkdownArticle

// Zu Article-Interface konvertieren
convertToArticle(markdownArticle: MarkdownArticle): Article
```

## 🎨 Features

### 1. Automatische Kategoriezuordnung

Das System mappt Kategorien aus den Markdown-Dateien zu den definierten Kategorien:

```typescript
const categoryMap = {
  'tutorial': 'Grundlagen',
  'angular': 'Grundlagen',
  'components': 'Components',
  // ...
};
```

### 2. Lesezeit-Berechnung

Automatische Berechnung der geschätzten Lesezeit basierend auf der Wortanzahl:

```typescript
private calculateReadTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}
```

### 3. Frontmatter-Parsing

Einfacher YAML-Parser für Metadaten:

```typescript
private extractFrontmatter(markdownContent: string): { frontmatter: any; content: string }
```

## 🔄 Datenfluss

1. **Initialisierung**: `ArticleService` lädt alle Markdown-Dateien beim Start
2. **Parsing**: `MarkdownService` konvertiert Markdown zu HTML und extrahiert Metadaten
3. **Caching**: Artikel werden im Service gecacht für bessere Performance
4. **Display**: Components zeigen die verarbeiteten Daten an

## 📱 Components

### ArticlesComponent

- Zeigt Artikel-Übersicht mit Filtern
- Lädt Daten asynchron
- Zeigt Loading-States und Kategorie-Zähler

### ArticleDetailComponent

- Zeigt vollständigen Artikel-Inhalt
- Lädt Markdown-Content dynamisch
- Unterstützt Code-Highlighting und Prose-Styling

## 🎯 Erweiterungsmöglichkeiten

### 1. Neue Artikel hinzufügen

1. Markdown-Datei in `src/assets/articles/` erstellen
2. Dateiname zu `markdownFiles`-Array in `ArticleService` hinzufügen
3. Frontmatter korrekt ausfüllen

### 2. Externe Artikel laden

Der Service kann erweitert werden, um Artikel von externen APIs zu laden:

```typescript
private loadExternalArticles(): Observable<MarkdownArticle[]> {
  return this.http.get<{files: string[]}>('/api/articles')
    .pipe(
      switchMap(response => 
        forkJoin(
          response.files.map(filename => 
            this.http.get(`/api/content/${filename}`, { responseType: 'text' })
          )
        )
      )
    );
}
```

### 3. Syntax-Highlighting

Für bessere Code-Darstellung kann Prism.js integriert werden:

```bash
npm install prismjs @types/prismjs
```

### 4. Volltext-Suche

Integration einer Suche über alle Artikel-Inhalte:

```typescript
searchArticles(query: string): Observable<Article[]> {
  return this.getAllArticles().pipe(
    map(articles => 
      articles.filter(article => 
        article.title.toLowerCase().includes(query.toLowerCase()) ||
        article.content.toLowerCase().includes(query.toLowerCase())
      )
    )
  );
}
```

## 🚀 Performance-Optimierungen

- **Lazy Loading**: Artikel-Content wird nur bei Bedarf geladen
- **Caching**: Verarbeitete Artikel werden im Service gecacht
- **Observable-basiert**: Effiziente asynchrone Datenverarbeitung
- **Tree-Shaking**: Nur verwendete marked-Features werden gebündelt

## 🔧 Konfiguration

### marked-Optionen

```typescript
marked.setOptions({
  gfm: true,          // GitHub Flavored Markdown
  breaks: false,      // Zeilenumbrüche als <br>
  pedantic: false,    // Pedantische Markdown-Parsing
});
```

### Kategorie-Mapping

Anpassung der Kategorie-Zuordnung in `MarkdownService`:

```typescript
private mapCategory(originalCategory: string): string {
  const categoryMap: { [key: string]: string } = {
    // Ihre Zuordnungen hier
  };
  return categoryMap[originalCategory?.toLowerCase()] || 'Grundlagen';
}
```

## 🎉 Fazit

Die Markdown-Integration bietet eine flexible und erweiterbare Basis für die Artikel-Verwaltung. Entwickler können einfach neue Artikel als Markdown-Dateien hinzufügen, und das System verarbeitet sie automatisch für die Anzeige in der Angular-Anwendung.

Das System ist vollständig typisiert, performant und bietet eine gute Developer Experience sowohl für die Artikel-Erstellung als auch für die Weiterentwicklung der Plattform. 