# Plan: Platform Hardening & Security

## Phase 1: Environment & Config
- [x] Task: Create a centralized environment configuration utility for the SDKs. [36b4cc3]
- [x] Task: Replace all hardcoded URLs with environment-aware constants. [36b4cc3]
- [x] Task: Implement proper error boundaries in the Checkout UI. [ab4e4cc]

## Phase 2: Security & Validation
- [x] Task: Define Zod schemas for all public API payloads (Usage, Customers, Checkout). [ab4e4cc]
- [x] Task: Implement a standard validation middleware/helper for Next.js route handlers. [ab4e4cc]
- [x] Task: Review and restrict `AdminClient` usage; transition to scoped sessions. [ab4e4cc]

## Phase 3: Reliability & Cleanup
- [x] Task: Update usage ingestion to handle alert failures gracefully (retry logic). [ab4e4cc]
- [x] Task: Consolidate shared types into a local package or shared directory. [ab4e4cc]
- [x] Task: Implement a global API error handler to prevent sensitive data leaks in error messages. [ab4e4cc]
