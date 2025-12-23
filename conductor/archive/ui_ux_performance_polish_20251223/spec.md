# Specification: UI Polish & Performance Optimization (Track: ui_ux_performance_polish_20251223)

## Overview
This track focuses on improving the perceived and actual performance of the application dashboard. It involves refining loading states (skeletons), linking existing UI components for better navigation, and optimizing data fetching for key pages (Pricing Models and Settings).

## Functional Requirements

### 1. Invoice Detail Integration
- **Interaction:** Link the invoice table rows to open the existing invoice detail dialog component.
- **Scope:** Clicking any row in the Invoices table should trigger the dialog instead of just navigating (or doing nothing).

### 2. Granular Skeletons for Recurring Page
- **Refinement:** Update the `Recurring` page to prevent "layout flickering" from full-page skeletons.
- **Requirement:** The page title, tabs, search inputs, and buttons must remain visible and functional immediately. Only the actual table row data should display skeletons while loading.

### 3. Pricing Model Page Optimization
- **Speed Improvement:** Reduce the time it takes for the Pricing Model name and the default free plan to appear.
- **UX:** Remove or minimize the bulky skeleton for the Pricing Model name to make the transition feel "instant".
- **Implementation:** Investigate if data can be prefetched or if the current fetch logic has bottlenecks (e.g., waterfall requests).

### 4. Settings Page Data Fetching
- **Speed Improvement:** Optimize the loading of "Organization Name" and "Business Address".
- **Requirement:** These core fields should appear without noticeable delay when navigating to the Settings page.

## Non-Functional Requirements
- **Performance:** Aim for "perceived instant" loading for metadata (names, headers).
- **UX Consistency:** Standardize skeleton behavior across the dashboard to favor granular loading over full-page blocking.

## Acceptance Criteria
- [ ] Clicking an invoice row successfully opens the detailed view dialog.
- [ ] Navigating to the Recurring page shows UI controls (tabs/search) immediately; only table content loads with skeletons.
- [ ] Pricing model details (name and plans) load significantly faster without a heavy initial skeleton.
- [ ] Organization and address data in Settings are populated almost immediately upon page load.
