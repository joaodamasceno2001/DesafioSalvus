const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const routes = require("./routes");
const app = express();

mongoose.connect("mongodb+srv://joao:987456@cluster0.ewhuj.mongodb.net/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
//enviar informações para API em Json
app.use(express.json());
app.use("/uploads", express.static(path.resolve(__dirname, "..", "uploads")));
app.use(routes);

app.listen(3333);
