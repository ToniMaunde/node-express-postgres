// Importing the Model
const Post = require("../models/Post.js");

// Importing helper functions
const errorMessages = require("../util/errorMessages.js");
const helperFunctions = require("../util/helperFunctions.js");

// Importing the client of the database
const client = require("../database/client.js");

const index = (req, res) => {
  Post.all(client)
    .then(data => {
      if (helperFunctions.hasRows(data)) return res.json(data);
      return res.status(404).json(errorMessages.all("Posts"));
    })
    .catch(err => res.json(err));
};

const show = (req, res) => {
  const { id } = req.params;
  Post.find(client, id)
    .then(data => {
      if (helperFunctions.hasRows(data)) return res.json(data.rows[0]);
      return res.status(404).json(errorMessages.one("Post", id));
    })
    .catch(err => res.json(err));
};

const store = (req, res) => {
  const { title, body, userId } = req.body;
  const post = {
    title,
    body,
    userId
  };

  const getInsertedPost = id => {
    Post.find(client, id)
      .then(data => res.status(201).json(data))
      .catch(err => res.json(err));
  };

  Post.create(client, post)
    .then(data => {
      if (helperFunctions.hasRows(data)) getInsertedPost(data.rows[0].id);
      else res.status(helperFunctions.whichStatusCode(data)).json(data);
    })
    .catch(err => res.json(err));
};

const update = (req, res) => {
  const { title, body } = req.body;
  const post = {
    id: req.params.id,
    title,
    body
  };

  const getUpdatedPost = id => {
    Post.find(client, id)
      .then(data => res.json(data))
      .catch(err => res.json(err));
  };

  Post.findAndUpdate(client, post)
    .then(data => {
      if (helperFunctions.hasRows(data)) getUpdatedPost(post.id);
      else
        helperFunctions.hasError(data)
          ? res.status(helperFunctions.whichStatusCode).json(data)
          : res.json(errorMessages.updateOrDelete("UPDATE", "Post", post.id));
    })
    .catch(err => res.json(err));
};

const destroy = (req, res) => {
  const { id } = req.params;

  const deleteAfterFinding = post => {
    Post.findAndDelete(client, id)
      .then(data => {
        if (helperFunctions.hasRows(data)) return res.json(post);
        return res.status(helperFunctions.whichStatusCode(data)).json(data);
      })
      .catch(err => res.json(err));
  };

  Post.find(client, id)
    .then(data => {
      if (helperFunctions.hasRows(data)) {
        const deletedPost = data.rows[0];
        deleteAfterFinding(deletedPost);
      } else res.json(errorMessages.updateOrDelete("DELETE", "Post", id));
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
