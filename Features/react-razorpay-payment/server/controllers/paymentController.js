import { instance } from "../server.js";
import crypto from "crypto";
import { Payment } from "../models/paymentModel.js";

export const checkout = async (req, res) => {
  // console.log("+++++++")
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
  console.log("Payment verification initiated");
  console.log(req.body);

  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;

  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_API_SECRET)
    .update(body.toString())
    .digest("hex");

  console.log("Signature received from Razorpay:", razorpay_signature);
  console.log("Generated signature:", expectedSignature);

  const isAuthenticated = expectedSignature === razorpay_signature;

  if (isAuthenticated) {
    console.log("Authentication successful");
    const  red = await Payment.create({
      razorpay_order_id
    });
    console.log("Authneti-->", red)
    res.redirect(
      `http://localhost:5173/paymentsuccess?reference=${razorpay_payment_id}`
    );
    console.log("Redirecting to success page");
  } else {
    console.log("Authentication failed");
    res.status(400).json({
      success: false,
    });
  }
};
