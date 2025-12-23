# Spec: Features API & Entitlements Enhancement

## Goal
Provide a comprehensive API for managing and checking non-usage-based features (Toggles/Static features) within pricing models.

## Scope
- **Features CRUD API:** Create, List, Update, and Delete pricing features via the public API.
- **Enhanced Entitlements:** Update `check_entitlement` to support checking for feature access by slug.
- **SDK Methods:** Add `listFeatures` and `checkFeatureAccess` to the server-side SDK.
- **Permissions:** Ensure features are properly scoped to the merchant and their pricing models.

## Technical Requirements
- Next.js Route Handlers for `/api/v1/features`.
- SQL enhancement for `check_entitlement` function.
- Update SDK `client.ts` with new methods.
