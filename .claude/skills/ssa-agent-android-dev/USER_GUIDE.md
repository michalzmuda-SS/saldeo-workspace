Android Developer — Przewodnik Użytkownika

Data: maj 2026 · Wersja: 1.0 (Vmodel-S) · Agent: Jarek (🤖) · Plik: android-dev.agent.yaml

1. Wprowadzenie

Jarek implementuje Android stories SaldeoSMART z użyciem Kotlin 2.1+, Android SDK 36, Jetpack Compose i Koin DI. Specjalizuje się w aplikacjach mobilnych SaldeoSMART:

Aplikacja dla księgowych biura (przegląd, akceptacja faktur, mobile workflow)

SMARTduet PLG flow dla mikro/JDG (TTV <3-5 min)

Mobile capture (zdjęcie paragonu/faktury → OCR → klasyfikacja)

KSeF download free (PLG hook)

2. Stack

Kotlin 2.1+

Android SDK 36

Jetpack Compose + Material 3

Koin (DI)

Coroutines + Flow

Room (lokalna baza)

Retrofit + OkHttp

Coil (obrazy)

Timber (logging — bez PII)

JUnit 5 + Espresso + Compose Testing

Pakiety: pl.brainshare.saldeosmart.{capability}

3. Polecenia menu

4. Krytyczne reguły (critical_actions)

security-guidelines.md + security-checklist.md

API: /mobile-api/* + OAuth2 / KSeF token flows

Tokeny w Android Keystore + certificate pinning na produkcji

naming-conventions.md (capability-based, singular nouns)

Pakiety: pl.brainshare.saldeosmart.{capability}

logging-guidelines.md + logging-checklist.md

Timber dla production, NIGDY nie loguj PII (NIP, dane faktury, kwoty); usuń debug logi w production

Konsultuj Sylwię dla decyzji architektury bezpieczeństwa

SMARTduet (PLG): TTV onboardingu <3-5 min jest twardym wymaganiem

5. SMARTduet onboarding (3-step flow)

Step 1: Skan dokumentu (Camera + ML Kit on-device pre-processing)

   ↓

Step 2: Auto-detect type (faktura kosztowa / przychodowa / paragon)

   ↓

Step 3: KSeF download free hook + first invoice flow

Cel: TTV <3-5 min (mierzony od pierwszego open do pierwszej zapisanej faktury).

6. Quick start

@jarek develop-story SALDEO-2347

> Source: Maria's story (mobile capture dla SMARTduet)

> Tests-first: Compose Testing + Espresso

@jarek run-tests

> Gradle test suite + ktlint + Detekt

7. Best practices

Compose first dla nowego UI; XML layouts tylko legacy

Coroutines + Flow dla async; nie callback hell

Single Source of Truth — Room jako cache; HTTP jako source

Offline-first dla SMARTduet — queue uploads, retry on connectivity

On-device privacy — ML Kit dla wstępnego klasyfikowania (PII zostaje na urządzeniu gdy możliwe)

AIDEV comments w nowych plikach Kotlin

A11y — TalkBack labels, contentDescription, touch targets ≥48dp

Material 3 + dynamic color

Battery + network friendly — księgowi w terenie mają słabe sieci

Crashlytics + custom event dla TTV monitoring (SMARTduet)

8. Powiązani agenci

Maria, Stefania, Maciej, Kacper (SDET Android), Sylwia