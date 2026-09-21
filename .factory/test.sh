#!/usr/bin/env bash
set -euo pipefail
# Minimal CI test entrypoint for Factory Acceptance App
# Installs only the test tooling needed (jsdom) and runs deterministic tests non-interactively.

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="${SCRIPT_DIR%/*}"
cd "${ROOT_DIR}"

echo "Installing test tooling (jsdom)..."
# Use a temporary npm project area so we don't modify repository package.json
TMPNODE=$(mktemp -d)
cleanup() { rm -rf "$TMPNODE"; }
trap cleanup EXIT
cd "$TMPNODE"
npm init -y >/dev/null 2>&1
npm install jsdom@21 >/dev/null 2>&1

echo "Running deterministic tests..."
NODE_PATH="$TMPNODE/node_modules" node "$ROOT_DIR/test/counter.test.js"

echo "Tests completed successfully"

