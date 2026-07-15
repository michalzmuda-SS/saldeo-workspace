---
name: loop-migration-parity
description: Zamknieta petla migracji strangler-fig: dual-run + walidacja parzystosci zrodlo<->cel jako bramka; STOP przed cutoverem (zgoda czlowieka). Use for data or system migrations.
---

# Parytet migracji (Migration Specialist) — petla (Loop Engineering)

**Maker:** Kinga (Migration Specialist) · **Checker (maker-checker):** Pawel (Data Quality) / Beata (Data Architect) · **Bramka:** walidacja parzystosci zrodlo<->cel

> „Done" = zweryfikowane dowodem, nie napisane. Bez bramki nie ma petli.

## Protokol petli — Discover -> Plan -> Execute -> Verify -> Iterate
1. Zrozum cel (goal). Wczytaj `project-context.md`, `AGENTS.md` (+ `DESIGN.md`/`WRITING.md` jesli dotyczy).
2. Zaplanuj najmniejszy bezpieczny krok/zmiane.
3. Wykonaj.
4. **Verify — uruchom bramke:** uruchom walidacje parzystosci (metryki zgodnosci, progi akceptacji) na dual-run; rozbieznosci ponad prog = FAIL.
5. Jesli bramka mowi nie: przeczytaj wynik -> znajdz przyczyne -> popraw **przyczyne, nie objaw** -> wroc do 4.
6. Zaktualizuj `loops/LOOP_STATE.md` po kazdym przebiegu (cel, co przeszlo/nie, nastepny krok).

## Maker-checker
Pawel (Data Quality) / Beata (Data Architect) ocenia wynik **jako weryfikator, nie autor**: zwraca **PASS / FAIL + powod + wymagana poprawka**.
Agent, ktory wykonal prace, nie jest jedynym sedzia.

## Warunki STOP (twarde)
- Wszystkie checki PASS -> raportuj done ze **swiezym dowodem z tej sesji**.
- 5 prob wyczerpane -> stop; wypisz, co nadal nie przechodzi.
- Ten sam blad/finding 2x z rzedu -> stop i eskaluj (Beata -> czlowiek).
- STOP przed: CUTOVER, usuniecie danych zrodlowych, zmiany produkcyjne — bez wyraznej zgody Michala.
- **Nigdy done bez swiezego dowodu z checka w tej sesji.**

## Zakazane (nie oszukuj bramki)
- cutover bez zielonej parzystosci
- brak przetestowanego rollbacku
- migracja bez sladu audytowego/compliance
