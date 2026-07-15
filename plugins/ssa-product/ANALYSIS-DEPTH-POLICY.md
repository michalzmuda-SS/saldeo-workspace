# Analysis Depth Gate

Ta polityka jest obowiązkowym elementem modelu SaldeoSMART. Steruje zakresem analiz, raportów, rekomendacji, researchu, planów i innych istotnych tasków.

## Gate przed rozpoczęciem

Przed rozpoczęciem nowego, nietrywialnego zadania wymagającego syntezy, analizy, raportu, rekomendacji, planu, researchu lub przygotowania artefaktu agent sprawdza, czy użytkownik wybrał poziom opracowania.

Jeżeli poziom nie został wybrany, agent zadaje jedno pytanie i czeka na odpowiedź:

> Jaki poziom opracowania wybierasz dla tego zadania?
> 1. C-level recap
> 2. Raport
> 3. Raport pogłębiony

Nie rozpoczynaj researchu, wieloagentowej analizy ani tworzenia docelowego artefaktu przed wyborem poziomu.

## Poziomy opracowania

### 1. C-level recap

Zwięzły one-pager z esencją możliwą do przekazania w 5-10 minut.

Oczekiwany rezultat:

- decyzja, kierunek albo główna teza na początku,
- 3-5 najważniejszych wniosków,
- kluczowe liczby i fakty bez rozbudowanej metodologii,
- najważniejsze ryzyka lub niewiadome,
- rekomendowane next steps z właścicielem i terminem, gdy są znane,
- język zarządczy, bez nadmiaru wariantów i detali wykonawczych.

### 2. Raport

Standardowa analiza problemowa z porównaniem realnych opcji, rekomendacją agentów i konkretnymi next steps.

Oczekiwany rezultat:

- executive summary,
- definicja problemu, zakres i kryteria decyzji,
- fakty, dane, założenia i luki informacyjne wyraźnie rozdzielone,
- 2-4 sensowne opcje wraz z trade-offami,
- perspektywy właściwych person lub agentów,
- rekomendacja z uzasadnieniem,
- ryzyka, zależności i plan kolejnych kroków.

To jest tryb domyślny wyłącznie dla pracy nieinteraktywnej albo gdy użytkownik wyraźnie prosi, aby nie zadawać pytań.

### 3. Raport pogłębiony

Pełny research i krytyczna analiza przed finalną konkluzją. Research wychodzi poza dostarczoną bazę wiedzy, jeżeli narzędzia i uprawnienia na to pozwalają.

Oczekiwany rezultat:

- pełne rozpoznanie problemu, kontekstu i interesariuszy,
- źródła wewnętrzne i zewnętrzne z oceną wiarygodności oraz aktualności,
- fakty, hipotezy, założenia, sprzeczności i braki dowodowe oznaczone osobno,
- use cases, edge cases i scenariusze,
- szczegółowa prezentacja wszystkich materialnych opcji przed rekomendacją,
- macierz opcji z kryteriami, korzyściami, kosztami, ryzykami i odwracalnością,
- krytyczny loop: analiza główna, niezależna krytyka lub red team, odpowiedź na krytykę i synteza,
- udział różnych właściwych agentów oraz, gdy platforma pozwala, różnych modeli,
- finalna konkluzja dopiero po pokazaniu dowodów i alternatyw,
- szczegółowe next steps, decyzje otwarte i plan walidacji.

Jeżeli użycie różnych agentów, modeli albo zewnętrznego researchu nie jest dostępne, agent ujawnia to ograniczenie i wykonuje oddzielne, niezależne przebiegi analityczne zamiast sugerować, że taki loop faktycznie się odbył.

## Reguły ciągłości

- Wybór dotyczy bieżącego zadania i wszystkich jego podzadań.
- Agent orkiestrujący pyta raz i przekazuje wybór wszystkim subagentom; subagenci nie powtarzają pytania użytkownikowi.
- Follow-up w ramach tego samego zadania dziedziczy wybrany poziom.
- Nowe, materialnie inne zadanie uruchamia gate ponownie.
- Użytkownik może zmienić poziom w dowolnym momencie; najnowszy jawny wybór ma pierwszeństwo.
- Jawne wskazanie `Tryb: C-level recap`, `Tryb: Raport` albo `Tryb: Raport pogłębiony` w prompcie spełnia gate bez dodatkowego pytania.

## Wyjątki

Nie uruchamiaj gate dla powitań, prostych pytań faktograficznych, próśb o status, doprecyzowań, korekt istniejącego materiału ani czysto mechanicznych operacji, dla których poziom opracowania nie zmienia rezultatu.

W trybie headless lub innym trybie bez możliwości uzyskania odpowiedzi zastosuj `Raport`, jawnie zapisz to jako założenie i kontynuuj.

## Końcowy quality loop

Przed oddaniem wyniku agent sprawdza:

1. Czy rezultat odpowiada wybranemu poziomowi, a nie tylko ma odpowiednią długość.
2. Czy zakres researchu, liczba perspektyw, głębokość dowodów i szczegółowość opcji są zgodne z trybem.
3. Czy fakty, założenia i rekomendacje są rozdzielone.
4. Czy rekomendacja wynika z przedstawionych dowodów.
5. Czy next steps są wykonalne i proporcjonalne do zadania.