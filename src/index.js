const express = require("express");
const { PORT } = require("./config/index");
const app = express();
const apiRoutes = require("./routes");


app.use("/api", apiRoutes);

app.listen(PORT, () => {
  console.log(`Successfully started server on port  + ${PORT}`);
});
