---
name: integration-due-diligence
description: "Use whenever the user wants a technical + product analysis to support a build-vs-buy-vs-partner-vs-integrate decision about an external product, module, company, or codebase - e.g. 'analiza integracji X z Y', 'czy kupic/zintegrowac produkt Z', 'jaki model integracji wybrac (pelna/posrednia/wspolpraca)', 'due diligence przed inwestycja w X', 'ktore moduly przejac a ktore zastapic wlasnymi'. Trigger also when evaluating a third-party test/audit report for suitability as a 'recommended' or 'native' component, or choosing integration depth (full code merge, white-label SSO, loose partnership API). Use it even without the words 'due diligence' - phrases like 'warto to kupic?', 'co lepiej zrobic samemu', or 'ktory system wybrac' for a product/tech decision should trigger it too."
---

# Integration Due Diligence — analiza techniczna i produktowa build/buy/partner

## Po co ten skill

Decyzje "czy zintegrować/kupić/zbudować samemu/wejść we współpracę z produktem X" są łatwe do spłycenia — jedna osoba patrzy tylko na funkcje, druga tylko na koszt, a nikt nie spisuje, czego jeszcze nie wiadomo. Ten skill wymusza spojrzenie z kilku niezależnych, kompetentnych perspektyw naraz (architektura, dane, produkt/biznes, bezpieczeństwo/operacje) i kończy się nie tylko rekomendacją, ale jawną listą tego, czego brakuje, żeby tę rekomendację potwierdzić. Rozbieżność między perspektywami (np. architekt chce inny docelowy model integracji niż zespół bezpieczeństwa) jest traktowana jako cenny sygnał do przedstawienia decydentowi, nie coś, co trzeba sztucznie wygładzić w jedną spójną narrację.

## Kiedy używać

Zgłoszenia typu: ocena kandydata na "rekomendowany"/"natywny" moduł w większej platformie, wybór między pełną integracją kodu a SSO/white-label a lżejszą współpracą API, decyzja które moduły kandydata przejąć a które zastąpić istniejącymi możliwościami, ocena gotowości raportu testowego/audytu produktu strony trzeciej do podjęcia decyzji inwestycyjnej.

## Proces

### 1. Zbierz materiał źródłowy i nazwij zakres

Przeczytaj wszystko, co już istnieje (raporty testowe, badania rynkowe/pozycjonujące, wcześniejsze wpisy w bazie wiedzy projektu). Zanim zaczniesz analizę, **wypisz jawnie, czego materiał źródłowy NIE pokrywa** (np. "przetestowano tylko moduł A, moduły B i C czekają na osobny raport") — to zastrzeżenie musi trafić do finalnego dokumentu, nie zniknąć w syntezie.

### 2. Ustal warianty modelu integracji

Jeśli użytkownik nie podał własnych wariantów, zaproponuj spektrum od najgłębszego do najluźniejszego, np.:
1. **Pełna** — kupno/przejęcie kodu, scalenie w jeden produkt/jedną bazę danych.
2. **Pośrednia** — dwa odrębne systemy, ale SSO + white-label, użytkownik końcowy nie wie, że korzysta z innego systemu.
3. **Współpraca** — dwa systemy, głębsza integracja niż standardowa (SSO), ale bez white-label — użytkownik świadomie przechodzi między systemami, integracja oparta na relacji biznesowej między firmami.

Potwierdź z użytkownikiem, jeśli te domyślne warianty nie pasują do jego sytuacji.

### 3. Uruchom równoległą analizę wielu perspektyw

Potrzebne są co najmniej cztery niezależne kąty patrzenia — nie pisz ich wszystkich sam z jednej perspektywy, bo wtedy nieświadomie spłaszczysz różnice zdań, które są tu wartością:

- **Architektura/domena** — co technicznie warto przejąć, co scalić, jaki model integracji jest wykonalny i jakim kosztem.
- **Dane** — model danych, migracja, deduplikacja, ryzyko niespójności między systemami.
- **Produkt/biznes** — wartość dla klienta, ryzyko reputacyjne/kanałowe (partnerzy, marka), ekonomika.
- **Bezpieczeństwo/operacje** — tożsamość i dostęp (SSO), compliance/audyt, SLA, zależności od dostawców zewnętrznych.

