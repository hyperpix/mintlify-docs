# Specification: Analytics Logic Refinement

## Overview
This track addresses data consistency and accuracy issues in the Analytics dashboard. It ensures that the charts and metric cards reflect real data from the API rather than local placeholders.

## Functional Requirements
- **Data Source:** All metrics must be derived from the `/api/analytics/series` endpoint.
- **Metric Calculations:**
    - **MRR:** Total successful recurring payments in the period.
    - **Net MRR Movements:** (New + Expansion) - (Contraction + Churn).
    - **Leads:** Count of new customers created in the period (as a proxy).
    - **Sales Cycle:** Average time between customer creation and first successful payment.
- **Time Intervals:** Support for Daily, Weekly, and Monthly views with correct date bucketing.

## Non-Functional Requirements
- **Accuracy:** Displayed values must match the underlying data in Supabase.
- **Robustness:** The UI must not crash if certain data points are missing or zero.

## Acceptance Criteria
- [ ] No metric card shows placeholder $0 when data exists.
- [ ] Percentage changes are calculated correctly based on current vs previous period.
- [ ] All charts correctly handle the selected interval.
- [ ] "Standard charts" tab is fully functional with live data.
