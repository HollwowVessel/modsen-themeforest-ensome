import { CreateOrderActions, CreateOrderData } from '@paypal/paypal-js/types';

export const createPaypalOrder =
  (price: number, type: string) =>
  (_: CreateOrderData, actions: CreateOrderActions) =>
    actions.order
      .create({
        purchase_units: [
          {
            description: type,
            amount: {
              currency_code: 'USD',
              value: String(price),
            },
          },
        ],
      })
      .then((orderID: string) => orderID);

export const initialOptions = {
  'client-id': process.env.REACT_APP_PAYPAL_ID as string,
};
