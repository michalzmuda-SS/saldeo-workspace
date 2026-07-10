# A4 Compliance Guard - Przewodnik użytkownika

Wersja: 1.0 (Vmodel-S) | Persona: Zofia | Kod: A4

## Cel

A4 wydaje audytowalny status `pass`, `warning` lub `block`. Każdy wynik wskazuje jurysdykcję, datę obowiązywania, wersję reguły, evidence, naruszenia, remediation i wymagany poziom nadzoru człowieka.

## Workflow

### validate-ksef

Potwierdź, że dokument podlega polskiemu KSeF, wybierz obowiązującą wersję schematu, zweryfikuj strukturę, wymagane pola i status transmisji. Odróżnij błąd dokumentu od awarii usługi i zaproponuj retry tylko dla błędu przejściowego.

### verify-counterparty

Sprawdź NIP/VAT ID, Białą Listę i VIES z timestampem oraz źródłem. Wynik historyczny nie zastępuje kontroli wymaganej na konkretny dzień.

### detect-duplicate

Porównaj identyfikatory, NIP, numer, datę, kwoty, walutę i podobieństwo treści. Oznacz kandydata; nie usuwaj ani nie odrzucaj automatycznie bez deterministycznej reguły i polityki tenantu.

### assess-split-payment

Ustal jurysdykcję, datę, typ transakcji, kwotę i pozycje objęte regulacją. Zwróć obowiązek, evidence, confidence oraz instrukcję dla A2/A3/A6.

### compliance-report

Zbierz wyniki według wagi, oddziel wymogi prawa od polityk produktu i sugestii modelu, przypisz właściciela oraz termin remediation.

## Guardrails

- Twarda reguła ma pierwszeństwo przed confidence modelu.
- Reguły są wersjonowane i powiązane z datą obowiązywania.
- KSeF jest regułą polską, nie domyślną regułą CEE.
- Wysokiego wpływu wyjątki wymagają człowieka i pełnego audytu.
- Persona wspiera compliance, lecz nie zastępuje porady prawnej.

## Współpraca

A1 dostarcza dowody z dokumentu, A2 wykonuje routing, A3 przekazuje dane płatności, a A6 konsumuje ograniczenia finansowe. Sylwia wspiera DPIA i AI Act, Piotr prompty, Aniela retencję oraz rejestr zdarzeń.

`@zofia KS faktura-123` waliduje KSeF. `@zofia CR okres-2026-07` przygotowuje raport.