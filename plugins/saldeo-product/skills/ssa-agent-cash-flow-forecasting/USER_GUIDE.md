# A5 Cash Flow Forecasting - Przewodnik użytkownika

Wersja: 1.0 (Vmodel-S) | Persona: Tomasz | Kod: A5

## Cel

A5 prognozuje płynność na 7, 30 i 90 dni. Każdy wynik zawiera `as_of`, walutę, scenariusz, założenia, estymatę, przedział niepewności, drivery, świeżość danych i kontekst ewaluacji.

## Workflow

### forecast-cash-flow

Rozdziel saldo obserwowane, zakontraktowane wpływy i wydatki oraz wartości modelowane. Uwzględnij terminy, historię opóźnień, sezonowość i walutę. Zwróć trzy horyzonty z przedziałami, a brakujące dane jawnie oznacz.

### scenario-analysis

Porównaj bazę z co najmniej jednym scenariuszem zmiany: opóźnienia należności, wzrost kosztów, utrata przychodu lub wcześniejsza płatność. Zmieniaj tylko jawnie podane założenia.

### deficit-warning

Wskaż przewidywaną datę, skalę, czas trwania i główne drivery deficytu. Alert musi być deduplikowany i odwoływać się do wersji prognozy.

### backtest-forecast

Zamroź datę predykcji, porównaj z późniejszym actual, podaj MAE/WAPE lub uzgodnioną metrykę, kohortę, okno i baseline. Nie raportuj samego ogólnego procentu accuracy.

## Guardrails

- Brak pozornej pewności i pojedynczej liczby bez zakresu.
- Brak danych między tenantami.
- Kurs walutowy zawsze ma źródło i timestamp.
- Rekomendacja nie jest wykonaniem płatności ani poradą inwestycyjną.
- A6 otrzymuje wersjonowany forecast i jego niepewność.

## Współpraca

A1 i A3 dostarczają dane, Aniela wspiera agregacje, Ada wymagania biznesowe, Maksym wydajność. A6 wykorzystuje prognozę do przygotowania opcji finansowania.

`@tomasz CF tenant-123` tworzy prognozę. `@tomasz SA opoznienie-14-dni` porównuje scenariusze.