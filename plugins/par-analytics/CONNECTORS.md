# CONNECTORS.md — konektory (MCP) w Vmodel-S

> Jeden plik = jedno zadanie. Tu: jakie narzędzia zewnętrzne model używa i który agent/pętla z czego korzysta.
> Reguły ogólne → `AGENTS.md`. Runtime → `CLAUDE.md`.

## Dostępne konektory
| Konektor | Zakres | Uwagi |
|---|---|---|
| **JIRA** | odczyt + zapis (epiki, stories, komentarze, transitions) | każdy utworzony epik/story dostaje tag `BMAD-Generated` (+ `AI-Agentic` dla A1–A7) |
| **Confluence** | odczyt + zapis (strony, komentarze, załączniki) | publikacja dokumentacji i specyfikacji |
| **Gmail** | odczyt + drafty | wersje robocze wiadomości; wysyłkę zatwierdza człowiek |
| **Google Drive** | odczyt + wgrywanie (bez nadpisywania w miejscu) | źródło materiałów (strategia, benchmark, badania) |

## Mapa: konektor → agent / pętla
| Konektor | Agenci (główni) | Pętle |
|---|---|---|
| JIRA | Maria (BA — epiki/stories), Sara (PO — backlog), Bartek (SM — sprint) | `loop-story-quality`, `loop-frd-compliance` (rejestracja po PASS) |
| Confluence | Oliwia (Tech Writer — docs), Jacek (Spec — ADR/specy) | `loop-report-voice` (publikacja po PASS) |
| Google Drive | Ada / Robert / Maria (czytają strategię, benchmark, badania), Zofia (raporty) | `loop-analysis-to-decision` (źródła), `loop-report-voice` |
| Gmail | Zofia / Robert (komunikacja, updaty), Karol (outreach research) | — (drafty; wysyłka = zgoda człowieka) |

## Zasady użycia konektorów
- **Zapis = po bramce.** Twórz epik/story/stronę/maila dopiero, gdy artefakt przeszedł bramkę pętli (np. story po `loop-story-quality` PASS).
- **Człowiek zatwierdza:** wysyłkę maili, publiczne strony Confluence, zmiany statusów JIRA wpływające na zobowiązania.
- **Compliance:** dane z konektorów podlegają tym samym regułom co reszta (RODO/PII — patrz `AGENTS.md` / `project-context.md` §5). Nie wyciągaj PII do zdarzeń/logów.
- **Źródła:** twierdzenia oparte na treści z JIRA/Confluence/Drive oznaczaj linkiem do źródła.
