---
name: loop-experiment-rigor
description: Zamknieta petla: hipoteza pre-registered (metryka/prog/what-if-false) PRZED zebraniem danych; bramka = zdefiniowana moc/proba. Use when designing A/B tests, surveys, cohort validations.
---

# Rygor eksperymentu (Experiment Designer) — petla (Loop Engineering)

**Maker:** Tomasz (Experiment & Survey Designer) · **Checker (maker-checker):** Iwona (Head of Analytics) · **Bramka:** hipoteza + prog + moc/proba zdefiniowane przed danymi

> „Done" = zweryfikowane dowodem, nie napisane. Bez bramki nie ma petli.

## Protokol petli — Discover -> Plan -> Execute -> Verify -> Iterate
1. Zrozum cel (goal). Wczytaj `project-context.md`, `AGENTS.md` (+ `DESIGN.md`/`WRITING.md` jesli dotyczy).
2. Zaplanuj najmniejszy bezpieczny krok/zmiane.
3. Wykonaj.
4. **Verify — uruchom bramke:** sprawdz: metryka, kierunek, prog go/no-go, what-if-false, wielkosc proby i moc statystyczna — zdefiniowane PRZED zebraniem danych.
5. Jesli bramka mowi nie: przeczytaj wynik -> znajdz przyczyne -> popraw **przyczyne, nie objaw** -> wroc do 4.
6. Zaktualizuj `loops/LOOP_STATE.md` po kazdym przebiegu (cel, co przeszlo/nie, nastepny krok).

## Maker-checker
Iwona (Head of Analytics) ocenia wynik **jako weryfikator, nie autor**: zwraca **PASS / FAIL + powod + wymagana poprawka**.
Agent, ktory wykonal prace, nie jest jedynym sedzia.

## Warunki STOP (twarde)
- Wszystkie checki PASS -> raportuj done ze **swiezym dowodem z tej sesji**.
- 5 prob wyczerpane -> stop; wypisz, co nadal nie przechodzi.
- Ten sam blad/finding 2x z rzedu -> stop i eskaluj (Iwona -> czlowiek).
- STOP przed: decyzje na danych bez wystarczajacej proby/mocy — bez wyraznej zgody Michala.
- **Nigdy done bez swiezego dowodu z checka w tej sesji.**

## Zakazane (nie oszukuj bramki)
- czytanie wyniku z szumu (za mala proba)
- zmiana hipotezy po zobaczeniu danych (p-hacking)
- brak reguly what-if-false
