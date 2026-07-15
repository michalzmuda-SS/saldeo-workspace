# SCHEDULING.md — harmonogram / autopilot (Vmodel-S)

> Jeden plik = jedno zadanie. Tu: powtarzalne zadania uruchamiane cyklicznie (Cowork „weekly autopilot").
> Zasada: autopilot tylko dla pracy **niskiego ryzyka i raportowej**. Nigdy compliance/płatności/deploy/cutover bez człowieka.

## Rekomendowane zadania cykliczne (gotowe do włączenia)
| Zadanie | Kadencja (cron) | Co robi | Ryzyko |
|---|---|---|---|
| Przegląd `loops/PROPOSALS.md` | pon 08:00 (`0 8 * * 1`) | zbiera nowe propozycje `proposed`, streszcza Michałowi do akceptacji | niskie |
| Model health report | pt 16:00 (`0 16 * * 5`) | co zmieniło się w `loops/`, `memory.md`, otwarte propozycje, wersje pakietów | niskie |
| PA: digest metryk North Star | pon 09:00 (`0 9 * * 1`) | zbiera NRR/cross-engine/churn (gdy konektory/dane), sygnały do `outputs/drafts/` | niskie |
| DnT: nocny data-quality check | codziennie 02:00 (`0 2 * * *`) | uruchamia `loop-data-quality` na krytycznych zbiorach, alert przy FAIL | niskie/średnie |
| ssa: przypomnienie o dług techniczny (20% capacity) | pon 10:00 (`0 10 * * 1`) | sprawdza, czy 20% capacity na dług jest w planie sprintu | niskie |

## Zasady autopilota
- **Human-in-the-loop:** zadania *raportują i proponują*, nie podejmują decyzji ani nie wysyłają na zewnątrz.
- **Bramka i dowód:** jeśli zadanie uruchamia pętlę (np. data-quality), obowiązują stop-rules i „nigdy done bez dowodu".
- **Wąski zakres:** kieruj na konkret („sprawdź failujące testy auth"), nie na „popraw aplikację".
- **Włączanie:** te definicje włącza się jako zaplanowane zadania (scheduled tasks). Aktywację potwierdza Michał.
