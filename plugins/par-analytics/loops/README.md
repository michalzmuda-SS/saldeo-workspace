# Loops — Loop Engineering w Vmodel-S

> Zamiast promptowac — projektujemy **zamkniete petle**: Discover -> Plan -> Execute -> **Verify** -> Iterate.
> Petla ma: cel, kontekst, narzedzia, **twarda bramke**, regule retry, **stan** (`LOOP_STATE.md`), **warunek STOP**
> i **maker-checker split**. Zasada nadrzedna: **No gate, no loop.** Done = zweryfikowane dowodem, nie napisane.

## Typy bramek (u nas)
- **Kod:** testy / lint / typecheck / build (+ hooki, subagent fixer).
- **Wymagania/artefakty:** checklisty (BA/PO/PA), Given-When-Then, adversarial review PASS/FAIL.
- **Compliance:** KSeF / RODO (art.9 + DPIA) / JPK / Biala Lista / AI Act.
- **Dane:** kontrakty i testy jakosci, walidacja parzystosci migracji, testy dbt.
- **Tresc:** zgodnosc z `WRITING.md`, brak fraz AI-sounding, konkret + zrodlo.

## Uniwersalne reguly STOP
Max 5 prob · ten sam blad/finding 2x -> eskalacja · STOP przed compliance/platnosci/deploy/cutover bez zgody ·
**nigdy done bez swiezego dowodu z checka w tej sesji** · aktualizuj `LOOP_STATE.md` po kazdym przebiegu ·
nie oslabiaj bramki, zeby przeszlo.

## Petle (skille w `.claude/skills/`)
| Petla (skill) | Maker | Checker | Bramka |
|---|---|---|---|
| `loop-ci` | dev | SDET / fixer | testy/lint/typecheck/build |
| `loop-analysis-to-decision` | analityk PA | Iwona / adversarial | rekomendacja+prog+zrodla |
| `loop-data-quality` | Pawel | Kinga/Beata | testy jakosci danych |
| `loop-story-quality` | Maria | Sara | checklist story + G-W-T |
| `loop-frd-compliance` | Ada | adversarial + Sylwia | PA-checklist + compliance |
| `loop-report-voice` | Zofia/Oliwia | verifier wg WRITING.md | glos + konkret, bez AI-slopu |
| `loop-experiment-rigor` | Tomasz | Iwona | hipoteza+prog+moc przed danymi |
| `loop-migration-parity` | Kinga | Pawel/Beata | walidacja parzystosci (stop przed cutoverem) |

## Jak uruchomic petle
Wywolaj skill petli (np. `loop-ci`) albo popros agenta: "uruchom petle <nazwa> dla <cel>; nie raportuj done bez dowodu".
Stan zapisuj w `LOOP_STATE.md` (wzorzec: `LOOP_STATE.template.md`).

## Samo-proponowanie
Nowe petle/skille zglasza skill `propose-loop-or-skill` -> wpis do `PROPOSALS.md` (status proposed) -> akceptacja Michala -> scaffolding.
