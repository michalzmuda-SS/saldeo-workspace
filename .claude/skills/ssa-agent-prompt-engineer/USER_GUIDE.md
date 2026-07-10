Prompt Engineer — Przewodnik Użytkownika

Data: maj 2026 · Wersja: 1.0 (Vmodel-S) · Agent: Piotr (✒️) · Plik: prompt-engineer.agent.yaml

1. Wprowadzenie

Piotr zapewnia, że każdy prompt agentów A1–A7 jest robust, efficient i aligned z celem. Specjalizuje się w SaldeoSMART AI workflows: A1 Document Intelligence, A2 Workflow Orchestrator, A3 Bank Reconciliation, A4 Compliance Guard, A5 Cash Flow Forecasting, A6 Payment/Factoring, A7 HR/Delegacje.

Pracuje blisko z Sylwią (security/AI safety), Filipem (observability), Norbertem (eval pipelines).

2. Polecenia menu

3. SaldeoSMART prompt patterns

3.1 Hybrid pipeline (LLM + Deterministic Validator)

Prompt zwraca strukturę:

{

  "decision": "...",

  "confidence": 0.0–1.0,

  "evidence": ["cytat z dokumentu źródłowego", ...],

  "reasoning": "..."

}

Następnie:

  - DeterministicValidator (NIPChecksum, VATSchema, KSeFSchema, plan_kont rules)

  - ConfidenceCalibrator (recalibrate jeśli ECE >5%)

  - ConfidenceGate (≥95% / 85-95% / <85%)

  - AuditTrail.log

3.2 Cost optimization techniki

3.3 Prompt versioning

Każdy prompt w git: prompts/A1-Document-Intelligence/v3.2.txt

Semantic versioning: major.minor.patch

A/B testing przez Model Gateway (% traffic split)

Eval delta przed każdym deployem

Roll-forward + roll-back ready

4. Quick start

@piotr review-prompt prompts/A4-Compliance-Guard/v2.1.txt

> Output: clarity, goal alignment, security (prompt injection), token efficiency

@piotr tune-prompt prompts/A1-Document-Intelligence/v3.2.txt

> Goal: -20% tokens, ≥95% accuracy, no hallucination regression

> Strategy: prompt compression + few-shot reduction + output structure

@piotr build-eval-set A4-Compliance-Guard

> Source: 16 lat labeled decisions (z Anielą)

> Target: 5k golden + 1k holdout, per-cohort breakdown

@piotr red-team-prompt prompts/A1/v3.2.txt

> Vectors: prompt injection, jailbreak, data exfiltration, hallucination

> Co-pilot: Sylwia

5. Best practices

Clarity is king — pierwsze zadanie promptu: jednoznaczność

Goal-oriented — każdy token ma cel

Testability — prompt bez eval-u = prompt bez zaufania

Explain the why — nie zmieniaj bez uzasadnienia

Security first — prompt injection vulnerabilities

Token efficiency — krytyczne dla VBP unit economics

Iterative refinement — eval pipeline + production override rate jako feedback

Confidence calibration — prompty muszą zwracać kalibrowany confidence

Domain knowledge first-class — KSeF, JPK, plan kont, MPK = w prompcie

Versioning git-tracked — A/B test, eval delta, roll-back ready

6. Powiązani agenci

Sylwia — red-team, AI safety

Norbert — eval pipelines

Filip — observability + cost

Maciej — integration via Model Gateway

Aniela — golden datasets z 16 lat historii