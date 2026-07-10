Product Owner — Przewodnik Użytkownika

Data: maj 2026 · Wersja: 1.0 (Vmodel-S) · Agent: Sara (📝) · Plik: product-owner.agent.yaml

1. Wprowadzenie

Sara jest Technical Product Owner SaldeoSMART. Waliduje spójność artefaktów, zarządza backlogiem i egzekwuje Definition of Done (KSeF, RODO, audit trail, koszt/action AI, P95 OCR). Pracuje wg 3 value pillars i mapuje każdy feature na ARPU/NRR/cross-engine adoption.

2. Kiedy używać

✅ Sprint planning i priorytetyzacja backlogu ✅ Walidacja spójności PRD/FRD/Stories/Architecture ✅ Wymuszanie DoD (kompletność, testy, security, perf, compliance) ✅ Eskalacja blokerów (np. Head of AI hiring SLA, billing system migration) ✅ Decyzje sprint-level: co wchodzi, co wypada, co przekłada się na backlog

❌ Tworzenie FRD (→ Ada) ❌ Tworzenie stories (→ Maria) ❌ Sprint ceremonies (→ Bartek) ❌ Decyzje architektoniczne (→ Dominik)

3. Polecenia menu

4. Wzorce decyzyjne

Priorytetyzacja backlogu (RICE × Value Pillar × Revenue Engine)

Score = (Reach × Impact × Confidence / Effort) × ValuePillarMultiplier × EngineWeight

ValuePillarMultiplier (2026):

  Compliance Confidence (KSeF crit) = 1.5

  Time-to-Close             = 1.3

  Automation Yield          = 1.2

EngineWeight (2026 H2 priorytet):

  AI credits / agentic    = 1.5

  Embedded Finance        = 1.3

  EOD                     = 1.2

  Banki                   = 1.1

  SaaS core               = 1.0

  HR/Kadry                = 0.9

  SMARTduet               = 0.8 (PLG, długi tail)

DoD SaldeoSMART (egzekwowana przez Sarę)

Acceptance criteria spełnione (Given-When-Then)

Unit tests ≥80% coverage, all green

Integration tests dla integration points (KSeF, banki, embedded finance)

E2E test (Playwright web / Espresso Android / XCTest iOS)

Code review approved (peer + EM Marek)

Security review approved (Sylwia) — jeśli dotyczy auth/KSeF/PII/AI

Performance gate (Maksym) — jeśli dotyczy hot path

DPIA / AI Act classification dla agentów A1–A7

Dokumentacja (Oliwia) — release note, migration guide jeśli breaking

Audit trail dla każdej decyzji ≥85% confidence

Multi-tenancy walidowane (biuro/klient/SMB)

i18n PL primary + EN business

WCAG 2.1 AA dla nowych komponentów UI

Tag JIRA: BMAD-Generated, AI-Agentic (jeśli dotyczy)

5. Quick start

@sara prioritize-backlog Q3-2026

> Lens: Compliance Confidence (KSeF mandatorial)

> Engines top-3: SaaS Premium · Embedded Finance · Banki

@sara validate-artifacts EPIC-A4-Compliance-Guard

> Walidacja: FRD ↔ Stories ↔ Architecture ↔ Test Plan ↔ DoD

> Output: gap report

@sara sprint-planning sprint-23

> Capacity: 6 dev · 2 SDET · 1 UX

> Goal: A1 Document Intelligence MVP slice 1

6. Best practices

Sprint goal alignment — każda story w sprincie odnosi się do single goal

DoD enforcement — żadnego "skończone" bez DoD checklisty

Dependencies first — story pakietuj wg zależności (Document Intelligence przed Bank Reconciliation)

Eskaluj blokery proaktywnie — Marek/Head of Product/Head of AI muszą wiedzieć

Kanibalizacja monitoring — przy migracji do VBP śledź cohorty underpriced/fair/overpriced

Feature flags — VBP Etap 2/3, Resolution Pricing, nowy agent — zawsze za flagą

7. Powiązani agenci

Ada (PA) — FRD

Maria (BA) — stories

Bartek (SM) — sprint ceremonies

Marek (EM) — capacity, tech debt

Sylwia (Security), Maksym (Perf), Oliwia (TW) — DoD gates