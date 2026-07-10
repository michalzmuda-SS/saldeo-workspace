UX Designer — Przewodnik Użytkownika

Data: maj 2026 · Wersja: 1.0 (Vmodel-S) · Agent: Stefania (🎨) · Plik: ux-designer.agent.yaml

1. Wprowadzenie

Stefania projektuje doświadczenia użytkownika w SaldeoSMART. Specjalizuje się w design system SaldeoSMART, interfejsach Angular, dostępności WCAG 2.1 AA, AI-native UX (suggestion bars, confidence indicators, audit trail expose, undo first-class) i SMARTduet PLG flow dla mikro/JDG.

2. Persona klientów (kogo projektuje)

Księgowy w biurze (10 godzin dziennie w aplikacji, peak okres zamknięcia miesiąca, 2 sek. cierpliwości)

Właściciel biura (manager view, marża operacyjna, KPI, klient onboarding)

Klient biura SMB (B2B2B; lekki touch, akceptacja faktur, panel statusu)

Klient SMB direct (firmy 5–100 os., self-serve, faktury + KSeF + EOD)

Mikro/JDG (SMARTduet) (PLG; mobile-first; TTV <3-5 min; freemium hook KSeF download)

3. Polecenia menu

4. AI-native UX patterns (specyfika SaldeoSMART)

4.1 Confidence indicator

┌────────────────────────────────────────────────────┐

│ Faktura kosztowa  •  ✓ Auto    [97% pewność]     │

│ Kontrahent: Hurtownia ABC sp. z o.o.               │

│ Kwota: 1 234,56 zł                                 │

│ VAT: 23%  (potwierdzone z białą listą)             │

│ [Zobacz źródła decyzji]   [Cofnij]                 │

└────────────────────────────────────────────────────┘

Zielony badge ≥95% (auto, jasny komunikat "AI zrobił to za Ciebie")

Żółty badge 85-95% (suggest; UI suggestion bar; czeka na 1 click akceptacji)

Czerwony badge <85% (human review; pełna manual edycja; AI hint widoczny ale zwinięty)

4.2 Audit trail expose

Każda decyzja ≥85% confidence ma klikalne "Zobacz źródła decyzji" pokazujące:

Co AI sklasyfikowało / ekstraktowało

Z jakich pól dokumentu źródłowego

Z jaką pewnością

Kiedy

Z jakim modelem (versioning)

Kto może odwołać i jak

4.3 Undo first-class

Każda akcja AI ma Cofnij w ≤2 click

Cofnięcie nie usuwa audit trail (tylko dodaje override event)

Override event triggers feedback loop dla agenta (Piotr review)

4.4 SMARTduet onboarding

TTV <3-5 min mandatorial

3-step wizard: skan dokumentu → KSeF download → first invoice

Bez ekranów rejestracji (KSeF JPK XML jako sign-in proof)

Mobile-first (Android + iOS) > desktop

5. Quick start

@stefania create-ux-design A4-Compliance-Guard

> Engine: SaaS Premium

> Pattern: AI-native (confidence + audit + undo)

> Personas: księgowy biuro Pro, właściciel biura, klient biura SMB

> Output: Figma file + interaction spec + WCAG 2.1 AA compliance check

@stefania design-ai-flow A1-Document-Intelligence

> States: pending / processing / ready (auto / suggest / human-review) / error / undone

> Edge cases: KSeF rejection, OCR low-confidence, duplikat detected

> Output: state machine diagram + UI mockups per state

@stefania create-theme white-label-biuro-enterprise

> Variables: logo, color primary, color secondary, font, contact email

> Constraint: WCAG AA contrast must hold dla wszystkich kolorów primary

6. Best practices

WCAG 2.1 AA — nie negocjowalna; klienci enterprise tego wymagają

i18n by default — PL primary, EN business, CZ/RO/SK preview

Mobile-first dla SMARTduet — desktop-first dla biur

AI-native patterns — confidence + audit + undo first-class

Real scenarios — edge cases (KSeF rejection, OCR <85%, duplikat) zaprojektowane od początku

Performance aware — księgowy ma 2 sek. cierpliwości w peak

Design system first — nie wymyślaj komponentu jeśli istnieje

Loading states — długie OCR / reconciliation = pokaż progress

Undo nie jest "advanced feature" — jest first-class

7. Powiązani agenci

Ada (PA) — FRD jako source

Maria (BA) — UX AC w stories

Emilia — implementacja Angular

Jarek / Rafał — implementacja mobile

Sylwia — accessibility dla disabled users + transparency dla AI Act

Ewa — Playwright accessibility tests