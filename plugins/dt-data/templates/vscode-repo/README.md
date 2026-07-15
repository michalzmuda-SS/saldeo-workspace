# templates/vscode-repo — hooki i subagenty do repo kodu (Claude Code / VS Code)

Skopiuj do repozytorium kodu, w którym pracujesz (NIE do tego workspace — tu nie ma projektu z testami):

1. `settings.json.example` → `.claude/settings.json` w repo. Podmień `REPLACE_WITH_*` na komendy Twojego stacku:
   - Java (Spring Boot): typecheck `mvn -q -DskipTests compile`, testy `mvn -q test`
   - Angular/Node: typecheck `npm run typecheck`, testy `npm test`
   - Kotlin/Android: `./gradlew assembleDebug`, `./gradlew testDebugUnitTest`
   - iOS/Swift: `xcodebuild -quiet build`, `xcodebuild test ...`
2. Subagenci `fixer` i `verifier` są w `.claude/agents/` tego modelu — skopiuj do repo, jeśli chcesz je tam mieć.

Hooki dają deterministyczny check (nie „z pamięci modelu") — rdzeń pętli `loop-ci`.
