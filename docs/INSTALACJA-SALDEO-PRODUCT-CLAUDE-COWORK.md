# Instalacja `saldeo-product` w Claude Cowork

Ten przewodnik dotyczy wyłącznie lekkiego pakietu produktowo-analitycznego **`saldeo-product`**. Nie instaluj pakietu `ssa-product`, jeśli chcesz korzystać tylko z person produktowych, analitycznych i UX.

## Co zostanie zainstalowane

Pakiet `saldeo-product` w wersji `1.0.0` zawiera 11 person:

- Ada - Product Analyst
- Maria - Business Analyst
- Sara - Product Owner
- Stefania - UX Designer
- Lena - A1 Document Intelligence
- Klara - A2 Workflow Orchestrator
- Borys - A3 Bank Reconciliation
- Zofia - A4 Compliance Guard
- Tomasz - A5 Cash Flow Forecasting
- Wiktor - A6 Payment and Factoring
- Anna - A7 HR and Delegacje

Pakiet nie zawiera Miszy ani ról developerskich, architektonicznych, QA, DevOps i operacyjnych.

## Lokalizacja repozytorium

W formularzu Cowork użyj całego repozytorium marketplace:

```text
https://github.com/michalzmuda-SS/saldeo-workspace.git
```

Możesz również użyć skróconej lokalizacji GitHub:

```text
michalzmuda-SS/saldeo-workspace
```

Elementy rozpoznawane przez Claude:

| Element | Wartość |
|---|---|
| Repozytorium | `michalzmuda-SS/saldeo-workspace` |
| Gałąź | `main` |
| Marketplace | `saldeosmart-agents` |
| Manifest marketplace | `.claude-plugin/marketplace.json` |
| Pakiet | `saldeo-product` |
| Katalog pakietu | `plugins/saldeo-product` |
| Wersja | `1.0.0` |

Nie dodawaj bezpośredniego adresu do surowego pliku `marketplace.json`. Manifest korzysta ze względnej ścieżki do `plugins/saldeo-product`, dlatego Cowork powinien sklonować całe repozytorium.

## Wymagania

1. Aktywny płatny plan Claude: Pro, Max, Team albo Enterprise.
2. Dostęp do Claude Cowork.
3. Uprawnienie odczytu repozytorium `michalzmuda-SS/saldeo-workspace` na GitHubie.
4. W organizacji Team/Enterprise możliwość instalowania osobistych marketplace'ów. Administrator może ograniczyć tę funkcję.

## Instalacja krok po kroku

1. Otwórz Claude i przejdź do zakładki **Cowork**.
2. W lewym panelu otwórz **Customize**.
3. Przejdź do zakładki **Plugins**.
4. W sekcji **Personal plugins** kliknij przycisk **+**.
5. Wybierz **Add marketplace**.
6. Wybierz **Add from a repository**.
7. W polu lokalizacji repozytorium wklej:

   ```text
   https://github.com/michalzmuda-SS/saldeo-workspace.git
   ```

8. Zatwierdź dodanie repozytorium. Cowork powinien rozpoznać marketplace **`saldeosmart-agents`**.
9. Otwórz dodany marketplace albo kliknij **Browse plugins**.
10. Wyszukaj dokładnie **`saldeo-product`**.
11. Sprawdź przed instalacją, czy opis mówi o 11 personach oraz zawiera Adę, Marię, Sarę, Stefanię i A1-A7.
12. Kliknij **Install** przy `saldeo-product`.

Nie wybieraj `ssa-product`. Jest to pełny pakiet SDLC z większą liczbą person.

## Sprawdzenie instalacji

1. Uruchom nową sesję Cowork.
2. Kliknij **+** przy polu wiadomości albo wpisz `/`.
3. Wyszukaj jedną z nazw skilli, na przykład:

   ```text
   ssa-agent-ux-designer
   ```

   albo:

   ```text
   ssa-agent-product-analyst
   ```

4. Wybierz skill z namespace'em `saldeo-product`.
5. Możesz też rozpocząć zadanie naturalnym poleceniem:

   ```text
   Bądź Stefanią, UX Designerem SaldeoSMART. Przejrzyj ten flow pod kątem WCAG i AI-native UX.
   ```

   albo:

   ```text
   Uruchom A4 Compliance Guard i sprawdź wymagania KSeF dla tego procesu.
   ```

Poprawna persona powinna przedstawić się właściwym imieniem, komunikować się po polsku i udostępnić swoje menu działań.

## Aktualizacja pakietu

1. Otwórz **Cowork → Customize → Plugins**.
2. Znajdź marketplace **`saldeosmart-agents`**.
3. Otwórz menu marketplace i wybierz opcję aktualizacji lub odświeżenia.
4. Jeżeli Cowork pokazuje aktualizację dla `saldeo-product`, zastosuj ją.

Każde kolejne wydanie pakietu musi mieć podbitą wersję w `plugins/saldeo-product/.claude-plugin/plugin.json`.

## Rozwiązywanie problemów

### Repozytorium nie jest dostępne

- Sprawdź w przeglądarce, czy po zalogowaniu do GitHub widzisz `https://github.com/michalzmuda-SS/saldeo-workspace`.
- Upewnij się, że konto używane przez Claude ma dostęp do prywatnego repozytorium.
- Nie wklejaj tokenu GitHub do rozmowy z Claude. Dostęp skonfiguruj przez mechanizm logowania lub integracji udostępniony w interfejsie Claude/GitHub.

### Brak opcji „Add marketplace”

Administrator planu Team/Enterprise mógł wyłączyć osobiste marketplace'y albo ograniczyć dozwolone źródła. Poproś administratora o dodanie repozytorium:

```text
michalzmuda-SS/saldeo-workspace
```

jako dozwolonego lub zarządzanego marketplace'u organizacji.

### Marketplace jest widoczny, ale nie ma `saldeo-product`

- Odśwież marketplace `saldeosmart-agents`.
- Sprawdź, czy marketplace korzysta z gałęzi `main`.
- Usuń starą kopię marketplace'u i dodaj ponownie całe repozytorium, nie surowy URL manifestu.

### Zainstalowano niewłaściwy pakiet

Odinstaluj `ssa-product`, pozostaw marketplace `saldeosmart-agents`, a następnie zainstaluj `saldeo-product`.

## Skrót dla użytkownika

```text
Cowork
→ Customize
→ Plugins
→ Personal plugins
→ +
→ Add marketplace
→ Add from a repository
→ https://github.com/michalzmuda-SS/saldeo-workspace.git
→ saldeo-product
→ Install
```