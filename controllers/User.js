// Importing the Model
const User = require("../models/User.js");

// Importing helper functions
const errorMessages = require("../util/errorMessages.js");
const helperFunctions = require("../util/helperFunctions.js");

// importing the client of the database
const client = require("../database/client.js");

const index = (req, res) => {
  User.all(client)
    .then(data => {
      if (helperFunctions.hasRows(data)) return res.json(data);
      return res.status(404).json(errorMessages.all("Users"));
    })
    .catch(err => res.json(err));
};

const show = (req, res) => {
  const { id } = req.params;
  User.find(client, id)
    .then(data => {
      if (helperFunctions.hasRows(data)) return res.json(data.rows[0]);
      return res.status(404).json(errorMessages.one("User", id));
    })
    .catch(err => res.json(err));
};

const store = (req, res) => {
  const { email, password, gender, username } = req.body;
  const user = {
    email,
    password,
    gender,
    username
  };

  const getInsertedUser = id => {
    User.find(client, id)
      .then(data => res.status(201).json(data))
      .catch(err => res.json(err));
  };

  User.create(client, user)
    .then(data => {
      if (helperFunctions.hasRows(data)) getInsertedUser(data.rows[0].id);
      else res.status(helperFunctions.whichStatusCode(data)).json(data);
    })
    .catch(err => res.json(err));
};

const update = (req, res) => {
  const { email, password, gender, username } = req.body;
  const user = {
    id: req.params.id,
    email,
    password,
    gender,
    username
  };

  const getUpdatedUser = id => {
    User.find(client, id)
      .then(data => res.json(data))
      .catch(err => res.json(err));
  };

  User.findAndUpdate(client, user)
    .then(data => {
      if (helperFunctions.hasRows(data)) getUpdatedUser(user.id);
      else
        helperFunctions.hasError(data)
          ? res.status(helperFunctions.whichStatusCode).json(data)
          : res.json(errorMessages.updateOrDelete("UPDATE", "User", user.id));
    })
    .catch(err => res.json(err));
};

const destroy = (req, res) => {
  const { id } = req.params;

  const deleteAfterFinding = user => {
    User.findAndDelete(client, id)
      .then(data => {
        if (helperFunctions.hasRows(data)) return res.json(user);
        return res.status(helperFunctions.whichStatusCode(data)).json(data);
      })
      .catch(err => res.json(err));
  };

  User.find(client, id)
    .then(data => {
      if (helperFunctions.hasRows(data)) {
        const deletedUser = data.rows[0];
        deleteAfterFinding(deletedUser);
      } else return res.json(errorMessages.updateOrDelete("DELETE", "User", id));
    })
    .catch(err => res.json(err));
};

module.exports = {
  index,
  show,
  store,
  update,
  destroy
};
