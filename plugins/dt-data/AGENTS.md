# AGENTS.md — reguły projektu (Vmodel-S / SaldeoSMART)

> Jeden plik = jedno zadanie. Ten plik trzyma **reguły pracy**. Kontekst domenowy →
> `project-context.md`. Zachowanie agenta/runtime → `CLAUDE.md`. Reguły UI → `DESIGN.md`.
> Głos/pisanie → `WRITING.md`. Roster 23 agentów → `project-context.md` §8.

## Język i komunikacja
- Domyślny język pracy i dokumentów: **polski**. Terminy branżowe (KSeF, NRR, VBP) zostawiamy bez tłumaczenia.
- Zwięźle i konkretnie: wniosek → uzasadnienie → dowód. Bez lania wody.

## Narzędzia i środowisko
- Framework: **BMAD v6** (`core` + `bmm`) + moduł `ssa` (custom). Uruchomienie: Claude Code / Cowork / VS Code.
- Reinstalacja frameworka: `install.command` (czysta instalacja). Nie edytuj ręcznie `_bmad/` — to warstwa instalatora.
- Dobór modeli (koszt/jakość): patrz `CLAUDE.md` i `MODEL-ROUTING.md` w pakietach.

## Konwencje nazewnictwa
- Pliki i katalogi: kebab-case, bez spacji tam, gdzie to możliwe (wyjątek: istniejące nazwy jak `V model - S`).
- Artefakty produktowe: prefiks `saldeosmart-` + temat (np. `saldeosmart-strategia-...`).
- Skille/agenci: `ssa-agent-<rola>` (moduł ssa), `par-agent-*` / `dt-agent-*` (pozostałe modele).

## Czego NIE ruszać
- `Vmodel-Saldeo/` — źródło modułu `ssa` (module.yaml, skills, definicje). Zmiany tylko świadomie, z podbiciem wersji.
- `knolwedge base/` — materiały referencyjne (uwaga: literówka w nazwie folderu jest celowo zachowana).
- `.claude/skills/` — zainstalowane skille; edycja przez źródło + reinstalacja, nie ad-hoc.
- Cudze/istniejące `.git` w podfolderach dystrybucji.

## Definition of Done
„**shipped + adopted + retained**" — nie sama data wydania. Każdy artefakt/feature ma: baseline KPI + target + plan adopcji,
mapowanie na value pillar (Time-to-Close / Automation Yield / Compliance Confidence) oraz przejście bramek compliance.

## Compliance (twarda bramka — sprawdzaj zawsze)
KSeF, RODO/GDPR (art. 9 + DPIA dla kadr), JPK_V7M, MPP/split payment, Biała Lista, VIES, EU AI Act (art. 50 od 02/08/2026),
WCAG 2.1 AA. Szczegóły i daty: `project-context.md` §5. Bez zielonej bramki compliance artefakt nie jest „done".

## UI / Design
Każdy task dotykający UI: najpierw `DESIGN.md` (i `design-system/`). **Przy prototypie/makiecie zawsze najpierw zapytaj Michała**,
czy użyć design systemu. Szczegóły: `DESIGN.md`.

## JIRA
Przy tworzeniu epików/stories dodawaj tag `BMAD-Generated` (oraz `AI-Agentic`, gdy dotyczy agentów A1–A7).

## Gdzie co jest (materiały i przykłady)
- Kontekst/fakty: `project-context.md`. Strategia i raporty: `knolwedge base/`. Design: `design-system/`.
- Roster agentów i typowy flow V-Model: `project-context.md` §8–§9.
- **Wyniki pracy zapisuj w jednym miejscu:** `outputs/drafts/` (WIP) i `outputs/final/` (zaakceptowane); dokumenty w `docs/`, dane/obrazy w `assets/`. Materiały do czytania zostają w `knolwedge base/`.

## Konektory (narzędzia zewnętrzne)
Dostępne: JIRA, Confluence, Gmail, Google Drive. Kto z czego korzysta i zasady (zapis po bramce, wysyłka = zgoda człowieka, PII) → `CONNECTORS.md`.

## Poziomy wysiłku i bezpieczeństwo
Dobierz nakład do zadania (spójne z `MODEL-ROUTING.md`):
- **Low** — porządkowanie, sortowanie, ekstrakcja, zmiana nazw → Haiku.
- **Medium** — podsumowania, notatki, updaty, standardowe raporty → Sonnet.
- **High** — pieniądze, prawo, kontrakty, weryfikacja źródeł, wieloetapowe → Opus + **obowiązkowy przegląd człowieka**.

Nawyki bezpieczeństwa: zaczynaj od pracy niskiego ryzyka · zawsze przeglądaj outputy dot. pieniędzy / klienta / prawa · trzymaj wąskie uprawnienia konektorów · zapisuj wyniki w jasnych folderach (`outputs/`) · „nigdy done bez dowodu z checka".
Delegowanie zadań do modelu: użyj ramy z `templates/delegation-prompt.md`. Harmonogram/autopilot: `SCHEDULING.md`. Pisanie skilli: `SKILLS.md`.

## Jak weryfikować pracę
- Twierdzenia liczbowe/faktograficzne — ze źródłem (patrz konwencja [Sxx] w strategii). Oddzielaj fakt od interpretacji.
- Dokumenty i analizy: przed oddaniem sprawdź compliance, mapowanie na value pillar, kompletność (DoD).
- Kod/pipeline'y/dane: testy + review właściwego SDET/agenta jakości; ryzyka i edge-case'y wypisane jawnie.

## Pętle (Loop Engineering)
Nietrywialne zadania prowadź jako **zamkniętą pętlę** z twardą bramką (Discover → Plan → Execute → Verify → Iterate).
Zasada: **No gate, no loop**; „done" tylko ze świeżym dowodem z checka; maker ≠ checker; STOP po 5 próbach / 2× ten sam błąd / przed compliance-sensitive bez zgody.
Katalog pętli i protokół: `loops/README.md` (skille `loop-*`). Szczegóły runtime: `CLAUDE.md`.

## Auto-propose (rozwój modelu)
Powtarzalny workflow (≥2×) → agent **proponuje** nowy skill/pętlę wpisem do `loops/PROPOSALS.md` (status `proposed`) i czeka na akceptację Michała.
Nic nie powstaje bez akceptacji. Mechanizm: skill `propose-loop-or-skill`. Każda propozycja pętli musi mieć bramkę.
