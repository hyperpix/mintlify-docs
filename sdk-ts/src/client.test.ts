import { describe, it, expect, vi, beforeEach } from 'vitest';
import { Montra } from './client';

describe('Montra SDK', () => {
  const apiKey = 'sk_test_123';
  const client = new Montra({ apiKey });

  beforeEach(() => {
    vi.stubGlobal('fetch', vi.fn());
  });

  it('should instantiate correctly', () => {
    expect(client).toBeDefined();
  });

  describe('Customers', () => {
    it('should create a customer', async () => {
      const mockCustomer = { id: 'cust_1', name: 'Test', email: 'test@test.com' };
      vi.mocked(fetch).mockResolvedValue({
        ok: true,
        json: async () => ({ success: true, data: mockCustomer }),
      } as any);

      const result = await client.createCustomer({ name: 'Test', email: 'test@test.com' });
      expect(result).toEqual(mockCustomer);
      expect(fetch).toHaveBeenCalledWith(
        expect.stringContaining('/customers'),
        expect.objectContaining({
          method: 'POST',
          headers: expect.objectContaining({
            'Authorization': `Bearer ${apiKey}`,
          }),
        })
      );
    });

    it('should list customers', async () => {
      const mockCustomers = [{ id: 'cust_1', name: 'Test', email: 'test@test.com' }];
      vi.mocked(fetch).mockResolvedValue({
        ok: true,
        json: async () => ({ success: true, data: mockCustomers }),
      } as any);

      const result = await client.listCustomers();
      expect(result).toEqual(mockCustomers);
      expect(fetch).toHaveBeenCalledWith(
        expect.stringContaining('/customers'),
        expect.any(Object)
      );
    });
  });

  describe('Usage', () => {
    it('should report usage', async () => {
      vi.mocked(fetch).mockResolvedValue({
        ok: true,
        json: async () => ({ success: true }),
      } as any);

      const result = await client.reportUsage({
        customer_id: 'cust_1',
        meter_slug: 'tokens',
        amount: 100
      });
      expect(result).toBe(true);
    });
  });

  describe('Entitlements', () => {
    it('should check entitlement', async () => {
      const mockCheck = { has_access: true, usage: 10, limit: 100 };
      vi.mocked(fetch).mockResolvedValue({
        ok: true,
        json: async () => ({ success: true, data: mockCheck }),
      } as any);

      const result = await client.checkEntitlement('cust_1', 'tokens');
      expect(result).toEqual(mockCheck);
    });
  });

  describe('Invoices', () => {
    it('should list invoices', async () => {
      const mockInvoices = [{ id: 'inv_1', amount: 1000 }];
      vi.mocked(fetch).mockResolvedValue({
        ok: true,
        json: async () => ({ success: true, data: mockInvoices }),
      } as any);

      const result = await client.listInvoices();
      expect(result).toEqual(mockInvoices);
      expect(fetch).toHaveBeenCalledWith(
        expect.stringContaining('/invoices'),
        expect.any(Object)
      );
    });

    it('should get an invoice', async () => {
      const mockInvoice = { id: 'inv_1', amount: 1000 };
      vi.mocked(fetch).mockResolvedValue({
        ok: true,
        json: async () => ({ success: true, data: mockInvoice }),
      } as any);

      const result = await client.getInvoice('inv_1');
      expect(result).toEqual(mockInvoice);
      expect(fetch).toHaveBeenCalledWith(
        expect.stringContaining('/invoices/inv_1'),
        expect.any(Object)
      );
    });
  });
});
