# Plan: Features API & Entitlements Enhancement

## Phase 1: Features CRUD API
- [x] Task: Implement `GET /api/v1/features` to list merchant features.
- [x] Task: Implement `POST /api/v1/features` to create new features.
- [x] Task: Implement `PATCH /api/v1/features/[id]` and `DELETE /api/v1/features/[id]`.
- [x] Task: Write integration tests for the features API.

## Phase 2: Enhanced Entitlements
- [x] Task: Update `check_entitlement` Postgres function to handle feature slugs.
- [x] Task: Logic to resolve a feature slug to its availability in the customer's current pricing model.
- [x] Task: Update `/api/v1/entitlements` to accept a feature slug.
- [x] Task: Write tests for feature-based entitlement checks.

## Phase 3: SDK Integration
- [x] Task: Add feature management methods to the TypeScript SDK.
- [x] Task: Add `checkFeatureAccess(customer_id, feature_slug)` to the SDK.
- [x] Task: Update SDK documentation and examples.
