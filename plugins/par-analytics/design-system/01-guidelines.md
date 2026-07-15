# Guide Lines 2.0 — podstawy design systemu SaldeoSMART

```
Plik Figma:      Guide-Lines-2.0
fileKey:         QOaYDRi2OFCSNfCwGeVYac
URL:             https://www.figma.com/design/QOaYDRi2OFCSNfCwGeVYac/Guide-Lines-2.0
Biblioteka:      "Guide Lines 2.0" (library key: lk-00a5f0ff3b699f30cf4c87da873407de745f7f1bfa9b576afd9359eaa770067d317b9ff03bacc14283093ba7cf427a3aba98fe23f558051b43fdb3b5e302c06b)
Data ekstrakcji: 2026-07-10
Zakres:          175 zmiennych (kolekcja "Primitives", 1 tryb), 40 stylów tekstowych, 7 stylów efektów (cienie), 5 stylów siatek
```

## Charakter pliku

Plik zawiera na kanwie tylko jedną stronę **"Intruduction"** (node `883:712`) z dwiema notami informacyjnymi. Cała wartość pliku to **opublikowana biblioteka tokenów**: zmienne Figma (kolekcja `Primitives`) oraz style tekstu, cieni i siatek. Plik NIE zawiera komponentów UI (komponenty żyją w osobnych plikach Component Library).

### Node ID kluczowych ramek

| Node ID | Zawartość |
|---|---|
| `883:712` | Strona "Intruduction" (jedyna strona pliku) |
| `884:4221` | Nota 1: zastrzeżenie o zakresie stosowania guidelines |
| `1966:6` | Nota 2: status biblioteki + link do starej wersji 1.0 |

### Oficjalne noty z pliku (treść oryginalna)

1. *"Uwaga, podstawy projektowe właściwe dla aplikacji przeglądarkowej SaldeoSMART nie znajdą zastosowania w aplikacji mobilnej ani na stronie produktowej SaldeoSMART. Podstawy projektowe należałoby zdefiniować dla każdego z tych produktów osobno."* — **te tokeny dotyczą wyłącznie aplikacji webowej (przeglądarkowej) SaldeoSMART.**
2. *"To jest docelowa biblioteka komponentów. Jest obecnie aktualizowana o nowe style, z tego powodu projekty mogą już posiadać nieaktualne komponenty."* Stara wersja 1.0: `https://www.figma.com/files/team/1089130098702533503/project/301283243/%5B1.0%5D-Component-Library` — **projekty mogą zawierać przestarzałe komponenty; wersja 2.0 jest źródłem prawdy.**

---

## 1. Paleta kolorów (kolekcja Primitives, prefiks `Color/`)

Wszystkie rodziny mają skalę 50–900 (50 najjaśniejszy, 900 najciemniejszy). Poziom **500 to bazowy odcień** rodziny; 50/100 służą jako tła, 600–800 jako stany hover/pressed i tekst na jasnych tłach.

### Base

| Token | Wartość | Zastosowanie |
|---|---|---|
| Color/Base/Black | #13161A | Czerń systemowa |
| Color/Base/White | #FFFFFF | Biel, tła, tekst na ciemnym |

### Brand (niebieski firmowy — kolor primary)

| Token | Wartość | Token | Wartość |
|---|---|---|---|
| Color/Brand/50 | #E0F0FF | Color/Brand/500 | **#0066CC** |
| Color/Brand/100 | #C2E0FF | Color/Brand/600 | #0052A3 |
| Color/Brand/200 | #9DCBF9 | Color/Brand/700 | #003D7A |
| Color/Brand/300 | #72B2F3 | Color/Brand/800 | #002952 |
| Color/Brand/400 | #398FE4 | Color/Brand/900 | #001429 |

Zastosowanie: akcje główne (przyciski primary, linki, focus), 500 = default, 600 = hover, 700 = pressed, 50/100 = tła zaznaczeń.

### Slate (chłodna szarość — teksty i tła neutralne UI)

