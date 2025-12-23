# Plan: Advanced Usage Metering

## Phase 1: Aggregation Engine
- [x] Task: Update usage event schema to support multiple aggregation types.
- [x] Task: Implement `calculate_usage` Postgres function for `SUM`, `COUNT`, `MAX`.
- [x] Task: Implement `UNIQUE` aggregation (e.g., unique user IDs per month).
- [ ] Task: Write unit tests for all aggregation types.

## Phase 2: Tiered Pricing & Billing Cycles
- [ ] Task: Define schema for tiered pricing structures.
- [ ] Task: Implement pricing engine utility to calculate total cost from tiered usage.
- [ ] Task: Implement billing cycle reset logic and historical usage tracking.
- [ ] Task: Write tests for complex tiered pricing scenarios.

## Phase 3: Real-Time Alerts
- [ ] Task: Create `usage_alerts` table and configuration API.
- [ ] Task: Implement real-time check on usage ingestion to trigger alerts.
- [ ] Task: Integrate with notification system (UI toast or email placeholder).
- [ ] Task: Write integration tests for the alert flow.
