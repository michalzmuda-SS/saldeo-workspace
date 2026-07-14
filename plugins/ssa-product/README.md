# ssa-product — SaldeoSMART Product / SDLC

Pakiet agentów (skilli) dla zespołu **Product** SaldeoSMART. 23 agenty pokrywające pełen V-Model:
Head of Product / CPO (Misza), Product Analyst (Ada), Business Analyst (Maria), Product Owner (Sara),
Scrum Master (Bartek), Domain Architect (Dominik), DBA (Aniela), SecOps (Sylwia), Performance (Maksym),
dev: Java (Maciej) / Web (Emilia) / Android (Jarek) / iOS (Rafał),
SDET: backend (Norbert) / frontend (Ewa) / android (Kacper) / iOS (Renata),
DevOps (Filip), Tech Writer (Oliwia), UX (Stefania), Spec (Jacek), Prompt Engineer (Piotr).

Misza 🧭 spina całość na poziomie strategii/portfolio i bramek Board gate — zawołaj go do decyzji
sekwencjonujących dźwignie wzrostu, priorytetyzacji portfolio, unit economics/VBP i rozstrzygnięć
go/no-go, nie do zadań operacyjnych pojedynczego zespołu.

## Instalacja (Customize)
Otwórz aplikację Claude → Customize / Ustawienia → Możliwości → dodaj plugin → wskaż `ssa-product.plugin`.
Agenci pojawią się jako skille; wołaj ich po imieniu (np. „bądź Adą", „bądź Miszą").

## Dobór modeli
Patrz `MODEL-ROUTING.md` — Haiku/Sonnet/Opus wg złożoności zadania. Język domyślny: polski.

## Dołączone skille frameworka BMAD (v0.3.0)
Pakiet jest samodzielny. Poza 23 agentami zawiera 12 skilli, do których odwołują się ich menu:
`bmad-party-mode`, `bmad-advanced-elicitation`, `bmad-shard-doc`, `bmad-code-review`,
`bmad-sprint-planning`, `bmad-market-research`, `bmad-retrospective`, `bmad-document-project`,
`bmad-create-story`, `bmad-correct-course`, `bmad-brainstorming`, `bmad-ux`.

Uwaga: niektóre z tych skilli używają skryptu `resolve_customization.py` z frameworka BMAD; mają wbudowany
fallback („if script fails, resolve manually"), więc działają także bez pełnej instalacji `_bmad/`.
