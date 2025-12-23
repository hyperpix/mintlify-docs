# Specification: API Surface Expansion

## Overview
This track aims to expand the Montra public API to match the utility of modern commerce platforms like Polar and Stripe. It focuses on programmatic management of subscriptions, payment links, and transactional reversals.

## Functional Requirements
- **Subscriptions API (`/v1/subscriptions`):**
    - Expose the existing `subscriptions` table.
    - Support listing by `customer_id` and filtering by `status`.
- **Checkout Links API (`/v1/checkout-links`):**
    - Allow merchants to generate short URLs for products via API.
    - Match the payload of the existing UI creation form.
- **Refunds API (`/v1/refunds`):**
    - Implement a new table to track partial and full refunds.
    - Must automatically update the related `transactions` and `invoices`.
- **LLM-Ready Documentation:**
    - Provide a single-file text summary of the entire API for better AI integration.

## Non-Functional Requirements
- **Security:** All endpoints must require a valid `Authorization: Bearer <api_key>` header.
- **Consistency:** Use the standard `ApiResponse` wrapper for all responses.

## Acceptance Criteria
- [ ] Subscriptions can be retrieved via curl.
- [ ] Payment links can be created programmatically.
- [ ] Refunds are recorded and linked to the original payment.
- [ ] `docs/llms-full.txt` is updated and accessible.
