Angular Web Developer — Przewodnik Użytkownika

Data: maj 2026 · Wersja: 1.0 (Vmodel-S) · Agent: Emilia (🌐) · Plik: web-dev.agent.yaml

1. Wprowadzenie

Emilia implementuje web stories SaldeoSMART z użyciem Angular 21+, Node.js 22, Bootstrap 5, Playwright E2E. Specjalizuje się w panelu biura rachunkowego, panelu klienta SMB, SMARTduet flow, AI-native UX ("Uzupełnij z AI", suggestion bar, confidence indicator, audit trail, undo) i embedded finance wizards.

2. Stack

Angular 21+ (standalone components, signals, control flow)

TypeScript strict mode

Node.js 22

Bootstrap 5 utilities

RxJS (preferowanie signals dla state, RxJS dla streams/HTTP)

ESLint + Prettier

Playwright (E2E)

Karma/Jasmine lub Vitest (unit)

i18n: PL primary, EN business, CZ/RO/SK preview

3. Polecenia menu

4. SaldeoSMART AI-native UX implementation

// AIDEV: created 2026-05-07

// AIDEV: agent: A1 Document Intelligence (UI)

// AIDEV: confidence-gates: ConfidenceBadgeComponent

@Component({

  standalone: true,

  selector: 'sld-confidence-badge',

  imports: [NgClass],

  template: `

    <span [ngClass]="badgeClass()" role="status" [attr.aria-label]="ariaLabel()">

      {{ icon() }} {{ label() }} · {{ confidencePercent() }}%

    </span>

  `,

})

export class ConfidenceBadgeComponent {

  readonly confidence = input.required<number>();

  readonly state = computed<'auto' | 'suggest' | 'human'>(() => {

    const c = this.confidence();

    if (c >= 0.95) return 'auto';

    if (c >= 0.85) return 'suggest';

    return 'human';

  });

  // ... ngClass / icon / aria-label per state

}

Reguły AI-native UX (egzekwowane przez Stefanię i Ewę)

✅ Confidence badge widoczny dla każdej decyzji AI ≥85%

✅ Audit trail expose za 1 click (component <sld-audit-trail-popover>)

✅ Undo first-class (max 2 click do cofnięcia, override event do telemetrii)

✅ Loading states dla długich operacji (OCR, reconciliation)

✅ Edge cases: KSeF rejection, OCR <85%, duplikat — explicit UI states

✅ WCAG 2.1 AA: keyboard nav, screen reader labels, contrast ratio

5. Quick start

@emilia develop-story SALDEO-2346

> Source: Maria's story (A1 Document Intelligence UI)

> Design: Figma od Stefanii

> Tests-first: Playwright failing E2E, then component, then service

@emilia implement-ai-ux ConfidenceBadgeComponent

> States: auto (green) / suggest (yellow) / human (red)

> A11y: aria-label, role=status, contrast AA

> i18n: PL/EN

@emilia e2e-test-gen scenario-A1-classification

> Gherkin: gherkin/A1-classification.feature

> Output: tests/e2e/A1-classification.spec.ts

@emilia upgrade-angular 21

> From: 20.x

> Strategy: ng update + breaking changes review + visual regression

6. Best practices

Standalone components dla nowego kodu

Signals dla state, RxJS dla HTTP/streams

Strict TypeScript — żadnych any

Bootstrap utilities — nie custom CSS gdy istnieje utility

WCAG 2.1 AA w każdym nowym komponencie

i18n by default — żadnych hardcoded stringów

Playwright E2E — każda story ma E2E

AIDEV comments w nowych plikach

Performance — lazy loading, OnPush change detection, signals

AI UX patterns — confidence badge, audit popover, undo button = built-in

7. Powiązani agenci

Maria — story input

Stefania — design + AI-UX patterns

Maciej — backend API contract

Ewa — Playwright tests, accessibility

Sylwia — security review (auth, XSS, CSRF)

Maksym — Web Vitals (LCP, FID, CLS)