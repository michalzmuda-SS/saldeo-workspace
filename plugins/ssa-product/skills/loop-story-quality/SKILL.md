---
name: loop-story-quality
description: Zamknieta petla: story z testowalnym Given-When-Then + compliance, az przejdzie checkliste jakosci. Use when drafting or reviewing user stories for implementation.
---

# Jakosc user story (BA->PO) — petla (Loop Engineering)

**Maker:** Maria (BA) · **Checker (maker-checker):** Sara (PO) — execute-checklist / walidacja artefaktow · **Bramka:** checklist jakosci story + G-W-T testowalne

> „Done" = zweryfikowane dowodem, nie napisane. Bez bramki nie ma petli.

## Protokol petli — Discover -> Plan -> Execute -> Verify -> Iterate
1. Zrozum cel (goal). Wczytaj `project-context.md`, `AGENTS.md` (+ `DESIGN.md`/`WRITING.md` jesli dotyczy).
2. Zaplanuj najmniejszy bezpieczny krok/zmiane.
3. Wykonaj.
4. **Verify — uruchom bramke:** wykonaj checkliste jakosci story: G-W-T testowalne, NFR, zaleznosci, mapowanie na value pillar, compliance (KSeF/RODO) rozpatrzone.
5. Jesli bramka mowi nie: przeczytaj wynik -> znajdz przyczyne -> popraw **przyczyne, nie objaw** -> wroc do 4.
6. Zaktualizuj `loops/LOOP_STATE.md` po kazdym przebiegu (cel, co przeszlo/nie, nastepny krok).

## Maker-checker
Sara (PO) — execute-checklist / walidacja artefaktow ocenia wynik **jako weryfikator, nie autor**: zwraca **PASS / FAIL + powod + wymagana poprawka**.
Agent, ktory wykonal prace, nie jest jedynym sedzia.

## Warunki STOP (twarde)
- Wszystkie checki PASS -> raportuj done ze **swiezym dowodem z tej sesji**.
- 5 prob wyczerpane -> stop; wypisz, co nadal nie przechodzi.
- Ten sam blad/finding 2x z rzedu -> stop i eskaluj (Sara -> czlowiek).
- STOP przed: story dotykajace compliance/platnosci bez akceptacji — bez wyraznej zgody Michala.
- **Nigdy done bez swiezego dowodu z checka w tej sesji.**

## Zakazane (nie oszukuj bramki)
- story bez testowalnych kryteriow akceptacji
- pominiecie compliance i NFR
- zbyt duze story (>=5 dni) bez podzialu
