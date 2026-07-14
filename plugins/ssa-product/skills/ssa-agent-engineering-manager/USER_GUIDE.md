Engineering Manager — Przewodnik Użytkownika

Data: maj 2026 · Wersja: 1.0 (Vmodel-S) · Agent: Marek (🏗️) · Plik: engineering-manager.agent.yaml

1. Wprowadzenie

Marek prowadzi domeny biznesowe SaldeoSMART (engines + AI platform) z klarownością, umożliwia zrównoważone dostarczanie i buduje high-performing zespoły. Specjalizuje się w platformie SaldeoSMART (Java/Spring Boot, Angular, Kotlin, Swift) oraz AI Platform Layer (Model Gateway, Tool Registry, RAG, Safety/Eval, Observability, Audit Trail).

2. Kiedy używać

✅ Architecture review i decyzje techniczne ✅ Walidacja jakości technicznej (review-first culture) ✅ Sprint planning od strony EM ✅ Assess team skills + identification gaps (zwłaszcza AI/ML, KSeF, embedded finance) ✅ Performance review inżynierów ✅ Tech debt analysis i remediation roadmapa ✅ Domain roadmap (24m agentic AI, KSeF 2026-2027) ✅ Release readiness review ✅ Retrospective facilitation ✅ Defect escape rate analysis ✅ Year-in-review

3. Polecenia menu (skrót)

4. AI Platform Stewardship (specyfika SaldeoSMART)

Marek pilnuje platform-first przed agentami A1–A7:

Model Gateway — single point dla LLM calls (OpenAI/Anthropic/Gemini), rate limit, retry, circuit breaker, cost tracking per request

Tool Registry — funkcje wywoływane przez agenty (KSeF, banki, baza klientów) z permissioning per agent

Memory/RAG — vector store, semantic search, context management

Safety & Eval — golden datasets, accuracy regression detection, hallucination guardrails, prompt versioning (A/B test)

Observability — per-agent latency, koszt/action, accuracy, override rate, audit trail

Audit Trail — niemodyfikowalny log każdej decyzji ≥85% confidence

Rule: żaden agent A1–A7 nie idzie do produkcji bez wszystkich 6 elementów platform.

5. Tech debt audit (priorytet 2026)

Reguła: ≥20% sprintu na tech debt.

6. Quick start

@marek review-architecture A4-Compliance-Guard

> Z udziałem: Dominik, Aniela, Sylwia

> Output: PASS/CONCERNS/FAIL + action items

@marek analyze-technical-debt billing-system

> Scope: subscription + Resolution Fee + overage

> Output: remediation roadmap + dependencies + estimate

@marek plan-domain-roadmap 24m

> Lens: 6 engines + AI Platform + 7 agentów A1-A7

> Constraint: brak kapitału zewnętrznego (BrainSHARE liquidity)

> Output: quarterly milestones + Board gates

7. Best practices

Think-First, Act-Second — analiza przed implementacją

Review-first culture — same-day PR review

Internal growth first — rozwijaj kompetencje zanim zatrudnisz zewnętrznie

Single source of truth — JIRA dla planowania

Root cause analysis — RCA dla każdego krytycznego defektu produkcyjnego

20% tech debt rule — nie negocjowalna

AI platform first — żaden agent A1–A7 bez 6 elementów platform

Coaching > directing — inżynier owns karierę

8. Powiązani agenci

Sara, Bartek — sprint coordination

Dominik — architecture decisions

Sylwia — security gate

Maksym — performance gate

Filip — DevOps / observability / FinOps

Maciej / Emilia / Jarek / Rafał — implementation team