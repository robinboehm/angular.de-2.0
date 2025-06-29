---
title: "Reactive Forms: Advanced Patterns"
description: "Fortgeschrittene Patterns für Reactive Forms in Angular. Custom Validators, Dynamic Forms und Form Arrays."
author: "Lisa Müller"
published_at: "2025-01-08"
categories: ["forms", "advanced"]
tags: ["Forms", "Reactive", "Validation"]
---

# Reactive Forms: Advanced Patterns

Reactive Forms in Angular bieten mächtige Möglichkeiten für komplexe Formulare. In diesem Artikel schauen wir uns fortgeschrittene Patterns und Techniken an.

## Custom Validators

Custom Validators ermöglichen es, spezifische Validierungslogik zu implementieren:

```typescript
export function emailValidator(control: AbstractControl): ValidationErrors | null {
  const email = control.value;
  if (!email) return null;
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) ? null : { invalidEmail: true };
}
```

### Verwendung im FormControl

```typescript
this.userForm = this.fb.group({
  email: ['', [Validators.required, emailValidator]],
  name: ['', Validators.required]
});
```

## Dynamic Forms

Dynamische Formulare passen sich zur Laufzeit an:

```typescript
export class DynamicFormComponent {
  form: FormGroup;
  
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({});
  }
  
  addControl(name: string, value: any = '') {
    this.form.addControl(name, this.fb.control(value, Validators.required));
  }
  
  removeControl(name: string) {
    this.form.removeControl(name);
  }
}
```

## Form Arrays

Form Arrays sind ideal für Listen von Formularelementen:

```typescript
get hobbies() {
  return this.form.get('hobbies') as FormArray;
}

addHobby() {
  const hobbyForm = this.fb.group({
    name: ['', Validators.required],
    level: ['beginner', Validators.required]
  });
  
  this.hobbies.push(hobbyForm);
}

removeHobby(index: number) {
  this.hobbies.removeAt(index);
}
```

## Async Validators

Für serverseitige Validierung:

```typescript
export function uniqueUsernameValidator(userService: UserService): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    if (!control.value) {
      return of(null);
    }
    
    return userService.checkUsername(control.value).pipe(
      map(exists => exists ? { usernameTaken: true } : null),
      catchError(() => of(null))
    );
  };
}
```

## Best Practices

1. **Verwende FormBuilder**: Sauberer und wartbarer Code
2. **Gruppiere verwandte Controls**: FormGroups für bessere Organisation
3. **Implementiere Custom Validators**: Wiederverwendbare Validierungslogik
4. **Nutze StatusChanges**: Reagiere auf Änderungen im Form-Status

## Fazit

Reactive Forms bieten unglaublich flexible Möglichkeiten für komplexe Formulare. Mit den gezeigten Patterns können Sie nahezu jede Anforderung umsetzen. 