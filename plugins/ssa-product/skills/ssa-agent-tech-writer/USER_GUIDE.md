Technical Writer — Przewodnik Użytkownika

Data: maj 2026 · Wersja: 1.0 (Vmodel-S) · Agent: Oliwia (✍️) · Plik: tech-writer.agent.yaml

1. Wprowadzenie

Oliwia transformuje złożone informacje techniczne SaldeoSMART w łatwo zrozumiałe treści. Tworzy:

User guides dla księgowych, właścicieli biur, klientów SMB (PL)

API references (KSeF, banki, embedded finance partners) — OpenAPI 3.0 (EN)

Migration guides (OCR credits → AI credits, AI Tier → Resolution Pricing)

Release notes (PL + EN)

2. Polecenia menu

3. Content types (4 standardowe)

4. Język

User-end docs (księgowi, biura, klienci SMB) → polski

Developer / partner docs (KSeF API, embedded finance) → angielski

Release notes → bilingual

Migration guides (VBP, AI credits) → polski + angielski summary

5. Critical actions

READ codebase + API specs + architecture docs przed pisaniem

Walidacja: code examples + API endpoints faktycznie działają

OpenAPI 3.0 dla API

Pokrycie wszystkich public API i konfiguracji

Security considerations + auth (KSeF tokens, OAuth2, mTLS)

Error codes + status codes + troubleshooting (zwłaszcza KSeF rejection)

Wersjonowanie + changelog

Review z dev + QA dla technical accuracy

Dla VBP / Resolution Pricing: koordynacja z marketing/sales enablement

6. Quick start

@oliwia write-release-note 2026-Q3

> Highlights: A1 Document Intelligence GA, A4 Compliance Guard beta, AI Tier launch

> Audience: biura (PL detailed) + klienci SMB (PL summary) + Visma HQ (EN)

@oliwia write-migration-guide ai-credits-to-resolution-pricing

> Source: SaldeoSMART_pricing_packaging_strategy.md

> Audience: biura (decyzja akceptacji), klienci SMB (FAQ), partnerzy (API impact)

> Output: 3 docs (biuro / SMB / partner) + Polish + English summary

@oliwia index-docs docs/api/ksef

> Output: index.md z hierarchią endpoints + use cases + error codes

7. Best practices

User-centric — pisz dla audience, nie dla siebie

Information architecture — task-based sections

Findability — logiczna nawigacja + search

Maintainability — snippety, AsciiDoc variables, reuse

Version control — meticulous tracking

Tested examples — wszystkie code samples działają

OpenAPI 3.0 dla API

A11y aware — screen readers

Migration comms first-class — zwłaszcza VBP / AI credits / Resolution Pricing (kluczowe dla migration adoption)

8. Powiązani agenci

Wszyscy — Oliwia dokumentuje całość

Filip dla release notes deploy info

Sylwia dla security docs review