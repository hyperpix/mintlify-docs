# Plan: Onboarding Header & Sidebar Documentation

## Phase 1: Sidebar Documentation Link
- [x] Task: Add the `Book` icon import and "Documentation" menu item to `msandbox-backup/components/app-sidebar.tsx`.
- [x] Task: Style the Documentation button to match existing Support and Feedback buttons.
- [x] Task: Verify that clicking the Documentation button opens the link in a new tab.
- [x] Task: Conductor - User Manual Verification 'Phase 1: Sidebar Documentation Link' (Protocol in workflow.md)

## Phase 2: Fixed Onboarding Header
- [x] Task: Refactor `msandbox-backup/app/(auth)/onboarding/page.tsx` to make the header (title and progress bar) sticky with a backdrop blur.
- [x] Task: Adjust the layout to ensure the entire top area of the viewport is part of the sticky header.
- [x] Task: Verify the header and top spacing remain static at the top when scrolling.
- [x] Task: Conductor - User Manual Verification 'Phase 2: Fixed Onboarding Header' (Protocol in workflow.md)

## Phase 3: Layout & Sizing Refinement
- [x] Task: Update auth layout to use a strict 50/50 split to keep the left panel static.
- [x] Task: Standardize form width to 400px and stack all onboarding inputs vertically for a cleaner appearance.
- [x] Task: Fix left panel scrolling by making it sticky and viewport-height.