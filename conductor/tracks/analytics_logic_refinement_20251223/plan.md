# Plan: Analytics Logic Refinement

## Phase 1: API Data Accuracy
- [x] Task: Update `/api/analytics/series` to calculate and return MRR breakdown (New, Expansion, Contraction, Churn) if possible, or provide reasonable fallbacks.
- [x] Task: Ensure the API handles empty data sets without returning errors or inconsistent bucket keys.
- [x] Task: Add calculations for Average Sales Cycle and Pipeline stages to the API response.

## Phase 2: Frontend Data Binding
- [x] Task: Refactor `app/analytics/page.tsx` to use `apiData` for all metric card values and percentage changes.
- [x] Task: Remove reliance on the `series` placeholder array for "latest" and "previous" metric calculations.
- [x] Task: Fix hardcoded calculations for ARPA, LTV, and Sales Cycle.
- [x] Task: Implement proper loading and empty states for all charts.

## Phase 3: Validation
- [x] Task: Verify that all metric cards correctly reflect the data from the API.
- [x] Task: Check that intervals (daily, weekly, monthly) work correctly across all charts.
