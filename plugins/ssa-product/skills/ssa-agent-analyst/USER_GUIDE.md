Business Analyst — Przewodnik Użytkownika

Data: maj 2026 · Wersja: 1.0 (Vmodel-S) · Agent: Maria (📊) · Plik: analyst.agent.yaml

1. Wprowadzenie

Maria jest senior Business Analyst tworzącą techniczne user stories i prowadzącą requirements engineering dla platformy SaldeoSMART. Mostkuje wymagania biznesowe (od Ady — PA) z technicznymi stories implementacyjnymi dla developerów (Maciej, Emilia, Jarek, Rafał).

Specjalizuje się w:

6 revenue engines i ich dependencies

AI credits i agentów A1–A7

KSeF / JPK / Biała Lista / VIES (edge cases)

Embedded finance flows (faktoring PragmaGo, BNPL, ubezpieczenia należności)

Workflow biur rachunkowych (refinement OCR → AI → Resolution)

2. Kiedy używać Marii vs Ady

Zobacz pa-vs-analyst-guide.md.

3. Polecenia menu

4. Główne workflows

4.1 create-story ⭐ PRIMARY

Wejście: FRD od Ady (lub innego źródła) + Architecture od Dominika Wyjście: User story z:

Tytuł (As a... I want... so that...)

Acceptance criteria w formacie Given-When-Then

NFR: latency, koszt AI, accuracy gate, audit trail

Technical notes (komponenty SaldeoSMART, integration points: KSeF / banki / embedded finance)

Security requirements (autentykacja, autoryzacja, role multi-tenant)

Test cases (happy + unhappy paths — np. KSeF rejection, OCR low-confidence)

Dependencies na inne stories / engines / agentów A1–A7

DoD checklist

Tag JIRA: BMAD-Generated (+ AI-Agentic jeśli A1–A7)

4.2 create-brownfield-story

Dla istniejących modułów SaldeoSMART (legacy OCR pipeline, billing system, EOD core), gdzie zmiana wymaga careful regression analysis.

4.3 gap-analysis

Techniczne luki — np.:

Brak instrumentacji T (czas oszczędzony) i E (redukcja błędów) blokuje VBP Etap 3

Billing system nie wspiera Resolution Fee + overage

Multi-tenancy nie skaluje się do CEE expansion

Telemetria agentów A1–A7 nieskonfigurowana (override rate, accuracy drift)

5. Quick start

# Story dla A4 Compliance Guard (KSeF validation)

@maria create-story

> Source FRD: A4-FRD-001

> Engine: SaaS Premium

> Type: technical (Given-When-Then + NFR)

> Tags: BMAD-Generated, AI-Agentic, KSeF

# Brownfield story: migracja OCR credits → AI credits w UI klienta

@maria create-brownfield-story

> Module: legacy billing UI

> Risk: regression na cennik biur Ekspert (739 zł/mies)

> Test plan: shadow pricing dataset

# Decompose epic JIRA do stories

@maria split-ticket SALDEO-1234

> Epic: A1 Document Intelligence MVP

> Target: 8 stories, ≤5 dni każda

6. Best practices

Given-When-Then dla każdej AC — nie ma pole na ambiguity

Edge cases KSeF — faktura odrzucona, taryfikator zmieniony, podpis wygasł

Multi-tenancy w stories — zawsze deklaruj scope: biuro / klient biura / SMB self-serve

AI agent stories — confidence gate (≥95/85-95/<85), audit trail, fallback

Story slicing — vertical slices, ≤5 dni

Dependency mapping — Bank Reconciliation wymaga Document Intelligence; nie odwrotnie

Tagi JIRA — BMAD-Generated zawsze; AI-Agentic dla A1–A7

7. Powiązani agenci

Ada (PA) — źródło FRD

Sara (PO) — priorytetyzacja stories

Bartek (SM) — sprint preparation

Dominik (Domain Architect) — architectural input

Sylwia (Security) — security AC

Stefania (UX) — UX AC

Maciej / Emilia / Jarek / Rafał — implementacja

Norbert / Ewa / Kacper / Renata — test gating