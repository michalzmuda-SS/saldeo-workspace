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

## Higiena tokenów (stosuj zawsze)
- Pracuj z `project-context.md` i wyciągami zamiast wklejać całe dokumenty.
- Dziel duże dokumenty (sharding) i buduj listy kontekstu zamiast ładować wszystko.
- Zadania masowe batchuj na Haiku; ciężką analizę rób raz i zapisuj artefakt.
- Eskaluj do Opusa punktowo — tylko dla konkretnego, trudnego kroku, potem wróć do Sonneta.
