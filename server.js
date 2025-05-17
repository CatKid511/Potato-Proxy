const express = require("express");
const path = require("path");
const uv = require("./ultraviolet/index.js");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));
app.use("/uv/", express.static(path.join(__dirname, "ultraviolet", "dist")));
app.use("/service/", uv.createServer());

app.listen(PORT, () => {
  console.log(`Proxy running at http://localhost:${PORT}`);
});
