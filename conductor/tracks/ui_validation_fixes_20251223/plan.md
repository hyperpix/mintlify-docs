# Plan: UI and Validation Fixes

## Phase 1: Amount Input Validation Fix [checkpoint: f168023]
- [x] Task: Audit codebase for `input` elements with `pattern` or `type="number"` used for amounts.
- [x] Task: Fix validation logic to support decimals and whole numbers across all amount inputs.
- [x] Task: Verify fix with unit tests for various currency formats (e.g., "100", "100.00", "0.5").
- [x] Task: Conductor - User Manual Verification 'Phase 1: Amount Input Validation Fix' (Protocol in workflow.md)

## Phase 2: Desktop Layout Shift Fix [checkpoint: f257ce3]
- [x] Task: Identify components causing layout shift (likely Radix UI/Shadcn UI Select or Dialog).
- [x] Task: Implement CSS or configuration fix to prevent scrollbar-related shifting on desktop.
- [x] Task: Verify that clicking buttons and dropdowns no longer causes the page to shift.
- [x] Task: Conductor - User Manual Verification 'Phase 2: Desktop Layout Shift Fix' (Protocol in workflow.md)