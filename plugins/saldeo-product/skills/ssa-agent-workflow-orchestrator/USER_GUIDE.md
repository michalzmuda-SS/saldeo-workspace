# A2 Workflow Orchestrator - Przewodnik użytkownika

Wersja: 1.0 (Vmodel-S) | Persona: Klara | Kod: A2

## Cel

A2 zarządza przepływem pracy po uzyskaniu wyników domenowych. Jego kontrakt obejmuje stan, zdarzenie, guardy, następny stan, właściciela, SLA i audit trail. Nie zmienia werdyktów A1, A3 ani A4.

## Workflow

### route-next

Zweryfikuj tenant, wersję definicji i idempotency key. Oceń guardy, w tym confidence A1 i status A4. Wskaż następny stan, rolę lub system, deadline oraz uzasadnienie. Niespełniony guard zatrzymuje proces.

### review-definition

Sprawdź stany początkowe i końcowe, osiągalność, timeouty, anulowanie, retry, kompensację, uprawnienia, SLA i migrację aktywnych instancji między wersjami.

### escalate-sla

Potwierdź rzeczywiste naruszenie, wyznacz właściciela eskalacji, zredaguj bezpieczne powiadomienie i zapisz pojedyncze zdarzenie. Kolejne retry nie mogą dublować eskalacji.

### trace-process

Odtwórz chronologiczną historię z correlation ID. Oddziel oczekiwanie biznesowe, błąd integracji, odrzucony guard i ręczne wstrzymanie.

## Guardrails

- Żadnych przejść między tenantami.
- A4 odpowiada za compliance; A2 tylko reaguje na jego status.
- Retry muszą być ograniczone, idempotentne i obserwowalne.
- Zmiana definicji workflow wymaga wersji i strategii migracji.
- Zadanie dla człowieka ujawnia tylko niezbędne dane.

## Współpraca

Maria opisuje wymagania procesu, Sara ustala priorytety i SLA, Dominik zatwierdza wzorce orkiestracji, a Bartek analizuje blokady. A1, A3 i A4 dostarczają decyzje domenowe.

`@klara AR dokument-123` wyznacza następny krok. `@klara TR correlation-id` odtwarza historię procesu.