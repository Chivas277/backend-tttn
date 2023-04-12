//const stripe = require("stripe")(process.env.STRIPE_KEY);
import stripe from "stripe"
//const key = process.env.STRIPE_KEY;
 stripe(process.execArgv.STRIPE_KEY)
//  const KEY = process.env.STRIPE_KEY;
//  const stripe = require("stripe")(KEY);

const StripeController = {
  //payment
  stripePayment: async (req, res) => {
    stripe.charges.create(
      {
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: "vnd",
      },
      (stripeErr, stripeRes) => {
        if (stripeErr) {
          res.status(500).json(stripeErr);
        } else {
          res.status(200).json(stripeRes);
        }
      }
    );
  },
};

export default StripeController;