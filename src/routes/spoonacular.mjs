import { Router } from "express";
import { fetchRecipes } from "../controllers/spoonacular.mjs";

export const spoonacular = Router();

spoonacular.route("/fetchRecipes").get(fetchRecipes);
