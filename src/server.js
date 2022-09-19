const express = require("express");
const server = express();

module.exports = server;

//Challenge 1
server.get("/", (req, res) => {
  res.send(`
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Home</title>
      </head>
      <body>
        <h1>Hello Express</h1>
      </body>
    </html>
  `);
});

//Challenge 2 & 3
server.get("/colour", (req, res) => {
  const hex = req.query.hex;
  const hexColor = hex || "FFFFFF"
  res.send(`
  <!doctype html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>Home</title>
      <style>
  body{background-color:#${hexColor};
      </style>
    </head>
    <body>
      <h1>Hello Express</h1>
      <form action="/colour" method="GET">
      <label for="hex">Inser Hex number to change background colour:</label>
  <input name="hex" />
  <button type="submit">SUBMIT</button>
</form>
    </body>
  </html>
`);
});

//Challenge 4 & 5
const cheeseList = []
server.get("/cheese", (req, res) => {
  const chessRating = cheeseList.map(({ name, rating }) =>
    `<li>Name: ${name}  //  Rating: ${rating}</li>`);
  res.send(`
  <!doctype html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>Cheese</title>
      <style>
      </style>
      </head>
      <body>
          <form action="/cheese" method="post">
              <label for="name">Cheese Name:</label>
              <input type="text" id="name" name="name"><br><br>
              <label for="rating">Cheese Rating:</label>
              <input type="range" id="rating" name="rating" min="0" max="5"><br><br>
              <button type="submit">Rate Cheese</button>
            </form>
            <ul>${chessRating.join("")}</ul>
      </body>
      </html>
`);
});

const bodyParser = express.urlencoded();
server.post("/cheese", bodyParser, (req, res) => {
  cheeseList.push(req.body)
  res.redirect('/cheese');
});