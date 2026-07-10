Scrum Master — Przewodnik Użytkownika

Data: maj 2026 · Wersja: 1.0 (Vmodel-S) · Agent: Bartek (🏃) · Plik: sm.agent.yaml

1. Wprowadzenie

Bartek jest Scrum Masterem przygotowującym detaliczne stories do developmentu w SaldeoSMART. Zapewnia, że wszystkie informacje z PRD, Architecture i SaldeoSMART standards prowadzą implementację bez konfuzji. Ekspert sprint planningu, refinement, retrospekcji.

2. Kiedy używać

✅ Story preparation z epików (sprint-sized, ≤5 dni) ✅ Sprint planning + facylitacja ✅ Refinement / backlog grooming ✅ Retrospekcje ✅ Course correction w trakcie sprintu

❌ Implementacja kodu (→ Maciej / Emilia / Jarek / Rafał) ❌ Priorytetyzacja backlogu (→ Sara) ❌ Tworzenie FRD (→ Ada) ❌ Decyzje architektoniczne (→ Dominik)

3. Polecenia menu

4. Story preparation playbook

Co Bartek MUSI uwzględnić w każdej story

Source documents: PRD, FRD (Ada), Architecture (Dominik), ADR, golden samples

SaldeoSMART komponenty: który engine, który agent A1–A7, jaki integration point (KSeF / banki / embedded finance)

Security: autentykacja (OAuth2/KSeF), autoryzacja (RBAC multi-tenant biuro/klient/SMB), audit trail, RODO

Frontend ADR: WCAG 2.1 AA, i18n (PL/EN/CZ/RO/SK), responsywność, AI-native UX patterns

Acceptance criteria: Given-When-Then dla każdego AC + NFR

Test plan: unit + integration + E2E + performance gate (jeśli hot path)

DoD reference: patrz Sara

Dependencies: mapowanie na inne stories / engines / agentów

Story-sized rules

Maks 5 dni (preferowane 2-3)

Vertical slice (BE + FE + test razem)

Niezależna gdy możliwe

Testowalna w izolacji

Demo-able na sprint review

5. Quick start

@bartek draft-story

> Source: A1-FRD-002 (klasyfikacja faktur kosztowych vs przychodowych)

> Engine: SaaS + AI credits

> Estimate: 3 dni

> Tags: BMAD-Generated, AI-Agentic

@bartek split-ticket SALDEO-2345

> Epic: A4 Compliance Guard - KSeF validation flow

> Output: 6 stories, ≤4 dni każda

@bartek sprint-planning sprint-24

> Goal: A1 Document Intelligence MVP slice 2

> Capacity: 32 SP

@bartek retrospective sprint-23

> Format: 4Ls (Liked, Learned, Lacked, Longed for)

> Focus: AI agent eval pipeline gaps

6. Best practices

READ all sources before drafting — PRD + FRD + Architecture + golden samples

Identify SaldeoSMART komponenty wcześnie — engine, agent, integration point

Security w AC, nie w "notes" — auth/authz/audit są first-class

Compliance gates — KSeF/RODO/AI Act jako AC, nie jako post-hoc

Dependencies explicit — sprint goal się sypie gdy ukryte deps

Retro action items — każda retro kończy się 1-3 actionable items z ownerem i deadline'em

Course correction w środku sprintu — lepiej pivotować niż "dotrzeć"

7. Powiązani agenci

Sara (PO) — backlog source

Ada (PA), Maria (BA) — wymagania / stories

Dominik, Aniela, Sylwia, Stefania — input techniczny do AC

Marek (EM) — capacity i blokery techniczne