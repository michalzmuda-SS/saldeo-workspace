Database Architect — Przewodnik Użytkownika

Data: maj 2026 · Wersja: 1.0 (Vmodel-S) · Agent: Aniela (🗄️) · Plik: dba.agent.yaml

1. Wprowadzenie

Aniela jest mistrzynią integralności danych, wydajności i wnikliwej analizy w SaldeoSMART. Specjalizuje się w architekturze danych SaldeoSMART (4,1 mln faktur/mies., 6 300 klientów, 16 lat historii decyzji księgowych jako moat AI), modelach multi-tenant biuro/klient, integracjach KSeF/JPK, hurtowniach analitycznych dla cohort analysis, i przygotowaniu datasetów do telemetrii VBP (T - czas zaoszczędzony, E - redukcja błędów).

2. Kiedy używać

✅ Architektura bazy danych (nowa lub refactor) ✅ Modele danych (Liquibase changelogs, ERD) ✅ Multi-tenancy strategy (biuro/klient/SMB → CEE) ✅ Performance analysis i query optimization ✅ Przygotowanie feature store / labeled dataset dla agentów A1–A7 ✅ Cohort analysis dla VBP / churn / cross-engine adoption ✅ Compliance retention (KSeF 5 lat, podatkowe 5+, RODO right to forget)

3. Polecenia menu

4. Kluczowe wzorce SaldeoSMART

4.1 Multi-tenancy

Standardowy wzorzec: schema-per-biuro dla danych operacyjnych biur (wysoka izolacja, łatwy backup per biuro, łatwe restore RODO right-to-forget per klient biura) + shared schema z RLS dla danych SMB self-serve (PLG, niskie ARPU, gęste).

4.2 16 lat historii — data moat

labeled_decisions

  - id

  - tenant_id (biuro)

  - document_id

  - decision_type (klasyfikacja / kwota / kontrahent / kategoria / VAT)

  - human_decision (label)

  - source (księgowy biura / property auto-rule)

  - timestamp

  - context_features (JSON: kontrahent_id, plan_kont, kwota_bin, …)

To jest trampolina dla agentów A1–A7. Konkurencja (Comarch, InsERT) ma per-klient ERP, nie ma per-biuro labeled dataset.

4.3 Telemetria T+E (krytyczne dla VBP Etap 3)

work_event

  - tenant_id

  - user_id (księgowy)

  - event_type (manual_correction / auto_action / review / approve)

  - duration_seconds

  - timestamp

  - related_document_id

error_event

  - tenant_id

  - error_type (KSeF_rejection / VAT_inconsistency / duplicate / …)

  - prevented_by (rule / AI / manual)

  - estimated_cost_pln

  - timestamp

Z tego wyliczamy:

T = Σ(duration_seconds zaoszczędzone) × stawka godzinowa księgowej

E = Σ(estimated_cost_pln × probability_prevented_by_AI)

Bez tego shadow pricing dla VBP Etap 3 nie zadziała.

4.4 Compliance retention

5. Quick start

@aniela create-data-model A4-Compliance-Guard

> Encje: ComplianceCheck, KSeFEvent, BiałaListaSnapshot, DPIArecord

> Liquibase: tak (changelog-2026-05-A4.xml)

@aniela design-multi-tenancy CEE-expansion

> Regions: PL/CZ/RO/SK

> Constraint: data sovereignty per region

> Output: tenancy strategy + data flow diagrams

@aniela prepare-ai-dataset A1-Document-Intelligence

> Source: 16 lat labeled decisions

> Target: golden dataset 50k examples + holdout 10k

> Validation: per-cohort accuracy

6. Best practices

Liquibase dla wszystkiego — żadnych ad-hoc DDL na produkcji

Indexing per query pattern — 4,1 mln faktur wymaga careful planu

Partycjonowanie — per okres + per biuro tenant_id

RLS dla shared schemas — RODO + audit trail

PII encryption at-rest — pgcrypto / column-level

Backup i restore tested monthly — biura księgowe nie tolerują utraty danych

Telemetria T+E first-class — bez tego VBP się sypie

Migration zero-downtime — biura pracują 6:00–22:00; nie ma okna serwisowego

7. Powiązani agenci

Dominik — domain architecture

Sylwia — encryption, RODO, retention

Maksym — query performance

Maciej — implementacja DAO / repositories

Piotr — feature store dla agentów