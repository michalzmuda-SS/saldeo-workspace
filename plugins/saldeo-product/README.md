# saldeo-product - SaldeoSMART Product, Analytics and UX

Lekki, samodzielny pakiet dla pracy produktowej SaldeoSMART. Zawiera 11 person:

- Ada - Product Analyst
- Maria - Business Analyst
- Sara - Product Owner
- Stefania - UX Designer
- Lena - A1 Document Intelligence
- Klara - A2 Workflow Orchestrator
- Borys - A3 Bank Reconciliation
- Zofia - A4 Compliance Guard
- Tomasz - A5 Cash Flow Forecasting
- Wiktor - A6 Payment and Factoring
- Anna - A7 HR and Delegacje

Pakiet celowo nie zawiera Miszy (Head of Product), developerów, architektów, QA, SDET, DevOps, Security ani innych ról technicznych i operacyjnych.

## Skille pomocnicze

Dołączono wyłącznie dziewięć workflow wymaganych przez menu powyższych person:

`bmad-advanced-elicitation`, `bmad-brainstorming`, `bmad-create-story`, `bmad-document-project`, `bmad-market-research`, `bmad-party-mode`, `bmad-shard-doc`, `bmad-sprint-planning` oraz `bmad-ux`.

## Instalacja

W panelu Claude Code:

```text
/plugin marketplace add michalzmuda-SS/saldeo-workspace
/plugin install saldeo-product@saldeosmart-agents
```

Przez Claude Code CLI:

```bash
claude plugin marketplace add michalzmuda-SS/saldeo-workspace
claude plugin install saldeo-product@saldeosmart-agents
```

Po instalacji wywołaj personę po imieniu lub kodzie, na przykład `bądź Stefanią`, `bądź Adą` albo `uruchom A4`.