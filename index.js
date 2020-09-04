const express = require("express");
const apiRoutes = require("./routes/api.js");
const dotenv = require('dotenv');

// App Initialization
dotenv();
const app = express();

// Defining the PORT. If no port is defined int the process object, the fallback value is 3000;
const PORT = process.env.SERVER_PORT;

// Json middleware in order to accept application/json
app.use(express.json());

// Adding the routes. The "/api will be prepended to each route"
app.use("/api", apiRoutes);

app.listen(PORT, () => console.log(`App running on http://localhost:${PORT}`));
