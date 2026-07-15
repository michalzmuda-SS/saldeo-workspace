# SaldeoSMART Design System — Component Library 2.0 (plik Figma)

| | |
|---|---|
| **Plik Figma** | Component-Library-2.0 |
| **fileKey** | `Dp0bhhmbWP1sNHbzpNrkXm` |
| **URL** | https://www.figma.com/design/Dp0bhhmbWP1sNHbzpNrkXm/Component-Library-2.0 |
| **Data ekstrakcji** | 2026-07-10 |
| **Nazwa biblioteki (published)** | Component Library 2.0 |
| **libraryKey** | `lk-dc7f9e35d7f0814b9a052796e1a72d407b31a400e14ca4eeac0081de4c15718c8f9a539d1b3081d558960c941562175d4cf1489f6c96cd840a5d6fbf32277674` |

> **WAŻNE — zakres tego pliku.** Plik `Dp0bhhmbWP1sNHbzpNrkXm` zawiera fizycznie tylko **2 strony**: `Intruduction` (883:712, cover) oraz `✅ Logo` (1431:1149). Pozostałe komponenty biblioteki "Component Library 2.0" (inputy, selecty, checkboxy, modale, tabsy itd.) są **opublikowane w bibliotece**, ale ich strony źródłowe nie znajdują się w tym pliku (najprawdopodobniej zostały wydzielone do innych plików design systemu). Poniżej: pełna dokumentacja Logo (jedyny komponent w tym pliku) + katalog wszystkich komponentów biblioteki wykrytych przez wyszukiwanie design systemu (nazwa, typ, componentKey — bez node ID, bo węzły źródłowe są poza tym plikiem).

---

## 1. Struktura pliku

| Strona | Node ID | Zawartość |
|---|---|---|
| Intruduction | `883:712` | Cover 1920×960 (frame `11187:79366` → `11187:79365`) z logo i tytułem |
| ✅ Logo | `1431:1149` | Dokumentacja komponentu Logo + siatka wszystkich 48 wariantów |

Uwaga techniczna: `get_metadata` na stronie `1431:1149` przekracza timeout (strona bardzo ciężka — pełna siatka wariantów logo); screenshot strony i zapytania o pojedyncze węzły działają poprawnie.

---

## 2. Tokeny użyte w tym pliku

Zmienne (Figma variables) wykryte na cover:

| Token | Wartość |
|---|---|
| `Color/Slate/900` | `#101623` (główny kolor tekstu / nagłówków) |
| `Color/Base/White` | `#FFFFFF` (tło) |
| `Spacing/120` | `120` px |

Konwencja nazewnictwa tokenów w DS: `Color/{paleta}/{stopień}` (np. Slate/900), `Spacing/{wartość}`.

**Typografia cover:** rodzina **Poppins**, styl **SemiBold**, 48 px, kolor `#101623`, wyrównanie do środka, leading normal. Poppins SemiBold to typografia nagłówków display w brandzie SaldeoSMART.

**Layout cover** (frame `11187:79365`): flex column, gap 32 px, wyśrodkowanie, padding `Spacing/120` (120 px), tło `#FFFFFF`.

---

## 3. Komponent: Logo (udokumentowany szczegółowo)

- **Component set:** `Logo` — componentKey `5daba4204dc15b0bb525599f146ccebe1b51cf92` (component_set)
- **Przykładowy wariant (node w tym pliku):** `1488:2365` = `Variant=horizontal, Size=extra large, Color=color`, wymiar **430×64 px**
- **Strona źródłowa:** `✅ Logo` (`1431:1149`)

### Właściwości (properties) i warianty — 3 × 4 × 4 = 48 wariantów

| Property | Wartości |
|---|---|
| `Variant` (Rodzaj) | `icon` \| `horizontal` \| `vertical` |
| `Size` (Rozmiar) | `small` \| `medium` \| `large` \| `extra large` |
| `Color` (Kolor) | `color` \| `inverted` \| `grayscale` \| `black and white` |

### Opis wariantów

- **icon** — sam sygnet: okrągły pierścień w kolorach granatowo-niebiesko-pomarańczowych.
- **horizontal** — sygnet + logotyp „saldeosmart" w jednej linii („saldeo" granatowy, „smart" jasnoniebieski). Proporcja przy `extra large`: 430×64 px (~6.7:1).
- **vertical** — sygnet + logotyp łamany do dwóch linii („saldeo" / „smart"), układ bardziej zwarty.
- **color** — pełny kolor brandowy (granat + niebieski + pomarańczowy akcent sygnetu).
- **inverted** — wersja biała/odwrócona, do stosowania na ciemnych lub kolorowych tłach.
- **grayscale** — skala szarości.
- **black and white** — czysta czerń (1-kolorowa, np. druk mono).

### Znane wymiary

| Wariant | Wymiar |
|---|---|
| horizontal / extra large | 430×64 px (natywny) |
| horizontal / extra large (instancja na cover, przeskalowana) | 1048×156 px |

