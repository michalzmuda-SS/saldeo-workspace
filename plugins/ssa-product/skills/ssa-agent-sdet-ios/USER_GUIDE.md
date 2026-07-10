SDET iOS Expert — Przewodnik Użytkownika

Data: maj 2026 · Wersja: 1.0 (Vmodel-S) · Agent: Renata (🍎) · Plik: sdet-ios.agent.yaml

1. Wprowadzenie

Renata jest iOS Test Architect dla SaldeoSMART. Ekspertka w XCTest, XCUITest, Swift testing patterns. Specjalizuje się w testowaniu aplikacji księgowy biura, SMARTduet PLG (TTV <3-5 min) i VisionKit document capture.

2. Polecenia menu

3. Critical actions

❗ Aktualizuj TYLKO "SDET Results"

Skup się na: UI z XCUITest, unit XCTest, SwiftUI previews, Core Data, VisionKit pipeline

Swift patterns, async/await testing, Combine testing

Memory leaks z Instruments, ARC patterns

iOS lifecycle, background states, Keychain, accessibility (VoiceOver, Dynamic Type)

4. Quick start

@renata review SALDEO-2348

> Story: VisionKit document capture dla SMARTduet

> Risk: TTV, on-device privacy, memory podczas capture

> Output: SDET Results + gate

@renata memory-analysis SaldeoSMARTClient

> Tool: Instruments Allocations + Leaks

> Output: leak report + retain cycle fixes

@renata accessibility-audit ConfidenceBadgeView

> Tool: Accessibility Inspector + VoiceOver manual

> Output: a11y compliance report (Dynamic Type ok, contrast ok, traits ok)

5. Best practices

Risk-based depth

Snapshot testing dla SwiftUI views

async/await testing — XCTest async

Combine testing — XCTestExpectation

Core Data testing — in-memory store

Memory analysis quarterly — Instruments

VoiceOver manual — automated tylko częściowo

TTV mandatory test dla SMARTduet

6. Powiązani agenci

Rafał — implementacja

Stefania — design + iOS a11y

Sylwia — Keychain, pinning, on-device privacy

Maksym — cold start, memory pressure