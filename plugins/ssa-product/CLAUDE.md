# CLAUDE.md — zachowanie agenta / runtime (Vmodel-S)

> Jeden plik = jedno zadanie. Tu: jak agent ma się zachowywać w tym workspace.
> Reguły projektu → `AGENTS.md`. Fakty → `project-context.md`. UI → `DESIGN.md`. Głos → `WRITING.md`.

## Kontekst startowy
- `project-context.md` jest **autorytatywny** — wczytaj go na starcie sesji. Agenci `ssa` mają go w `persistent_facts`.
- Przy zadaniu przeczytaj też właściwą warstwę reguł: `AGENTS.md` (zawsze), `DESIGN.md` (UI), `WRITING.md` (treści).

## Wołanie agentów
- Agenta uruchamiasz po imieniu, np. „bądź Adą", „porozmawiajmy jako Misza". Agent przyjmuje personę,
  wita po polsku i pokazuje numerowane menu; przyjmuje numer, kod lub opis zadania.
- Zespół naraz: „zwołaj zespół" (party-mode).

## Dobór modeli (optymalizacja tokenów/kosztu)
Dobierz najmniejszy model, który poprawnie wykona zadanie:
- **Haiku** — zadania mechaniczne, jedna weryfikowalna odpowiedź (ekstrakcja, klasyfikacja, formatowanie, masowe operacje).
- **Sonnet** — domyślny dla realnej pracy (analiza, research, pisanie FRD/stories/dokumentów, modele danych).
- **Opus** — węzły decyzyjne, wysoka stawka, wieloetapowe rozumowanie (strategia, architektura, adversarial review, pricing).
Zasada: start Sonnet → zejdź na Haiku dla podzadań masowych → eskaluj do Opus tylko dla trudnego kroku. Pełna tabela: `MODEL-ROUTING.md` (w pakietach modeli).

## Higiena kontekstu
- Pracuj z `project-context.md` i wyciągami zamiast wklejać całe dokumenty.
- Duże dokumenty dziel (shard) / buduj listy kontekstu zamiast ładować wszystko.
- Ciężką analizę rób raz i zapisuj artefakt do folderu projektu.

## Środowiska
- **Cowork (Claude Desktop):** agenci wołani po imieniu; pliki w podłączonym folderze-przestrzeni.
- **Claude Code / VS Code:** skille z `.claude/skills` (lub zainstalowanego pluginu) wykrywane automatycznie.

## Twarde reguły zachowania
- Compliance to bramka, nie formalność (patrz `AGENTS.md` / `project-context.md` §5).
- **Design: przy prototypie/makiecie zawsze najpierw zapytaj Michała** (patrz `DESIGN.md`). Nie zakładaj odpowiedzi.
- Trzymaj język polski, chyba że użytkownik poprosi inaczej.

## Loop protocol (Loop Engineering)
Zadania nietrywialne prowadź jako **zamkniętą pętlę**, nie linię prostą: Discover → Plan → Execute → **Verify** → Iterate.
- Każda pętla ma **twardą bramkę** (weryfikowalne „nie": test/lint/checklist/adversarial review/compliance/testy danych). **No gate, no loop.**
- **Maker-checker:** wynik weryfikuje ktoś inny niż autor (dev↔SDET, analiza↔adversarial/Iwona, artefakt↔Sara).
- **STOP:** max 5 prób · ten sam błąd/finding 2× → eskalacja · stop przed compliance/płatności/deploy/cutover bez zgody · **nigdy „done" bez świeżego dowodu z checka w tej sesji** · nie osłabiaj bramki, żeby przeszło.
- Stan trzymaj w `LOOP_STATE.md` (wzorzec: `loops/LOOP_STATE.template.md`). Gotowe pętle: `loops/README.md` + skille `loop-*`.

## Auto-propose (system proponuje, Michał akceptuje)
Gdy zauważysz powtarzalny workflow (≥2×) lub powtarzający się krok — użyj skilla `propose-loop-or-skill`:
dopisz propozycję do `loops/PROPOSALS.md` (status `proposed`) i powiadom Michała **jednym zdaniem**.
**Nie twórz** nowej pętli/skilla bez akceptacji (status `approved` lub polecenie „zaakceptuj <id>"). Każda propozycja pętli musi mieć bramkę.
