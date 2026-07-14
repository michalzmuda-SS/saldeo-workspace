# Project Context — SaldeoSMART / Vmodel-S

> Plik autorytatywny. Agenci Vmodel-S (moduł `ssa`) wczytują `**/project-context.md`
> na starcie każdej sesji. Traktuj poniższe jako obowiązujący kontekst projektu.
> Język pracy: **polski** (komunikacja i dokumenty).

## 0. Instruction stack (reguły — czytaj najpierw)

Warstwa instrukcji jest rozdzielona (jeden plik = jedno zadanie):
- `AGENTS.md` — reguły projektu (język, nazewnictwo, „czego nie ruszać", DoD, poziomy wysiłku+safety, weryfikacja).
- `CLAUDE.md` — zachowanie agenta/runtime (wołanie agentów, routing modeli, higiena kontekstu, Loop protocol, Auto-propose).
- `DESIGN.md` — reguły UI + Design System (formuła promptu, output checks, „najpierw zapytaj Michała").
- `WRITING.md` — głos i styl (ton, redakcja, maile).
- `CONNECTORS.md` — konektory (JIRA/Confluence/Gmail/Drive) i mapa konektor→agent/pętla.
- `SCHEDULING.md` — harmonogram / autopilot (zadania cykliczne).
- `SKILLS.md` — jak pisać skille (higiena, błędy, powiązanie z pętlami/proposerem).
- `project-context.md` (ten plik) — fakty i kontekst domenowy (autorytatywny).
- `memory.md` — dziennik decyzji i ustaleń.

Agenci: przed pracą wczytajcie `AGENTS.md`, a dla zadań UI/treści odpowiednio `DESIGN.md` / `WRITING.md`.

## 1. Czym jest ten workspace

`V model - S` to workspace BMAD v6 (Claude Code) z modułem **`ssa` — „SaldeoSMART Agents"**
(BrainSHARE IT, Grupa Visma). Zespół 23 agentów pokrywa pełen V-Model SDLC dla platformy
SaldeoSMART. Framework: `core` + `bmm` (oficjalny BMAD) + `ssa` (custom).

## 2. Domena i firma

- SaldeoSMART — księgowość SaaS dla biur rachunkowych, SMB i micro/JDG (PL/CEE), część Grupy Visma od 2018.
- Skala: ~104 osoby, ~52 mln zł przychodu (2025, +19–25% r/r), 7 000+ klientów, 300 000+ użytkowników, ~11 mln dokumentów/mies., 14 000 skonfigurowanych ścieżek obiegu, 266 partnerów wdrożeniowych.
- **6 revenue engines:** SaaS, EOD (OCR), Kadry/HR, integracje bankowe, Embedded Finance, SMARTduet (PLG).
- **Warstwa AI:** feature „Uzupełnij z AI" + 7 in-product agentów A1–A7 (Document Intelligence, Workflow Orchestrator, Bank Reconciliation, Compliance Guard, Cash Flow Forecasting, Payment/Factoring, HR/Delegacje).

## 3. Strategia 2027+ (esencja)

Pivot z „polskiego lidera OCR" na **system operacyjny finansów** firmy i biura („człowiek decyduje, AI wykonuje").
Pięć filarów: (1) Agentic AI Layer, (2) Finance Operations Platform, (3) Channel Economics Reset,
(4) Value-Based Pricing + Embedded Finance, (5) AI-Assisted Engineering (AI SDLC). Działają tylko razem.
Sekwencja: **Tor 2 (firmy: kadry + embedded finance) przed Torem 1 (biura: moduł księgowy Visma)**.
Okno strategiczne zamyka się szybko (KSeF, wygaszenie Hubdoc 05/2026, wejście Pennylane do PL 2H 2026, Comarch Betterfly).

## 4. Zasady produktowe / metryki

- **North Star:** NRR (Net Revenue Retention) per segment.
- **Value pillars (moduł):** Time-to-Close · Automation Yield · Compliance Confidence — każdy artefakt mapowany na min. jeden.
  (Framing Head of Product: Agentic Automation · Compliance Confidence · Financial Intelligence.)
- **Bramki:** checklista gotowości W1–W10, gate D60 (intent), Board gate D90 (go/no-go per tor + kill-switch); decyzje na danych z pilotów 5–20% bazy, ruchy odwracalne.
- **Kanał partnerski = 68% wzrostu sprzedaży.** Re-kontrakt z comp planem ≥ marża z odsprzedaży FK (Comarch/Symfonia/enova) = twardy warunek startu Toru 1 (W3). Zasada „AND, nie OR". NPS partnerów >50.
- **Pricing:** migracja `1 kredyt = 1 strona OCR` → AI Tier → Resolution-Based Pricing (P = α × (T+E)) + transakcje.
- **Definition of Done = „shipped + adopted + retained"**; 20% capacity na dług techniczny jawnie w roadmapie.
- **Bramki pewności AI:** ≥95% auto · 85–95% suggest · <85% human review; zawsze confidence score + audit trail + rollback.

## 5. Compliance baseline (sprawdzaj w każdym artefakcie)

KSeF (obowiązek 02–04/2026, sankcje od 01/2027), RODO/GDPR (art. 9 + DPIA dla kadr), JPK_V7M, MPP/split payment,
Biała Lista, VIES, **EU AI Act art. 50 — live od 02/08/2026** (informowanie o AI), WCAG 2.1 AA, i18n PL/EN/CS/RO/SK.

## 6. Stack techniczny

Java 21 + Spring Boot 3.5+, Angular 21+, Kotlin 2.1+ (Android), Swift 6+ (iOS), PostgreSQL/MSSQL, Liquibase, Docker/K8s.
JIRA: przy tworzeniu epików/stories dodawaj tag `BMAD-Generated` (i `AI-Agentic` dla A1–A7).

## 6a. Design System SaldeoSMART 2.0 (UI)

Reguły UI i Design Systemu przeniesione do **`DESIGN.md`** (baza wiedzy: `design-system/`).
Skrót: każdy task UI wczytuje `design-system/README.md`; **przy prototypie/makiecie zawsze najpierw
zapytaj Michała** o tryb użycia DS. Szczegóły i użycie Figma MCP: `DESIGN.md`.

## 7. Mapa plików

- `Vmodel-Saldeo/` — źródło modułu `ssa` (`module.yaml`, `skills/<agent>/`, definicje agentów, user-guides). Nie kasować.
- `knolwedge base/` — materiały referencyjne (uwaga: literówka w nazwie). Kluczowe:
  - `saldeosmart-strategia-2027-vision.docx` — pełna strategia (living doc).
  - `saldeosmart-strategia-2027-recap-CEO.pdf` — 2-str. recap dla Zarządu (Ada + Sara).
  - benchmark międzynarodowy, model kanałów, badanie semantyczne, analiza freemium, strategia AI-native, testy A/B.
- `design-system/` — baza wiedzy Design Systemu SaldeoSMART 2.0 (patrz sekcja 6a).
- `.claude/skills/` — zainstalowane skille (core + bmm + 23× ssa).
- **Instruction stack:** `AGENTS.md` (reguły), `CLAUDE.md` (runtime/agent), `DESIGN.md` (UI), `WRITING.md` (głos), `CONNECTORS.md` (konektory), `SCHEDULING.md` (autopilot), `SKILLS.md` (higiena skilli), `memory.md` (dziennik decyzji).
- **Praca:** `outputs/{drafts,final}` (wyniki), `docs/` (dokumentacja), `assets/` (dane/obrazy), `loops/` (pętle + PROPOSALS), `templates/` (hooki/subagenty do repo).
- `.claude/agents/` — subagenty `fixer` i `verifier` (maker-checker).
- `README.md` — opis workspace. `install.command` — czysta (re)instalacja frameworka.

## 8. Roster agentów `ssa` (wołaj po imieniu)

Misza 🧭 (Head of Product/CPO) · Ada 📈 (Product Analyst) · Maria 📊 (Business Analyst) ·
Sara 📝 (Product Owner) · Bartek 🏃 (Scrum Master) · Dominik 🏛️ (Domain Architect) · Aniela 🗄️ (DBA) ·
Sylwia 🛡️ (SecOps) · Maksym ⚡ (Performance) · Maciej ☕ (Java) · Emilia 🌐 (Angular Web) ·
Jarek 🤖 (Android) · Rafał 📱 (iOS) · Norbert 🧪 / Ewa 🎭 / Kacper 🤖 / Renata 🍎 (SDET backend/frontend/android/ios) ·
Filip 🚀 (DevOps) · Oliwia ✍️ (Tech Writer) · Stefania 🎨 (UX) · Jacek 📐 (Spec) · Piotr ✒️ (Prompt Engineer).

## 9. Stan / typowy przepływ

Typowy flow V-Model: Ada (FRD) → Maria (stories) → Sara + Bartek (priorytety, sprint) →
Dominik/Aniela/Sylwia (architektura) → devowie → SDET-y + Maksym → Filip (deploy) → Oliwia (docs).
Misza spina całość na poziomie strategii/portfolio i bramek Board gate.