Pozostałe rozmiary (small/medium/large) są proporcjonalnie mniejsze — przy prototypowaniu skaluj proporcjonalnie z zachowaniem proporcji 430:64 dla wersji horizontal.

### Wskazówki użycia

- Wytyczne stosowania logo znajdują się w osobnym pliku **„Logo manual"** (link na stronie ✅ Logo).
- W nagłówkach aplikacji używaj `horizontal`; przy małej przestrzeni (favicon, avatar aplikacji, zwinięty sidebar) — `icon`; w stopkach/ekranach logowania pionowych — `vertical`.
- Na ciemnym tle zawsze `inverted`, nie `color`.
- Logo w Figmie jest osadzone jako grafika (image fill) — w kodzie używaj SVG brandowego, nie odtwarzaj kształtów.

---

## 4. Katalog komponentów biblioteki „Component Library 2.0" (published)

Komponenty wykryte wyszukiwaniem w bibliotece. **Źródłowe node ID nie są dostępne z tego pliku** — komponenty identyfikuje `componentKey` (stabilny klucz publikacji, użyteczny do wstawiania instancji przez API/MCP). Data = ostatnia publikacja.

### Formularze / inputy

| Komponent | Typ | componentKey | Ostatnia publikacja |
|---|---|---|---|
| Text input | component_set | `5995cd26fd887a55faa2f7cb00b1b4961877afea` | 2026-06-25 |
| Select | component_set | `50af4b25dc564c1ecdab70ba9dddef39ef771bf7` | 2025-10-28 |
| (select) example | component | `3988e1a90a15e5bf27b3aa6319f5e3129c2a42dd` | 2026-06-25 |
| Checkbox & Radiobutton | component_set | `80c0b87ed7e21a7f308fe7d72da924fbcba826d5` | 2026-06-25 |
| Check & Radio icon | component_set | `d651194f8160daa084e289ae10bf4407d80985c5` | 2025-12-01 |
| Checkbox selection | component_set | `98f47e2af4db492244dbeb3978859f97daaad50f` | 2025-03-20 |
| Toggle icon (switch) | component_set | `9696704836854a15362c073ce5d841db2619dcac` | 2025-08-04 |
| inputs/password | component | `01396596e9625fd970a550c49411d7db8e9f7ecd` | 2025-11-03 |
| inputs/blank | component | `6a36ff9fc1123841173fd9e1d6ece31a7d2d1f79` | 2025-10-30 |
| Password strength | component_set | `36a3989f5fd95ae5f2ee618c9eb6e29048839809` | 2025-03-17 |
| trailing-action/button (akcja w polu input) | component_set | `923258ff5133621c960a03b29121e956b96c05f1` | 2026-06-25 |
| Values range | component | `e12101b7ab9bbb92a89c7d6adaa2bdc13f194e98` | 2026-06-25 |

### Datepicker / filtry okresu

