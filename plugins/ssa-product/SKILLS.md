# SKILLS.md — jak pisać dobre skille (Vmodel-S)

> Jeden plik = jedno zadanie. Tu: standard tworzenia skilli (i pętli). Powiązane: `loops/README.md`, `propose-loop-or-skill`.

## Anatomia skilla
- **name** — kebab-case, unikalny.
- **description** — 3. osoba + **konkretne frazy-triggery** („Use when the user asks to…"). To po tym Claude wybiera skill.
- **role** — kim jest agent w tym kontekście (dla agentów-person).
- **rules** — co robić, czego unikać, jak formatować (reguły negatywne wprost).
- **examples** — gdy pomagają.
- Struktura folderu: `SKILL.md` (+ opcjonalnie `references/`, `scripts/`).

## Zasady (do zrobienia)
- Jeden skill = jedno zadanie; zacznij wąsko.
- Opis konkretny, z frazami wyzwalającymi; testuj na 5 różnych sformułowaniach.
- Reguły negatywne wprost (czego NIE robić).
- Skille modularne i „stackable"; metadane zwięzłe.
- Aktualizuj natychmiast po każdym „miss" (gdy się nie odpalił lub źle zadziałał).

## Błędy, które zabijają skille (unikaj)
- Jeden skill próbujący robić wszystko.
- Wektorowy/brakujący opis-trigger.
- Brak testów na niepowiązanych promptach.
- Brak aktualizacji po nietrafieniach.
- Perfekcjonizm przed pierwszym użyciem.

## Powiązanie z pętlami i proposerem
- Jeśli skill jest **pętlą** — musi mieć **bramkę** (No gate, no loop) i stop-rules (patrz `loops/README.md`).
- Nowe skille/pętle zgłaszaj przez `propose-loop-or-skill` → `loops/PROPOSALS.md` → akceptacja Michała.
