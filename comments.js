// Create web server
// 1. Create a web server
// 2. Create a route for the root
// 3. Create a route for the /comments
// 4. Create a route for the /comments/new
// 5. Create a route for the /comments/:id
// 6. Create a route for the /comments/:id/edit
// 7. Create a route for the /comments/:id/delete

// 1. Create a web server
const express = require("express");
const app = express();

// 2. Create a route for the root
app.get("/", (req, res) => {
  res.send("Welcome to my first web server");
});

// 3. Create a route for the /comments
app.get("/comments", (req, res) => {
  res.send("This is the comments page");
});

// 4. Create a route for the /comments/new
app.get("/comments/new", (req, res) => {
  res.send("This is the new comments page");
});

// 5. Create a route for the /comments/:id
app.get("/comments/:id", (req, res) => {
  res.send(`This is the comments page for comment with id ${req.params.id}`);
});

// 6. Create a route for the /comments/:id/edit
app.get("/comments/:id/edit", (req, res) => {
  res.send(`This is the edit comments page for comment with id ${req.params.id}`);
});

// 7. Create a route for the /comments/:id/delete
app.get("/comments/:id/delete", (req, res) => {
  res.send(`This is the delete comments page for comment with id ${req.params.id}`);
});

// 8. Start the server
app.listen(3000, () => {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});
