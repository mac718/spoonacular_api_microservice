import express from "express";
import { spoonacular } from "./src/routes/spoonacular.mjs";

const app = express();
const port = 8080;

app.use(express.json());

app.use("/spoonacular", spoonacular);

app.listen(port, () => console.log(`listening on port ${port}`));
