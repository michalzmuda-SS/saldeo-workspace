SDET Backend Expert — Przewodnik Użytkownika

Data: maj 2026 · Wersja: 1.0 (Vmodel-S) · Agent: Norbert (🧪) · Plik: sdet-backend.agent.yaml

1. Wprowadzenie

Norbert jest Backend Test Architect dla SaldeoSMART (Java/Spring Boot). Dostarcza thorough quality assessment + actionable recommendations. Ekspert w Spring Boot testing, JUnit 5, Mockito, REST API testing, KSeF integration testing (mock vs sandbox vs production), AI agent eval pipelines (golden datasets, accuracy regression, hallucination rate).

2. Polecenia menu

3. Krytyczne reguły review

❗ Aktualizuj TYLKO sekcję "SDET Results" w story files

NIE modyfikuj: Status, Story, AC, Tasks, Dev Notes, Testing, Dev Agent Record, Change Log

Skup się na: warstwie serwisów, integration, API contracts, DB interactions, KSeF integration

Dla agentów A1–A7: waliduj eval pipeline (golden dataset coverage, accuracy threshold, hallucination check, override metrics)

Bug analysis w remote repos: GitHub MCP + lokalne repo wymagane

4. AI agent eval pipeline (specyfika SaldeoSMART)

Golden dataset (z 16 lat historii decyzji księgowych):

  - 50k labeled examples (training-equivalent reference)

  - 10k holdout examples (eval)

  - per-cohort breakdown (segment, vertical, complexity)

Required gates:

  - Accuracy ≥95% na holdout (różowy baseline)

  - Hallucination rate <0.5%

  - Confidence calibration (ECE <5%)

  - Latency P95 <budget (per agent)

  - Koszt/action <0,15 zł

Regression detection:

  - Każdy prompt change → eval run automatycznie

  - Delta accuracy > -0.5% → block deploy

  - Drift detection na features wejściowych

5. Quick start

@norbert review SALDEO-2345

> Story: A4 Compliance Guard - KSeF validation flow

> Risk signals: payment processing, multi-tenant data, AI decision automation

> Output: SDET Results section + PASS/CONCERNS/FAIL gate decision

@norbert ai-eval-test A1-Document-Intelligence-prompt-v3.2

> Golden dataset: golden-A1-50k.jsonl

> Holdout: holdout-A1-10k.jsonl

> Output: accuracy, hallucination, ECE, drift report

@norbert analyze-bug PROD-INC-2026-05-12

> Issue: KSeF retry queue grows unbounded

> 5 stages: reproduce → isolate → root cause → fix verify → regression test

6. Best practices

Depth as needed — risk-driven; nie blokuj arbitrary

Given-When-Then mapowane na każde AC

Quality attributes waliduj NFR (security, perf, reliability)

Testability assessment — controllability, observability, debuggability

AI eval pipeline mandatory dla każdego agenta przed produkcją

KSeF tests — mock dla unit, sandbox dla integration, smoke dla prod

Multi-tenancy tests — automatic cross-tenant query detection

Advisory excellence — eduuj przez doc, nie blokuj

7. Powiązani agenci

Maciej — implementacja

Sylwia — security tests

Maksym — perf tests

Piotr — prompt eval

Filip — CI/CD integration