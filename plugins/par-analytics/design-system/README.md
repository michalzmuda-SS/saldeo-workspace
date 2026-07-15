# Design System SaldeoSMART 2.0 — baza wiedzy

> **Plik autorytatywny dla UI.** Każdy task/projekt w Vmodel-S, który dotyka UI
> (prototyp, makieta, mockup, komponent frontendowy, Claude Design/Artifacts),
> wczytuje tę bazę. Data ekstrakcji z Figmy: **2026-07-10**.

## ⚠️ Obowiązująca reguła pracy

**Przed każdym prototypem lub makietą ZAWSZE zapytaj Michała (AskUserQuestion),
czy użyć design systemu SaldeoSMART** (pełne tokeny/komponenty vs. luźna stylizacja
vs. bez DS). Nie zakładaj odpowiedzi. Dotyczy to również Claude Design, artifactów
HTML/React i widgetów.

## Spis dokumentów

| Dokument | Zawartość | Plik Figma (fileKey) |
|---|---|---|
| `01-guidelines.md` | Tokeny: 16 rodzin kolorów (hex), spacing, radius, 40 stylów typografii (Poppins/Roboto), cienie, grid 12-kol. | Guide-Lines-2.0 (`QOaYDRi2OFCSNfCwGeVYac`) |
| `02-components.md` | Logo (48 wariantów) + katalog ~35 opublikowanych komponentów biblioteki (input, select, modal, toast, chips, tabs, accordion…) | Component-Library-2.0 (`Dp0bhhmbWP1sNHbzpNrkXm`) |
| `03-buttons.md` | Button: 25 wariantów z node ID (primary brand/red/yellow/green, bubble; small/xsmall/xxsmall; stany 500/600/700 + focus ring); Icon button (6 wariantów); Dropdown button; Button group; Card button (5 stanów) | Buttons-2.0 (`GWC12RqLyWrnf5xQK0jQja`) |
| `04-icons.md` | Katalog ~379 ikon × rozmiary 12–48 px, 10 kategorii, Material Symbols rounded/300, stroke custom 1.5 px, proces projektowania ikon custom, komponenty AI (AI_label) | Icons-2.0 (`rjJYpppxf27dPAzgE0zWoh`) |
| `05-patterns.md` | 7 wzorców w pełni (Action footer, Changelog, List group, Result/Spinner/Summary/Payment modal) + 3 częściowo (Page/Form section, Toasty) + katalog reszty | Patterns-2.0 (`fHwZoZmgLDEgygPdxo1Nnz`) |
| `06-table.md` | Pełna spec tabeli: 3 gęstości (XS 28 / S 32 / M 40 px), stany wierszy, 15 typów komórek, ~18 patternów kolumn, paginacja | Table-2.0 (`Q3shKUnWW1aZsXVlEHrJLF`) |

## Skrót najważniejszych tokenów

- Fonty: **Poppins SemiBold** (nagłówki), **Roboto** (treść; 13/16 = default UI).
- Kolor bazowy tekstu/ikon: `Color/Slate/900` = `#101623`.
- Stany brand: Brand/500 (default) → Brand/600 (hover) → Brand/700 (pressed); focus ring `Brand/200` = `#9DCBF9`.
- Radius bazowy: 4 px (przyciski), 8 px (kontenery/tabele); pełne wartości w `01-guidelines.md`.
- Zakres: tokeny dotyczą **wyłącznie aplikacji webowej**; brak dark mode (1 tryb).

## Praca z żywą Figmą (Figma MCP)

Dokumenty zawierają node ID — przy budowie konkretnego ekranu można dociągnąć
świeży kontekst: `get_design_context(fileKey, nodeId)`; tokeny: `get_variable_defs`.

## Znane luki (stan 2026-07-10, po uzupełnieniach z node ID od Michała)

1. **Buttons-2.0** — zmapowano 25 wariantów Button i 6 Icon button; nadal brak: stan disabled primary, serie secondary/tertiary/ghost/on-dark, stany Icon buttona poza default (szczegóły i procedura w `03-buttons.md`).
2. **Patterns-2.0** — 7 wzorców w pełni, 3 częściowo; brak wzorców nagłówka strony (Page header - background, page-name, company-select, employee-select) — potrzebne linki z node-id do tych ramek.
3. **Component-Library-2.0** — plik zawiera fizycznie tylko Logo; reszta to opublikowane zasoby biblioteki bez stron źródłowych w tym pliku (brak szczegółowych stylów inputów/selectów/modali).
4. Brak tokenów semantycznych (tylko prymitywy), breakpointów px dla grida i dokładnych wartości siatki keyline ikon.
