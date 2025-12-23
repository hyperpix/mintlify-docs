# Plan: Features API & Entitlements Enhancement

## Phase 1: Features CRUD API
- [x] Task: Implement `GET /api/v1/features` to list merchant features. ab4e4cc
- [x] Task: Implement `POST /api/v1/features` to create new features. ab4e4cc
- [x] Task: Implement `PATCH /api/v1/features/[id]` and `DELETE /api/v1/features/[id]`. ab4e4cc
- [x] Task: Write integration tests for the features API. ab4e4cc

## Phase 2: Enhanced Entitlements
- [x] Task: Update `check_entitlement` Postgres function to handle feature slugs. 02e1b5d
- [x] Task: Logic to resolve a feature slug to its availability in the customer's current pricing model. 02e1b5d
- [x] Task: Update `/api/v1/entitlements` to accept a feature slug. 02e1b5d
- [x] Task: Write tests for feature-based entitlement checks. 02e1b5d

## Phase 3: SDK Integration
- [x] Task: Add feature management methods to the TypeScript SDK. ab4e4cc
- [x] Task: Add `checkFeatureAccess(customer_id, feature_slug)` to the SDK. 480c65a
- [x] Task: Update SDK documentation and examples. 480c65a
