---
name: loop-report-voice
description: Zamknieta petla tresciowa (z PDF): draft -> sprawdz WRITING.md -> usun frazy AI-sounding -> dodaj konkretny przyklad -> stop gdy brzmi ludzko i konkretnie. Use for reports, one-pagers, executive summaries, articles.
---

# Tresc / raport w glosie marki (Storyteller) — petla (Loop Engineering)

**Maker:** Zofia (Insight Storyteller) / Oliwia (Tech Writer) · **Checker (maker-checker):** weryfikator wg WRITING.md (verifier prompt) · **Bramka:** WRITING.md voice + konkret + brak AI-slopu

> „Done" = zweryfikowane dowodem, nie napisane. Bez bramki nie ma petli.

## Protokol petli — Discover -> Plan -> Execute -> Verify -> Iterate
1. Zrozum cel (goal). Wczytaj `project-context.md`, `AGENTS.md` (+ `DESIGN.md`/`WRITING.md` jesli dotyczy).
2. Zaplanuj najmniejszy bezpieczny krok/zmiane.
3. Wykonaj.
4. **Verify — uruchom bramke:** sprawdz wobec WRITING.md: pyramid principle (wniosek->dowod), zero fraz AI-sounding, min. 1 konkretny przyklad/liczba ze zrodlem, poziom pewnosci.
5. Jesli bramka mowi nie: przeczytaj wynik -> znajdz przyczyne -> popraw **przyczyne, nie objaw** -> wroc do 4.
6. Zaktualizuj `loops/LOOP_STATE.md` po kazdym przebiegu (cel, co przeszlo/nie, nastepny krok).

## Maker-checker
weryfikator wg WRITING.md (verifier prompt) ocenia wynik **jako weryfikator, nie autor**: zwraca **PASS / FAIL + powod + wymagana poprawka**.
Agent, ktory wykonal prace, nie jest jedynym sedzia.

## Warunki STOP (twarde)
- Wszystkie checki PASS -> raportuj done ze **swiezym dowodem z tej sesji**.
- 5 prob wyczerpane -> stop; wypisz, co nadal nie przechodzi.
- Ten sam blad/finding 2x z rzedu -> stop i eskaluj (czlowiek (redakcja)).
- STOP przed: materialy dla Zarzadu/na zewnatrz bez akceptacji — bez wyraznej zgody Michala.
- **Nigdy done bez swiezego dowodu z checka w tej sesji.**

## Zakazane (nie oszukuj bramki)
- ogolniki zamiast konkretow
- frazy generyczne AI
- nadmierne wygladzanie (over-polish)
- obietnice bez confidence/zrodla
