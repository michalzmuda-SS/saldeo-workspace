# 05 — Patterns 2.0 (wzorce stron SaldeoSMART)

- **Plik Figma:** Patterns-2.0
- **fileKey:** `fHwZoZmgLDEgygPdxo1Nnz`
- **URL:** https://www.figma.com/design/fHwZoZmgLDEgygPdxo1Nnz/Patterns-2.0
- **Nazwa biblioteki (published):** Patterns 2.0 (biblioteka zespołowa, source: team)
- **libraryKey:** `lk-5a9061f50f510fb6891dc96ea036a53f0b21bb327932f91fba61df06b94466d20bd0622b68aab6d4edf664ad67907fe1dd9ce11fc1f05b946b72971466a0b1ac`
- **Data ekstrakcji:** 2026-07-10 (pierwsza tura) / **uzupełnienie: 2026-07-10** (node ID stron od Michała)

---

## Status ekstrakcji

Plik ma **wiele stron (kanw)** — pierwotny listing zwracał tylko okładkę, ale Michał dostarczył node ID stron wzorców i większość udało się zekstrahować **z twardymi danymi** (style, tokeny, spacing, warianty, zasady zapisane na kanwie). Nie wywołuj `get_metadata` na `0:1` (kanwa ~39562×9798 px — timeout gwarantowany).

| Strona (kanwa) | Node ID | Status ekstrakcji |
|---|---|---|
| ✨ PAGE PATTERNS ✨ (okładka) | `154:25565` | ✅ pełny (sekcja niżej) |
| ✅ Action footer | `148:17739` | ✅ pełny (metadata + design context) |
| ✅ Changelog table | `1970:4` | ✅ pełny (metadata + design context) |
| ✅ List group | `1641:616` | ✅ pełny (metadata + design context) |
| ↳ ✅ Payment modal | `1746:18603` | ✅ pełny (metadata + design context wariantu) |
| ↳ ✅ Result modal | `210:8415` | ✅ pełny (metadata + design context szablonu) |
| ↳ ✅ Spinner modal | `1941:1289` | ✅ pełny (metadata + design context) |
| ↳ ✅ Summary modal | `1508:8637` | ✅ pełny (metadata + design context + tokeny) |
| Page section | `143:6923` | ⚠️ częściowy — `get_metadata` timeout; przegląd ze screenshota |
| Form section | `143:16018` | ⚠️ częściowy — `get_metadata` timeout; przegląd ze screenshota |
| Toasty / komunikaty | `1647:4` | ⚠️ częściowy — `get_metadata` timeout (2×); przegląd ze screenshota |

