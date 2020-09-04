const dotenv = require('dotenv');

// Filling the process.env file with the contents of the .env file we have created
dotenv();

// Importing the client for the database connection

const { Client } = require("pg");

// Setting up the database connection options
const options = {
  user: process.env.DEVELOPMENT_DATABASE_USER,
  host: process.env.DEVELOPMENT_DATABASE_HOST,
  database: process.env.DEVELOPMENT_DATABASE_NAME,
  password: process.env.DEVELOPMENT_DATABASE_PASSWORD,
  port: process.env.DEVELOPMENT_DATABASE_PORT,
};

// Initializing a new client for the database
const client = new Client(options);

// Connecting to the database
client.connect();

module.exports = {
  query: query => client.query(query)
};

// If in doubt, visit the *node-postgres* website
