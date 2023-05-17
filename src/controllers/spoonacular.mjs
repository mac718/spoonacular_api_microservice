import axios from "axios";
import * as dotenv from "dotenv";

dotenv.config();

export const searchRecipes = async (req, res) => {
  const { query, includeIngredients, excludeIngredients, diet } = req.body;
  const base_url = "https://api.spoonacular.com/recipes/complexSearch";
  try {
    const api_response = await axios.get(
      `${base_url}?apiKey=${process.env.API_KEY}&query=${query}&includeIngredients=${includeIngredients}&excludeIngredients=${excludeIngredients}&diet=${diet}`
    );

    res.json(api_response.data.results);
  } catch (err) {
    res.json(err);
  }
};
