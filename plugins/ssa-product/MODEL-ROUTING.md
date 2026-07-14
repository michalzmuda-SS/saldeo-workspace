# MODEL-ROUTING.md — polityka doboru modeli Claude (optymalizacja tokenów/kosztu)

Cel: maksymalna jakość przy minimalnym koszcie. Zasada: **dobierz najmniejszy model, który
poprawnie wykona zadanie.**

## Tabela routingu

| Model | Kiedy | Przykłady zadań |
|---|---|---|
| **Haiku 4.5** (tani, szybki, duża objętość) | Zadania mechaniczne, jedna weryfikowalna odpowiedź | ekstrakcja/parsowanie (docx, CSV, JSON), klasyfikacja, tagowanie, formatowanie, proste podsumowania, wyszukiwanie w plikach, walidacja checklist, deduplikacja |
| **Sonnet 5** (DOMYŚLNY) | Większość realnej pracy agentów | analiza danych/kohort, research i synteza, pisanie FRD/PRD/stories, dashboardy i specy, modelowanie danych, przeglądy jakości, raporty |
| **Opus 4.8** (najdroższy, najzdolniejszy) | Węzły decyzyjne, wysoka stawka, wieloetapowe rozumowanie | strategia produktu/portfolio, architektura danych i platformy AI, adversarial review, modelowanie pricingu/unit economics, decyzje Board gate, trudny debugging |

## Reguła kciuka
- Jedna poprawna, weryfikowalna odpowiedź → **Haiku**.
- Wymaga osądu/tworzenia → **Sonnet**.
- Błąd jest kosztowny i wieloetapowy → **Opus**.

## Agent → domyślny model (per rola)
Persona sama nie zmienia modelu — o tym decyduje charakter *zadania*, które akurat wykonuje. Poniżej
domyślne oczekiwanie dla typowych zadań każdej roli; przy zadaniu nietypowym dla roli stosuj tabelę wyżej,
nie tę listę.

| Rola | Domyślny model | Kiedy eskalować wyżej |
|---|---|---|
| **Misza** (Head of Product/CPO) | **Opus** | Zawsze przy: strategii/portfolio, sekwencji dźwigni wzrostu, unit economics/VBP, decyzjach go/no-go i Board gate. To węzły decyzyjne z definicji — nie routuj ich do Sonneta nawet przy prostym pytaniu, chyba że to czysto informacyjne pytanie o istniejący dokument. |
| Ada, Sara, Dominik, Sylwia | Sonnet (Opus dla adversarial review / trudnych ADR) | Przegląd trafia do partnerów zewnętrznych, wpływa na gate D60/D90, lub dotyczy compliance (KSeF, RODO) |
| Maciej, Emilia, Jarek, Rafał, Norbert, Ewa, Kacper, Renata, Filip, Aniela, Maksym | Sonnet | Trudny debugging / decyzja architektoniczna z długim skutkiem → Opus |
| Maria, Jacek, Piotr | Sonnet | — |
| Oliwia, Stefania, Bartek | Sonnet (Haiku dla mechanicznych przebiegów: formatowanie, walidacja checklist) | — |

## Kto decyduje
Claude (albo agent-orchestrator w party-mode) wybiera model per-zadanie, nie per-rozmowa: ta sama persona
może zaczynać na Sonnecie i punktowo eskalować do Opusa na jeden krok (np. Misza robi desk research na
Sonnecie, potem liczy scenariusz go/no-go na Opusie), po czym wraca do modelu domyślnego.

## Higiena tokenów (stosuj zawsze)
- Pracuj z `project-context.md` i wyciągami zamiast wklejać całe dokumenty.
- Dziel duże dokumenty (sharding) i buduj listy kontekstu zamiast ładować wszystko.
- Zadania masowe batchuj na Haiku; ciężką analizę rób raz i zapisuj artefakt.
- Eskaluj do Opusa punktowo — tylko dla konkretnego, trudnego kroku, potem wróć do Sonneta.
