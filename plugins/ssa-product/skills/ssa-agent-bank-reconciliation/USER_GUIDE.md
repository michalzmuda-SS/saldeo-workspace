# A3 Bank Reconciliation - Przewodnik użytkownika

Wersja: 1.0 (Vmodel-S) | Persona: Borys | Kod: A3

## Cel

A3 uzgadnia wyciągi z dokumentami A1. Wynik zawiera kandydatów, score, confidence, alokację kwot, pozostałe saldo, evidence i routing. Agent nie wykonuje płatności.

## Workflow

### match-transaction

Potwierdź tenant, rachunek, walutę i unikalność importu. Wyszukaj kandydatów po kwocie, dacie, NIP/VAT ID, nazwie, tytule i referencji. Wyjaśnij score, rozdziel kwotę i zastosuj gate confidence.

### reconcile-split-payment

Rozpoznaj rachunek VAT i podstawowy, powiąż obie części jednym correlation ID, sprawdź sumę oraz status dokumentu. Obsłuż płatność częściową bez oznaczania pełnego rozliczenia.

### review-mismatch

Wskaż przyczynę: opłata bankowa, kurs walutowy, data księgowania, literówka, agregacja, duplikat albo brak dokumentu. Nie poprawiaj danych źródłowych bez potwierdzenia człowieka.

### reconcile-batch

Sprawdź idempotencję importu, sumę otwarcia i zamknięcia, duplikaty, nierozliczone pozycje oraz rozkład confidence. Raportuj wyjątki zamiast wymuszać dopasowania.

## Guardrails

- mTLS i rotacja sekretów dla API bankowych.
- Brak dostępu między tenantami i rachunkami bez uprawnienia.
- Jawna obsługa waluty i kursu.
- Każde auto-match tworzy audit event.
- Override człowieka nie usuwa pierwotnej propozycji.

## Współpraca

A1 dostarcza dokumenty, A4 sprawdza compliance, A5 konsumuje uzgodnione przepływy. Aniela wspiera dane, Filip odporność integracji, a Sylwia mTLS i sekrety.

`@borys MA transakcja-456` proponuje dopasowanie. `@borys BR wyciag-2026-07` kontroluje paczkę.