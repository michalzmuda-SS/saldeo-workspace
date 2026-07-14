# DESIGN.md — reguły UI / Design System (Vmodel-S)

> Jeden plik = jedno zadanie. Tu: zasady pracy z UI i Design Systemem SaldeoSMART 2.0.
> Wiedza źródłowa: folder `design-system/`. Reguły ogólne: `AGENTS.md`.

## Reguła nadrzędna (obowiązkowa)
**Przy każdym prototypie / makiecie / mockupie (Claude Design, artifacty, wizualizacje) ZAWSZE najpierw zapytaj Michała,**
czy użyć Design Systemu — i w jakim trybie:
1. pełne tokeny + komponenty (zgodność 1:1),
2. luźna stylizacja w duchu DS,
3. bez DS (szkic/roboczo).
Nie zakładaj odpowiedzi.

## Kiedy wczytać Design System
Każdy task dotykający UI wczytuje najpierw `design-system/README.md`, a potem właściwe dokumenty:
- `01-guidelines.md` — guidelines i tokeny
- `02-components.md` — komponenty
- `03-buttons.md` — buttony
- `04-icons.md` — ikony
- `05-patterns.md` — patterny
- `06-table.md` — tabele

Baza wyekstrahowana z 6 plików Figma (fileKeys w `design-system/README.md`), stan 2026-07-10.

## Świeże dane z Figmy
Gdy potrzebujesz aktualnych wartości/komponentów: Figma MCP `get_design_context(fileKey, nodeId)`
— node ID znajdziesz w dokumentach `design-system/`.

## Zgodność
- UI ma spełniać **WCAG 2.1 AA** oraz i18n (PL/EN/CS/RO/SK) — patrz compliance w `AGENTS.md` / `project-context.md` §5.
- Właściciel tematu UX: Stefania (`ssa-agent-ux-designer`), web: Emilia (`ssa-agent-web-dev`).

## Formuła promptu (brief jak dla projektanta)
Każdy brief UI/wizualny podawaj w tych sekcjach (Claude Design):
- **Goal** — jaki wynik ma osiągnąć.
- **Audience** — dla kogo (księgowy / właściciel biura / CFO SMB).
- **Format** — landing / deck / social / komponent / wideo.
- **Layout** — kluczowe sekcje i struktura.
- **Content** — jakie informacje/treść.
- **Constraints** — must-have, limity, technologia, rozmiar.
- **Tone** — głos marki i „feel" (spójny z `WRITING.md`).
Zasada: jeden mocny, kompletny prompt > wiele wektorowych. Iteruj w dwóch miejscach: zmiany strukturalne w czacie, edycje pikselowe na kanwie; przy wariantach proś o 2–3 i wybierz najlepszy.

## Output checks (bramka jakości UI — przed „done")
- [ ] Jasna hierarchia
- [ ] Spójny spacing
- [ ] Mocny kontrast (WCAG 2.1 AA)
- [ ] Poprawny copy (głos wg `WRITING.md`)
- [ ] Layout mobile-friendly (Web + Mobile parity)
- [ ] Zgodność z Design Systemem (tokeny/komponenty) — o ile tryb DS zatwierdzony
- [ ] Export-ready (właściwy format na następny krok)

## Pamięć designu
Sprawdzone wzorce, komponenty i decyzje wizualne zapisuj (np. w `design-system/` lub `memory.md`),
żeby nie odkrywać ich od nowa. „Good design = kontekst + struktura + iteracja, nie zgadywanie."
