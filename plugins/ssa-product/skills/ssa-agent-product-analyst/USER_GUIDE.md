Product Analyst — Przewodnik Użytkownika

Data: maj 2026 · Wersja: 1.0 (Vmodel-S) · Agent: Ada (📈) · Plik: product-analyst.agent.yaml

Spis treści

Wprowadzenie

Kiedy używać Ady (PA) — a kiedy Maria (BA)

Polecenia menu

Przepływy szczegółowo

Quick start — przykłady SaldeoSMART

Best practices

FAQ

Powiązani agenci

1. Wprowadzenie

Ada jest specjalistką ds. wymagań produktowych w SaldeoSMART. Tworzy FRD (Functional Requirements Document) dla 6 revenue engines (SaaS, EOD, Kadry, Banki, Embedded Finance, SMARTduet) oraz warstwy AI ("Uzupełnij z AI" + agenci A1–A7).

Pracuje blisko z:

biurami rachunkowymi (Starter → Enterprise) i klientami SMB,

Solution Engineering Visma (walidacja wymagań w grupie),

Head of Product (priorytetyzacja wg 3 value pillars).

Core principles:

Stakeholder-centric requirements gathering

Workshop-driven solution design

Evidence-based validation (real biuro / real SMB, nie hipotezy)

Cross-functional collaboration (Maria, Sara, Bartek, Dominik, Sylwia, Stefania)

Iterative refinement (high-level → cohort-validated)

Compliance baseline (KSeF, RODO, JPK, AI Act) w każdym FRD

Mapping na value pillars (Time-to-Close / Automation Yield / Compliance Confidence)

2. Kiedy używać Ady (PA) — a kiedy Maria (BA)

✅ Używaj Ady gdy potrzebujesz:

Stworzyć kompleksowy FRD z tiered MoSCoW (Must-1, Must-2, Should-1, …)

Facylitować warsztat z biurami rachunkowymi lub klientami SMB

Zwalidować wymagania na rzeczywistych projektach klientów / Solution Eng / SME

Przeanalizować luki produktu (per engine / segment / value pillar)

Stworzyć user story z detalicznych wymagań (BA-led approach)

Przeprowadzić market research na konkretnym feature (vs. Comarch, InsERT, Symfonia, ksiegowa.ai, Synder)

Walidacja cohortowa (np. underpriced/fair/overpriced przy migracji do VBP)

❌ Nie używaj Ady do:

Strategicznego brainstormingu / ideacji (→ Maria)

Tworzenia high-level project briefów (→ Maria)

Brownfield system documentation (→ Maria)

Technical architecture (→ Dominik)

Tworzenia PRD / strategii produktu (→ Head of Product / poza zakresem agentów)

Zobacz: pa-vs-analyst-guide.md

3. Polecenia menu (quick reference)

4. Przepływy szczegółowo

4.1 create-frd ⭐ PRIMARY

Cel: kompleksowy FRD z tiered MoSCoW dla feature SaldeoSMART.

Kiedy używać:

Start nowego feature dla 6 engines lub agenta A1–A7

Need detalicznych wymagań funkcjonalnych

Project z 50+ wymaganiami

Potrzeba priorytetyzacji do phased delivery

Kroki workflow:

Initialize FRD (metadata, business context, mapowanie na value pillars i engine)

Research & Analysis (market research, customer feedback, competitive scan)

Requirements Gathering (functional + NFR — w tym OCR P95 < 5s, koszt/action < 0,15 zł, Resolution latency)

Workshop Facilitation (warsztat z biurami / klientami SMB / Solution Eng Visma)

Stakeholder Validation (customer projects, Solution Engineering, SME: security, AI, compliance)

Compliance Gate (KSeF, RODO, JPK, Biała Lista, VIES, AI Act per agent)

Finalize and Publish FRD

Output: FRD zawierający:

Tiered MoSCoW (Must-1 / Must-2 / Should-1 / …)

Functional requirements

Non-functional requirements (latency, koszt AI, accuracy, audit trail)

Access control model (multi-tenant: biuro → klient → SMB self-serve)

Integracja KSeF / JPK / Biała Lista / VIES

Bootstrap / migration jobs (zwłaszcza brownfield)

Research methodology + AI disclosure (jeśli LLM użyty)

Mapowanie na value pillar(y)

Cohort impact projection (ARPU / NRR / churn)

@ada create-frd

4.2 market-research

Cel: szczegółowy market research na produktowych features.

Kiedy:

Zrozumieć features konkurencji (Comarch ERP / InsERT Subiekt / Symfonia / ksiegowa.ai / Saldeo legacy)

Identyfikacja luk produktowych

Business case dla nowego feature

Priorytetyzacja roadmapy

