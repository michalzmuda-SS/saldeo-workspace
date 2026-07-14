# Icons 2.0 — biblioteka ikon SaldeoSMART

- **Plik Figma:** Icons-2.0
- **fileKey:** `rjJYpppxf27dPAzgE0zWoh`
- **URL:** https://www.figma.com/design/rjJYpppxf27dPAzgE0zWoh/Icons-2.0
- **Data ekstrakcji:** 2026-07-10
- **Uzupełnienie:** 2026-07-10 — odczytano stronę przeglądową `0:1` (zasady użycia i proces tworzenia ikon custom, przez screenshot) oraz strony `744:14` (12 px), `446:2` (32 px), `975:14` (48 px), `946:33` (Custom — komponenty AI)

---

## 1. Struktura pliku (strony)

| Strona | Node ID | Zawartość |
|---|---|---|
| Icons | `0:1` | Strona przeglądowa z pełnymi wytycznymi („Ikony – Google Material" i „Ikony – custom") — treść odczytana ze screenshotu, patrz sekcje 6–7. `get_metadata`/`get_design_context` na tym node nadal timeoutują — enumeracja node ID dzieci niemożliwa |
| 12 px | `744:14` | Rozmiar dodatkowy, w budowie — tylko 1 ikona: `close_12` (`744:601`), kategoria General |
| 16 px | `325:14` | Komplet ikon w siatce 16×16 px (sufiks nazwy `_16`) |
| 20 px | `325:15` | Komplet ikon w siatce 20×20 px (sufiks nazwy `_20`) |
| 24 px | `325:16` | Komplet ikon w siatce 24×24 px (sufiks nazwy `_24`) |
| 32 px | `446:2` | Rozmiar dodatkowy, w budowie — tylko 1 zestaw: `play_arrow_32` (`446:17`), warianty `Fill=No` (`446:16`) / `Fill=Yes` (`446:15`) |
| 48 px | `975:14` | Strona pusta (zarezerwowana na rozmiar 48 px; ikona `AI_48` leży na stronie Custom) |
| Custom | `946:33` | Komponenty specjalne AI: zestaw `AI_label` (`946:24`), ikona `AI_48` (`976:71`), ramka robocza `AI_playground_48` (`976:73`) — patrz sekcja 8 |

