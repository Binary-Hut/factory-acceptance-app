# Task #1 — Build the initial counter app

Status: READY_FOR_REVIEW

Issue: #1

## Owner request

Build the initial app described in the project brief: a very small single-page counter app with a heading, a counter starting at 0, increment and reset buttons, and deterministic tests for the counter behavior. Keep it dependency-light and suitable for end-to-end Factory acceptance testing.

## Scope

Implement the smallest useful static single-page counter app for Factory acceptance testing.

## Non-goals

- No authentication, database, external API, analytics, payments, or backend.
- No framework or dependency unless already required by the repository.
- No production deployment changes in this task.

## Likely files / areas affected

- Static app source at repository root (HTML/CSS/JavaScript as needed).
- Deterministic tests for initial count, increment, and reset behavior.
- `.factory/test.sh` as the project-specific deterministic CI entry point.

## Implementation steps

1. Inspect the generated project brief and architecture constraints.
2. Build a dependency-light single-page UI with:
   - a clear heading,
   - visible counter initialized to `0`,
   - an Increment button,
   - a Reset button.
3. Keep counter logic simple and deterministic.
4. Add deterministic automated tests covering:
   - initial value is 0,
   - increment changes 0 → 1 and can increment again,
   - reset returns the counter to 0.
5. Add or update `.factory/test.sh` so CI can install/invoke only approved test tooling and run all deterministic tests non-interactively.
6. Run the deterministic test contract and fix only implementation/test defects found.

## Deterministic validation

- `.factory/test.sh` exits 0.
- The static page loads without network dependencies.
- Counter starts at 0.
- Increment updates the visible count.
- Reset returns the visible count to 0.
- Tests are repeatable and do not require secrets or paid services.

## Risks / recovery

- If browser tooling would add unnecessary weight, prefer a minimal test approach appropriate to a static app.
- If generated starter files impose a different static structure, preserve the project architecture and adapt within it rather than introducing a framework.
- Any failed AI implementation remains paused for explicit retry; no automatic paid retry or model escalation.

## Acceptance criteria

- A single-page counter app is implemented.
- The page contains a heading, visible counter, Increment button, and Reset button.
- Counter begins at 0.
- Increment increases the count deterministically.
- Reset returns the count to 0.
- Deterministic tests cover the required counter behavior.
- `.factory/test.sh` exists and passes.
- No unnecessary framework, backend, external service, or secret is introduced.

## Approval

Development must not start until this plan is explicitly approved.


## Deterministic recovery note

The Developer implementation itself completed. CI initially failed because the jsdom test harness attempted to resolve the page's external script through jsdom resource loading rather than evaluating the checked-in local script directly. The harness was corrected deterministically without another paid AI call. Review must still verify the implementation and CI results.
