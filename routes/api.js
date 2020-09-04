// Router Initialization
const router = require("express").Router();

// Import your controllers here
const Post = require("../controllers/Post.js");
const User = require("../controllers/User.js");

// Endpoints
// Users endpoints
router.get("/users", User.index);

router.get("/users/:id", User.show);

router.post("/users", User.store);

router.put("/users/:id", User.update);

router.delete("/users/:id", User.destroy);

// Posts endpoints
router.get("/posts", Post.index);

router.get("/posts/:id", Post.index);

router.post("/posts", Post.store);

router.put("/posts/:id", Post.update);

router.delete("/posts/:id", Post.destroy);

// Add your endpoints here

module.exports = router;