**Jeśli w projekcie dostępne są dedykowane persony eksperckie** (np. w katalogu skilli SaldeoSMART/Vmodel-S: `ssa-agent-domain-architect`, `ssa-agent-dba`, `ssa-agent-product-analyst` / `ssa-agent-head-of-product` / `ssa-agent-product-owner`, `ssa-agent-devops` / `ssa-agent-security`) — wykorzystaj je: przeczytaj tylko sekcję "Overview" ich `SKILL.md` (tożsamość + zakres ekspertyzy), pomiń mechanikę interaktywnej aktywacji BMAD (menu, greeting, ikony) — ona jest dla żywej rozmowy, nie dla wygenerowania jednej sekcji raportu. Jeśli person nie ma, użyj czterech generycznych ekspertyz z listy powyżej.

Uruchom te cztery analizy jako **niezależne subagenty w jednej turze** (nie sekwencyjnie) — każdy dostaje ten sam kontekst źródłowy i te same pytania (patrz punkt 4), a każdy prompt musi być samodzielny (subagent nie widzi Twojej rozmowy z użytkownikiem).

### 4. Każda perspektywa odpowiada na ten sam szkielet pytań

Dopasuj sformułowania do konkretnego przypadku, ale zachowaj strukturę:
1. Co przejąć/wdrożyć z kandydata, a co zastąpić istniejącymi możliwościami — i dlaczego, per komponent/moduł.
2. Co zaktualizować lub scalić — gdzie kandydat i istniejący produkt robią to samo i trzeba wybrać jedno źródło prawdy.
3. Co musi zostać naprawione u kandydata, zanim zacznie się go promować/wdrażać jako rekomendowany/natywny element.
4. Który wariant integracji (z punktu 2) rekomendują z perspektywy swojej dziedziny — z uzasadnieniem kosztu/ryzyka/czasu.
5. Czego brakuje w due diligence w ich dziedzinie, żeby podjąć dobrą decyzję.

### 5. Syntetyzuj, nie uśredniaj

W finalnym dokumencie:
- **Streszczenie zarządcze** — rekomendacja skonsolidowana + **jawnie nazwane punkty rozbieżności** między perspektywami (jeśli występują — nie zakładaj z góry konsensusu).
- Sekcja per pytanie (1-5), syntetyzująca wnioski wszystkich czterech perspektyw w jedną tabelę/listę z uzasadnieniem.
- Skonsolidowana, pogrupowana per dziedzina lista braków w due diligence (to zwykle najbardziej praktyczna część dla decydenta — potraktuj ją poważnie, nie jako formalność na końcu).
- Aneks z pełnymi, nieskróconymi odpowiedziami każdej z czterech person/perspektyw — ktoś zainteresowany szczegółem technicznym musi mieć do niego dostęp, nie tylko do streszczenia.

### 6. Zapisz w kontekście projektu

Jeśli projekt ma bazę wiedzy (np. plik rejestru źródeł), zapisz raport jako osobny plik i dodaj do niej wpis odsyłający — nie zostawiaj analizy tylko w treści odpowiedzi na czacie.

## Typowe błędy, których unikać

- Pisanie wszystkich czterech perspektyw samemu "z jednej głowy" — traci się rzeczywistą rozbieżność zdań, która jest sygnałem dla decydenta.
- Chowanie zastrzeżeń o niepełnym materiale źródłowym (np. "przetestowano tylko część funkcji") gdzieś w środku zamiast na wstępie.
- Sztuczne uzgadnianie rekomendacji modelu integracji, gdy perspektywy szczerze się różnią — lepiej nazwać to "decyzją do podjęcia na bramce zarządczej" z jasnymi kryteriami, niż zmyślić fałszywy konsensus.
- Pomijanie sekcji "braki w due diligence" lub traktowanie jej jako formalności — to często najcenniejsza część dla osoby podejmującej decyzję inwestycyjną.
