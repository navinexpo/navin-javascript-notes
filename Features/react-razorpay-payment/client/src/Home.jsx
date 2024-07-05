/* eslint-disable no-undef */
import { Box, Stack } from "@chakra-ui/react";
import Card from "./Card";
import Shopping from "../public/shopping.jpg";
import bike from "../public/bike.jpg";
import axios from "axios";

const BASE_URL = "http://localhost:4000/api/checkout";

const Home = () => {
  const checkoutHandler = async (amount) => {
    const {
      data: { key },
    } = await axios.get("http://localhost:4000/api/getkey");
    const {
      data: { order },
    } = await axios.post(BASE_URL, {
      amount,
    });
    // console.log(data)
    const options = {
      key, // Enter the Key ID generated from the Dashboard
      amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Navin's Portal",
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      callback_url: "http://localhost:4000/api/paymentverification",
      prefill: {
        name: "Gaurav Kumar",
        email: "gaurav.kumar@example.com",
        contact: "9000090000",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    const razor = new window.Razorpay(options);
    razor.open();
  };

  return (
    <Box>
      <Stack
        h={"100vh"}
        alignItems="center"
        justifyContent="center"
        direction={["column", "row"]}
      >
        <Card amount={5000} img={Shopping} checkoutHandler={checkoutHandler} />
        <Card amount={5000} img={bike} checkoutHandler={checkoutHandler} />
      </Stack>
    </Box>
  );
};

export default Home;
