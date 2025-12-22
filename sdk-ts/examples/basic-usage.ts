/**
 * Sample integration script using the Montra SDK
 */
import { Montra } from '../src';

async function main() {
  const montra = new Montra({
    apiKey: 'sk_test_cb9YOT2IEiXozYzh3BYDmT5LJBRkqFql', // Sample key
    baseUrl: 'http://localhost:3000/api/v1'
  });

  try {
    console.log('--- Montra SDK Demo ---');

    // 1. Create a customer
    console.log('\n1. Creating customer...');
    const customer = await montra.createCustomer({
      name: 'AI Startup Inc.',
      email: 'founder@aistartup.com'
    });
    console.log('Created customer:', customer.id);

    // 2. Report usage (e.g. 500 tokens used)
    console.log('\n2. Reporting usage...');
    const reported = await montra.reportUsage({
      customer_id: customer.id,
      meter_slug: 'api-tokens',
      amount: 500
    });
    console.log('Usage reported:', reported);

    // 3. Check entitlements
    console.log('\n3. Checking entitlements...');
    const entitlement = await montra.checkEntitlement(customer.id, 'api-tokens');
    console.log('Has access:', entitlement.has_access);
    console.log('Current usage:', entitlement.usage);
    console.log('Limit:', entitlement.limit || 'Unlimited');

    // 4. List invoices
    console.log('\n4. Listing invoices...');
    const invoices = await montra.listInvoices();
    console.log('Found', invoices.length, 'invoices');

  } catch (error: any) {
    console.error('Error during demo:', error.message);
  }
}

main();
