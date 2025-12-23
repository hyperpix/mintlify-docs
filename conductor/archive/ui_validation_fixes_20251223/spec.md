# Specification: UI and Validation Fixes (Amount Inputs & Layout Shift)

## Overview
This track addresses two critical UI/UX issues:
1.  **Validation Bug in Amount Inputs:** Users are unable to input valid amounts (including decimals) without triggering a "match requested format" error. This affects all amount-related input fields across the platform.
2.  **Desktop Layout Shift:** On desktop, clicking buttons or dropdowns causes the page content to shift left, revealing a white bar on the right side of the viewport.

## Functional Requirements
- **Amount Validation Fix:**
    - Update all amount input fields to allow numeric input, including decimals.
    - Ensure the validation pattern (regex) correctly supports standard currency formats (e.g., `100`, `100.00`, `0.50`).
    - Fix the "match requested format" browser tooltip/error that appears even on valid inputs.
- **Layout Shift Fix:**
    - Identify and resolve the cause of the page shifting on desktop when interactive elements (buttons, dropdowns, selects) are clicked.
    - Likely related to scrollbar gutter management in Radix UI / Shadcn UI components.

## Non-Functional Requirements
- **Consistency:** The fix for amount inputs must be applied globally to all components using this pattern.
- **Performance:** Validation should be responsive and not cause lag.
- **Cross-Browser Compatibility:** Fixes must work across major desktop browsers (Chrome, Safari, Firefox, Edge).

## Acceptance Criteria
- [ ] Users can enter whole numbers (e.g., `500`) into any amount box without error.
- [ ] Users can enter decimal numbers (e.g., `49.99`) into any amount box without error.
- [ ] The browser's default "match requested format" error no longer appears for valid numeric/decimal inputs.
- [ ] Clicking dropdowns, buttons, or opening modals on desktop no longer causes the page content to shift or a white bar to appear on the right.
- [ ] Scrollbar behavior remains consistent and doesn't cause layout jumps.

## Out of Scope
- Redesigning the amount input components.
- Changing currency symbol logic (unless directly related to the validation bug).
- Addressing layout shifts on mobile (user reported it as a desktop-only issue).