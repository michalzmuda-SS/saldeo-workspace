# par-analytics — SaldeoSMART Product Analytics & Market Research

Pakiet agentów (skilli) dla zespołu. 8 agentów:
Iwona (Head of Analytics), Robert (Market Research), Karol (Competitive Intelligence), Hanna (Insights), Tomasz (Experiment/Survey), Marta (Pricing), Damian (BI/Analytics Engineer), Zofia (Insight Storyteller).

## Instalacja (Customize)
Aplikacja Claude → Customize / Ustawienia → Możliwości → dodaj plugin → wskaż `par-analytics.plugin`.
Wołaj agenta po imieniu (np. „bądź ...").

## Dobór modeli
Patrz `MODEL-ROUTING.md` — Haiku/Sonnet/Opus wg złożoności. Język domyślny: polski.
Kontekst domenowy: `project-context.md` w folderze projektu.

## Dołączone skille frameworka (v0.3.0) — dobrane pod zespół
Wspólny fundament: bmad-party-mode, bmad-brainstorming, bmad-advanced-elicitation, bmad-shard-doc, bmad-document-project, bmad-generate-project-context.
Specyficzne dla zespołu: bmad-market-research, bmad-domain-research, bmad-forge-idea, bmad-prfaq, bmad-product-brief, bmad-editorial-review-prose, bmad-editorial-review-structure, bmad-review-adversarial-general.

> Zestaw dobrany pod research/analitykę/insighty i raportowanie. Usunięto skille czysto deweloperskie (create-story, sprint-planning, code-review, ux, correct-course).
> Część skilli używa resolvera BMAD; mają fallback do ręcznej resolucji, więc działają bez pełnego `_bmad/`.

## Dodane skille własne (fizycznie)
- `lead-research-assistant` (v0.4.0) — identyfikacja i kwalifikacja leadów: analiza produktu/ICP,
  wyszukiwanie firm docelowych, scoring dopasowania, strategie kontaktu i decydenci. Pasuje do
  Roberta (Market Research) i Karola (Competitive Intelligence).
