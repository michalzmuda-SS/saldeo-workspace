# SaldeoSMART Agents (Vmodel-S) — marketplace pluginów dla Claude Code / VS Code

Marketplace z czterema modelami SaldeoSMART do instalacji w **VS Code** przez rozszerzenie **Claude Code**
lub w terminalu przez Claude Code CLI:

- **`ssa-product`** - pełny zespół Product / SDLC.
- **`saldeo-product`** - lekki zespół produktowo-analityczny i UX, bez Miszy oraz ról technicznych.
- **`par-analytics`** - Product Analytics & Market Research.
- **`dt-data`** - Data & Transformation.

`ssa-product` (v0.9.0): **30 person** V-Model: 23 role zespołowe (Ada, Maria, Sara, Bartek, Marek, Dominik, Aniela, Sylwia,
Maksym, Maciej, Emilia, Jarek, Rafał, Norbert, Ewa, Kacper, Renata, Filip, Oliwia, Stefania, Jacek, Piotr
oraz **Misza — Head of Product**) oraz 7 person produktowych: **A1 Lena, A2 Klara, A3 Borys, A4 Zofia,
A5 Tomasz, A6 Wiktor i A7 Anna**. Pakiet zawiera też 12 skilli frameworka BMAD + `integration-due-diligence`.
Pakiet samodzielny.
Język domyślny: **polski**. Polityka doboru modeli: `plugins/ssa-product/MODEL-ROUTING.md`.

`saldeo-product` (v1.1.0): **11 person** - Ada, Maria, Sara, Stefania oraz A1-A7 - i tylko 9 wymaganych
skilli produktowych, analitycznych i UX. Pakiet nie zawiera Miszy ani ról delivery, engineering, QA i operations.

`par-analytics` (v0.8.0): **8 agentów** Product Analytics & Market Research wraz ze skillami,
pętlami analitycznymi i Design Systemem.

`dt-data` (v0.6.0): **8 agentów** Data & Transformation wraz ze skillami, pętlami i subagentami.

Oba pakiety zawierają obowiązkowy **Analysis Depth Gate**. Przed nowym, nietrywialnym zadaniem model pyta o poziom:
`C-level recap`, `Raport` albo `Raport pogłębiony`. Wybór jest dziedziczony przez follow-upy i subagentów
w ramach tego samego zadania. Pełna polityka znajduje się w pliku `ANALYSIS-DEPTH-POLICY.md` każdego pakietu.

Instrukcja instalacji w Claude Cowork: [`docs/INSTALACJA-SALDEO-PRODUCT-CLAUDE-COWORK.md`](docs/INSTALACJA-SALDEO-PRODUCT-CLAUDE-COWORK.md).

---

## Wymagania
- **VS Code** z rozszerzeniem **Claude Code** (zalogowane), albo **Claude Code CLI** w terminalu.

## Instalacja

Najpierw dodaj marketplace, a potem zainstaluj tylko potrzebny model.

W panelu Claude Code (VS Code) lub w terminalu:
```
/plugin marketplace add michalzmuda-SS/saldeo-workspace
/plugin install ssa-product@saldeosmart-agents
```

Instalacja lekkiego pakietu produktowego:
```
/plugin marketplace add michalzmuda-SS/saldeo-workspace
/plugin install saldeo-product@saldeosmart-agents
```

Pozostałe modele:
```
/plugin install par-analytics@saldeosmart-agents
/plugin install dt-data@saldeosmart-agents
```

To samo z CLI:
```
claude plugin marketplace add michalzmuda-SS/saldeo-workspace
claude plugin install ssa-product@saldeosmart-agents
```

Wariant lekki przez CLI:
```
claude plugin marketplace add michalzmuda-SS/saldeo-workspace
claude plugin install saldeo-product@saldeosmart-agents
```

Pozostałe modele przez CLI:
```
claude plugin install par-analytics@saldeosmart-agents
claude plugin install dt-data@saldeosmart-agents
```

Aktualizacje: `claude plugin marketplace update saldeosmart-agents` (lub `/plugin marketplace update`).
Prywatne repo zadziała, jeśli masz do niego dostęp w gicie (Claude Code używa Twoich poświadczeń git).

## Jak używać
Po instalacji zawołaj personę po imieniu lub kodzie, np. `bądź Adą`, `bądź Miszą`, `uruchom A1`
albo `bądź Zofią`. Persona przywita się
(po polsku) i pokaże menu działań. Zalecane: w folderze projektu miej `project-context.md` — agenci
wczytają go automatycznie.

---

## Dla opiekuna: publikacja na GitHub
1. Utwórz repo `saldeosmart-agents` w organizacji GitHub.
2. W tym folderze:
   ```
   git init && git add . && git commit -m "SaldeoSMART ssa-product marketplace v1"
   git branch -M main
   git remote add origin https://github.com/michalzmuda-SS/saldeo-workspace.git
   git push -u origin main
   ```
3. Zespół instaluje wg sekcji „Instalacja" (podając `michalzmuda-SS/saldeo-workspace`).
4. Kolejne wersje: zmiany w `plugins/<nazwa>/` + podbicie `version` w `plugin.json` → `git push`.

## Dodanie kolejnych modeli (później)
Rozpakuj pakiet do `plugins/<nazwa>/` i dodaj wpis w `.claude-plugin/marketplace.json`
(np. `finance-control`).

## Licencja
Zobacz `LICENSE` (materiał wewnętrzny BrainSHARE IT / SaldeoSMART, Visma Group).
