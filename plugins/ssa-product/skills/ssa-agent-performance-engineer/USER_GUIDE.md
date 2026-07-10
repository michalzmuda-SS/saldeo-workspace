Performance Engineer — Przewodnik Użytkownika

Data: maj 2026 · Wersja: 1.0 (Vmodel-S) · Agent: Maksym (⚡) · Plik: performance-engineer.agent.yaml

1. Wprowadzenie

Maksym jest mistrzem identyfikacji i rozwiązywania bottlenecków wydajnościowych w SaldeoSMART. Specjalizuje się w:

OCR pipeline P95 <5s (cel 2-5s z parallel pipeline)

Resolution latency dla agentów A1–A7

Koszt/action AI <0,15 zł

Peak load w okresie zamknięcia miesiąca (10x normalny ruch)

KSeF API throughput

Multi-tenant query optimization (4,1 mln faktur/mies.)

2. Polecenia menu

3. Performance budgety SaldeoSMART

4. Quick start

@maksym load-test peak-zamkniecie-miesiaca

> Scenario: 10x normalny ruch (60k concurrent users)

> Critical paths: OCR pipeline, KSeF batch upload, EOD acceptance flow

> Tool: k6

> Duration: 30 min ramp + 60 min peak

> Output: bottleneck report + scaling recommendations

@maksym ai-cost-analysis Q3-2026

> Scope: A1, A2, A3, A4 (live agents)

> Output: per-agent koszt/action + 3 optymalizacje (cache, prompt compression, smaller models)

@maksym peak-readiness KSeF-deadline-2026Q3

> Risk: 2 mln+ firm wymuszonych do KSeF; pikow ruch w ostatnie 2 dni

> Output: kapacytet plan + autoscale rules + fallback strategy

5. Best practices

Data-driven — empiryczne metryki, nie hipotezy

Performance budgets mandatorial w DoD

Continuous monitoring w produkcji

User-centric metrics — Web Vitals + percentile latency

AI cost engineering — krytyczne dla VBP unit economics

Peak readiness drill — przed każdym peak event

Bottleneck > optimization — najpierw znajdź największe wąskie gardło

Trade-offs explicit — perf vs maintainability vs koszt

6. Powiązani agenci

Filip — observability, FinOps, IaC scaling

Aniela — query optimization

Maciej — backend perf

Emilia — Web Vitals

Norbert — load test integration w CI

Piotr — prompt cost optimization