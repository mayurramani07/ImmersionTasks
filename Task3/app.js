const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const path = require("path");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index", { vehicles });
});

app.get("/vehicles/new", (req, res) => {
  res.render("new");
});

app.post("/vehicles", (req, res) => {
  const { name, price, image, desc, brand } = req.body;
  vehicles.push({ id: idCounter++, name, price, image, desc, brand });
  res.redirect("/");
});

app.get("/vehicles/:id/edit", (req, res) => {
  const vehicle = vehicles.find(v => v.id == req.params.id);
  res.render("edit", { vehicle });
});

app.put("/vehicles/:id", (req, res) => {
  const { name, price, image, desc, brand } = req.body;
  const vehicle = vehicles.find(v => v.id == req.params.id);
  vehicle.name = name;
  vehicle.price = price;
  vehicle.image = image;
  vehicle.desc = desc;
  vehicle.brand = brand;
  res.redirect("/");
});

app.delete("/vehicles/:id", (req, res) => {
  vehicles = vehicles.filter(v => v.id != req.params.id);
  res.redirect("/");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
