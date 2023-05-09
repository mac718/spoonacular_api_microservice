import { Router } from "express";
import { searchRecipes } from "../controllers/spoonacular.mjs";

export const spoonacular = Router();

spoonacular.route("/search-recipes").post(searchRecipes);
