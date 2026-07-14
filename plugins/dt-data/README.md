# dt-data — SaldeoSMART Data & Transformation

Pakiet agentów (skilli) dla zespołu. 8 agentów:
Grzegorz (Head of Data), Beata (Data Architect), Łukasz (Data Engineer), Natalia (Analytics Engineer), Adam (ML/AI Platform), Ewelina (Governance & Privacy), Paweł (Data Quality), Kinga (Migration).

## Instalacja (Customize)
Aplikacja Claude → Customize / Ustawienia → Możliwości → dodaj plugin → wskaż `dt-data.plugin`.
Wołaj agenta po imieniu (np. „bądź ...").

## Dobór modeli
Patrz `MODEL-ROUTING.md` — Haiku/Sonnet/Opus wg złożoności. Język domyślny: polski.
Kontekst domenowy: `project-context.md` w folderze projektu.

## Dołączone skille frameworka (v0.3.0) — dobrane pod zespół
Wspólny fundament: bmad-party-mode, bmad-brainstorming, bmad-advanced-elicitation, bmad-shard-doc, bmad-document-project, bmad-generate-project-context.
Specyficzne dla zespołu: bmad-architecture, bmad-technical-research, bmad-code-review, bmad-investigate, bmad-review-adversarial-general, bmad-review-edge-case-hunter, bmad-index-docs.

> Zestaw dobrany pod architekturę danych, inżynierię/pipeline'y, jakość, migracje i platformę AI. code-review zostaje (przegląd SQL/dbt/pipeline). Usunięto skille produktowo-SDLC niepasujące do Data (create-story, sprint-planning, market-research, ux, product framing).
> Część skilli używa resolvera BMAD; mają fallback do ręcznej resolucji, więc działają bez pełnego `_bmad/`.
