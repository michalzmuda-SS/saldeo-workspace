Java Developer — Przewodnik Użytkownika

Data: maj 2026 · Wersja: 1.0 (Vmodel-S) · Agent: Maciej (☕) · Plik: java-dev.agent.yaml

1. Wprowadzenie

Maciej implementuje stories Java w SaldeoSMART z użyciem Spring Boot 3.5, Java 21 features i Maven. Specjalizuje się w SaldeoSMART backend: KSeF integration, multi-tenant data access (biuro/klient), AI agent backend (Model Gateway clients, Tool Registry, RAG, hybrid pipeline LLM + deterministic validator), embedded finance adapters (Click&Pay, PragmaGo, NFG, SMEO), bank integrations.

2. Stack

Java 21 LTS (Records, Pattern Matching, Virtual Threads, Sequenced Collections)

Spring Boot 3.5+

Maven 3.6+

JUnit 5 + Mockito

Liquibase (z Anielą)

PostgreSQL primary, MSSQL gdzie legacy biuro tego wymaga

Resilience4j (circuit breaker dla KSeF/banków/LLM)

SLF4J / Logback

OpenAPI 3.0 (Springdoc)

Pakiety: pl.brainshare.saldeosmart.{capability}

3. Polecenia menu

4. Krytyczne reguły SaldeoSMART backend

4.1 AI agent calls — TYLKO przez Model Gateway

❌ Bezpośrednio do OpenAI/Anthropic/Gemini ✅ Przez ModelGatewayClient (rate limit, retry, cost tracking, audit, fallback)

@Service

public class A1DocumentIntelligenceService {

    private final ModelGatewayClient gateway;

    private final DeterministicValidator validator;

    private final AuditTrailWriter audit;

    public ClassificationResult classify(Document doc, TenantContext ctx) {

        var llmResult = gateway.invoke(

            AgentName.A1_DOCUMENT_INTELLIGENCE,

            buildPrompt(doc),

            ctx.tenantId()

        );

        var validated = validator.validate(llmResult, doc);

        audit.log(ctx, doc, llmResult, validated);

        return ConfidenceGate.decide(validated);

    }

}

4.2 Multi-tenancy — TenantContext WSZĘDZIE

Każda metoda repository musi walidować TenantContext przed query. Cross-tenant query = security incident.

4.3 KSeF resilience

Retry z exponential backoff

Idempotency key dla każdej operacji

Circuit breaker (Resilience4j)

Persistent retry queue (Postgres-based)

Audit trail dla każdego call do KSeF (request + response + status)

4.4 Confidence gates w kodzie

public enum ConfidenceGate {

    AUTO(0.95), SUGGEST(0.85), HUMAN(0.0);

    public static Decision decide(ValidatedResult r) {

        return switch (r.confidence()) {

            case double c when c >= AUTO.threshold -> Decision.auto(r);

            case double c when c >= SUGGEST.threshold -> Decision.suggest(r);

            default -> Decision.humanReview(r);

        };

    }

}

4.5 AIDEV comments

Wszystkie nowe pliki Java mają nagłówek:

// AIDEV: created 2026-05-07

// AIDEV: agent: A1 Document Intelligence

// AIDEV: confidence-gates: see ConfidenceGate.java

// AIDEV: audit-required: yes

5. Quick start

@maciej develop-story SALDEO-2345

> Source: Maria's story z A4-FRD-001

> Spec: ADR-A4-005 (Jacek)

> Tests-first: failing JUnit, then implementation

@maciej integrate-ai-agent A1-Document-Intelligence

> Gateway: ModelGatewayClient

> Validator: NIPChecksum, VATSchema, KSeFXMLSchema

> Audit: AuditTrailWriter

> Fallback: human review queue

@maciej analyze-bug PROD-INC-2026-05-12

> Issue: KSeF retry queue grows unbounded

> Approach: 5-stage RCA

> Output: fix + regression test + monitoring alert

6. Best practices

Story File single source of truth — sekwencja tasks autorytatywna

Red-green-refactor — najpierw failing test

Modern Java — Records, Pattern Matching, Virtual Threads gdzie pasują

Constructor injection — żadnych field injections

Stateless services — state w bazie, nie w pamięci

TenantContext zawsze — cross-tenant query = security incident

Model Gateway zawsze — żadnych direct LLM calls

AIDEV comments — wymagane przy tworzeniu pliku

Tests cover happy + unhappy — KSeF rejection, low-confidence, duplikat

No PII in logs — NIP/dane faktury/kwoty filtered

7. Powiązani agenci

Maria — story input

Jacek — spec/ADR

Aniela — model danych, Liquibase

Norbert — testy, code review

Sylwia — security review

Maksym — perf gate

Filip — deploy + observability