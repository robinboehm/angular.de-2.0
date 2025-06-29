---
title: "Testing Angular Applications: Complete Guide"
description: "Umfassender Guide zum Testen von Angular-Anwendungen. Unit Tests, Integration Tests und E2E Tests."
author: "Stefan Koch"
published_at: "2025-01-05"
categories: ["testing", "quality"]
tags: ["Testing", "Jasmine", "Karma", "Cypress"]
---

# Testing Angular Applications: Complete Guide

Testing ist ein entscheidender Aspekt der Angular-Entwicklung. Dieser umfassende Guide zeigt Ihnen, wie Sie Ihre Angular-Anwendungen effektiv testen.

## Unit Testing mit Jasmine und Karma

Angular verwendet Jasmine als Testing-Framework und Karma als Test-Runner:

```typescript
describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });
    
    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should fetch users', () => {
    const mockUsers = [{ id: 1, name: 'John' }];
    
    service.getUsers().subscribe(users => {
      expect(users).toEqual(mockUsers);
    });

    const req = httpMock.expectOne('/api/users');
    expect(req.request.method).toBe('GET');
    req.flush(mockUsers);
  });
});
```

## Component Testing

Komponenten-Tests prüfen sowohl Logik als auch Template:

```typescript
describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserComponent],
      imports: [CommonModule]
    });

    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
  });

  it('should display user name', () => {
    component.user = { id: 1, name: 'John Doe' };
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('John Doe');
  });

  it('should emit user selected event', () => {
    spyOn(component.userSelected, 'emit');
    
    component.selectUser({ id: 1, name: 'John' });
    
    expect(component.userSelected.emit).toHaveBeenCalledWith({ id: 1, name: 'John' });
  });
});
```

## Integration Testing

Integration Tests prüfen das Zusammenspiel mehrerer Komponenten:

```typescript
describe('UserListIntegration', () => {
  let fixture: ComponentFixture<UserListComponent>;
  let userService: jasmine.SpyObj<UserService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('UserService', ['getUsers']);

    TestBed.configureTestingModule({
      declarations: [UserListComponent, UserCardComponent],
      providers: [{ provide: UserService, useValue: spy }]
    });

    fixture = TestBed.createComponent(UserListComponent);
    userService = TestBed.inject(UserService) as jasmine.SpyObj<UserService>;
  });

  it('should display user cards', fakeAsync(() => {
    const mockUsers = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' }
    ];
    
    userService.getUsers.and.returnValue(of(mockUsers));
    
    fixture.detectChanges();
    tick();
    fixture.detectChanges();

    const userCards = fixture.debugElement.queryAll(By.directive(UserCardComponent));
    expect(userCards.length).toBe(2);
  }));
});
```

## E2E Testing mit Cypress

End-to-End Tests mit Cypress:

```javascript
describe('User Management', () => {
  beforeEach(() => {
    cy.visit('/users');
  });

  it('should display user list', () => {
    cy.get('[data-cy=user-list]').should('exist');
    cy.get('[data-cy=user-card]').should('have.length.greaterThan', 0);
  });

  it('should add new user', () => {
    cy.get('[data-cy=add-user-btn]').click();
    cy.get('[data-cy=user-name-input]').type('New User');
    cy.get('[data-cy=save-btn]').click();
    
    cy.get('[data-cy=user-list]').should('contain', 'New User');
  });
});
```

## Testing Best Practices

### 1. AAA Pattern
```typescript
it('should calculate total price', () => {
  // Arrange
  const items = [{ price: 10 }, { price: 20 }];
  
  // Act
  const total = service.calculateTotal(items);
  
  // Assert
  expect(total).toBe(30);
});
```

### 2. Mocking Dependencies
```typescript
const mockUserService = {
  getUser: jasmine.createSpy('getUser').and.returnValue(of({ id: 1, name: 'Test' }))
};
```

### 3. Data Attributes für E2E
```html
<button data-cy="submit-btn" (click)="submit()">Submit</button>
```

## Code Coverage

Überwachen Sie Ihre Code Coverage:

```bash
ng test --code-coverage
```

Dies generiert einen Coverage-Report in `coverage/` Ordner.

## Fazit

Effektives Testing ist essentiell für wartbare Angular-Anwendungen. Kombinieren Sie Unit Tests, Integration Tests und E2E Tests für umfassende Abdeckung.

**Tipps:**
- Schreiben Sie Tests parallel zur Entwicklung
- Verwenden Sie aussagekräftige Test-Namen
- Halten Sie Tests einfach und fokussiert
- Mocken Sie externe Dependencies 