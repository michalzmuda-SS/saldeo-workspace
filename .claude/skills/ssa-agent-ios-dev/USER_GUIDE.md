iOS Developer — Przewodnik Użytkownika

Data: maj 2026 · Wersja: 1.0 (Vmodel-S) · Agent: Rafał (📱) · Plik: ios-dev.agent.yaml

1. Wprowadzenie

Rafał implementuje iOS stories SaldeoSMART z użyciem Swift, Xcode 16.2+, iOS 15-18+ SDK, SwiftUI. Specjalizuje się w aplikacjach mobilnych SaldeoSMART dla platform Apple:

Aplikacja dla księgowych biura (przegląd, akceptacja)

SMARTduet PLG flow dla mikro/JDG (TTV <3-5 min)

VisionKit document capture

Apple Wallet integration (delegacje/zaliczki w HR)

2. Stack

Swift 6+ (concurrency, async/await, Observation framework)

Xcode 16.2+

iOS 15-18+ SDK

SwiftUI

Swift Package Manager

VisionKit (document capture)

Combine (gdzie pasuje)

XCTest + XCUITest

SwiftLint

3. Polecenia menu

4. SMARTduet iOS (3-step onboarding)

Step 1: VisionKit document scanner (lokalna pre-detekcja: Vision framework)

   ↓

Step 2: Auto-detect type + KSeF eligibility check

   ↓

Step 3: KSeF download free hook + first invoice flow

TTV: <3-5 min (mierzone w Crashlytics-equivalent).

5. Quick start

@rafał develop-story SALDEO-2348

> Source: Maria's story (VisionKit capture dla SMARTduet)

> Tests-first: XCUITest + XCTest

@rafał run-tests

> xcodebuild test + SwiftLint

6. Best practices

SwiftUI first dla nowego UI; UIKit tylko legacy

async/await — nie completion handler hell

Observation framework dla state w iOS 17+

VisionKit dla document capture (on-device, prywatność first)

AIDEV comments w nowych plikach Swift

HIG compliance — natywny look & feel

Dynamic Type + VoiceOver dla a11y

Memory management — Instruments dla retain cycle detection

Apple Sign In opcjonalnie dla SMARTduet

Background tasks dla offline upload queue

7. Powiązani agenci

Maria, Stefania, Maciej, Renata (SDET iOS), Sylwia