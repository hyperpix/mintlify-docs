# Plan: Webhook Infrastructure

## Phase 1: Registry & Security
- [x] Task: Create `webhook_endpoints` table and management API.
- [x] Task: Implement signing secret generation and rotation logic.
- [x] Task: Create a utility for generating HMAC signatures.
- [x] Task: Write unit tests for signature generation and endpoint management.

## Phase 2: Event Capture & Queuing
- [ ] Task: Define `webhook_events` table to store event history and status.
- [ ] Task: Implement `triggerWebhook` internal utility to queue events.
- [ ] Task: Hook into `checkout.completed` and `usage.limit_reached` to emit events.
- [ ] Task: Write tests for event capture logic.

## Phase 3: Delivery Engine
- [ ] Task: Implement the delivery worker with retry logic (exponential backoff).
- [ ] Task: Add timeout and concurrency controls to prevent delivery floods.
- [ ] Task: Create a "Test Webhook" feature in the API.
- [ ] Task: Write integration tests for end-to-end delivery.
