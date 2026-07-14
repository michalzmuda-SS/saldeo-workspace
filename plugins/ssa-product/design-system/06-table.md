# 06 – Table (Tabela 2.0)

- **Plik Figma:** Table-2.0
- **fileKey:** `Q3shKUnWW1aZsXVlEHrJLF`
- **URL:** https://www.figma.com/design/Q3shKUnWW1aZsXVlEHrJLF/Table-2.0
- **Data ekstrakcji:** 2026-07-10
- **Strona z zawartością:** node `0:1` (sekcje: Header, Komórki tabeli, Komponent tabeli, Patterny dla kolumn (XS), Kolumny, Wiersze, Akcje zbiorcze, Przykłady tabel)
- **Biblioteka:** „Table 2.0" (opublikowana, dostępna w search_design_system)
- **Font:** Roboto (Regular / Medium)

Dokument służy do prototypowania widoków tabelarycznych SaldeoSMART. Wszystkie wartości pochodzą wprost z Figmy.

---

## 1. Anatomia tabeli

Komponent `Table` (component set, node `1734:41315`) ma 4 warianty:

| Wariant | Node ID |
|---|---|
| Default (top bar + slot + pagination bar) | `2:35228` |
| Default without pagination bar | `1734:41726` |
| Default without top bar | `1734:41316` |
| Only slot | `1734:43070` |

Struktura pionowa wariantu **Default** (od góry):

1. **Table top bar** (node instancji `977:28260`) — pasek narzędzi nad tabelą
2. **Slot box** — obszar na właściwą siatkę tabeli (nagłówek + wiersze składane z komórek); bg white, border L/P 1px `Slate/300`
3. **Horizontal scrollbar** (opcjonalny, prop `horizontalScrollbar`) — tor 12px, bg `Slate/200`, uchwyt `Slate/500 #a0a6b0`, radius 100px
4. **table-bulk-actions** (opcjonalny, prop `bulkActions`, set `2:34809`) — pasek akcji zbiorczych
5. **Action footer** (opcjonalny, prop `actionFooter`, node `2567:30368`) — stopka z przyciskami
6. **Table pagination bar** (node instancji `2:19163`) — pasek paginacji

Cała tabela ma zaokrąglenie **8px tylko na zewnętrznych rogach** (top bar: rounded-top 8px; pagination bar: rounded-bottom 8px), obrys 1px `Slate/300` dookoła.

