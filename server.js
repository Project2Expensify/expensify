const express = require("express");
const app = express();

const apiRoutes = require("./routes/api-routes");

app.use("/api", apiRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, function() {
  console.log(`Listening on port: ${PORT}`);
})

