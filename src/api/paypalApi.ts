export const createPaypalOrder =
  (price: number, type: string) => (data: any, actions: any) =>
    actions.order
      .create({
        purchase_units: [
          {
            description: type,
            amount: {
              currency_code: 'USD',
              value: price,
            },
          },
        ],
      })
      .then((orderID: boolean) => orderID);

export const initialOptions = {
  'client-id': process.env.REACT_APP_PAYPAL_ID as string,
};
