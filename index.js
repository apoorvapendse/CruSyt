import express from "express";
import path from "path";
import router from "./Router/Router.js";

const app = express();

//setting up middleware
app.use(express.json()); // for JSON data
// OR
app.use(express.urlencoded({ extended: true })); //to access data from request bodies
app.use(express.static(path.join(path.resolve(), "public"))); //all css files and images will be in public folder
//to handle data from cookies

app.use("/", router);
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is listening on port:${PORT}`);
});
