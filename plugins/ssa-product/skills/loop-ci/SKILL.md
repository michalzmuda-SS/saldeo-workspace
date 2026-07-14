---
name: loop-ci
description: Zamknieta petla naprawy failujacych testow/lint/typecheck dla kodu SaldeoSMART (Java/Angular/Kotlin/Swift). Use for CI failures, failing tests, lint/type errors, small safe bug fixes.
---

# CI / testy (dev) — petla (Loop Engineering)

**Maker:** dev (Maciej/Emilia/Jarek/Rafal) · **Checker (maker-checker):** SDET (Norbert/Ewa/Kacper/Renata) lub subagent fixer · **Bramka:** test / lint / typecheck / build

> „Done" = zweryfikowane dowodem, nie napisane. Bez bramki nie ma petli.

## Protokol petli — Discover -> Plan -> Execute -> Verify -> Iterate
1. Zrozum cel (goal). Wczytaj `project-context.md`, `AGENTS.md` (+ `DESIGN.md`/`WRITING.md` jesli dotyczy).
2. Zaplanuj najmniejszy bezpieczny krok/zmiane.
3. Wykonaj.
4. **Verify — uruchom bramke:** uruchom wlasciwy check (mvn test / npm test / gradle test / xcodebuild test, lint, typecheck, build) i przeczytaj wynik.
5. Jesli bramka mowi nie: przeczytaj wynik -> znajdz przyczyne -> popraw **przyczyne, nie objaw** -> wroc do 4.
6. Zaktualizuj `loops/LOOP_STATE.md` po kazdym przebiegu (cel, co przeszlo/nie, nastepny krok).

## Maker-checker
SDET (Norbert/Ewa/Kacper/Renata) lub subagent fixer ocenia wynik **jako weryfikator, nie autor**: zwraca **PASS / FAIL + powod + wymagana poprawka**.
Agent, ktory wykonal prace, nie jest jedynym sedzia.

## Warunki STOP (twarde)
- Wszystkie checki PASS -> raportuj done ze **swiezym dowodem z tej sesji**.
- 5 prob wyczerpane -> stop; wypisz, co nadal nie przechodzi.
- Ten sam blad/finding 2x z rzedu -> stop i eskaluj (subagent fixer -> potem czlowiek).
- STOP przed: auth, platnosci, sekrety, konfiguracja deploy — bez wyraznej zgody Michala.
- **Nigdy done bez swiezego dowodu z checka w tej sesji.**

## Zakazane (nie oszukuj bramki)
- oslabianie/kasowanie testow, zeby przeszly
- pomijanie testow
- try/catch tylko po to, by wyciszyc blad
- refaktor przy okazji (drive-by)
- zmiana zaleznosci bez zgody

## Fixer / hooki (jak w PDF)
- Gdy ten sam check pada 2x -> uruchom subagenta `fixer` (swiezy kontekst, model Opus): uruchom check, przeczytaj pelny blad, jedno zdanie o przyczynie, popraw tylko przyczyne, uruchom check ponownie, pokaz before/after.
- W repo (VS Code/Claude Code) dodaj hooki w `.claude/settings.json` (PostToolUse: typecheck po Edit/Write; Stop: testy), zeby check byl deterministyczny, nie z pamieci modelu.
