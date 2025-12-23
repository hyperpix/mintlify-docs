# Spec: Webhook Infrastructure

## Goal
Build a robust, secure webhook delivery system to notify merchants of critical asynchronous events.

## Scope
- **Webhook Registry:** API for merchants to manage webhook endpoints and signing secrets.
- **Event Dispatcher:** System to capture internal events and queue them for delivery.
- **Delivery Engine:** Handles HTTP POST requests with retries, exponential backoff, and timeouts.
- **Security:** HMAC SHA256 signature verification for all payloads.
- **Event Catalog:** Support for `checkout.completed`, `usage.limit_reached`, `invoice.created`, etc.

## Technical Requirements
- Supabase Edge Functions or background workers for delivery.
- Queue system (or Postgres-based queue) for retry management.
- Webhook signature headers (`Montra-Signature`).
