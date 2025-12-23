export type MontraCheckoutOptions = {
  publishableKey: string;
};

export type CheckoutSessionResponse = {
  id: string;
  url: string;
  status: 'open' | 'complete' | 'expired';
};

export interface IMontraCheckout {
  mount(elementOrId: string | HTMLElement): void;
  unmount(): void;
}
