# Spec: Platform Hardening & Security

## Goal
Address critical architectural risks, security vulnerabilities, and technical debt to prepare the platform for production.

## Scope
- **Environment Configuration:** Eliminate hardcoded `localhost:3000` URLs in the SDK and frontend.
- **Security Hardening:** Transition from global `AdminClient` usage to scoped service clients with proper RLS where possible.
- **Robust Validation:** Implement Zod schema validation for all public API endpoints.
- **Reliability:** Update the usage ingestion alert logic to ensure notifications are delivered even if background processes fail.
- **Maintainability:** Standardize types between `sdk-ts` and `sdk-client`.

## Technical Requirements
- Zod for schema validation.
- Centralized environment variable management.
- Improved error handling middleware for API routes.