| Token | Wartość | Token | Wartość |
|---|---|---|---|
| Color/Slate/50 | #F7F8FA | Color/Slate/500 | #A0A6B0 |
| Color/Slate/100 | #F3F4F6 | Color/Slate/600 | #858D99 |
| Color/Slate/200 | #E5E7EB | Color/Slate/700 | #6B7280 |
| Color/Slate/300 | #D2D5DA | Color/Slate/800 | #4B5563 |
| Color/Slate/400 | #B7BBC3 | Color/Slate/900 | #101623 |

Zastosowanie: tła stron/paneli (50–100), obramowania i dividery (200–300), tekst pomocniczy (600–700), tekst główny (800–900).

### Gray (ciepła/neutralna szarość)

| Token | Wartość | Token | Wartość |
|---|---|---|---|
| Color/Gray/50 | #FAFAFA | Color/Gray/500 | #A5A5A5 |
| Color/Gray/100 | #F7F7F7 | Color/Gray/600 | #8A8A8A |
| Color/Gray/200 | #EDEDED | Color/Gray/700 | #6B6B6B |
| Color/Gray/300 | #DADADA | Color/Gray/800 | #494A4A |
| Color/Gray/400 | #C0C0C0 | Color/Gray/900 | #252626 |

Zastosowanie: Gray/800 (#494A4A) używany m.in. jako kolor tekstu treści (potwierdzone w nodach pliku).

### Red (błędy, stany destrukcyjne)

| Token | Wartość | Token | Wartość |
|---|---|---|---|
| Color/Red/50 | #FCE8EC | Color/Red/500 | **#D11938** |
| Color/Red/100 | #F9CDD4 | Color/Red/600 | #A9142D |
| Color/Red/200 | #F39BAA | Color/Red/700 | #800F22 |
| Color/Red/300 | #EE6D83 | Color/Red/800 | #520A16 |
| Color/Red/400 | #E83B58 | Color/Red/900 | #29050B |

### Green (sukces, potwierdzenia)

| Token | Wartość | Token | Wartość |
|---|---|---|---|
| Color/Green/50 | #E3F8E4 | Color/Green/500 | **#24882A** |
| Color/Green/100 | #CBF1CD | Color/Green/600 | #1D6D22 |
| Color/Green/200 | #92E297 | Color/Green/700 | #155119 |
| Color/Green/300 | #57CC5F | Color/Green/800 | #0E3410 |
| Color/Green/400 | #32AF3B | Color/Green/900 | #071C09 |

### Orange (ostrzeżenia)

| Token | Wartość | Token | Wartość |
|---|---|---|---|
| Color/Orange/50 | #FFF1E5 | Color/Orange/500 | **#FF7900** |
| Color/Orange/100 | #FFE4CC | Color/Orange/600 | #CC5F00 |
| Color/Orange/200 | #FFC999 | Color/Orange/700 | #994700 |
| Color/Orange/300 | #FFAD66 | Color/Orange/800 | #663000 |
| Color/Orange/400 | #FF9233 | Color/Orange/900 | #331800 |

### Yellow

| Token | Wartość | Token | Wartość |
|---|---|---|---|
| Color/Yellow/50 | #FFF9E5 | Color/Yellow/500 | **#FFC700** |
| Color/Yellow/100 | #FFF4CC | Color/Yellow/600 | #CCA000 |
| Color/Yellow/200 | #FFE999 | Color/Yellow/700 | #997800 |
| Color/Yellow/300 | #FFDE66 | Color/Yellow/800 | #665000 |
| Color/Yellow/400 | #FFD333 | Color/Yellow/900 | #332800 |

### Blue (cyjan — informacje, akcenty pomocnicze)

| Token | Wartość | Token | Wartość |
|---|---|---|---|
| Color/Blue/50 | #E9F8FC | Color/Blue/500 | **#23BDDE** |
| Color/Blue/100 | #D3F1F8 | Color/Blue/600 | #1B96B1 |
| Color/Blue/200 | #A6E4F2 | Color/Blue/700 | #147085 |
| Color/Blue/300 | #7AD6EB | Color/Blue/800 | #0D4B59 |
| Color/Blue/400 | #4EC9E4 | Color/Blue/900 | #07252C |

### Coral

| Token | Wartość | Token | Wartość |
|---|---|---|---|
| Color/Coral/50 | #FEE5E2 | Color/Coral/500 | **#DF3423** |
| Color/Coral/100 | #FCD3CF | Color/Coral/600 | #BC2819 |
| Color/Coral/200 | #FEABA3 | Color/Coral/700 | #8F150A |
| Color/Coral/300 | #F57B70 | Color/Coral/800 | #5F0E07 |
| Color/Coral/400 | #F25141 | Color/Coral/900 | #300703 |

### Lime

| Token | Wartość | Token | Wartość |
|---|---|---|---|
| Color/Lime/50 | #EFF7E4 | Color/Lime/500 | **#6B952D** |
| Color/Lime/100 | #E1F0CC | Color/Lime/600 | #587A24 |
| Color/Lime/200 | #B7DB7B | Color/Lime/700 | #415A1B |
| Color/Lime/300 | #9FD055 | Color/Lime/800 | #2A3B12 |
| Color/Lime/400 | #82B536 | Color/Lime/900 | #171F09 |

### Turquoise

| Token | Wartość | Token | Wartość |
|---|---|---|---|
| Color/Turquoise/50 | #EEFBFA | Color/Turquoise/500 | **#47D6C5** |
| Color/Turquoise/100 | #D9F7F3 | Color/Turquoise/600 | #2ABCAB |
| Color/Turquoise/200 | #B4EEE7 | Color/Turquoise/700 | #208E81 |
| Color/Turquoise/300 | #93E7DD | Color/Turquoise/800 | #145C53 |
| Color/Turquoise/400 | #6DDFD1 | Color/Turquoise/900 | #0A2E2A |

### Purple

| Token | Wartość | Token | Wartość |
|---|---|---|---|
| Color/Purple/50 | #EEECF9 | Color/Purple/500 | **#6249C5** |
| Color/Purple/100 | #E1DCF4 | Color/Purple/600 | #4A34A2 |
| Color/Purple/200 | #C0B6E8 | Color/Purple/700 | #38277C |
| Color/Purple/300 | #A193DD | Color/Purple/800 | #251A51 |
| Color/Purple/400 | #806CD0 | Color/Purple/900 | #130E2B |

### Fuchsia

| Token | Wartość | Token | Wartość |
|---|---|---|---|
| Color/Fuchsia/50 | #F3EAF5 | Color/Fuchsia/500 | **#8F4AA1** |
| Color/Fuchsia/100 | #EEDBF3 | Color/Fuchsia/600 | #733B81 |
| Color/Fuchsia/200 | #D3B2DC | Color/Fuchsia/700 | #572D62 |
| Color/Fuchsia/300 | #BC88C8 | Color/Fuchsia/800 | #381D3F |
| Color/Fuchsia/400 | #A662B7 | Color/Fuchsia/900 | #1C0E1F |

### Pink

| Token | Wartość | Token | Wartość |
|---|---|---|---|
| Color/Pink/50 | #FAEAF6 | Color/Pink/500 | **#D135A6** |
| Color/Pink/100 | #F6D5EC | Color/Pink/600 | #AA2785 |
| Color/Pink/200 | #EDB0DC | Color/Pink/700 | #811D65 |
| Color/Pink/300 | #E487C9 | Color/Pink/800 | #571444 |
| Color/Pink/400 | #DA5DB7 | Color/Pink/900 | #2A0920 |

### Brown

| Token | Wartość | Token | Wartość |
|---|---|---|---|
| Color/Brown/50 | #F4EFEC | Color/Brown/500 | **#85644C** |
| Color/Brown/100 | #E7DCD5 | Color/Brown/600 | #6B503E |
| Color/Brown/200 | #D5C5B3 | Color/Brown/700 | #4E3A2D |
| Color/Brown/300 | #B89A84 | Color/Brown/800 | #34271E |
| Color/Brown/400 | #9E775B | Color/Brown/900 | #1A130F |

### Opacity (kolory półprzezroczyste, RGBA)

| Token | Wartość (hex8) | Zastosowanie |
|---|---|---|
| Color/Opacity/Slate-900 7% | #10162312 | subtelne tła hover |
| Color/Opacity/Slate-900 12% | #1016231F | tła hover/pressed |
| Color/Opacity/Slate-900 32% | #10162352 | overlaye, scrim |
| Color/Opacity/White 15% | #FFFFFF26 | hover na ciemnym tle |
| Color/Opacity/White 25% | #FFFFFF40 | pressed na ciemnym tle |

---

## 2. Spacing i promienie narożników (prefiks `Spacing/`)

Jedna skala FLOAT używana zarówno do odstępów (gap, padding), rozmiarów, jak i **corner radius** (tokeny mają scope CORNER_RADIUS).

| Token | Wartość (px) |
|---|---|
| Spacing/0 | 0 |
| Spacing/2 | 2 |
| Spacing/4 | 4 |
| Spacing/8 | 8 |
| Spacing/12 | 12 |
| Spacing/16 | 16 |
| Spacing/20 | 20 |
| Spacing/24 | 24 |
| Spacing/28 | 28 |
| Spacing/32 | 32 |
| Spacing/40 | 40 |
| Spacing/48 | 48 |
| Spacing/64 | 64 |
| Spacing/72 | 72 |
| Spacing/80 | 80 |
| Spacing/96 | 96 |
| Spacing/120 | 120 |
| Spacing/full rounded | 1000 (pełne zaokrąglenie — pill/circle) |

Zaobserwowane w praktyce (karty informacyjne w tym pliku): padding 24, gap 24, border-radius 16.

---

## 3. Typografia (40 stylów tekstowych)

Dwa kroje: **Poppins SemiBold** (display + nagłówki) i **Roboto** (tekst treści, wagi Regular 400 / Medium 500 / Bold 700). Tekst treści w dwóch wariantach gęstości: `default` (luźniejszy line-height) i `condensed` (ciaśniejszy line-height, letter-spacing -1% — do gęstych tabel/list).

### Display i nagłówki (Poppins SemiBold, ls 0%)

| Styl | Rozmiar | Line-height |
|---|---|---|
| display/large-36 | 36px | 48px |
| display/medium-28 | 28px | 36px |
| display/small-24 | 24px | 32px |
| heading/large-20 | 20px | 28px |
| heading/medium-16 | 16px | 24px |
| heading/small-14 | 14px | 20px |

### Body — default (Roboto; ls 0%; każdy w wagach regular/medium/bold)

| Styl (3 wagi) | Rozmiar | Line-height |
|---|---|---|
| body/default/large-16/{regular,medium,bold} | 16px | 24px |
| body/default/medium-14/{regular,medium,bold} | 14px | 20px |
| body/default/medium-13/{regular,medium,bold} | 13px | 16px |
| body/default/small-12/{regular,medium,bold} | 12px | 16px |
| body/default/xsmall-11/{regular,medium,bold} | 11px | 16px |
| body/default/caption (Regular) | 10px | 16px |
| body/default/overline (Medium, ls 4%) | 12px | 16px |

### Body — condensed (Roboto; ls -1%; każdy w wagach regular/medium/bold)

| Styl (3 wagi) | Rozmiar | Line-height |
|---|---|---|
| body/condensed/large-16/{regular,medium,bold} | 16px | 20px |
| body/condensed/medium-14/{regular,medium,bold} | 14px | 16px |
| body/condensed/medium-13/{regular,medium,bold} | 13px | 16px |
| body/condensed/small-12/{regular,medium,bold} | 12px | 14px |
| body/condensed/xsmall-11/{regular,medium,bold} | 11px | 14px |
| body/condensed/caption (Regular) | 10px | 12px |
| body/condensed/overline (Medium, ls 4%) | 12px | 12px |

Domyślny styl treści aplikacji: **body/default/medium-14/regular** (Roboto 14/20).

---

## 4. Cienie i efekty (7 stylów)

Kolor bazowy cieni: #001429 (Brand/900) z niską alfą.

| Styl | Definicja (CSS box-shadow) | Zastosowanie |
|---|---|---|
| shadow-05 | `0 1px 0 0 rgba(37,38,38,0.04)` | najsubtelniejszy separator |
| shadow-10 | `0 2px 4px 0 rgba(0,20,41,0.16)` | niskie uniesienie (karty) |
| shadow-20 | `0 4px 8px 0 rgba(0,20,41,0.16)` | średnie uniesienie (dropdowny) |
| shadow-30 | `0 12px 24px 0 rgba(0,20,41,0.20)` | wysokie uniesienie (modale) |
| shadow-diffuse | `0 0 12px 0 rgba(0,20,41,0.04), 0 0 8px 0 rgba(0,20,41,0.08)` | rozproszony, bez kierunku |
| shadow-diffuse-upper | `0 -4px 12px 0 rgba(0,20,41,0.04), 0 -4px 8px 0 rgba(0,20,41,0.08)` | cień w górę (sticky footer) |
| Background blur | `backdrop-filter: blur(4px)` | rozmycie tła pod overlayem |

---

## 5. Siatka / layout (5 stylów grid)

Wszystkie: 12 kolumn, wyrównanie STRETCH, gutter 16px.

| Styl | Kolumny | Gutter | Margines boczny |
|---|---|---|---|
| desktop-large | 12 | 16px | 12px |
| desktop-medium | 12 | 16px | 12px |
| desktop-small | 12 | 16px | 8px |
| tablet-large | 12 | 16px | 8px |
| tablet-medium | 12 | 16px | 8px |

---

## 6. Zasady użycia (wnioski dla prototypowania)

- **Zakres**: tokeny dotyczą wyłącznie webowej aplikacji SaldeoSMART (nie mobile, nie strona produktowa).
- **Kolor primary**: Brand #0066CC; skala 50–900 jako stany (600 hover, 700 pressed, 50/100 tła).
- **Semantyka statusów**: Red = błąd/destrukcja, Green = sukces, Orange/Yellow = ostrzeżenie, Blue (cyjan) = informacja. Tło komunikatu = odcień 50, ikona/tekst akcentu = 500–600.
- **Fonty**: Poppins SemiBold tylko do nagłówków/display; Roboto do całej treści. Import: Google Fonts (Poppins 600, Roboto 400/500/700).
- **Rytm odstępów**: wielokrotności 4 (2/4/8/12/16/20/24/28/32/40/48/64/72/80/96/120). Karty: padding 24, radius 16. Pill/okrąg: radius 1000.
- **Brak tokenów semantycznych**: biblioteka publikuje tylko prymitywy (Primitives, 1 tryb — brak dark mode). Mapowanie semantyczne (np. text-primary, bg-surface) trzeba wywieść z komponentów w plikach Component Library.
- **Legacy**: w pliku występują też stare style 1.0 (np. `neutral-20` #F2F2F2, `red-70` #CC334C) — NIE używać w nowych projektach; źródłem prawdy są tokeny `Color/*` powyżej.

## Jak pobrać żywy kontekst z Figmy

- Lista tokenów z wartościami: narzędzie MCP `get_variable_defs` działa tylko per-node; pełny zrzut zmiennych uzyskano przez `use_figma` (Plugin API: `figma.variables.getLocalVariableCollectionsAsync()`).
- Wyszukiwanie tokenów/stylów: `search_design_system` z fileKey `QOaYDRi2OFCSNfCwGeVYac` i library key podanym w nagłówku.
- Noty i przykład karty info: `get_design_context` na nodach `884:4221` i `1966:6`.
