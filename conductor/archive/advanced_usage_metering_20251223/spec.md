# Spec: Advanced Usage Metering

## Goal
Implement complex usage aggregation logic and real-time alerts to support sophisticated AI billing models.

## Scope
- **Aggregation Logic:** Support `SUM`, `COUNT`, `MAX`, and `UNIQUE` aggregations for usage events.
- **Tiered Pricing:** Logic to calculate costs based on usage tiers (e.g., first 1k tokens free, next 10k at $0.01).
- **Billing Cycles:** Automatic calculation of usage within defined windows (monthly, weekly, daily).
- **Usage Alerts:** Real-time notification system when customers approach or exceed predefined usage limits.

## Technical Requirements
- Postgres SQL functions for efficient aggregation.
- Real-time triggers or background workers for alert evaluation.
- TypeScript logic for tiered price calculation in the SDK/API.
