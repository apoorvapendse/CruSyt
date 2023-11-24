import express from "express";
import path from "path";
import router from "./Router/Router.js";
import bodyParser from "body-parser";
const app = express();

app.use(express.json()); // for parsing JSON data
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(path.resolve(), "public"))); //all css files and images will be in public folder
app.use("view engine","ejs")
//to handle data from cookies

app.use("/", router);
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is listening on port:${PORT}`);
});

//  apikey for chadgpt