Strony rozmiarowe 16/20/24 px zawierają te same **10 kategorii** (ramki): General, Arrows, People, Business, Communication, Time, Files, Layout, Others, Custom. Strony 12/32/48 px to rozmiary dodatkowe przewidziane w wytycznych („w przyszłości do zasobu mogą dołączyć ikony w dodatkowych rozmiarach; nie każda ikona musi w nich występować").

## 2. Konwencje

### Rozmiary i siatka
- Trzy rozmiary bazowe: **16 px, 20 px, 24 px** — każdy rozmiar to osobna strona i osobny komponent (nie warianty jednego komponentu).
- Ikona rysowana jest w kwadratowej ramce równej rozmiarowi (16×16, 20×20, 24×24).
- Zestawy wariantów (component sets) mają wewnętrzny padding oparty o token **`Spacing/4` = 4**.

### Styl graficzny
- Zestaw oparty na **Google Material Symbols** (nazwy ikon 1:1 z Material Symbols, np. `check_circle`, `expand_more`, `folder_open`).
- Parametry zasobu (ze strony przeglądowej `0:1`): **style: rounded**, **weight: 300**. Grubość linii: Material domyślnie waga 400 / stroke 2 px — SaldeoSMART używa odchudzonej wersji weight 300, więc **stroke 1.5 px**.
- Dwa style wypełnienia jako warianty właściwości **`Fill`**:
  - `Fill=No` — wersja konturowa (outline), domyślna,
  - `Fill=Yes` — wersja wypełniona (filled).
- Większość ikon merytorycznych (General, Files, Business, People, Time, Communication, część Others/Layout) istnieje jako **zestaw wariantów Fill=No/Yes**; ikony proste (strzałki, chevrony, akcje typu `close`, `check`, `search`, listy) są pojedynczymi komponentami bez wariantu Fill.
- Ikona brandowa `SMARTduet` ma warianty **`Variant=mono` / `Variant=color`**.

### Kolor
- Domyślne wypełnienie ikon: token **`Color/Slate/900` = `#101623`** (ciemny granatowo-czarny). Ikony są jednokolorowe (mono), kolor nadawany przez zmienną — łatwe przełączanie w implementacji.

### Nazewnictwo
- Wzorzec: `nazwa_ikony_{rozmiar}`, np. `search_16`, `search_20`, `search_24` — snake_case + sufiks rozmiaru.
- Nazwy zgodne z Material Symbols; ikony własne SaldeoSMART: `xml`, `ksef-send`, `add-kor`, `SMARTduet`, `content_paste_custom` (kategoria Custom).
- Drobne niespójności: `phone_iphone_16/20`, ale `phone-iphone_24`; `encrypted`, `attach_money`, `block`, `alternate_email` nie występują we wszystkich rozmiarach.

## 3. Katalog ikon (strona 16 px, node ID kategorii)

Liczność: **~379 ikon na stronie 16 px** (analogicznie 20 px i 24 px). Nazwy poniżej bez sufiksu `_16`. Node ID podane dla kategorii i ikon reprezentatywnych.

### General — `338:4` (108 ikon)
Reprezentatywne: `search_16` → `87:609`, `close_16` → `85:584`, `check_16` → `85:592`, `add_16` → `107:15`, `edit_16` → `79:6455`, `delete_16` → `79:6469`, `settings_16` → `79:6371`, `warning_16` → `79:6304`, `info_16` → `79:6311`.

warning, visibility_off, visibility, verified_user, stop, settings, save, radio_button_unchecked, radio_button_checked, push_pin, print_lock, print_error, print, play_arrow, photo, phone_iphone, pending, pause, notifications_unread, notifications_off, notifications_active, notifications, notification_add, no_encryption, new_releases, new_label, lock_open, lock_clock, lock, label_off, label, key_vertical, key_off, key, info, indeterminate_check_box, help, gpp_maybe, gpp_bad, filter_alt_off, filter_alt, fiber_pin, error, edit_square, edit_notifications, edit, do_not_disturb_on, delete, dangerous, content_copy, cloud_upload, cloud_sync, cloud_off, cloud_download, cloud_done, cloud, check_circle, check_box, cancel, build, bolt, backspace, add_circle, add_box, tune, task_alt, system_update_alt, sync_problem, sort_by_alpha, sort, share, security, search, running_with_errors, remove, published_with_changes, progress_activity, password, manufacturing, login, link, fingerprint, filter_list_off, filter_list, encrypted, download_done, download, done_all, content_cut, construction, close_small, close, clock_loader_90, clock_loader_80, clock_loader_60, clock_loader_40, clock_loader_20, clock_loader_10, check_small, check_indeterminate_small, check_box_outline_blank, check, block, attachment, attach_file_add, attach_file, add_link, add

### Arrows — `327:58` (36 ikon)
Reprezentatywne: `chevron_right_16` → `92:1229`, `expand_more_16` → `92:1210`, `refresh_16` → `92:1219`, `arrow_split_16` → `912:61`.

arrow_split, subdirectory_arrow_right, update, unfold_more, unfold_less, undo, sync_alt, swap_horiz, settings_backup_restore, refresh, rotate_right, redo, open_in_full, line_start_arrow_notch, line_end_arrow_notch, last_page, keyboard_double_arrow_left, keyboard_double_arrow_right, first_page, expand_more, expand_less, double_arrow, cycle, close_fullscreen, chevron_right, chevron_left, cached, autorenew, arrow_upward, arrow_right_alt, arrow_right, arrow_left_alt, arrow_left, arrow_drop_up, arrow_drop_down, arrow_downward

### People — `328:59` (23 ikony)
Reprezentatywne: `person_16` → `134:33`, `group_16` → `79:6874`, `passkey_16` → `92:1236`.

user_attributes, shield_person, productivity, person_search, person_remove, person_check, person_cancel, person_add, person, passkey, manage_accounts, groups, group_remove, group_off, group_add, group, contact_page, contact_mail, badge, assignment_ind, account_circle_off, account_circle, account_box

### Business — `328:60` (54 ikony)
Reprezentatywne: `payments_16` → `548:41`, `receipt_16` → `79:7056`, `calculate_16` → `79:7014`, `database_16` → `79:7000`, `bar_chart_16` → `426:97`.

payments, trolley, shopping_cart, savings, request_quote, receipt, order_approve, note_alt, monetization_on, local_atm, inventory_2, heap_snapshot_thumbnail, heap_snapshot_multiple, heap_snapshot_large, database, credit_card, calculate, business_center, box_edit, box_add, box, assignment_turned_in, assignment_late, assignment_ind, assignment_add, assignment, analytics, add_chart, add_card, account_balance_wallet, account_balance, show_chart, query_stats, search_insights, point_of_sale, pie_chart, percent, inventory, finance_mode, finance, equal, domain_add, domain, corporate_fare, content_paste_search, content_paste_off, content_paste_go, content_paste, barcode_scanner, barcode, bar_chart, balance, attach_money, add_shopping_cart

### Communication — `329:61` (18 ikon)
Reprezentatywne: `mail_16` → `79:7196`, `send_16` → `79:7217`, `chat_16` → `79:7252`, `feedback_16` → `438:82`.

alternate_email, send, schedule_send, mark_email_read, mail, live_help, headset_mic, forward_to_inbox, forum, feedback, drafts, contact_support, chat_bubble, chat_add_on, chat, call, attach_email, add_comment

### Time — `332:3` (18 ikon)
Reprezentatywne: `schedule_16` → `356:58`, `history_16` → `92:1328`, `calendar_month_16` → `79:7333`.

update, pending_actions, history, work_history, timer, schedule, overview, hourglass, edit_calendar, calendar_today, calendar_month, calendar_clock, calendar_add_on, alarm_on, alarm_off, alarm_add, alarm, acute

### Files — `335:6` (48 ikon)
Reprezentatywne: `folder_16` → `79:7473`, `description_16` → `79:7410`, `file_16` → `845:94`, `ballot_16` → `426:174`.

file, file_copy, upload_file, topic, text_ad, task, scan_delete, scan, rule_folder, restore_page, request_page, quick_reference_all, quick_reference, note_add, note, newspaper, list_alt_add, list_alt, insert_page_break, home_storage, history_edu, heap_snapshot_multiple, heap_snapshot_large, folder_special, folder_shared, folder_open, folder_managed, folder_data, folder_copy, folder, find_in_page, file_save, file_present, fact_check, edit_document, drive_folder_upload, drive_file_move, document_scanner, difference, description, create_new_folder, contract_edit, contract, contact_page, checkbook, bookmark_manager, ballot, archive

### Layout — `336:7` (35 ikon)
Reprezentatywne: `menu_16` → `92:1408`, `home_16` → `92:1407`, `grid_view_16` → `79:7725`, `list_16` → `92:1340`.

zoom_out, zoom_in, open_in_new, new_window, more_vert, more_horiz, menu, home, fullscreen_exit, fullscreen, exit_to_app, drag_hand, drag_pan, drag_indicator, drag_handle, density_small, density_medium, density_large, apps, view_column, table_rows_narrow, table_rows, stacks, splitscreen, pageview, light_mode, layers_clear, layers, grid_view, fit_screen, dashboard_customize, dark_mode, list, format_list_bulleted, format_list_numbered

### Others — `336:9` (36 ikon)
Reprezentatywne: `support_16` → `92:1428`, `workspace_premium_16` → `79:6740`, `smart_toy_16` → `79:6796`, `campaign_16` → `79:6684`.

public, language, featured_seasonal_and_gifts, redeem, live_tv, support, workspace_premium, play_circle, stars, smart_toy, skull, signpost, school, rocket_launch, photo_camera, palette, lan, hourglass, headset_mic, headphones, grade, font_download, flowsheet, flash_on, flash_off, flash_auto, flag, fiber_new, extension_off, extension, emoji_objects, emoji_events, deployed_code, campaign, add_a_photo, account_tree

### Custom — `336:10` (3 ikony — własne SaldeoSMART)
| Nazwa | Node ID (16 px) | Uwagi |
|---|---|---|
| xml_16 | `227:86` | eksport/format XML |
| ksef-send_16 | `227:83` | wysyłka do KSeF |
| SMARTduet_16 | `709:11` | zestaw: `Variant=mono` (`709:12`), `Variant=color` (`705:31`) |

## 4. Różnice między stronami rozmiarowymi

Katalog nazw jest w ~99% identyczny we wszystkich trzech rozmiarach. Odstępstwa:

| Ikona | 16 px | 20 px | 24 px |
|---|---|---|---|
| add-kor (Custom) | – | tak | – |
| content_paste_custom (Custom) | – | tak | – |
| arrow_downward_alt, swap_vert (Arrows) | – | tak | – |
| encrypted | tak | – | tak |
| attach_money | tak | – | tak |
| block | tak | – | – |
| phone_iphone | `phone_iphone_16` | `phone_iphone_20` | `phone-iphone_24` (myślnik) |

Kategorie na stronie 20 px: General `336:26`, Arrows `336:27`, People `336:28`, Business `336:29`, Communication `336:30`, Time `336:31`, Files `336:32`, Layout `336:33`, Others `338:2`, Custom `338:3`.

## 5. Wskazówki implementacyjne

- Dobierz komponent wg docelowego rozmiaru (16/20/24), nie skaluj ikon między rozmiarami — każdy rozmiar ma dedykowany rysunek (optical sizing).
- **`Fill=No` jest domyślny w interfejsach.** Oficjalna zasada (strona `0:1`): warianty wypełnienia istnieją tylko dla ikon, w których widać różnicę; ikony z wypełnieniem stosuje się tylko wtedy, gdy rozmiar ikony jest zbyt mały, aby sam obrys był dobrze widoczny.
- Kolor ikony zawsze przez token koloru (domyślnie `Color/Slate/900` #101623), nie hardcode.
- Nazwy Material Symbols umożliwiają mapowanie 1:1 na font/bibliotekę Material Symbols w kodzie; ikony z kategorii Custom (xml, ksef-send, add-kor, SMARTduet, content_paste_custom) wymagają własnych assetów SVG.

## 6. Zasady użycia ikon (strona przeglądowa `0:1` — „Ikony – Google Material")

*Uzupełniono 2026-07-10 na podstawie screenshotu strony przeglądowej (tekst nieosiągalny przez API — node timeoutuje).*

### Zasób i jego charakterystyka
- Źródło: **Google Material (Google Symbols)**; cechy zasobu: **style: rounded**, **weight: 300**.
- Zasób w Figmie **nie zawiera wszystkich ikon Materiala** — włączono tylko te uznane za przydatne dla SaldeoSMART. W razie potrzeby zasób można powiększać o kolejne ikony z Materiala, a gdy pasującej brak — stworzyć własną. Nowy komponent należy zwięźle nazwać i umieścić na planszach warianty rozmiarowe.

### Struktura warstw (krytyczne dla instance swap)
> „Uwaga projektantko/projektancie! Dodając nowy komponent, koniecznie zmień nazwy warstw."

- Każda ikona musi składać się z **dokładnie 2 warstw: `Vector` oraz `Bounding box`** (np. świeżo wstawiona `account_circle` ma warstwę `account_circle` — trzeba ją przemianować na `Vector`).
- Tylko spójne nazewnictwo warstw pozwala na bezproblemowe użycie property **„Instance swap"** w komponentach.

### Warianty
- **Wielkość:** 3 podstawowe wielkości: **16, 20, 24 px**. W przyszłości mogą dołączyć rozmiary dodatkowe (większe). Każda ikona powinna występować w 3 rozmiarach podstawowych, ale nie każda musi występować w dodatkowych.
- **Wypełnienie:** część ikon ma opcję wypełnienia. Wiele ikon Materiala wygląda tak samo z wypełnieniem i bez — warianty `Fill` wprowadzono **tylko dla ikon, w których widać różnicę**. W interfejsach domyślnie stosuje się ikony **bez wypełnienia**; wypełnione tylko wtedy, gdy rozmiar ikony jest zbyt mały, aby sam obrys był dobrze widoczny.
- **Grupy:** komponenty ujęte w grupy dla łatwiejszego wyszukiwania (kategorie **różnią się** od tych z Google Material): general, arrows, people, business, communication, time, files, layout, others, custom.

## 7. Proces projektowania ikon custom (strona `0:1` — „Ikony – custom")

### Wytyczne projektowe
- **Zasady od Google Material:** nową ikonę dla SaldeoSMART projektuj wg zasad projektowania ikon Google Material. Cel: maksymalna spójność ikon własnych z materialowymi — tak, aby nie dało się zauważyć, że pochodzą z różnych źródeł.
- **Linia:** Material domyślnie waga 400 i stroke 2 px; SaldeoSMART stosuje weight 300, więc **stroke 1.5 px**.
- **Projektowanie:** zacznij od szkiców (koncepcja), potem projekt wektorowy **w rozmiarze 24×24 px**. Nie twórz od zera — przejrzyj ikony Google Material (inspiracja formą, elementy do wykorzystania). Pobierając ikony z Materiala wybieraj **styl rounded i wagę 300**.
- **Komponowanie z części:** np. ikona „Pobierz plik XML" powstała z połączenia materialowych `scan delete` + `code blocks`.
- **Korekty zapożyczonych elementów:** koryguj w odniesieniu do kompozycji ikon materialowych (np. nawiasy `<>` z `code block` były za duże — zmniejszono je i zbliżono, by zajmowały tyle szerokości co poziome linie w `description` i były tak samo oddalone od krawędzi kartki).
- **Litery w ikonach:** Material nie ma pełnego alfabetu — wykorzystuj co się da, resztę dorabiaj, pilnując wielkości liter i rozmieszczenia spójnych z Materialem. Przykład: słowo **KSeF** złożono z liter ikon `send time extension`, `10k`, `sip`, `fiber new`, `full hd`; małe „e" doprojektowano z zachowaniem szerokości linii pozostałych liter.
- **Odległości między elementami:** wyznaczaj przez analogię do istniejących ikon (np. odstęp dwóch elementów wzięty z materialowej `switch right`).

### „Technikalia na koniec" — checklist dodawania nowej ikony
1. Osadź ikonę w bounding boxie i prawidłowo ją wypozycjonuj (odwołuj się do układów z Materiala).
2. Struktura ikony musi być identyczna ze strukturą pozostałych komponentów ikon — na wektorach zwykle `Union selection` + `Flatten` w Figmie.
3. Nazwij warstwy: ikona = **2 warstwy `Vector` i `Bounding Box`**.
4. Przygotuj pozostałe wielkości ikony do biblioteki.
5. Dodaj i skonfiguruj komponent dla nowej ikony.
6. Umieść ikonę w kategorii **Custom** — zarówno w konfiguracji komponentu, jak i na planszy ikon.
7. Zaktualizuj (opublikuj) bibliotekę, aby nowa ikona była dostępna dla wszystkich.

Strona zawiera też sekcję **Grid** („Siatka projektowa od Materiala") — sam obraz siatki keyline jest na screenshocie zbyt mały do odtworzenia wartości.

## 8. Komponenty AI (strona Custom `946:33`)

*Uzupełniono 2026-07-10.*

### AI_label — `946:24` (component set)
Etykieta/badge „AI" w kształcie pigułki, do oznaczania funkcji AI w interfejsie. Właściwości: **`Size` (14px / 16px / 20px) × `Disabled` (false / true)** — 6 wariantów:

| Wariant | Node ID | Wymiary (szer.×wys.) |
|---|---|---|
| Size=14px, Disabled=false | `946:27` | 19×14 |
| Size=14px, Disabled=true | `946:46` | 19×14 |
| Size=16px, Disabled=false | `946:23` | 20×16 |
| Size=16px, Disabled=true | `946:25` | 20×16 |
| Size=20px, Disabled=false | `946:38` | 23×18 |
| Size=20px, Disabled=true | `946:42` | 23×18 |

Tokeny użyte w komponencie:
- `Color/Orange/500` = `#ff7900` — tło pigułki w stanie aktywnym (biały tekst „AI": `Color/Base/White` = `#ffffff`),
- `Color/Slate/600` = `#858d99` — wersja disabled (szary tekst „AI" na jasnej pigułce),
- `Spacing/full rounded` = `1000` — pełne zaokrąglenie (pill),
- `space/xsmall` = `4` — padding wewnętrzny.

### AI_48 — `976:71`
Pojedyncza ikona 48×48 px: zaokrąglony kwadratowy obrys z literami „AI" w środku i iskrami (sparkles) przy prawym górnym rogu; mono/outline w `Color/Slate/900`. Obok ramka robocza `AI_playground_48` (`976:73`, pusta — plansza do dalszych prac nad ikonami 48 px).

## 9. Luki / ograniczenia ekstrakcji

- `0:1` (strona przeglądowa): `get_metadata` i `get_design_context` timeoutują — treść wytycznych odczytano ze screenshotu całej strony (sekcje 6–7 powyżej). Nieodtworzone: dokładne wartości **siatki keyline „Grid"** (obraz zbyt mały) oraz node ID poszczególnych ramek na tej stronie.
- `975:14` (strona „48 px") jest pusta — rozmiar 48 px na razie reprezentuje tylko `AI_48` na stronie Custom.
- Strony „12 px" i „32 px" zawierają po jednej ikonie (`close_12`, `play_arrow_32`) — zestaw rozmiarów dodatkowych jest w początkowej fazie budowy.
