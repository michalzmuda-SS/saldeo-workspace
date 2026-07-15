# Buttons 2.0 — przyciski design systemu SaldeoSMART

```
Plik Figma:      Buttons-2.0
fileKey:         GWC12RqLyWrnf5xQK0jQja
URL:             https://www.figma.com/design/GWC12RqLyWrnf5xQK0jQja/Buttons-2.0
Biblioteka:      "Buttons 2.0" (library key: lk-61dc2afcce757877535cd49e9db705d6e5e69ffba4c488eae0cb07dbc2f55d171187baa24e255755178bfa6eeb7fa34a911c5df74d3b12c033b15eb2497765a0)
Data ekstrakcji: 2026-07-10 (uzupełnienie: 2026-07-10 — sondowanie pojedynczych node ID wariantów)
Zakres:          komponenty: Button, Icon button, Dropdown button, Card button, Button group, button group/base, indicator
Status:          Card button — PEŁNA. Dropdown button — PEŁNA. Button group — PEŁNA.
                 Button — CZĘŚCIOWA (25 wariantów zmapowanych node-po-nodzie, w tym wszystkie stany primary/brand small;
                 disabled primary i dalsze Color Varianty/Varianty nadal niezmapowane).
                 Icon button — CZĘŚCIOWA (6 wariantów zmapowanych, wymiary właściwości ustalone).
                 Strona "Button & Icon button" (0:1) jako całość nadal przekracza limity MCP (timeout),
                 ale get_metadata/get_design_context na POJEDYNCZYCH node ID wariantów działa — tak zebrano poniższe dane.
```

## Struktura pliku

| Node ID | Strona | Zawartość |
|---|---|---|
| `0:1` | ✅ Button & Icon button | Component sety Button i Icon button + dokumentacja użycia (strona zbyt duża dla MCP w całości; warianty czytane pojedynczo) |
| `3:14877` | ✅ Dropdown button | Component set Dropdown button + zasady użycia |
| `15:15392` | ✅ Card button | Component set Card button (5 stanów) + pełna dokumentacja użycia |
| `18:15447` | ✅ Button group | Component sety Button group i button group/base + zasady użycia |

## Komponenty opublikowane w bibliotece "Buttons 2.0"

| Komponent | Typ | componentKey | Aktualizacja |
|---|---|---|---|
| Button | component_set | `b186428c31e023694d3b14efba24847ddf6043f7` | 2026-01-23 |
| Icon button | component_set | `33becdecaf9424c3788dc47d19670b2f3bf419b7` | 2026-01-23 |
| Dropdown button | component_set | `7993f2e346776773c2f060898b29e6251c226c8f` | 2026-01-23 |
| Card button | component_set | `b4136c912996ea88ccdf46f9b1f448b79c44b7cd` | 2026-01-27 |
| Button group | component_set | `ec3280a3ecc9b19bf32fa0e6884af6a8f13ee3c0` | 2026-01-23 |
| button group/base | component_set (bazowy, wewnętrzny) | `d1f73ec2ef1a51683a0e5369627671b57b83a2e0` | 2026-01-23 |
| indicator | component_set (pomocniczy) | `f3b9d75acf1ba5d02d98dc05429e021c440271fb` | 2025-11-19 |

---

# 1. Card button (strona `15:15392`) — DANE PEŁNE

Karta-przycisk: cały obszar karty jest klikalny. Component set: **`15:15401`** (wariant tylko po `State`).

## 1.1. Warianty i style (tabela główna)

Typografia wspólna: title = `body/default/medium-13/medium` (Roboto Medium 13/16, waga 500), message = `body/default/medium-13/regular` (Roboto Regular 13/16, waga 400). Szerokość referencyjna wariantu: 320 px, wysokość zależna od treści (40 px jedna linia, 58 px title+message, 74 px w przykładach formularza).

