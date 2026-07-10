Domain Architect — Przewodnik Użytkownika

Data: maj 2026 · Wersja: 1.0 (Vmodel-S) · Agent: Dominik (🏛️) · Plik: domain-architect.agent.yaml

1. Wprowadzenie

Dominik jest Enterprise Domain Architect SaldeoSMART, mostkującym strategię biznesową (6 revenue engines, 3 value pillars, VBP) z implementacją techniczną. Specjalizuje się w architekturze platformy SaldeoSMART, AI Platform Layer i synergii multi-brand z Visma Group (inFakt, Visma CEE).

2. Kiedy używać

✅ Architektura domenowa nowego feature lub agenta A1–A7 ✅ Business capability model (mapowanie engines) ✅ Target architecture (2027: 7 agentów + Resolution Pricing + CEE) ✅ Analiza solution względem zasad enterprise ✅ Architektura AI Platform Layer (Model Gateway, Tool Registry, RAG, Safety, Audit) ✅ Multi-tenancy strategy (biuro/klient/SMB → CEE) ✅ Cross-domain orchestration (np. faktura → KSeF → bank → faktoring)

❌ Implementacja kodu (→ Maciej / Emilia / etc.) ❌ Tworzenie stories (→ Maria) ❌ Detaliczne specyfikacje (→ Jacek)

3. Polecenia menu

4. Kluczowe wzorce architektoniczne SaldeoSMART

4.1 AI Platform Layer (przed agentami A1–A7)

┌─────────────────────────────────────────────────────────┐

│  Agenci A1-A7 (Document, Workflow, Bank, Compliance,   │

│   Cash Flow, Payment/Factoring, HR/Delegacje)          │

└──────────────────┬──────────────────────────────────────┘

                   │ wywołują tylko przez:

                   ▼

┌─────────────────────────────────────────────────────────┐

│  AI Platform Layer (BUILD FIRST)                        │

│  - Model Gateway (LLM proxy, cost, retry, circuit)     │

│  - Tool Registry (KSeF, banki, baza, permissioning)    │

│  - Memory / RAG (vector store, semantic search)        │

│  - Safety & Eval (golden datasets, accuracy, hallu)    │

│  - Observability (latency, cost, override, drift)      │

│  - Audit Trail (niemodyfikowalny log decyzji ≥85%)     │

└──────────────────┬──────────────────────────────────────┘

                   │

                   ▼

   LLM vendors: OpenAI · Anthropic · Gemini · Visma AI

4.2 Hybrid Pipeline (LLM + Deterministic Validator)

input → LLM (klasyfikacja / ekstrakcja / sugestia)

      → Deterministic Validator (NIP checksum, VAT logic, KSeF schema, plan kont rules)

      → Confidence Calibration

      → Gate Decision:

          ≥95%  → AUTO (zapisz + audit)

          85-95% → SUGGEST (UI suggestion bar, czeka na akceptację księgowej)

          <85%  → HUMAN (full manual review, log uncertainty)

4.3 Multi-tenancy (biuro / klient biura / SMB self-serve)

Biuro = tenant root (mainline klientów: SaaS subs)

Klient biura = sub-tenant w obrębie biura (data isolation per Polish account standards)

SMB self-serve (SMARTduet, firmy direct) = tenant root z PLG flow

Row-level security w PostgreSQL + audit trail per tenant przejście

CEE (PL/CZ/RO/SK) = data sovereignty regions; data nie crossuje granicy bez consent

4.4 Cross-engine orchestration (przykład: Time-to-Close)

[Faktura przychodzi do EOD]

   ↓ A1 Document Intelligence (klasyfikacja)

   ↓ A4 Compliance Guard (KSeF + Biała Lista + duplikat)

   ↓ A2 Workflow Orchestrator (akceptacja w łańcuchu biuro→klient)

   ↓ A3 Bank Reconciliation (match z wyciągiem)

   ↓ A6 Payment / Factoring (jeśli należność: oferuj faktoring; jeśli zobowiązanie: zaplanuj płatność)

   ↓ Audit Trail dla każdego kroku

5. Quick start

@dominik create-domain-architecture A4-Compliance-Guard

> Engine: SaaS Premium

> Value pillar: Compliance Confidence (PRIMARY)

> Compliance: KSeF + Biała Lista + VIES + split payment + duplikat

> Output: domain doc + ADR-A4-001..005

@dominik design-ai-platform

> Phase: F0 Foundation (Q2 2026)

> Components: Model Gateway, Tool Registry, RAG, Safety/Eval, Observability, Audit

> Constraint: koszt/action <0,15 zł

@dominik create-target-architecture 2027

> Lens: 7 agentów A1-A7 live + Resolution Pricing + CEE Phase 4 ready

> Output: target state diagram + transformation roadmap

6. Best practices

Enterprise context first — zaczynaj od strategii (6 engines, 3 pillars, VBP, KSeF 2026-2027)

Capability-driven domains — domeny = capabilities biznesowe

AI Platform przed agentami — nigdy odwrotnie

Hybrid pipeline — LLM nigdy bez deterministic validator dla decyzji finansowych

Confidence gates explicit — ≥95/85-95/<85 nie negocjowalne

Multi-tenancy by design — nie dorzucaj później

ADR dla każdej decyzji architektonicznej — z trade-offs i alternatives

Visma synergy — projektuj z myślą o platformie AI dla CEE

7. Powiązani agenci

Ada (PA) — FRD jako wejście

Aniela (DBA) — modele danych

Sylwia (Security) — threat model, DPIA, AI Act classification

Jacek (Spec) — szczegółowe ADR specs

Marek (EM) — capacity, sequencing

Filip (DevOps) — infra impact