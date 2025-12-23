# Specification: Supabase Performance Optimization

## Overview
This track focuses on reducing latency and improving the responsiveness of data-driven features by optimizing database access and implementing robust client-side caching.

## Functional Requirements
- **Indexing:**
    - All tables must have B-tree indexes on columns used in `WHERE` clauses (primarily `merchant_id`, `customer_id`).
    - Tables sorted by date must have indexes on `created_at` or `disputed_at`.
- **Caching:**
    - Implement TanStack Query for all client-side data fetching.
    - Default `staleTime` should be set to 1 minute to reduce redundant network requests.
- **Payload Reduction:**
    - Queries must only fetch the minimum required columns.

## Non-Functional Requirements
- **Latency:** Reduce average page load time by 30-50%.
- **Maintainability:** Standardize data fetching patterns across the application.

## Acceptance Criteria
- [ ] Migration applied with indexes on all identified columns.
- [ ] TanStack Query successfully integrated into the build.
- [ ] At least 3 major pages (`Customers`, `Invoices`, `Settlements`) refactored to use caching.
- [ ] No `select('*')` remaining in high-traffic page components.