| Wariant | Stan | Tło | Tekst (title/message) | Obramowanie | Radius | Padding | Node ID |
|---|---|---|---|---|---|---|---|
| Card button | default | `Color/Slate/50` #F7F8FA | `Color/Slate/900` #101623 | 1 px `Color/Slate/300` #D2D5DA | 4 px (`Spacing/4`) | 8 px (`Spacing/8`) | `15:15402` |
| Card button | hover | `Color/Slate/200` #E5E7EB | `Color/Slate/900` #101623 | 1 px `Color/Slate/300` #D2D5DA | 4 px | 8 px | `15:15431` |
| Card button | focus | jak default (#F7F8FA, wewn. karta) | `Color/Slate/900` #101623 | wewn.: 1 px #D2D5DA; zewn. ring: **2 px `Color/Brand/200` #9DCBF9**, radius 4 px | 4 px | 8 px (wewn.) | `15:15423` (wewn. `15:15424`) |
| Card button | pressed | `Color/Slate/200` #E5E7EB | `Color/Slate/900` #101623 | 1 px `Color/Slate/400` #B7BBC3 | 4 px | 8 px | `15:15416` |
| Card button | disabled | `Color/Slate/100` #F3F4F6 | `Color/Slate/600` #858D99 (title i message) | 1 px `Color/Slate/100` #F3F4F6 (niewidoczne) | 8 px (uwaga: w pliku disabled ma radius 8, pozostałe stany 4 — prawdopodobnie niespójność projektu) | 8 px | `15:15409` |

## 1.2. Anatomia (auto-layout, wymiary wewnętrzne)

```
Card button (padding 8, radius 4, border 1)
├── Icon wrapper  — padding 2 px, ikona 20x20 px (w stanie focus wrapper ma padding 4 px)
└── Message (kolumna) — padding: left 4, right 8, top/bottom 4; gap title↔message = 2 px (Spacing/2)
    ├── Title   — Roboto Medium 13 / line-height 16
    └── Message — Roboto Regular 13 / line-height 16
```

Elementy konfigurowalne (boolean properties): **icon** (ikona w lewym górnym rogu), **title** (pogrubiony tytuł), **message** (tekst). Przykładowe kombinacje na stronie: icon+title (280x40), icon+title+message (280x58, 320x58).

## 1.3. Tokeny użyte w komponencie

| Token | Wartość | Rola |
|---|---|---|
| Color/Slate/50 | #F7F8FA | tło default/focus |
| Color/Slate/100 | #F3F4F6 | tło + border disabled |
| Color/Slate/200 | #E5E7EB | tło hover/pressed |
| Color/Slate/300 | #D2D5DA | border default/hover/focus |
| Color/Slate/400 | #B7BBC3 | border pressed |
| Color/Slate/600 | #858D99 | tekst disabled |
| Color/Slate/900 | #101623 | tekst default |
| Color/Brand/200 | #9DCBF9 | focus ring 2 px |
| Color/Base/White | #FFFFFF | (pomocniczo w przykładach) |
| Color/Purple/500 | #6249C5 | kolor przykładowej ikony |
| Spacing/2 | 2 | gap title↔message, padding icon wrappera |
| Spacing/4 | 4 | radius, padding wewn. |
| Spacing/8 | 8 | padding karty |

## 1.4. Zasady użycia (treść z dokumentacji na stronie, ramki `15:15438`, `15:15487`)

Trzy scenariusze użycia karty klikalnej:
1. **Karta-akcja** (Card button): klik w kartę wykonuje akcję. Przykłady: wybór metody weryfikacji dwuetapowej na ekranie logowania, wybór sposobu odczytywania na liście dokumentów.
2. **Karta przenoszalna (drag)**: kartę można chwycić i przenieść. Przykład: karta zadania na tablicy zadań (to nie jest Card button — osobny wzorzec).
3. **Karta-wybór (selekcja)**: klik zaznacza wybór. Przykład: wybór szablonu faktury w ustawieniach konta.

Stany komponentu: default, hover, focus, pressed, disabled.

Nota projektanta `[2.0]` (node `680:32372`): *zmiana fontu na 13 Roboto, podmiana kolorów na palety Slate, odstęp między title a message 2 px* — potwierdza powyższe wartości jako aktualne dla wersji 2.0.

---

# 2. Button (strona `0:1`, component set `b186428c…`) — DANE Z SONDOWANIA NODE-PO-NODZIE

## 2.1. Wymiary wariantów (variant properties)

| Właściwość | Wartości potwierdzone | Uwagi |
|---|---|---|
| **Variant** | `primary`, `bubble` | na kanwie widoczne też serie secondary/tertiary/ghost/on-dark — node ID niezmapowane |
| **Color Variant** | `brand`, `red`, `yellow`, `green`, `slate` (dla bubble) | siatka ma jeszcze min. 2 wiersze kolorów między red a yellow (y=246, y=318) — niezidentyfikowane |
| **Size** | `small (default)` (min-h 28), `xsmall` (min-h 24), `xxsmall` (min-h 20) | |
| **State** | `default`, `hover`, `focus`, `pressed`, `disabled` | disabled potwierdzone tylko dla bubble (`1:2874`); kolumna disabled primary istnieje na kanwie (x≈749), ID nieznalezione |

Boolean properties (wspólne): **leadingIcon** (16 px), **trailingIcon** (16 px), **dropdown** (chevron 20 px w kontenerze 16×20), **counterLabel**, **showAiLabel** (20×16), **badge** (dot 8 px, pozycja right −8 / top −8). Tekst: property `buttonText`.

## 2.2. Style per rozmiar (anatomia)

| Size | Min-h | Padding-x | Gap | Typografia (primary) | Radius | Przykładowy wymiar |
|---|---|---|---|---|---|---|
| small (default) | 28 px | 8 px (`Spacing/8`) | 4 px (`Spacing/4`) | Roboto **Medium** 13/16, tracking −0.13 (`body/condensed/medium-13/medium`) | 4 px (`Spacing/4`) | 54×28 |
| xsmall | 24 px | 8 px (primary); 4 px (bubble) | 4 px | primary: do potwierdzenia; bubble: Roboto **Regular** 12/14, tracking −0.12 | 4 px | 52×24 (primary), 43×24 (bubble) |
| xxsmall | 20 px | 8 px (primary); 4 px (bubble) | 4 px | primary: do potwierdzenia; bubble: Roboto **Regular** 11/14, tracking −0.11 | 4 px | 49×20 (primary), 40×20 (bubble) |

Counter label (wspólny element): tło `Color/Brand/50` #E0F0FF, tekst `Color/Brand/600` #0052A3 Roboto Medium 12/14, wysokość 16, min-szerokość 16, padding-x 4 (`space/xsmall`), radius 1000 (`Spacing/full-rounded`).

## 2.3. Stany primary/brand (small) — pełne style

| Stan | Tło | Tekst | Dodatkowo | Node ID |
|---|---|---|---|---|
| default | `Color/Brand/500` #0066CC | biały (`Color/Base/White`) Medium 13/16 | radius 4 | `1:2827` |
| hover | `Color/Brand/600` #0052A3 | biały | radius 4 | `1:3146` |
| focus | wewn. przycisk: `Color/Brand/500` #0066CC | biały | zewnętrzny ring: **border 2 px `Color/Brand/200` #9DCBF9**, radius 4; wewn. przycisk dodatkowo drop-shadow 0 1 0 rgba(37,38,38,0.04) | `1:3242` |
| pressed | `Color/Brand/700` #003D7A | biały | radius 4 | `1:3194` |
| disabled | node ID nieznaleziony; wg wzorca bubble/Card button: tło `Color/Slate/100` #F3F4F6, tekst `Color/Slate/600` #858D99 | — | — | — |

## 2.4. Color Varianty primary — kolory per stan

| Color Variant | default | hover | pressed | Tekst |
|---|---|---|---|---|
| brand | `Brand/500` #0066CC | `Brand/600` #0052A3 | `Brand/700` #003D7A | biały |
| red | `Red/500` #D11938 | `Red/600` #A9142D | `Red/700` #800F22 | biały |
| yellow | `Yellow/500` #FFC700 | wg wzorca Yellow/600 (do potwierdzenia) | wg wzorca Yellow/700 (do potwierdzenia) | **`Yellow/900` #332800** (ciemny!) |
| green | `Green/500` #24882A | wg wzorca Green/600 (do potwierdzenia) | wg wzorca Green/700 (do potwierdzenia) | biały |

Wzorzec spójny: default = paleta/500, hover = /600, pressed = /700 (potwierdzony pomiarem dla brand i red).

## 2.5. Wariant bubble (slate) — style

| Stan | Tło | Tekst | Padding / typografia | Node ID |
|---|---|---|---|---|
| default (xsmall) | `Color/Slate/200` #E5E7EB | `Color/Slate/900` #101623 | px 4, py 5, min-h 24, Roboto Regular 12/14, radius 4 | `1:2843` |
| default (xxsmall) | `Color/Slate/200` #E5E7EB | `Color/Slate/900` #101623 | px 4, min-h 20, Roboto Regular 11/14, radius 4 | `1:2866` |
| disabled (xxsmall) | `Color/Slate/100` #F3F4F6 | `Color/Slate/600` #858D99 | px 4, min-h 20, Roboto Regular 11/14, radius 4 | `1:2874` |

## 2.6. Pełna mapa zmapowanych wariantów (nazwa → node ID → wymiar)

| Variant | Color Variant | Size | State | Node ID | Wymiar |
|---|---|---|---|---|---|
| primary | brand | small (default) | default | `1:2827` | 54×28 |
| primary | brand | small (default) | hover | `1:3146` | 54×28 |
| primary | brand | small (default) | focus | `1:3242` | 54×28 |
| primary | brand | small (default) | pressed | `1:3194` | 54×28 |
| primary | brand | xsmall | default | `1:2835` | 52×24 |
| primary | brand | xsmall | pressed | `1:3202` | 52×24 |
| primary | brand | xxsmall | default | `1:2858` | 49×20 |
| primary | brand | xxsmall | pressed | `1:3210` | 49×20 |
| primary | green | small (default) | default | `1:3122` | 54×28 |
| primary | green | small (default) | pressed | `1:3218` | 54×28 |
| primary | green | xsmall | default | `1:3130` | 52×24 |
| primary | red | small (default) | default | `1:2906` | 54×28 |
| primary | red | small (default) | hover | `1:3050` | 54×28 |
| primary | red | small (default) | pressed | `1:2978` | 54×28 |
| primary | red | xsmall | default | `1:2930` | 52×24 |
| primary | red | xsmall | pressed | `1:3002` | 52×24 |
| primary | red | xxsmall | default | `1:2954` | 49×20 |
| primary | red | xxsmall | pressed | `1:3026` | 49×20 |
| primary | yellow | small (default) | default | `1:2922` | 54×28 |
| primary | yellow | small (default) | pressed | `1:2994` | 54×28 |
| primary | yellow | xsmall | default | `1:2946` | 52×24 |
| primary | yellow | xxsmall | default | `1:2970` | 49×20 |
| bubble | slate | xsmall | default | `1:2843` | 43×24 |
| bubble | slate | xxsmall | default | `1:2866` | 40×20 |
| bubble | slate | xxsmall | disabled | `1:2874` | 40×20 |

**Układ siatki na kanwie** (pomaga w dalszym mapowaniu): kolumny stanów dla bloku small: default x=57, hover x=230, focus x=403, pressed x=576 (disabled prawdopodobnie x≈749); blok xsmall od x≈3084, blok xxsmall od x≈3970. Wiersze kolorów co ~72 px: brand y=30, green y=102, red y=174, (dwa niezidentyfikowane wiersze y=246 i y=318), yellow y=390; warianty bubble/slate w strefie y≈2350. Pokryty zakres ID: `1:2827`–`1:3242` (siatka co 8 ID z lukami — część slotów zwraca „invalid node selection"/„not found", prawdopodobnie warianty odtworzone później pod wyższymi ID, np. 761:…, 1209:…, 2644:…).

---

# 3. Icon button (strona `0:1`, component set `33becdec…`) — DANE CZĘŚCIOWE

## 3.1. Wymiary wariantów

| Właściwość | Wartości potwierdzone |
|---|---|
| **Variant** | `primary`, `neutral`, `outline` |
| **Color Variant** | `green`, `red`, `slate`, `white` (na kanwie także niebieski, fioletowy, żółty — niezmapowane) |
| **Size** | `xsmall` (24×24), `small (default)` (28×28), `medium` (32×32), `large (24 icon)` (40×40) |
| **State** | `default` (hover/pressed/focus/disabled istnieją na kanwie — ID niezmapowane) |
| **Shape** | `square`, `circle` |

Boolean/instance properties: **badge** (dot 8 px, pozycja right −9 / top −9), **iconValue20** (podmienialna ikona 20 px; w large ikona 24 px — wg nazwy rozmiaru).

## 3.2. Zmapowane warianty i style

| Variant | Color | Size | Shape | Wymiar | Style | Node ID |
|---|---|---|---|---|---|---|
| neutral | slate | small (default) | square | 28×28 | tło `Color/Slate/50` #F7F8FA, border 1 px `Color/Slate/300` #D2D5DA, radius 4, content padding 4, ikona 20 px | `1:6165` |
| outline | white | small (default) | square | 28×28 | tło przezroczyste, border 1 px `Color/Base/White` #FFFFFF (odmiana na ciemne tła), radius 4, padding 4, ikona 20 px | `1:6173` |
| outline | white | small (default) | circle | 28×28 | jak wyżej, kształt okrągły | `1:6181` |
| outline | white | xsmall | square | 24×24 | jw., mniejszy kontener | `1:6205` |
| primary | green | medium | square | 32×32 | tło Green/500 #24882A (wg wzorca primary) | `1:6141` |
| primary | red | large (24 icon) | square | 40×40 | tło Red/500 #D11938 (wg wzorca primary), ikona 24 px | `1:6157` |

Anatomia: kontener → `content` (padding 4 przy small, ikona 20×20) → opcjonalny `indicator` (dot-badge 8 px). Wewnętrzny node content dla neutral/slate/small: `1:6166`.

Skala rozmiarów: xsmall 24 px, small 28 px (spójny z Button small min-h 28), medium 32 px, large 40 px (ikona 24 px). Zakres ID pokryty sondowaniem: `1:6141`–`1:6205`.

---

# 4. Dropdown button (strona `3:14877`, component set `7993f2e3…`) — DANE PEŁNE

## 4.1. Warianty

Set „Dropdown button": **trigger** = `dropdown button` (przycisk z tekstem, 74×28 zamknięty) lub `icon button` (28×28) × **Open** = true/false × **Align** = bottom/top × left/center/right (6 pozycji menu). Razem 24 kombinacje, node ID: **`3:24294`–`3:24351`**. Przykłady: `3:24294` = dropdown button / open / bottom-left; `3:24297` = dropdown button / closed.

## 4.2. Style

**Trigger button** (= Button primary/brand small z włączonym `dropdown`): tło `Color/Brand/500` #0066CC, radius 4, min-h 28, padding-x 8, tekst biały Roboto Medium 13/16 + chevron 20 px (kontener 16×20).

**Otwarte menu**: szerokość 156 px, tło białe, border 1 px `Color/Slate/200` #E5E7EB, radius 4, padding 4 (poziomo) / 1 (pionowo), cień drop-shadow 0 4 4 rgba(0,20,41,0.16) (token `shadow-20`: 0 4 8 #00142929). Pozycja menu: gap 4 px pod/nad przyciskiem (wg Align).

**Action cell** (pozycja menu): padding 8/4, tekst Roboto Regular 13/16 `Color/Slate/900` #101623; opcjonalny counter (tło `Color/Slate/600` #858D99, tekst biały Medium 12/14) i dot-badge 8 px.

## 4.3. Zasady z kanwy

- Szerokość komponentu należy dopasować ręcznie do szerokości przycisku.
- Otwarte menu wymaga ustawienia „Canvas stacking: First on top" w auto layout (menu nad treścią).

---

# 5. Button group (strona `18:15447`) — DANE PEŁNE

## 5.1. Component sety

**„Button group"** — set `738:483`, warianty: **Separator** true/false × **Type** button / icon button / mixed. Node ID wariantów: `738:462`, `738:566`, `738:484`, `738:652`, `738:570`, `738:656`.

**„button group/base"** (bazowy) — set `1:11267`, warianty: **Position** start/middle/end × **Type** button/icon button × **Separator** × **Variant** neutral / primary brand / secondary brand / yellow × **Size** small (28 px) / xsmall (24 px).

## 5.2. Style (wariant neutral)

- Tło `Color/Slate/50` #F7F8FA, border `Color/Slate/300` #D2D5DA.
- Border per Position: **start** = pełny border + radius 4 z lewej; **middle** = tylko góra/dół (+ prawy, gdy separator); **end** = góra/dół/prawy + radius 4 z prawej.
- Tekst: Roboto Medium 13/16 `Color/Slate/900` #101623; min-h 28, padding-x 8.
- Icon button w grupie: padding 4, ikona 20 px.

## 5.3. Zasady z kanwy

- Grupę stosuj, gdy akcje są ze sobą powiązane; każdy przycisk w grupie jest osobno klikalny.
- Warianty kolorystyczne budowane z tokenów neutral/brand/yellow.
- `Separator=false` stosowany w period filter; `Separator=true` w filtrach.
- Opcje per przycisk: leading icon, counter label (po tekście, przed trailing icon).

---

# 6. Ograniczenia ekstrakcji i jak uzupełnić resztę

**Metoda, która działa:** strona `0:1` w całości przekracza limity Figma MCP (`get_metadata` → timeout 180 s), ale `get_metadata`/`get_design_context`/`get_variable_defs` na **pojedynczych node ID wariantów** działa poprawnie. Warianty leżą w siatce co ~8 ID z lukami (sloty usunięte/odtworzone później mają wyższe ID). Tak zmapowano 25 wariantów Button i 6 Icon button.

**Czego nadal brakuje:**
1. **Button — disabled dla primary** (wszystkie kolory): kolumna istnieje na kanwie (x≈749), node ID nie trafione sondowaniem; style najpewniej = tło `Slate/100` #F3F4F6, tekst `Slate/600` #858D99 (wzorzec bubble disabled + Card button).
2. **Button — pozostałe Varianty/Color Varianty**: serie secondary/tertiary/ghost oraz odmiany on-dark widoczne na zrzucie strony; dwa niezidentyfikowane wiersze kolorów (y=246, y=318 — prawdopodobnie kolejne palety, np. slate/purple); hover/focus dla xsmall i xxsmall (istnieją, zmapowano tylko pressed); typografia primary xsmall/xxsmall (prawdopodobnie 12/14 i 11/14, jak w bubble — do potwierdzenia).
3. **Icon button — stany** hover/focus/pressed/disabled oraz kolory brand/purple/yellow; dokładne paddingi dla xsmall/medium/large; node ID samego component setu.
4. **Node ID component setów Button i Icon button** (rodziców) — sondowanie ID sąsiadujących z pierwszym wariantem nie trafiło.

**Procedura uzupełnienia (5 minut, wymaga otwarcia Figmy):**
1. Otwórz plik w Figmie, kliknij component set **Button**, skopiuj link (Ctrl/Cmd+L) — URL zawiera `node-id=XXX-YYY`.
2. Powtórz dla **Icon button** (zwłaszcza dla wariantów disabled/hover).
3. Przekaż URL-e agentowi — `get_design_context` + `get_variable_defs` na tych ID uzupełnią brakujące tabele.

Alternatywnie: kontynuacja sondowania pojedynczych ID wokół pokrytych zakresów (`1:2827`–`1:3242`, `1:6141`–`1:6205`) oraz w pasmach 761:…, 1209:…, 2644:… (tam trafiły odtworzone węzły).
