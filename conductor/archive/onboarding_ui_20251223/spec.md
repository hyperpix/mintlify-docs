# Specification: Onboarding Header & Sidebar Documentation

## Overview
This track aims to improve the Onboarding user experience and provide easier access to documentation.
1.  **Sidebar Documentation Link:** A new "Documentation" button will be added to the sidebar, styled consistently with the existing Support and Feedback buttons, linking to the external documentation site.

## Functional Requirements
- **Onboarding Page:**
    - The header (Title + Progress Bar) must remain fixed at the top of the viewport (sticky) as the user scrolls through the form.
    - The entire top area of the screen above the header should also be part of the sticky container.
- **Sidebar:**
    - Add a "Documentation" item to the `SidebarMenu` in `msandbox-backup/components/app-sidebar.tsx`.
    - Place it directly above the "Support" button.
    - Use the `Book` icon from `lucide-react`.
    - Link to `https://docs.montra.fi/introduction`.
    - Configure the link to open in a new browser tab (`target="_blank" rel="noreferrer"`).

## Non-Functional Requirements
- **Visual Consistency:** The new Documentation button must perfectly match the style, sizing, and hover states of the Support and Feedback buttons.
- **Responsiveness:** The fixed header on the onboarding page must work correctly on both desktop and mobile viewports.

## Acceptance Criteria
- [ ] On the Onboarding page, the "Onboarding" title and progress bar remain visible at the top when scrolling down.
- [ ] Form content scrolls smoothly beneath the fixed header.
- [ ] A "Documentation" button appears in the sidebar above "Support".
- [ ] Clicking the "Documentation" button opens `https://docs.montra.fi/introduction` in a new tab.
- [ ] The sidebar button uses the `Book` icon and matches the layout of existing footer menu items.

## Out of Scope
- Modifying the content or steps of the onboarding form.
- Changing the link or content of the documentation site itself.