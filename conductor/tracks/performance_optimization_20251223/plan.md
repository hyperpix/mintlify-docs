# Plan: Supabase Performance Optimization

## Phase 1: Database Indexing
- [x] Task: Create a migration to add missing indexes on all foreign keys (`merchant_id`, `customer_id`) and `created_at` columns for sorting.
- [ ] Task: Verify index usage with `EXPLAIN ANALYZE` on common queries.

## Phase 2: Caching & State Management
- [x] Task: Install `@tanstack/react-query` and `@tanstack/react-query-devtools`.
- [x] Task: Set up `QueryClientProvider` in the root layout.
- [ ] Task: Refactor `app/customers/page.tsx` and `app/invoices/page.tsx` to use `useQuery`.

## Phase 3: Fetching Optimization
- [x] Task: Audit all `select('*')` calls and replace them with specific column lists.
- [ ] Task: Implement pre-fetching for high-traffic routes in the `AppSidebar`.
- [ ] Task: Add `Suspense` boundaries for data-heavy components.
