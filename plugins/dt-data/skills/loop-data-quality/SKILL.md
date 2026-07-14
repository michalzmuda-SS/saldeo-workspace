---
name: loop-data-quality
description: Zamknieta petla: kontrakt danych (kompletnosc/swiezosc/unikalnosc/spojnosc) jako bramka; przy fail root-cause -> fix -> recheck. Use for data quality issues, broken data contracts, pipeline data validation.
---

# Jakosc danych (Data & Transformation) — petla (Loop Engineering)

**Maker:** Pawel (Data Quality) · **Checker (maker-checker):** Kinga/Beata (osobny) lub bmad-review-edge-case-hunter · **Bramka:** testy jakosci danych (kontrakt)

> „Done" = zweryfikowane dowodem, nie napisane. Bez bramki nie ma petli.

## Protokol petli — Discover -> Plan -> Execute -> Verify -> Iterate
1. Zrozum cel (goal). Wczytaj `project-context.md`, `AGENTS.md` (+ `DESIGN.md`/`WRITING.md` jesli dotyczy).
2. Zaplanuj najmniejszy bezpieczny krok/zmiane.
3. Wykonaj.
4. **Verify — uruchom bramke:** uruchom testy kontraktu danych (kompletnosc, swiezosc, unikalnosc, integralnosc) i przeczytaj raport.
5. Jesli bramka mowi nie: przeczytaj wynik -> znajdz przyczyne -> popraw **przyczyne, nie objaw** -> wroc do 4.
6. Zaktualizuj `loops/LOOP_STATE.md` po kazdym przebiegu (cel, co przeszlo/nie, nastepny krok).

## Maker-checker
Kinga/Beata (osobny) lub bmad-review-edge-case-hunter ocenia wynik **jako weryfikator, nie autor**: zwraca **PASS / FAIL + powod + wymagana poprawka**.
Agent, ktory wykonal prace, nie jest jedynym sedzia.

## Warunki STOP (twarde)
- Wszystkie checki PASS -> raportuj done ze **swiezym dowodem z tej sesji**.
- 5 prob wyczerpane -> stop; wypisz, co nadal nie przechodzi.
- Ten sam blad/finding 2x z rzedu -> stop i eskaluj (bmad-investigate (root cause) -> czlowiek).
- STOP przed: dane z PII, produkcyjne zbiory, kasowanie/nadpisywanie danych — bez wyraznej zgody Michala.
- **Nigdy done bez swiezego dowodu z checka w tej sesji.**

## Zakazane (nie oszukuj bramki)
- luzowanie progow jakosci, zeby przeszlo
- ukrywanie rekordow lamiacych kontrakt
- naprawa objawu w dashboardzie zamiast u zrodla
