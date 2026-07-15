---
name: loop-analysis-to-decision
description: Zamknieta petla: kazda analiza konczy sie rekomendacja + progiem go/no-go + poziomem pewnosci i zrodlami. Use for analyses, cohort validation, market/competitive analysis that must drive a decision.
---

# Analiza -> decyzja (Product Analytics) — petla (Loop Engineering)

**Maker:** analityk (Robert/Karol/Hanna/Marta/Damian) · **Checker (maker-checker):** Iwona (Head of Analytics) lub bmad-review-adversarial-general · **Bramka:** adversarial review PASS + decyzja + zrodla

> „Done" = zweryfikowane dowodem, nie napisane. Bez bramki nie ma petli.

## Protokol petli — Discover -> Plan -> Execute -> Verify -> Iterate
1. Zrozum cel (goal). Wczytaj `project-context.md`, `AGENTS.md` (+ `DESIGN.md`/`WRITING.md` jesli dotyczy).
2. Zaplanuj najmniejszy bezpieczny krok/zmiane.
3. Wykonaj.
4. **Verify — uruchom bramke:** uruchom bmad-review-adversarial-general i sprawdz: (a) jest jednoznaczna rekomendacja + prog go/no-go, (b) kazde twierdzenie liczbowe ma zrodlo, (c) poziom pewnosci i luki sa nazwane.
5. Jesli bramka mowi nie: przeczytaj wynik -> znajdz przyczyne -> popraw **przyczyne, nie objaw** -> wroc do 4.
6. Zaktualizuj `loops/LOOP_STATE.md` po kazdym przebiegu (cel, co przeszlo/nie, nastepny krok).

## Maker-checker
Iwona (Head of Analytics) lub bmad-review-adversarial-general ocenia wynik **jako weryfikator, nie autor**: zwraca **PASS / FAIL + powod + wymagana poprawka**.
Agent, ktory wykonal prace, nie jest jedynym sedzia.

## Warunki STOP (twarde)
- Wszystkie checki PASS -> raportuj done ze **swiezym dowodem z tej sesji**.
- 5 prob wyczerpane -> stop; wypisz, co nadal nie przechodzi.
- Ten sam blad/finding 2x z rzedu -> stop i eskaluj (Iwona -> czlowiek).
- STOP przed: wnioski wplywajace na pricing/Zarzad bez walidacji danych — bez wyraznej zgody Michala.
- **Nigdy done bez swiezego dowodu z checka w tej sesji.**

## Zakazane (nie oszukuj bramki)
- prezentacja wykresu bez rekomendacji i progu
- liczby bez zrodla
- ukrywanie luk/niepewnosci
- nadmierna pewnosc