### Table top bar (`977:28260`)
- bg `Base/White`, border 1px `Slate/300`, radius góra 8px, **padding 12px**, layout justify-between
- **Lewa strona** (gap 12px): opcjonalny mode switch (toggle-pill h=28px, aktywny segment bg `Slate/200`, radius 1000px, tekst 13px Medium), przyciski akcji (small button: min-h 28px, px 8px, bg `Brand/50`, tekst 13px Medium `Brand/600`, radius 4px), slot (fioletowy placeholder)
- **Prawa strona** (gap 8px): slot, przycisk **Filtry** (ikona filter_alt 16px + tekst 13px Medium `Brand/600`, bg `Brand/50`), **Search input** (szer. 180px, h=28px, bg `Slate/50`, border 1px `Slate/300`, radius 4px, ikona 16px, placeholder „Szukaj" 13px `Slate/700`), opcjonalny icon button ustawień tabeli (28×28, bg `Slate/50`, border `Slate/300`, ikona 20px), opcjonalna paginacja (gdy pokazywana też u góry)
- Propsy (boolean): `buttons`, `filters`, `search`, `modeSwitch`, `pagination`, `slotLeftSide`, `slotRightSide`, `summaryButton`, `tableSettings`

### Table pagination bar (`2:19163`)
- **Wysokość 40px** (min-h 40), bg `Base/White`, border L/P/D 1px `Slate/300`, radius dół 8px, **padding poziomy 12px**, gap 40px
- Lewa strona (12px Regular, `Slate/900`): zakres `1–100 z 1,280` • `Na stronie:` + Select (szer. 70px, h=28px, bg `Slate/50`, border `Slate/300`, radius 4px, wartość 13px) • `Strona:` + Text input (szer. 32px, h=28px)
- Prawa strona: pager stron (patrz sekcja 5)

### table-bulk-actions (set `2:34809`, przyciski `2:34743`)
- Pasek **h=44px**, bg `Brand/500 #0066cc`, padding 8px, gap 8px
- Chips licznika: „Zaznaczono: 5" — bg `Slate/50`, border 1px `Slate/300`, radius 16px, px 12px, tekst 13px `Slate/900`, ikona close 12px
- Przyciski akcji: tekst 13px Medium `Base/White`, min-h 28px, px 8px, radius 4px (warianty 1–8 przycisków; disabled — patrz node `2:35972`)

### Action footer (`2567:30368`)
- bg `Base/White`, padding 8px, gap 16px, wyrównanie do prawej
- Cień do góry: `0 -4px 4px rgba(0,20,41,0.08), 0 -4px 6px rgba(0,20,41,0.04)`
- Przyciski: min-h 20px, tekst 11px Medium `Brand/600`, bg `Brand/50`, radius 4px

---

## 2. Wymiary i spacing

### Tryby gęstości tabeli (Table mode)
| Tryb | Wysokość wiersza (1 linia) | Nazwa w DS | Padding komórki |
|---|---|---|---|
| **XS** | **28px** | tryb zwarty | px 4px / py 6px |
| **S** | **32px** | tryb kompaktowy | px 4px / py 8px |
| **M** | **40px** | tryb wygodny | p 8px (całość) |

Wysokości to `min-height` komórki — komórka rośnie przy zawartości 2-liniowej:
- 2. linia typu link/description (ten sam font): XS ≈ 44px, S ≈ 48px, M ≈ 56px
- 2. linia typu caption (font mniejszy): XS ≈ 42px, S ≈ 46px, M ≈ 52px

### Nagłówek (Header cell)
- Wysokość: **XS/S = 32px, M = 40px** (min-h); wariant `Height=2 lines` = 40px
- Padding: px 8px / py 6px; gap tekst–sort 4px

### Typografia (Roboto)
| Element | Rozmiar | Interlinia | Letter-spacing | Waga |
|---|---|---|---|---|
| Komórka XS | 11px | 14px | -0.11px | Regular |
| Komórka S | 12px | 14px | -0.12px | Regular |
| Komórka M | 13px | 16px | -0.13px | Regular |
| Nagłówek kolumny (wszystkie tryby) | 12px | 14px | -0.12px | **Medium** |
| Podsumowanie kolumny w headerze | 11px Medium, kolor `Brand/500` | | | |
| Opis/description w komórce | jak rozmiar komórki, kolor `Slate/700` | | | |
| Caption w komórce | 10px | 12px | -0.1px | Regular, `Slate/700` |
| Paginacja (numery stron) | 12px | 16px | 0 | Regular / Medium (aktywna) |
| Pasek paginacji (etykiety) | 12px | 14px | -0.12px | Regular |
| Przyciski top bar / bulk actions | 13px | 16px | -0.13px | Medium |

### Tokeny spacingu (Spacing/*)
`0, 2, 4, 8, 12, 16, 20, 24, 28` px oraz `full rounded = 1000px`. Ikony w komórkach i przyciskach: **16px** (mniejsze ikony 12px np. close w chips; ikony icon-buttonów 20px). Gap ikona–tekst: 4px, gap main text–gwiazdka required: 2px.

### Kolumny paddingowe
Komponenty `padding-cell` / `padding-header` — puste kolumny dystansowe **8px** i **12px** (frames `1255:25631`, `1255:33313`) na krawędziach tabeli.

---

## 3. Kolory i stany

### Tokeny kolorów użyte w tabeli
| Token | HEX | Zastosowanie |
|---|---|---|
| `Base/White` | #ffffff | tło wierszy default, top bar, pagination bar |
| `Slate/50` | #f7f8fa | tła inputów, selectów, stron paginacji, chips |
| `Slate/100` | #f3f4f6 | **tło nagłówka (default)** |
| `Slate/200` | #e5e7eb | **hover wiersza/komórki**, nagłówek sortowany/hover, tor scrollbara |
| `Slate/300` | #d2d5da | **wszystkie obramowania i separatory wierszy** |
| `Slate/400` | #b7bbc3 | tekst/elementy zablokowane (blocked row) |
| `Slate/500` | #a0a6b0 | uchwyt scrollbara |
| `Slate/600` | #858d99 | ikony pomocnicze |
| `Slate/700` | #6b7280 | opisy, placeholdery, caption |
| `Slate/900` | #101623 | podstawowy tekst |
| `Brand/50` | #e0f0ff | **wiersz selected / edit mode**, aktywna strona paginacji, tła przycisków secondary |
| `Brand/500` | #0066cc | pasek bulk actions, linki, aktywny numer strony, podsumowanie kolumny |
| `Brand/600` | #0052a3 | tekst przycisków na jasnym tle |
| `Yellow/50` | #fff9e5 | **wiersz preview** (podgląd dokumentu w modalu) |
| `Red/500` | #d11938 | gwiazdka required, statusy negatywne |
| `Green/600` | #1d6d22 | statusy pozytywne |
| `Purple/50 / 300 / 800` | #eeecf9 / #a193dd / #251a51 | wyłącznie sloty (placeholdery w makietach) |

### Stany komórki / wiersza (prop `State`)
| Stan | Tło | Uwagi |
|---|---|---|
| `default` | `Base/White` | **brak zebry** — wiersze oddziela border-b 1px `Slate/300` |
| `hover` | `Slate/200` | cały wiersz |
| `selected` | `Brand/50` | wiersz zaznaczony checkboxem |
| `edit mode` | `Brand/50` | wiersz w trybie edycji (z input-cell) |
| `preview` | `Yellow/50` | wiersz podglądany w draggable modalu |
| blocked | tekst/ikony `Slate/400` | przykłady: `1255:39784` (blocked row + blocked actions), `1255:42134` (blocked row + action active), `1255:43810` (active row, selection blocked) |

### Stany nagłówka (prop `Sort`)
| Stan | Tło | Element |
|---|---|---|
| `none` | `Slate/100` | sam tekst 12px Medium |
| `possible (hover)` | `Slate/200` | pojawia się ikona sortowania |
| `⬆️ asc` / `⬇️ desc` | `Slate/200` | ikona sortowania 8×20px (`_[table] sort`, set `2:33245`) |

Nagłówek zawsze z border-b 1px `Slate/300`. Wyrównanie: `Align=left / center / right` (content do lewej / środka / prawej — spójnie komórka + header).

---

## 4. Warianty komórek

Wszystkie komórki mają propsy `Size = XS | S | M` i `State = default | hover | selected | edit mode | preview` oraz border-b 1px `Slate/300`.

| Komórka (component set) | Frame dokumentacji (node) | Przeznaczenie / propsy |
|---|---|---|
| `text-cell` (set `2:32748`) | `706:63964` | wartości tekstowe; propsy: leadingIcon, trailingIcon (16px), inline/block: Link, Description, Caption, 2nd line, required |
| `link-cell` | `706:67269` | link `Brand/500` z podkreśleniem; rozmiary 11/12/13px wg trybu |
| `number-cell` | `706:69788` | liczby/kwoty, wyrównanie do prawej |
| `date-cell` | `707:70650` | daty |
| `status-icon-cell` | `707:76213` | ikona statusu (np. ✓ `Green/600`, ✗ `Red/500`), wyśrodkowana |
| `status-label-cell` | `707:76553` | etykieta statusu (label z tłem) |
| `button-cell` | `707:78971` | przycisk w wierszu (np. „Button" bg `Brand/500`, biały tekst) |
| `row-action-cell` | `707:77827` | akcje wiersza: icon-buttony 16px (pobierz, zablokuj, menu ⋮) |
| `input-cell` | `707:83084` | pole edycji w trybie edit mode |
| `checkbox and radio-cell` | `706:63806` | selekcja wiersza (checkbox/radio) |
| `contractor-cell` | `706:69587` | nazwa kontrahenta (label z szarym tłem) |
| `paragraph-cell` | `707:82738` | dłuższy tekst wieloliniowy |
| `progress bar-cell` | `707:82915` | pasek postępu |
| `padding-cell` | `707:82603` | pusta kolumna dystansowa 8/12px |
| `slot-cell` | `706:63415` | slot na dowolne UI |

Teksty pomocnicze komórek: `_[table] main text` (set `2:35974`, rozmiary 11/12/13, opcja required z `Red/500` *), `_[table] text description` (set `2:35983`).

### Gotowe patterny kolumn (sekcja „Kolumny", tryb XS)
Checkbox `1255:25665` • Lp `1255:25768` • Description icon `1255:26898` • Text `1255:25963` • Link `1255:26449` • Contractor `1255:27103` • Single number `1255:27676` • Currency `1255:28467` • VAT `1255:28026` • Date `1255:28173` • Zapłata `1255:29009` • MPP `1255:29205` • Stan eksportu `1255:29320` • Status label `1255:41425` • Eksportuj `1255:32959` • Actions invoice K `1255:31195` • Actions invoice BK `1255:31765` • KSeF `1255:27420`

Zasada wyrównania przy komórkach 2-liniowych: wiersze wyrównywane do góry (node opisu `2:34859`).

---

## 5. Paginacja, sortowanie, filtrowanie, selekcja

### Paginacja (`Table pagination` `2:19085`, strony `_pagination-page`)
- Segmentowany pager: przyciski **28×28px** (min-w 28, min/max-h 28) sklejone (border 1px `Slate/300`, współdzielone krawędzie), radius 4px tylko na skrajnych elementach
- Strona nieaktywna: bg `Slate/50`, tekst 12px Regular `Slate/900`, wyśrodkowany
- Strona aktywna: bg `Brand/50`, tekst 12px **Medium** `Brand/500`
- Strzałki prev/next: ikony chevron 16px w polu 28×28; stan disabled (wyszarzony chevron)
- Pasek paginacji dodatkowo: zakres wyników `1–100 z 1,280`, select „Na stronie:" (70px, wartości np. 100), input „Strona:" (32px)
- Paginacja może występować podwójnie: w top barze (prop `pagination`) i w pagination barze na dole

### Sortowanie (`_[table] sort`, set `2:33245`)
- Ikona strzałki **8×20px** obok tekstu nagłówka (gap 4px)
- Stany kolumny: brak sortowania → hover „possible" (szare tło `Slate/200` + ikona) → zastosowane asc/desc (tło `Slate/200`, ikona kierunku)

### Filtrowanie i wyszukiwanie (top bar)
- Przycisk „Filtry": ikona filter_alt 16px + tekst 13px Medium `Brand/600` na bg `Brand/50`, min-h 28px, radius 4px; wariant `isFiltered=yes` sygnalizuje aktywne filtry
- Search input: 180px szerokości, h=28px, bg `Slate/50`, border `Slate/300`, radius 4px

### Selekcja wierszy
- Kolumna checkboxa: header `Variant=checkbox` (zaznacz wszystko na stronie) lub `Variant=checkbox + more` — checkbox + menu `_[table] checbox-menu` (set `2:33235`) do zaznaczania wszystkich stron wyników
- Zaznaczenie wiersza → tło `Brand/50` + pojawia się pasek **table-bulk-actions** (chips „Zaznaczono: N" + przyciski akcji zbiorczych na niebieskim pasku `Brand/500`)

---

## 6. Node ID kluczowych komponentów

| Komponent | Node ID | Typ |
|---|---|---|
| Strona z zawartością | `0:1` | page |
| Table (component set) | `1734:41315` (frame `1734:41212`) | component set |
| Table – Variant Default | `2:35228` | component |
| Table top bar | `977:28260` (instancja w Default) | component set `f0ce4ba0…` |
| Table pagination bar | `2:19163` (instancja w Default) | component |
| table-bulk-actions | `2:34809` | component set |
| _bulk actions buttons | `2:34743` | component set |
| Action footer | `2567:30368` | instancja |
| Header cell | `2:32888` | component set |
| Header M default / M sort asc | `999:29586` / `999:29676` | warianty |
| _[table] sort | `2:33245` | component set |
| _[table] checbox-menu | `2:33235` | component set |
| _[table] main text | `2:35974` | component set |
| _[table] text description | `2:35983` | component set |
| text-cell (set) | `2:32748` (frame `706:63964`) | component set |
| link-cell / number-cell / date-cell | `706:67269` / `706:69788` / `707:70650` | frames dokumentacji |
| status-icon-cell / status-label-cell | `707:76213` / `707:76553` | frames dokumentacji |
| button-cell / row-action-cell / input-cell | `707:78971` / `707:77827` / `707:83084` | frames dokumentacji |
| checkbox and radio-cell / contractor-cell | `706:63806` / `706:69587` | frames dokumentacji |
| padding-cell / paragraph-cell / progress bar-cell / slot-cell | `707:82603` / `707:82738` / `707:82915` / `706:63415` | frames dokumentacji |
| Stany wierszy: HOVER / SELECTED | `1255:36296` / `1255:45969` | frames przykładowe |
| Blocked rows | `1255:39784`, `1255:42134`, `1255:43810` | frames przykładowe |
| Przykład pełnego widoku „01 faktury" | `2:34860` | frame (1536×864) |
| Multicolumn table – example | `2758:30254` | component |
| Table – opcje dodatkowe | `2724:31451` | frame |
| _slot (table) / _[table] slot / slot-cell | `2:35948` / `2724:27873` | component / set |
| _empty state copy | `2724:33002` | component set |

> Uwaga techniczna: `get_metadata` na stronie `1535:24598` zwraca pustą stronę — właściwa zawartość pliku znajduje się na stronie `0:1` (bardzo duża, ~18931×27838 px; `get_metadata` całej strony przekracza timeout — należy odpytywać bezpośrednio powyższe node ID).
