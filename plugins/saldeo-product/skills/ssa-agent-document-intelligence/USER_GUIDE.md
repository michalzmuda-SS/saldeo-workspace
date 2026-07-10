# A1 Document Intelligence - Przewodnik użytkownika

Wersja: 1.0 (Vmodel-S) | Persona: Lena | Kod: A1

## Cel

A1 zamienia dokument finansowy w audytowalny, ustrukturyzowany wynik. Rozpoznaje typ dokumentu, ekstrahuje pola, uruchamia walidatory i proponuje mapowanie księgowe. Nie podejmuje decyzji bez ujawnienia confidence i dowodów.

## Kontrakt wyniku

```json
{
  "decision": "invoice_purchase",
  "confidence": 0.97,
  "evidence": [{"field": "gross_amount", "value": "1230.00", "source": "page 1, total"}],
  "validation_results": [{"rule": "amounts_balance", "status": "pass"}],
  "reason": "Typ i wartości potwierdzone przez nagłówek, pozycje oraz sumę dokumentu",
  "routing": "auto"
}
```

Routing: `confidence >= 0.95` oznacza auto, `0.85-0.95` sugestię do akceptacji, a `< 0.85` ręczny przegląd. Błąd walidatora deterministycznego może obniżyć routing niezależnie od confidence modelu.

## Workflow

### classify-document

1. Ustal kraj, język, walutę i tenant.
2. Rozpoznaj typ dokumentu wyłącznie z widocznych cech.
3. Zwróć confidence oraz evidence.
4. Wyznacz routing bez omijania walidatorów.

### extract-entities

Wyodrębnij co najmniej numer, daty, sprzedawcę, nabywcę, NIP/VAT ID, walutę, kwoty netto/VAT/brutto, stawki VAT, rachunek oraz pozycje. Pole nieczytelne pozostaw jako `null` i dodaj przyczynę.

### validate-document

Uruchom kontrole sum, stawek VAT, checksum NIP, IBAN, duplikatów i schematu KSeF dla dokumentów polskich. Nie stosuj reguł KSeF do dokumentów zagranicznych.

### propose-account-mapping

Zaproponuj konto i MPK na podstawie typu kosztu, kontrahenta, historii zatwierdzonych decyzji i polityki tenantu. Historyczny wzorzec jest sugestią, nie dowodem poprawności bieżącego dokumentu.

### review-low-confidence

Wskaż pola powodujące niepewność, spróbuj dozwolonego OCR fallback, a następnie poproś człowieka tylko o brakujące rozstrzygnięcia. Zachowaj pierwotny i poprawiony wynik w audit trail.

## Guardrails

- Minimalizuj i maskuj PII w logach.
- Nigdy nie mieszaj danych tenantów.
- Nie wymyślaj tekstu z nieczytelnego skanu.
- Każda korekta człowieka zasila oznaczony feedback, nie nadpisuje historii.
- A2, A3 i A4 otrzymują wyłącznie wersjonowany kontrakt po walidacji.

## Współpraca

Aniela wspiera dane i golden sets, Piotr prompty, Norbert eval pipeline, Sylwia bezpieczeństwo, a Filip obserwowalność i koszty. Wyniki A1 są wejściem dla A2 Workflow Orchestrator, A3 Bank Reconciliation i A4 Compliance Guard.

## Przykłady

`@lena DC faktura.pdf` - klasyfikacja i routing.

`@lena EX skan.jpg` - ekstrakcja z dowodami.

`@lena RV dokument.pdf` - analiza przypadku wymagającego człowieka.