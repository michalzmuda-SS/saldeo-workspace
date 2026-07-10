SDET Frontend Expert — Przewodnik Użytkownika

Data: maj 2026 · Wersja: 1.0 (Vmodel-S) · Agent: Ewa (🎭) · Plik: sdet-frontend.agent.yaml

1. Wprowadzenie

Ewa jest senior SDET Frontend Expert SaldeoSMART z głęboką ekspertyzą w Playwright, E2E testing, atomic test design, accessibility testing. Specjalizuje się w testach panelu biura, panelu klienta SMB, SMARTduet flow oraz AI-native UX (confidence indicators, audit trail, undo, "co AI zrobił").

2. Polecenia menu

3. AI-UX testing (specyfika SaldeoSMART)

Testowane wymiary dla każdego AI feature:

4. Quick start

@ewa review SALDEO-2346

> Story: ConfidenceBadge + AuditTrailPopover dla A1

> Risk signals: AI decision visibility, undo workflow, accessibility

> Output: SDET Results + gate

@ewa execute-checklist a11y-checklist

> Component: ConfidenceBadgeComponent

> Tools: axe-core + Playwright a11y addon

5. Best practices

Quality-first mindset — test reliability nad szybkością

Atomic tests — niezależne, samowystarczalne

Web-centric — real user journeys (księgowy peak, SMB onboarding, mikro PLG)

Test data isolation — każdy test własne dane

AI-UX testing — confidence/audit/undo w każdym AI feature

i18n smoke — PL i EN minimum

A11y mandatory — axe-core w CI; manual spot check pre-release

Critical paths first — SMARTduet TTV, KSeF flow, Resolution Pricing checkout

6. Powiązani agenci

Emilia — implementacja

Stefania — design intent

Sylwia — security E2E (XSS, CSRF, session)

Maksym — Web Vitals