### Okładka (potwierdzone, pełna struktura)
- **Frame `cover`** — `1398:20844`, 1920×960
  - **Frame 1** — `1398:20845`: auto-layout **kolumna**, wyśrodkowanie w obu osiach, **gap 32 px**, **padding 120 px** (token `Spacing/120`), tło `Color/Base/White` (#FFFFFF)
    - **Logo** (instance) — `1398:20846`, komponent `1398:20622`, wariant: horizontal / extra large / color, 1048×156
    - **Tekst „PAGE PATTERNS 2.0"** — `1398:20847`, font **Poppins SemiBold 48 px**, kolor `Color/Slate/900` (#101623), wyśrodkowany

### Biblioteki podpięte do pliku
Buttons 2.0, Component Library 2.0, Patterns 2.0 (self), Table 2.0, Guide Lines 2.0, Icons 2.0, Komponenty UX — wzorce składają się z komponentów tych bibliotek.

---

## 1. Katalog opublikowanych wzorców (biblioteka „Patterns 2.0")

Kompletny wynik enumeracji opublikowanych zasobów (13 pozycji). `componentKey` pozwala wstawić komponent (Insert) i odnaleźć go w Assets.

| # | Wzorzec | Typ | componentKey | Ostatnia publikacja |
|---|---|---|---|---|
| 1 | Page header - background | component set | `76ca8c011de487178ae630685f2f405dd2281961` | 2025-08-21 |
| 2 | page-name | component | `217f9cde607035bee427bcde0c4cb72c841c3960` | 2025-07-16 |
| 3 | company-select | component set | `366633881bf4de01f3b0801adf4b7a9f6005cc07` | 2025-09-22 |
| 4 | employee-select | component | `3b1125ae8ce54a70304ac02ee7269f09977416c2` | 2025-07-16 |
| 5 | Page section | component set | `7deed38d32a28911db1e0d7f6dd364326816f34b` | 2026-06-29 |
| 6 | List group | component | `be30ee785b7b6afcbc80625f9c0fd32fc9193ad3` | 2025-11-03 |
| 7 | List item | component set | `5154f82ed14699a01915d7103f2bc402a7823227` | 2025-11-03 |
| 8 | Podsumowania (summary modal) | component set | `a19f8b39eaed0b91077ac0d43f187a5c0ede1cbc` | 2026-06-25 |
| 9 | Result modal - szablon | component | `0b8ac2393f55c6fe187ec087e0c39ddcfde889df` | 2026-06-25 |
| 10 | content | component set | `9a8b7cb17a8baff76d639e55977a693f812e0e5a` | 2026-06-25 |
| 11 | Payment content | component set | `859d7fde13f7d88f02036205a434f1473e777288` | 2026-06-03 |
| 12 | Changelog - tabela | component | `095af49ba1be9097c46e56d7bc486e348efe9b75` | 2025-11-19 |
| 13 | Changelog - wsad do tabeli | component set | `6b06974b993d4333cf924c34fb8b16ae9c69f87a` | 2025-11-19 |

---

## 2. Wzorce udokumentowane w pełni (twarde dane z Figmy)

### 2.1 Action footer — strona `148:17739`

**Przeznaczenie (opis z kanwy):** „Sticky komponent będący belką / footerem z akcjami, przypięty do dołu strony / tabeli."

**Component set „Action footer"** (na kanwie frame `341:23202`), 4 warianty (props: `Size`, `Padding`, plus boolean `Buttons`, `Slot`, typ przycisku):

| Wariant | Node ID | Padding wewn. |
|---|---|---|
| Size=60px, Padding=8px | `154:20283` | poziomy 8, pionowy 16 (wys. 60 px) |
| Size=60px, Padding=12px | `848:24253` | poziomy 12, pionowy 16 (wys. 60 px) |
| Size=custom, Padding=8px | `654:16999` | 8 ze wszystkich stron (wys. hug, min 44) |
| Size=custom, Padding=12px | `848:24353` | poziomy 12, pionowy 8 |

**Style (potwierdzone):**
- Tło `Color/Base/White` (#FFFFFF); cień **shadow-diffuse-upper**: `0 -4px 12px rgba(0,20,41,0.04)` + `0 -4px 8px rgba(0,20,41,0.08)` (świeci do góry — belka jest na dole).
- Layout: wiersz, `justify-end`, **gap 16** między slotem a przyciskami; przyciski w grupie z **gap 12**.
- Przycisk (Buttons 2.0, small): tło `Color/Brand/500` (#0066CC), radius `Spacing/4` (4 px), min-h 28, padding poziomy 8, tekst **Roboto Medium 13/16, tracking −0.13**, kolor biały. Wariant Icon button: 28×28.
- Slot (`_action-footer/footer-slot`, `154:20459`): tło `Color/Purple/50` (#EEECF9), obrys dashed `Color/Purple/300` (#A193DD), radius 8, tekst Noto Sans 12/16 `Color/Purple/800` (#251A51) — konwencja slotów w całym DS.

**Właściwości (komponenty pomocnicze, sekcja `154:40014`):**
- `_action-footer/count-of-buttons` (`154:38608`): **1–8 przycisków** (warianty `# of buttons=1…8`).
- `_action-footer/button type` (`154:37849`): `Button` / `Icon button`.

**Zasady użycia (zapisane na kanwie):**
- Size=60px: „Pasek o rozmiarze 60 px, używany na zakładkach, gdzie do dołu strony przypinamy przyciski zapisu (np. detale faktury, dodawanie i edycja faktur)."
- Size=custom: „Komponent nie ma konkretnego rozmiaru. Na wysokość dopasowuje się do contentu z zachowaniem paddingów 8 px góra-dół. Użyty w przypadku przyczepionego buttona w tabeli."
- Liczba przycisków: wybierz w properties; **> 8 przycisków — skontaktuj się z Angelą**.
- Można włączyć slot i umieścić inny komponent (checkbox, toggle) lub wyłączyć przyciski i wstrzyknąć customową zawartość przez slot.
- Możliwe ustawienie buttona na całą szerokość.
- „Projektuj świadomie — zachowuj odpowiednią wagę przycisków i hierarchię informacji" (warianty/kolory przycisków wg zasad z Buttons 2.0).
- Notatka robocza: „[2.0] buttony small".

### 2.2 Changelog (tabela + wsad) — strona `1970:4`

**Przeznaczenie (opis z kanwy):** „Pattern na historię zmian w systemie." Użycia wymienione na kanwie: **Miniobieg dokumentów KSeF, Miniobieg szkiców faktur, Historia zmian dokumentu**.

**Komponenty:**
- **Changelog - tabela** — `1970:3730` (984×209): wiersz kontekstu + tabela z wsadem w slocie.
- **Changelog - wsad do tabeli** — set `1970:16056`, 3 warianty:
  | Wariant | Node ID | Kiedy używać (z kanwy) |
  |---|---|---|
  | `default` | `1970:33931` | „Każdy wiersz to osobna wartość. Stosujemy, gdy user naniósł jedną zmianę." |
  | `multirow` | `1970:41176` | „Gdy user naniósł więcej niż 1 zmianę, grupujemy je w ramach jednego wiersza." |
  | `multicolumn` | `1970:3688` | „Gdy historia zmian dotyczy monitorowania jednej wartości" (kolumny Stara wartość / Nowa wartość) |

**Style (potwierdzone):**
- Wiersz kontekstu nad tabelą: „Nazwa firmy: **BrainSHARE IT Sp. z o.o. (…)**" — Roboto Regular 13/16 `Slate/900`, wartość **Roboto Bold 13/16**; gap 16 do tabeli. Zasada z kanwy: „Nad tabelą umieszczamy informację kontekstową, np. nazwę firmy lub numer szkicu/dokumentu."
- Kontener tabeli (Table 2.0): tło białe, **radius 8**, obrys `Slate/300` (#D2D5DA), overflow clip; kolumny paddingowe 8 px po bokach.
- Nagłówek kolumny: tło `Slate/100` (#F3F4F6), h 32 (64 przy dwupoziomowym), border-b `Slate/300`, padding 4/6–9, tekst **Roboto Medium 11/14, tracking −0.11**, `Slate/900`.
- Komórka: tło białe, min-h 28, border-b `Slate/300`, padding poziomy 4 / pionowy 6, tekst **Roboto Regular 11/14** `Slate/900`; opis inline (np. login) `Slate/700` (#6B7280). Nowa wartość wyróżniona **Medium 11/14**.
- Separatory kolumn: pionowy divider 1 px `Slate/300`, radius `Spacing/full rounded` (1000).
- Typowe kolumny (multicolumn): Użytkownik | Data zmiany (format `12-03-2024 | 12:30`) | monitorowana wartość → Stara wartość / Nowa wartość.

**Rozmiar modala (zasada z kanwy):** „**Large** — gdy historia zmian monitoruje wiele różnych pól; **Medium** — gdy monitoruje jedną wartość." Wzór można zastosować również **poza modalem, bezpośrednio na zakładce** (przykład z komponentem Table `1970:67853`, 1238×352).

### 2.3 List group / List item — strona `1641:616`

**Komponenty:**
- **List item** — set `1641:6584`, warianty `Color=white` (`1641:6583`) i `Color=slate` (`1641:6585`), 300×36.
- **List group** — `1641:6627` (300×576): pionowy stos List itemów z naprzemiennym tłem (zebra: white/slate).
- Slot: `_list-slot` (`1641:6579`) — konwencja fioletowego slota (Purple/50 + dashed Purple/300, radius 2, tekst 10/16 Purple/800); zawartość wiersza wstrzykuje się przez slot.

**Style (potwierdzone):**
- List item: **min-h 36**, padding poziomy 10, pionowy 2 (white) / 4 (slate), border-b `Slate/300`; tło `Base/White` (#FFFFFF) lub `Slate/50` (#F7F8FA).
- List group: obrys 1 px `Slate/300`, **radius 8**, overflow clip; wiersze naprzemiennie white/slate (zebra).

**Zasady użycia:** listy danych opisowych (klucz–wartość, pozycje) wewnątrz Page section lub modala; do danych tabelarycznych używaj Table 2.0.

### 2.4 Result modal (modale wynikowe / podsumowania akcji) — strona `210:8415`

**Przeznaczenie (opis z kanwy):** „Zbiór wzorców projektowych dla podsumowań akcji w systemie wyświetlanych w modalu."

**Struktura wzorca (frame „Result modals - główne założenia", `210:25462` — zasady z kanwy):**
1. **Heading** — spójny w systemie; zaczyna się od słowa **„Podsumowanie”** + czego dotyczy (np. „Podsumowanie edycji", „Podsumowanie wysyłki wezwań do zapłaty/faktur do KSeF", „Podsumowanie usuwania rachunków bankowych"). W prawym górnym rogu **Close icon**.
2. **Opis dodatkowy (opcjonalny)** — jeśli wymaga tego kontekst podsumowania.
3. **Alert (opcjonalny)** — gdy coś jest procesowane w tle i nie ma czego wyświetlić.
4. **Summary** — „szare pole (komponent **Form Section**)" ze skrótowym podsumowaniem akcji:
   - `Zaznaczone pozycje` — ile pozycji poddano operacji;
   - `Status success` — pozycje zakończone pozytywnie (można włączyć widoczność linka z properties);
   - `Status error` — pozycje z błędem do naprawienia (np. niepoprawny e-mail);
   - `Status neutral` — pozycje pominięte bez błędu (limit wyczerpany, brak zmian) lub akcje neutralne (np. usuwanie nadmiarowych dokumentów przy łączeniu).
   - Specyficzne przypadki: można ukryć summary i pokazać samą sekcję Details.
5. **Details** — lista (w Figmie komponenty tabeli z obrysem z każdej strony), 3 kolumny: **lp | nazwa pozycji | status**. Kolejność statusów: **błędne → pominięte → sukces** (wyjątek: gdy sukces jest najważniejszy, np. łączenie dokumentów — wtedy pierwszy). **Nie stosujemy sztampowych komunikatów** („Coś poszło nie tak") — komunikat musi jasno mówić, co jest powodem niepowodzenia/pominięcia.
6. **Footer** — jeden **Button primary brand** o treści **„Zamknij i odśwież listę"**.

**Result modal - szablon** — komponent `620:15014` (807×428; kopia robocza `307:21488`). Struktura i style (potwierdzone):
- Kolumna, **gap 12**, szerokość 807 (wypełnia modal 848).
- `description`: Roboto Regular 13/16 `Slate/900` + Link `Brand/500` (#0066CC) z podkreśleniem.
- `Alert` (info): tło `Brand/50` (#E0F0FF), obrys `Brand/100` (#C2E0FF), radius 4, padding 4/6, ikona info 20 px, tekst 13/16 `Brand/800` (#002952).
- `Form section` (summary): tło `Slate/100` (#F3F4F6), **radius 8, padding 12, gap 8**. Statusy (komponent `_result modal statusy`, `211:33758`): ikona 16 px + tekst 13/16, liczby **Bold**; kolory: success `Green/500` (#24882A) (nagłówek statusu bywa `Green/600` #1D6D22), error `Red/500` (#D11938), neutral `Slate/900` (#101623) z ikoną warning; „Zaznaczone pozycje" — `Slate/900`, liczba Bold.
- `details`: kontener border L/P/G `Slate/300`, radius 4; kolumna `Lp.` szer. 32 (number-cell, tekst wyrównany do prawej), kolumna nazwy (text-cell), kolumna statusu (status-label-cell). Komórki: tło białe, **min-h 40** (wiersze 52 lub 40), padding 8, border-b `Slate/300`; tekst Roboto Regular 13/16 tracking −0.13 `Slate/900`; status: **Roboto Medium 12/14** w kolorze statusu (Błąd #D11938, Wysłano #24882A, Pominięto #101623); druga linia komunikatu: **Roboto Regular 10/12** `Slate/700`.
- Modal-nośnik: komponent Modal (Component Library 2.0), szerokość **848** (przykłady także 1200/1643 dla szerokich treści).

**Instrukcja dla projektantów (frame „Result modals - szablon", `307:19429` — z kanwy):** skopiuj wzór + modal z sekcji „Szablon", nanieś zmiany; elementy opcjonalne (opis, summary) ukrywaj z poziomu warstw; **sekcja summary jest komponentem — nie odpinaj od źródła**, zmieniaj tylko statusy i liczby (bez zmian ikon/kolorów); **sekcja details jest w pełni edytowalna** (komórki tabelowe — można dodawać pozycje, opisy, linki); z gotowej zawartości utwórz komponent, nadaj nazwę i umieść w slocie modala; dopasuj horizontal resizing.
- Notatka robocza: „[2.0] aktualizacja kolorów fontów w sekcji summary (…) w summary tłem powinno być »form section«; w sekcji DETAILS użyto komponentów tabeli — jeśli po stronie DEV jest inaczej, dostosować rozmiary/krój fontów, kolory, statusy, komunikaty."

**content** — component set `210:13347` (wymienna zawartość modala), 8 wariantów (nazwy = przypadki użycia):
`wystawianie faktur podobnych` (`210:13348`), `wysyłka faktur do ksef` (`210:13370`), `wezwanie do zaplaty` (`210:13392`), `usuwanie rachunków bankowych` (`210:13414`), `kopiowanie rodzajów dokumentów` (`210:13430`), `podsumowanie edycji` (`210:13446`), `usunięte przez innych użytkowników` (`210:13462`), `łączenie dokumentów` (`240:6309`). Wszystkie o szerokości 807.

**Przykłady użycia (frame `211:34214`):** status label + caption; nazwa pozycji + description; linki w details; dodatkowy status w Summary; ukrywanie summary i zmiana kolejności statusów; wyświetlanie samego alertu.

### 2.5 Spinner modal — strona `1941:1289`

**Przeznaczenie:** modal stanu przetwarzania (operacja w toku), np. „Analiza dokumentów".

**Struktura i style (potwierdzone, instancja `1941:12755`, 648 px):**
- **Modal shell** (wspólny dla modali wynikowych): tło białe, **radius 12**, cień **shadow-30** `0 12px 24px rgba(0,20,41,0.2)`;
  - Header: padding top 12, poziomy 20; tytuł **Poppins SemiBold 20/28** (`heading/large-20`) `Slate/900`; Icon button close 20 px po prawej;
  - Body: padding lewy 20, pionowy 16 + rynna scrolla 20 px po prawej;
  - Footer: padding dolny 20, poziomy 20, gap 12, przyciski wyrównane do prawej.
- **Zawartość** (`_content`, `1941:1426`): Form section (`Slate/100`, radius 8, padding 12) z układem wiersz, gap 16: **Spinner large 48 px (color=brand)** + kolumna tekstu (gap 4): tytuł **Roboto Bold 13/16** („Dokumenty są w trakcie analizy") + opis Roboto Regular 13/16 („Poczekaj na podsumowanie lub zamknij modal, aby kontynuować pracę…").
- Footer: button secondary (tło `Slate/50`, obrys `Slate/300`, radius 4, min-h 32, padding poziomy 12, Roboto Medium 13/16 `Slate/900`) — „Zamknij".
- Druga instancja `1941:13098` (648×148) — wariant niższy (bez rozszerzonego opisu).

### 2.6 Summary modal („Podsumowania") — strona `1508:8637`

**Przeznaczenie:** modal podsumowania **kwot** dla zaznaczonych pozycji listy/tabeli (netto, VAT, brutto w walutach, „do zapłaty") — dwie kolumny: **Zaznaczone** i **Wszystkie**.

**Component set „Podsumowania (summary modal)"** — `1511:8955`, warianty:
| Wariant | Node ID | Rozmiar |
|---|---|---|
| `Empty=false` | `1508:8644` | 608×673 |
| `Empty=true` | `1511:10476` | 608×621 |

**Struktura i style (potwierdzone, wariant Empty=true):**
- Dwie kolumny 1:1 rozdzielone border-r `Slate/300`; padding wewnętrzny kolumn **24** (prawa kolumna lewej / lewy prawej), gap pionowy **24** między grupami walut.
- Nagłówki kolumn: „Zaznaczone: **0**" / „Wszystkie: **61**" — **Roboto Regular 14/16 tracking −0.14** `Gray/900` (#252626), liczba **Bold**.
- Grupa waluty (gap 8): wiersze `netto` i `VAT` — Roboto Regular 13/16 `Gray/900`; wiersz sumy z kodem waluty (PLN/EUR/USD/CHF/AUD) — **Roboto Medium 13/16 `Brand/500` (#0066CC)**; divider 1 px `Slate/300`; wiersz **„do zapłaty"** — Medium 13/16 `Gray/900`. Kwoty wyrównane do prawej; etykieta w stałej kolumnie 105 px, gap 12.
- Stan pusty (Empty=true, kolumna „Zaznaczone: 0"): wyśrodkowana ikona `check_indeterminate_small_24` (kreska) zamiast kwot.
- Osadzenie: w komponencie Modal 648 px (instancje `1511:9116`, `1511:11204` na kanwie).
- Tokeny potwierdzone `get_variable_defs`: `Color/Gray/900 #252626`, `Color/Brand/500 #0066cc`, `Color/Slate/200 #e5e7eb`, `Color/Slate/300 #d2d5da`, `Color/Slate/800 #4b5563`, `Color/Slate/900 #101623`, `Spacing/0,4,8,16,24`, `Spacing/full rounded 1000`, style tekstu `body/condensed/medium-13 i medium-14 (regular/medium)`.

### 2.7 Payment modal / Payment content — strona `1746:18603`

**Przeznaczenie:** modale rozliczania płatności dokumentów (faktury, dokumenty) — oznaczanie „zapłacono", płatności częściowe, podgląd dotychczasowych wpłat. Kanwa zawiera sekcje referencyjne **FAKTURY** (`1746:34553`) i **DOKUMENTY** (`1746:34569`) ze zrzutami z systemu, docelowymi modalami i toastami potwierdzeń.

**Payment content** — component set `1746:34585`, 4 warianty (szer. 476, do osadzenia w Modal 448–648):
| Wariant | Node ID | Rozmiar | Zawartość |
|---|---|---|---|
| `akcja pojedyncza` | `1746:33393` | 476×327 | pełny formularz + płatności częściowe |
| `akcja pojedyncza empty` | `1756:4291` | 476×191 | formularz bez historii wpłat |
| `akcja zbiorcza` | `1746:34586` | 476×111 | skrócona wersja dla operacji masowej |
| `samo pytanie` | `1747:37899` | 476×16 | tylko pytanie potwierdzenia |

**Struktura i style wariantu `akcja pojedyncza` (potwierdzone):**
- Kolumna, **gap 16**. Nagłówek kontekstu: „Numer dokumentu: **1/03/2025**" — Roboto Regular 13/16 `Slate/900`, numer **Bold**.
- Wiersz pól (gap 16, po 50%): **Datepicker „Data wpłaty"*** i **Text input „Kwota wpłaty"*** — label Roboto Regular 12/14 tracking −0.12 `Slate/900`, gwiazdka wymagalności `Red/500` (#D11938); pole: tło `Slate/50` (#F7F8FA), obrys `Slate/300`, radius 4, **h 28**, padding poziomy 8; wartość 13/16 (input: Noto Sans 14/16).
- **Sekcja „Płatności częściowe"** w Form section (`Slate/100`, radius 8, padding 12): nagłówek 13/16 + okrągły Icon button (dodawanie, `Slate/50` + obrys `Slate/300`, radius full); podsumowanie: `Zapłacono` / `Pozostało do zapłaty` — etykiety w wariancie neutral `Slate/800` (#4B5563), kwota pozostała **Roboto Bold 13/16** `Slate/900`; lista wpłat: wiersze `data — (transakcja <link>) — kwota`, link `Brand/500` (#0066CC), dividery 1 px `Slate/300`.
  - Komponent pomocniczy `_płatności częściowe` (`1756:4865`): warianty `default/Collapsed=false`, `default/Collapsed=true`, `niezapłacono/Collapsed=true`.
- Opcjonalny **Alert** (prop `showAlert`): tło `Slate/200` (#E5E7EB), obrys `Slate/300`, radius 4, ikona info 20, tekst 13/16 `Slate/900` z linkiem #0066CC („Zmiany w dotychczasowych płatnościach można dokonać w sekcji płatności częściowe.").
- Potwierdzenia operacji: komponenty **Toast** (`1755:3548` itd.) — sukces po zapisaniu płatności.
- Notatki projektowe na kanwie: modal na wyszukiwarce faktur do uspójnienia z listą faktur; na liście data wpłaty wymagana, na wyszukiwarce nie.

---

## 3. Wzorce udokumentowane częściowo (timeout metadata; przegląd ze screenshotów)

### 3.1 Page section — strona `143:6923` (kanwa 2501×5650)
Podstawowy kontener sekcji treści strony (nagłówek „Page section heading" + fioletowy slot na zawartość). Dokumentacja na kanwie obejmuje sekcje: **Variants** (z nagłówkiem / bez), **Łamanie headingu** (zalecane krótkie nagłówki), **Type** (3 poziomy/rozmiary nagłówka sekcji), **Header caption**, **Header actions** (akcje/ikony przy nagłówku), **Header slot**, **Extra content slot**, **Footer** (główne buttony + sticky footer — 2 przykłady), **Grid** (układ kolumnowy, ciemna karta „Layout grid – 8 columns"). Zawiera czerwone/żółte alerty z zasadami użycia (nieodczytane w pełnej treści). Szczegółowe style wymagają doczytania per ramka (patrz „Jak dokończyć").

### 3.2 Form section — strona `143:16018` (kanwa 2901×4093)
„Sekcja, która służy do pogrupowania informacji na formularzu lub znajdująca się w sekcji strony" (tytuł doka na kanwie). **Szare pole** używane też jako summary w Result modal i kontener w Payment/Spinner modal — style potwierdzone pośrednio z instancji: tło `Slate/100` (#F3F4F6), **radius 8, padding 12, gap 8**. Dokumentacja na kanwie: **Variants** (with header / without header), **Łamanie headingu**, **Style** (Background / White with border), **Header actions** (max 3 buttony), **Footer** (główne buttony po prawej stronie od prawej krawędzi; footer slot; przykład „Dodaj komentarz" z textarea i przyciskami), **Extra content slot** (wariant „vertical"/„nested"), **Grid**. Notatka na kanwie (pomarańczowa, 12.04.2026): „Dla Form section white with border na potrzeby Radiusów dorobiono styl w-border-200 (…) — jeśli będzie więcej takich przypadków, zbudować komponent w Figmie". Notatka fioletowa: „zmiana koloru buttonów i ikon buttonów w footerze / heading na zakładkach — zmiana na h2/h3".

### 3.3 Toasty / komunikaty — strona `1647:4` (kanwa 4838×566)
Katalog toastów systemowych w 4 kolorach semantycznych: **zielone (success)** — np. „Zmiany zostały zapisane", z opcjonalną akcją (link/button w toaście); **czerwone (error)** — np. błędy wysyłki do KSeF, długie komunikaty wielolinijkowe; **żółte (warning)**; **ciemnoszare (neutral/info)**. Po lewej stronie kanwy tekstowa specyfikacja zasad treści komunikatów (nieodczytana w pełnej rozdzielczości). Node ID wariantów nieznane (metadata timeout 2×).

---

## 4. Tokeny i style potwierdzone w pliku

### Kolory (hex potwierdzone w design context / variable defs)
| Token | Hex | Użycie we wzorcach |
|---|---|---|
| `Color/Base/White` | `#FFFFFF` | tła kart, tabel, modali, action footer |
| `Color/Slate/50` | `#F7F8FA` | zebra list, pola formularzy, button secondary |
| `Color/Slate/100` | `#F3F4F6` | Form section (szare pole), nagłówki tabel |
| `Color/Slate/200` | `#E5E7EB` | alert neutralny |
| `Color/Slate/300` | `#D2D5DA` | obrysy, bordery komórek, dividery |
| `Color/Slate/700` | `#6B7280` | teksty drugorzędne / opisy inline |
| `Color/Slate/800` | `#4B5563` | etykiety neutral |
| `Color/Slate/900` | `#101623` | tekst podstawowy, nagłówki |
| `Color/Gray/900` | `#252626` | teksty w Summary modal |
| `Color/Brand/50` | `#E0F0FF` | tło alertu info |
| `Color/Brand/100` | `#C2E0FF` | obrys alertu info |
| `Color/Brand/500` | `#0066CC` | primary button, linki, kwoty sum |
| `Color/Brand/800` | `#002952` | tekst alertu info |
| `Color/Green/500` | `#24882A` | status success |
| `Color/Green/600` | `#1D6D22` | nagłówek statusu success |
| `Color/Red/500` | `#D11938` | status error, gwiazdka required |
| `Color/Purple/50` | `#EEECF9` | tło slotów |
| `Color/Purple/300` | `#A193DD` | obrys dashed slotów |
| `Color/Purple/800` | `#251A51` | tekst slotów |

### Spacing
`Spacing/0,2,4,8,12,16,20,24,32,120` (wartości = nazwa w px), `Spacing/full rounded = 1000`. Radiusy we wzorcach: 2 (slot listy), 4 (przyciski, alerty, komórki details), 8 (karty, tabele, Form section), 12 (modal).

### Typografia (style tekstu potwierdzone)
| Styl | Font |
|---|---|
| `heading/large-20` | Poppins SemiBold 20/28 (tytuły modali) |
| Okładka | Poppins SemiBold 48 |
| `body/default/medium-13/regular` i `/bold` | Roboto 13/16, ls 0 |
| `body/condensed/medium-14/regular` i `/medium` | Roboto 14/16, tracking −0.14 |
| `body/condensed/medium-13/regular`, `/medium`, `/bold` | Roboto 13/16, tracking −0.13 |
| `body/condensed/small-12/regular` i `/medium` | Roboto 12/14, tracking −0.12 (etykiety pól, status labels) |
| `body/condensed/xsmall-11/regular` i `/medium` | Roboto 11/14, tracking −0.11 (tabele changelog) |
| `body/condensed/caption` | Roboto 10/12, tracking −0.1 (opisy statusów) |
| `body/default/caption` | Roboto 10/16 (sloty) |
| Sloty / inputy | Noto Sans 12/16, 14/16 |

### Cienie
| Styl | Wartość |
|---|---|
| `shadow-diffuse-upper` | `0 -4px 12px rgba(0,20,41,0.04)` + `0 -4px 8px rgba(0,20,41,0.08)` (action footer) |
| `shadow-30` | `0 12px 24px rgba(0,20,41,0.2)` (modale) |

---

## 5. Wskazówki do prototypowania ekranów SaldeoSMART

1. **Szkielet strony:** globalna nawigacja → **Page header - background** (+ `page-name`, `company-select`, ew. `employee-select`) → sekwencja **Page section**; formularze grupuj w **Form section**; akcje zapisu przypinaj w **Action footer** (Size=60px na zakładkach, Size=custom w tabelach).
2. **Treść sekcji:** tabele z Table 2.0, kontrolki z Component Library 2.0, przyciski z Buttons 2.0, ikony z Icons 2.0; dane opisowe jako **List group / List item** (zebra white/slate, min-h 36).
3. **Operacje masowe:** po wykonaniu pokaż **Result modal** (heading „Podsumowanie …", summary w Form section, details lp|nazwa|status, footer „Zamknij i odśwież listę"); wybierz gotowy wariant **content** albo zbuduj z **Result modal - szablon** (`620:15014`). Statusy: błędy najpierw, potem pominięte, na końcu sukcesy (wyjątek: łączenie dokumentów).
4. **Operacje w toku:** **Spinner modal** (Form section + Spinner 48 brand + tytuł Bold 13 + opis).
5. **Podsumowania kwot zaznaczonych pozycji:** **Podsumowania (summary modal)** — kolumny Zaznaczone/Wszystkie, grupy per waluta, sumy w Brand/500.
6. **Płatności:** **Payment content** w modalu (akcja pojedyncza / empty / zbiorcza / samo pytanie); potwierdzenia jako Toast.
7. **Historia zmian:** **Changelog - tabela** + wsad `default`/`multirow`/`multicolumn`; modal Large (wiele pól) / Medium (jedna wartość); nad tabelą informacja kontekstowa.
8. **Sloty:** fioletowe pola dashed (Purple/50 + Purple/300) to miejsca wstrzykiwania własnej zawartości — nie odpinaj komponentów, podmieniaj zawartość slotu.
9. **Tokeny:** trzymaj się zmiennych `Color/*` i `Spacing/*` (sekcja 4); nagłówki Poppins, treść Roboto (condensed z ujemnym trackingiem), inputy Noto Sans.

---

## 6. Luki — co nadal nieudokumentowane (stan na 2026-07-10)

1. **Page header - background, page-name, company-select, employee-select** — opublikowane komponenty nagłówka strony; brak node ID ich stron (nie było ich wśród dostarczonych), więc nadal tylko katalog (sekcja 1). Opisy przeznaczenia pozostają inferowane: ciemnoniebieski pas nagłówka z nazwą strony i selektorami kontekstu firmy/pracownika.
2. **Page section (`143:6923`), Form section (`143:16018`), Toasty (`1647:4`)** — `get_metadata` przekracza timeout na tych kanwach; udokumentowane tylko przeglądowo ze screenshotów (struktura sekcji dokumentacji, bez pełnych treści zasad i node ID wariantów). Style Form section potwierdzone pośrednio z instancji w modalach.
3. **Warianty `content` (8) i `Podsumowania Empty=false`** — znane node ID i nazwy; pełny design context pobrano dla szablonu i wariantu Empty=true; pozostałe warianty do doczytania punktowo w razie potrzeby.
4. Kanwa `0:1` — nadal nieprzejrzana w całości (nie wywoływać `get_metadata` na `0:1`).

### Jak dokończyć ekstrakcję
- Dla Page section / Form section / Toastów: skopiuj z Figma Desktop link do konkretnej **ramki** (PPM → Copy link to selection) i wykonaj `get_design_context` na małym poddrzewie — kanwy w całości timeoutują, pojedyncze ramki działają.
- Dla wzorców nagłówka strony: potrzebne node ID stron „Page header" / „company-select" (analogicznie jak dostarczone w tej turze).
