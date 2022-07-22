const express = require("express");
const secure = require("express-force-https");
const prerender = require("prerender-node");
const fs = require("fs");

// Load from env vars
const originalHtml = fs.readFileSync("build/index.html", "utf8");

const indexHtml = "build/index.html";

const app = express();

// Use secure middleware to redurect to https
app.use(secure);

// Use prerender io middleware
app.use(prerender.set("prerenderToken", "c1OgGjqkie9EDmEFTCxC"));

// Serve index.html on every url.
app.get("*", (req, res) => {
  console.log("indexHtml", originalHtml);
  res.send(originalHtml);
});

app.listen(3000, () => {
  console.log("Server start on 3000");
});
