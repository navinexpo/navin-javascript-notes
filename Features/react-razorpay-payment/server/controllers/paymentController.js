import { instance } from "../server.js";
import crypto from "crypto";

export const checkout = async (req, res) => {
  //create order
  const options = {
    amount: Number(req.body.amount * 1000), //amount in the smallest currency unit
    currency: "INR",
  };
  const order = await instance.orders.create(options);

  console.log(order);
  res.status(200).json({
    success: true,
    order,
  });
};

export const paymentVerification = async (req, res) => {
  console.log(req.body);

  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;

  const body = razorpay_order_id + "|" + razorpay_payment_id;

  // const crypto = require("crypto");
  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_API_SECRET)
    .update(body.toString())
    .digest("hex");
  console.log("sig received", razorpay_signature);
  console.log("sig generated", expectedSignature);

  const isAuthenticated = expectedSignature === razorpay_signature;

  if (isAuthenticated) {
    //database comes here
    res.redirect(
      `http://localhost:3000/paymentsuccess?reference=${razorpay_payment_id}`
    );
  } else {
    res.status(400).json({
      success: false,
    });
  }
};