| Komponent | Typ | componentKey | Ostatnia publikacja |
|---|---|---|---|
| _date-picker-base | component_set | `bfb433d7ea3c40e6d2bfa55c9fa4c38d821cd547` | 2026-06-25 |
| Datepicker/false/none/default/warning with badge (przykładowy wariant; rodzina Datepicker/*) | component | `45b7cc9fb275b763344829166cf460bcbf42ece9` | 2026-06-25 |
| period filter content | component | `cf520d5d126778c72b6918138368e69962fccb6c` | 2026-06-25 |

### Przyciski / akcje

| Komponent | Typ | componentKey | Ostatnia publikacja |
|---|---|---|---|
| _action button | component_set | `9c595e1ea9deca6f628f4f07ae5392a74daa1662` | 2025-02-13 |
| trigger button | component_set | `7d934b456eeed13dab3ea253d25177593f52f969` | 2025-08-02 |
| double arrow | component_set | `6ef4b8da5de4bdf81d460daacb6634a388bf12ad` | 2025-08-04 |

### Nawigacja

| Komponent | Typ | componentKey | Ostatnia publikacja |
|---|---|---|---|
| Horizontal tabs | component_set | `b35150ccee664e23c84d0a288abdcdacf5607662` | 2026-06-25 |
| _h-tab-button-base | component_set | `69f83865e05efb8387f240f1446deced75f1cd9e` | 2025-03-17 |
| _v-tab-button-base | component_set | `b3e3fa9990aee138fd20bedfdda0c2a820377cbd` | 2025-02-13 |
| Menu | component | `e893aad304daf6f70eda90d6cd2b6609b190b79f` | 2025-11-06 |
| Action menu | component | `890ff7612aeadab6e8a0629a7040916cb9f50e42` | 2025-12-02 |
| Link tree | component_set | `538251c8c520aace6a0ba49daad9c20c8f557c0b` | 2025-07-24 |
| _Footer | component_set | `f188937b1c1fffab98db97bdf8474cc9c0105de8` | 2026-06-29 |

### Overlays / komunikaty

| Komponent | Typ | componentKey | Ostatnia publikacja |
|---|---|---|---|
| Modal | component_set | `46a6ed7420f6ee71830f5a6060a5cfacbe0ab6ca` | 2026-06-29 |
| Toast | component_set | `1e700b508f56d59277e9590177de39a7f41a5c3c` | 2026-03-09 |
| Tooltip | component | `175ad15fefb59768dd67a9b398319921c4e287e0` | 2025-10-30 |

### Elementy wyświetlania danych / pozostałe

| Komponent | Typ | componentKey | Ostatnia publikacja |
|---|---|---|---|
| Cell (komórka tabeli) | component_set | `707a558c645ec843b6c14f42b538cf35eb8bd7f2` | 2026-02-24 |
| Chips | component_set | `7d5590a01816984698dc7186d3a2631d9981cd3b` | 2026-06-25 |
| Status label | component_set | `d4c70e7ffa7106453f1fdc77bbcfd72460e57a1f` | 2025-11-21 |
| Counter label | component_set | `84a6b9d4c837df7c3626a348cf07c4f24f64282e` | 2025-11-07 |
| Accordion | component_set | `bfd578a57943e00211498ff1c9bdb1afa8d8bb39` | 2026-03-18 |
| Avatar | component | `50c5392de9f6463c63f629521ef118781b89ea16` | 2026-06-26 |
| Divider | component_set | `fc883313ab2e482f9ccb6c244db99201020cc2cc` | 2025-11-03 |
| _spinner-medium/red | component_set | `fc2a35aef73ccf5770591991dfd7ca5d56162955` | 2025-02-13 |
| _slot (placeholder do podmiany treści) | component | `db46b00a5376051c94d869a823ad5d976287ce8b` | 2025-03-26 |
| Logo | component_set | `5daba4204dc15b0bb525599f146ccebe1b51cf92` | 2025-02-13 |

Konwencja: komponenty z prefiksem `_` (np. `_action button`, `_date-picker-base`, `_slot`) to **komponenty bazowe/wewnętrzne** — budulec dla komponentów publicznych; w prototypach używaj wariantów publicznych (bez `_`).

### Biblioteka towarzysząca

- **Icons 2.0** — osobna biblioteka ikon (libraryKey `lk-3d26cd0b64ffcfa4d37fdc3668a3eed81acb33bf4ea5ae80d299520eb378255cfa8fc60bb6bc716fbf13fb57dcd6cc267f21f77c849f63aae370ac7614b60f5c`); konwencja nazw: `{nazwa}_{rozmiar}`, np. `download_done_16` (componentKey `e2aff118c0c49fd4f6026e1366c1a4da0500b74c`). Rozmiar w nazwie = px (16, 20, 24...).

---

## 5. Wskazówki do prototypowania

1. **Kolory bazowe UI:** tekst główny `#101623` (Slate/900), tło `#FFFFFF` (Base/White). Pełna paleta (Slate 50–900, kolory brandowe, semantyczne) — patrz plik tokenów DS (`01-tokens.md` / plik Figma z fundamentami).
2. **Typografia:** Poppins (SemiBold dla nagłówków). Przy braku Poppins użyj fallbacku sans-serif o zbliżonej geometrii.
3. **Spacing:** skala tokenów `Spacing/N` gdzie N = wartość w px (potwierdzone `Spacing/120`); spodziewana skala 4/8-px.
4. **Instancjonowanie komponentów:** komponenty biblioteki wstawiaj po `componentKey` z tabel powyżej (działa w Figma API / MCP `use_figma`), nie po node ID.
5. **Szczegółowe style inputów, selectów, modali itd.** wymagają ekstrakcji z plików źródłowych, w których fizycznie leżą te komponenty (inne pliki DS SaldeoSMART) — ten plik ich nie zawiera.

---

## 6. Ograniczenia ekstrakcji (2026-07-10)

- Plik zawiera tylko strony `Intruduction` i `✅ Logo`; brak stron z pozostałymi komponentami → **brak node ID i szczegółowych stylów** (padding, radius, stany hover/focus/error) dla inputów, selectów, checkboxów, modali, toastów itd. z poziomu tego fileKey.
- `get_metadata` strony `✅ Logo` przekracza limit czasu (3 próby po 180 s) — katalog wariantów Logo odtworzony ze screenshotu strony i design contextu instancji.
- Konto Figma bez seatu Dev/Full na planie Org/Enterprise → narzędzia Code Connect (pełna lista komponentów z node ID i properties) niedostępne.
- Dokładne wartości hex kolorów logo (granat/niebieski/pomarańcz) nie były ekstrahowalne (logo jako image fill; pobieranie assetu zablokowane w sandboxie) — źródłem prawdy jest plik „Logo manual" i tokeny brandowe DS.
