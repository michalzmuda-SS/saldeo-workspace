---
name: loop-frd-compliance
description: Zamknieta petla: FRD z mapa value pillar i bramka compliance, weryfikowany adversarialnie. Use when creating or validating an FRD or requirements doc.
---

# FRD + compliance (Product Analyst) — petla (Loop Engineering)

**Maker:** Ada (Product Analyst) · **Checker (maker-checker):** bmad-review-adversarial-general + Sylwia (compliance) · **Bramka:** product-analyst-checklist + compliance-checklist

> „Done" = zweryfikowane dowodem, nie napisane. Bez bramki nie ma petli.

## Protokol petli — Discover -> Plan -> Execute -> Verify -> Iterate
1. Zrozum cel (goal). Wczytaj `project-context.md`, `AGENTS.md` (+ `DESIGN.md`/`WRITING.md` jesli dotyczy).
2. Zaplanuj najmniejszy bezpieczny krok/zmiane.
3. Wykonaj.
4. **Verify — uruchom bramke:** wykonaj product-analyst-checklist + saldeosmart-compliance-checklist (KSeF, RODO art.9/DPIA, JPK, Biala Lista, AI Act) i adversarial review PASS/FAIL.
5. Jesli bramka mowi nie: przeczytaj wynik -> znajdz przyczyne -> popraw **przyczyne, nie objaw** -> wroc do 4.
6. Zaktualizuj `loops/LOOP_STATE.md` po kazdym przebiegu (cel, co przeszlo/nie, nastepny krok).

## Maker-checker
bmad-review-adversarial-general + Sylwia (compliance) ocenia wynik **jako weryfikator, nie autor**: zwraca **PASS / FAIL + powod + wymagana poprawka**.
Agent, ktory wykonal prace, nie jest jedynym sedzia.

## Warunki STOP (twarde)
- Wszystkie checki PASS -> raportuj done ze **swiezym dowodem z tej sesji**.
- 5 prob wyczerpane -> stop; wypisz, co nadal nie przechodzi.
- Ten sam blad/finding 2x z rzedu -> stop i eskaluj (Sylwia/Ewelina -> czlowiek).
- STOP przed: wymagania dot. danych osobowych/kadr bez DPIA — bez wyraznej zgody Michala.
- **Nigdy done bez swiezego dowodu z checka w tej sesji.**

## Zakazane (nie oszukuj bramki)
- FRD bez mapowania na value pillar
- pominiecie sciezek unhappy path (np. odrzucenie KSeF)
- zalozenia bez walidacji na klientach
