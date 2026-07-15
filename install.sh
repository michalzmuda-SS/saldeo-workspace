#!/usr/bin/env bash
# Instalator dla użytkowników Claude Code (także w VS Code) — dla LOKALNEJ kopii repo.
set -e

PLUGIN="${1:-ssa-product}"

case "$PLUGIN" in
  ssa-product|saldeo-product|par-analytics|dt-data) ;;
  *)
    echo "Nieznany pakiet: $PLUGIN"
    echo "Dostępne: ssa-product, saldeo-product, par-analytics, dt-data"
    exit 1
    ;;
esac

if ! command -v claude >/dev/null 2>&1; then
  echo "Nie znaleziono 'claude' (Claude Code CLI). Zainstaluj Claude Code i zaloguj się, potem uruchom ponownie."
  exit 1
fi

HERE="$(cd "$(dirname "$0")" && pwd)"
echo "Dodaję marketplace z lokalnej ścieżki: $HERE"
claude plugin marketplace add "$HERE"
claude plugin install "$PLUGIN@saldeosmart-agents"
echo "Gotowe. Zainstalowano $PLUGIN."
