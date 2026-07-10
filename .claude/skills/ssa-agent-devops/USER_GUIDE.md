DevOps Engineer — Przewodnik Użytkownika

Data: maj 2026 · Wersja: 1.0 (Vmodel-S) · Agent: Filip (🚀) · Plik: devops.agent.yaml

1. Wprowadzenie

Filip odpowiada za infrastrukturę i pipeline'y SaldeoSMART. Specjalizuje się w:

CI/CD (GitOps, signed artifacts, SAST/DAST/SBOM)

Kubernetes + IaC (Terraform/Pulumi)

AI Platform observability (per-agent latency, koszt/action, accuracy, override rate, drift)

FinOps dla AI (budgety per agent, alarmy gdy koszt/action > 0,15 zł)

KSeF resilience (retry queue, circuit breaker, multi-region failover)

Multi-region (PL → CEE: PL/CZ/RO/SK z data sovereignty)

2. Polecenia menu

3. AI Observability — metryki per agent

4. KSeF resilience

Retry queue w PostgreSQL z exponential backoff

Circuit breaker (Resilience4j) — open after 5 failures, half-open po 30s

Idempotency keys persistent

Failover region — jeśli KSeF PL down >5 min, retry queue rośnie; alarm na -1/0/+5 min do deadline'u podatkowego

Mock + sandbox + production — 3 środowiska; staging tests przed produkcją

5. FinOps dla AI

Budget per agent (Q3 2026):

  A1 Document Intelligence: 12k PLN/mies tokens

  A4 Compliance Guard:        4k PLN/mies tokens

  A2 Workflow Orchestrator:   2k PLN/mies tokens

  ...

Alarmy:

  - 80% budget consumed → warning (Slack #ai-finops)

  - 100% → page Marek + Filip + Piotr

  - koszt/action > 0,15 zł rolling 24h → page

Optymalizacje (z Piotrem):

  - prompt compression (10-30% token reduction)

  - cache deterministic prefixes (5-15% reduction)

  - mniejszy model gdy wystarcza (np. gpt-4o-mini dla klasyfikacji)

  - batching gdy nie blocking

6. Quick start

@filip create-ci-cd-pipeline saldeo-backend

> Stages: build → SAST → DAST → SBOM → unit → integration → deploy-staging → e2e → deploy-prod

> Signing: cosign

> Required gates: Sylwia (security), Norbert (test), Maksym (perf if hot path)

@filip setup-ai-observability

> Agents: A1, A2, A3, A4, A5, A6, A7

> Metrics: latency, koszt, accuracy, override rate, hallucination, drift

> Alerts: koszt/action >0,15 zł → page; accuracy <95% przez 7d → halt agent

@filip cost-optimization Q3-2026

> Scope: cloud + AI tokens

> Output: 3 najlepsze optymalizacje + estymacja oszczędności

7. Best practices

Automation first — nic ręcznie na produkcji

IaC dla wszystkiego (Terraform/Pulumi)

GitOps — git jako source of truth dla infra

Zero-downtime deploy — biura pracują 6:00–22:00; brak okna serwisowego

Blameless postmortem — RCA bez polowania na winnych

AI metrics first-class — nie afterthought

FinOps dla AI — budget per agent, alarmy explicit

Multi-region readiness — projektuj dla CEE Phase 4 dziś, nie później

Disaster recovery tested — quarterly DR drill

Audit log integrity — append-only, separate retention, off-site backup

8. Powiązani agenci

Marek — capacity, tech debt

Sylwia — security w pipeline

Maksym — perf gates

Norbert / Ewa / Kacper / Renata — test stages

Piotr — AI cost optimization

Aniela — DB migrations