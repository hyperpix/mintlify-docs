import { MontraCheckoutOptions } from './types';

export class MontraCheckout {
  private publishableKey: string;

  constructor(options: MontraCheckoutOptions) {
    this.publishableKey = options.publishableKey;
  }

  // Placeholder for the initialization logic
  async initializeCheckout(sessionId: string) {
    console.log(`Initializing checkout for session: ${sessionId}`);
    // This will eventually return an object with mount/unmount methods
  }
}

export const loadMontra = (publishableKey: string) => {
  return new MontraCheckout({ publishableKey });
};
