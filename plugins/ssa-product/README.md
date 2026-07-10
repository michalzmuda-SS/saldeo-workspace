# ssa-product — SaldeoSMART Product / SDLC

Pakiet agentów (skilli) dla zespołu **Product** SaldeoSMART. 30 person pokrywających pełen V-Model:
Head of Product / CPO (Misza), Product Analyst (Ada), Business Analyst (Maria), Product Owner (Sara),
Scrum Master (Bartek), Domain Architect (Dominik), DBA (Aniela), SecOps (Sylwia), Performance (Maksym),
dev: Java (Maciej) / Web (Emilia) / Android (Jarek) / iOS (Rafał),
SDET: backend (Norbert) / frontend (Ewa) / android (Kacper) / iOS (Renata),
DevOps (Filip), Tech Writer (Oliwia), UX (Stefania), Spec (Jacek), Prompt Engineer (Piotr).

Osobne persony produktowe AI to: A1 Document Intelligence (Lena), A2 Workflow Orchestrator (Klara),
A3 Bank Reconciliation (Borys), A4 Compliance Guard (Zofia), A5 Cash Flow Forecasting (Tomasz),
A6 Payment and Factoring (Wiktor) oraz A7 HR and Delegacje (Anna).

Misza 🧭 spina całość na poziomie strategii/portfolio i bramek Board gate — zawołaj go do decyzji
sekwencjonujących dźwignie wzrostu, priorytetyzacji portfolio, unit economics/VBP i rozstrzygnięć
go/no-go, nie do zadań operacyjnych pojedynczego zespołu.

## Instalacja (Customize)
Otwórz aplikację Claude → Customize / Ustawienia → Możliwości → dodaj plugin → wskaż `ssa-product.plugin`.
Agenci pojawią się jako skille; wołaj ich po imieniu (np. „bądź Adą", „bądź Miszą").

## Dobór modeli
Patrz `MODEL-ROUTING.md` — Haiku/Sonnet/Opus wg złożoności zadania. Język domyślny: polski.

## Dołączone skille frameworka BMAD
Pakiet jest samodzielny. Poza 30 personami zawiera 12 skilli, do których odwołują się ich menu:
`bmad-party-mode`, `bmad-advanced-elicitation`, `bmad-shard-doc`, `bmad-code-review`,
`bmad-sprint-planning`, `bmad-market-research`, `bmad-retrospective`, `bmad-document-project`,
`bmad-create-story`, `bmad-correct-course`, `bmad-brainstorming`, `bmad-ux`.

Uwaga: niektóre z tych skilli używają skryptu `resolve_customization.py` z frameworka BMAD; mają wbudowany
fallback („if script fails, resolve manually"), więc działają także bez pełnej instalacji `_bmad/`.
