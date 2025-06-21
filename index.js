const express = require("express");

const app = express();

const PORT = 6969;

const { router } = require("./routes/userRoute");

app.use(express.json());
app.use("/api", router);

app.listen(PORT, () => {
  console.log("Connected");
});
