import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello there");
});

// without redis
app.get("/calculate data", (req, res)=> {
    // db call to get the data 
})

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
