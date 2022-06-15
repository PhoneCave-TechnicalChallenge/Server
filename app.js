require("dotenv/config");

const express = require("express");
const app = express();

require("./config")(app);

const allRoutes = require("./routes/phone.routes");
app.use("/api", allRoutes);

require("./error-handling/index")(app);

module.exports = app