Output: Market Research Report z:

Executive summary

Market overview (TAM/SAM dla biur rachunkowych w PL → CEE)

Competitive analysis (8 graczy × 30+ wymiarów; benchmark Synder dla US lekcje)

Customer insights (10+ wywiadów obowiązkowo)

Product gap analysis

Recommendations z RICE priorytetami

AI disclosure jeśli LLM użyty

4.3 facilitate-workshop

Cel: facylitacja warsztatu walidacyjnego z biurami / klientami SMB / Solution Eng.

Output: Workshop Outcomes:

Agenda i uczestnicy

Wymagania review + walidacja

Decyzje

Action items

Follow-up schedule

4.4 validate-requirements

Cel: systematyczna walidacja FRD ze stakeholderami.

Kroki:

Define validation approach

Customer project validation (min. 5 biur ICP, min. 10 firm SMB)

Solution Engineering validation (Visma)

SME validation (Sylwia – security/AI Act, Aniela – data, Dominik – architektura)

Head of Product approval

Generate validation report

Update wymagania na bazie feedbacku

4.5 product-gap-analysis

Cel: luki per journey / engine / segment.

Wymiary:

Engine: SaaS / EOD / Kadry / Banki / Embedded Finance / SMARTduet

Segment: biuro Starter / Standard / Pro / Enterprise · firma Micro / Start / Pro / Business / Enterprise

Value pillar: Time-to-Close / Automation Yield / Compliance Confidence

Geo: PL · CEE Phase 4 (CZ/RO/SK)

4.6 cohort-validation

Cel: walidacja hipotez na cohortach (kluczowe dla VBP migration).

Standardowe cohorty:

Underpriced (klient płaci < EVC) — kandydaci do uplift

Fair-priced

Overpriced — risk churn przy migracji

Power user (cross-engine 4+) vs. single-engine

Mobile-first (SMARTduet) vs. desktop-first

5. Quick start — przykłady SaldeoSMART

# FRD dla nowego agenta A4 Compliance Guard

@ada create-frd

> Title: A4 Compliance Guard - KSeF + Biała Lista + split payment + duplikat

> Engine: SaaS Premium

> Value pillar: Compliance Confidence (PRIMARY)

> Compliance: KSeF mandatorial 2026 Q3, RODO art. 32, AI Act high-risk

> Target: biura Standard/Pro/Enterprise (immediate), firmy Business+ (Q3 2026)

# Market research przed roadmapą Q3

@ada market-research

> Scope: AI agentic landscape PL accounting

> Competitors: Comarch (Betterfly), InsERT, Symfonia, ksiegowa.ai

> Benchmark: Synder (US), Visma CEE peers

# Walidacja hipotezy "biuro płaci 3x więcej za Resolution Pricing"

@ada cohort-validation

> Hypothesis: 50 biur cohort, dataset z 12 mies., shadow pricing

> Cuts: underpriced/fair/overpriced × power-user/casual

6. Best practices

Mapuj każdy feature na value pillar — bez tego nie wchodzi do FRD

Kompliancja jako baseline — KSeF/RODO/AI Act w każdym FRD od razu, nie pod koniec

5+10 rule — min. 5 biur i 10 firm SMB w walidacji przed Sign-off

AI disclosure — jeśli LLM użyty w FRD/research, oznacz to wprost

Cohorty zamiast średnich — średnia ARPU klamie; cohorty pokazują underpriced vs overpriced

Telemetria T+E — nawet jeśli niedoinstrumentowane dziś, FRD definiuje co instrumentować

Sekwencjonowanie agentów A1–A7 — nie próbuj wszystkiego naraz; A1 i A4 najpierw

7. FAQ

Q: Czy Ada może pisać user stories? A: Tak, przez draft-story (BA-led approach), ale Maria robi to lepiej dla głębokich technicznych stories.

Q: Co z mikro/JDG (SMARTduet)? A: SMARTduet ma własny PLG flow. Ada wspiera FRD, ale priorytet ma TTV < 3-5 min i KSeF download free.

Q: Czy Ada zna VBP / Resolution Pricing? A: Tak — to jest fundament. FRD zawsze projektuje impact na ARPU / NRR / cross-engine adoption.

Q: Jak Ada radzi sobie z brownfield? A: Można, ale Maria jest mocniejsza w brownfield. Konsultuj.

8. Powiązani agenci

Maria (Analyst) — story creation z FRD, brownfield

Sara (PO) — priorytetyzacja FRD do backlogu

Dominik (Domain Architect) — solution architecture na bazie FRD

Sylwia (Security) — DPIA, AI Act, KSeF compliance

Stefania (UX) — design wymagań UX z FRD

Marek (EM) — capacity i sequencing