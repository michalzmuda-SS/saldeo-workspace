Technical Specification Specialist — Przewodnik Użytkownika

Data: maj 2026 · Wersja: 1.0 (Vmodel-S) · Agent: Jacek (📐) · Plik: spec.agent.yaml

1. Wprowadzenie

Jacek prowadzi zespoły od wymagań i subtasków do kompletnych specyfikacji technicznych. Używa SaldeoSMART spec-extractor jako kanonicznego pipeline'u tworzenia ustrukturyzowanych ADR specyfikacji z dokumentów źródłowych. Zadaje precyzyjne pytania, by zdefiniować technical design (nazwy, wzorce, narzędzia, logikę). Nie zgaduje — każda decyzja projektowa potwierdzona przez human eksperta przez ustrukturyzowaną elicytację.

2. Kiedy używać

✅ Konwersja subtask/ticket w pełną specyfikację techniczną (z ADR) ✅ Refinement istniejącej specyfikacji ✅ Walidacja specyfikacji vs acceptance criteria ✅ Tworzenie ADR z dokumentów źródłowych (FRD, golden samples)

❌ Implementacja kodu (→ Maciej / Emilia / etc.) ❌ Decyzje strategiczne (→ Dominik / EM / Head of Product)

3. Polecenia menu

4. Workflow create-spec (PRIMARY)

Wymagania wejściowe

Subtask z Acceptance Criteria (Given-When-Then)

Source documents: FRD (Ada), Architecture (Dominik), ADR

Optional: golden samples (np. spec dla A1 jako wzorzec dla A4)

Kroki

Confirm AC — pierwszy krok zawsze: potwierdź AC z human ekspertem

Gather context — czytaj FRD, Architecture, golden samples, project-context.md

Spec-extractor pipeline:

Sprawdź prerequisites (Python 3.11+, spec-extractor zainstalowany, Azure OpenAI/OpenAI credentials)

--dry-run najpierw (walidacja inputu + estymacja kosztu)

Run extractor z source docs

Wszystkie reguły, progi i wzorce muszą trace do source documents (zero fabrykowania)

Elicit "How" — zadawaj precyzyjne pytania o nazwy, wzorce, tooling, logikę

Confirm each decision — żadnych założeń, tylko potwierdzone decyzje

Output: ADR specyfikacja z:

Context

Decision (z trace do source)

Rationale

Alternatives considered

Consequences (+/–)

Implementation notes

Confidence gates (dla A1–A7)

Audit trail requirements

Fallback strategy

5. Quick start

@jacek create-spec SALDEO-SUBTASK-2345-3

> Source FRD: A4-FRD-001

> AC: walidacja KSeF schema XML + Biała Lista API + duplikat detection

> Golden sample: A1-spec-v1.2 (jako wzorzec confidence gates)

> Spec-extractor: dry-run najpierw

@jacek refine-spec ADR-A4-005

> Reason: dodano scenariusz "KSeF timeout > 30s"

> Output: zaktualizowany ADR + change log

@jacek validate-spec ADR-A4-005

> Vs: A4-FRD-001 + golden sample A1-spec-v1.2

> Output: PASS/CONCERNS/FAIL

6. Best practices

Subtask + AC first — bez tego halt

Confirm, don't assume — pierwszy krok zawsze: potwierdź AC

Trace to source — każda reguła w spec ma cytat z FRD/Architecture/ADR

--dry-run najpierw — oszacuj koszt LLM przed full run

Concise & high-brevity — bez redundancji

File paths in questions — klikalne ścieżki przy referencjach

Human is the expert — Jacek facylituje, ekspert decyduje

AI-specific specs — confidence gates, audit trail, fallback ZAWSZE

7. Powiązani agenci

Ada (PA) — FRD jako source

Dominik (Domain Arch) — architecture jako source

Maria (BA) — stories powstałe ze spec

Maciej / Emilia / Jarek / Rafał — implementacja po spec

Norbert / Ewa / Kacper / Renata — testy z AC ze spec