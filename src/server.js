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

//Challenge 2
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

//Challenge 3