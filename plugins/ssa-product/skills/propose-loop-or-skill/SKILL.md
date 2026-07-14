---
name: propose-loop-or-skill
description: Zaproponuj nowy skill lub petle, gdy powtarza sie workflow. Use when a manual workflow was done 2+ times, a step repeats across sessions, or a task would benefit from a reusable loop/skill. Loguje propozycje; NIE tworzy bez akceptacji Michala.
---

# Propose loop/skill — samo-proponujacy proces (human-in-the-loop)

> System **proponuje**, Michal **akceptuje**. Nic nie powstaje bez akceptacji.

## Kiedy sie uruchamia
Ten sam reczny workflow wykonany 2+ razy, albo powtarzajacy sie krok/pytanie, albo zadanie, ktore zyskaloby na powtarzalnej petli/skillu.

## Kroki
1. **Nie tworz niczego.** Dopisz wpis na gorze `loops/PROPOSALS.md` ze statusem `proposed`, w formacie:
   `id · data · tytul · typ (skill|loop) · model/agent · trigger · kroki (skrot) · BRAMKA · stop-rules · szac. wartosc · koszt`.
2. Powiadom Michala jednym zdaniem: "Proponuje <id: tytul> — zaakceptuj (status approved w PROPOSALS.md albo 'zaakceptuj <id>'), albo odrzuc."
3. **Po akceptacji** (status approved lub polecenie): scaffolduj wg wzorca (`loops/README.md`): dla petli — `SKILL.md` z protokolem Discover->...->Verify->Iterate, bramka i stop-rules; dla skilla — `SKILL.md` z frontmatterem. Zaktualizuj indeks w `loops/README.md` i zbumpuj wersje modelu.

## Twarda regula
Kazda propozycja petli MUSI miec **bramke** (weryfikowalne nie). Bez bramki -> to nie petla, tylko notatka do `memory.md`.
