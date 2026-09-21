# AGENTS.md — Rules for AI agents working on Factory Acceptance App

This repository was provisioned by the Musical Hut Software Factory.

Before doing any work, read `AI_POLICY.md`, `PRODUCT.md`, `ARCHITECTURE.md`, and `ROADMAP.md`.
The cost, retry, escalation, and multi-agent limits in `AI_POLICY.md` are mandatory.

## Project context

- Project type: static-web
- Product goal: Create a very small single-page app with a heading, a counter starting at 0, increment and reset buttons, and deterministic tests for the counter behavior. Keep it dependency-light and suitable for end-to-end Factory acceptance testing.

## Hard rules — require explicit owner approval

- Do not add or change authentication, payments, databases, external APIs, paid services, or deployment providers unless the approved product/architecture requires them.
- Do not introduce a major framework, platform, or architectural direction that is not already approved in `ARCHITECTURE.md`.
- Do not add AI features to the product unless they are explicitly in scope.
- Do not expose credentials, tokens, private customer data, or secrets in source code, logs, browser code, issues, or pull requests.
- Do not weaken tests, security checks, review gates, or AI cost controls merely to make a change pass.

## Required behavior

- Prefer the simplest architecture that satisfies the approved product requirements; do not assume a static site, web framework, backend, database, or mobile stack in advance.
- Keep changes small, readable, and well commented where comments genuinely improve understanding.
- Confirm each change is in scope before implementation.
- Add or update deterministic tests for behavior changes whenever practical.
- Update documentation when architecture, scope, setup, or completed roadmap phases change.
- Keep owner-facing summaries understandable to a non-technical reader.
- Follow branch ownership and collision rules in `.ai/BRANCH_OWNERSHIP.md`.

## When in doubt

If a request is ambiguous, materially changes architecture or cost, or conflicts with these rules, stop and ask the owner in plain language rather than guessing.
