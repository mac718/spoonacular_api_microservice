# Documentation

## Download and run on local machine

1. Clone this repo
2. cd into cloned repo and run `npm install` in your terminal.
3. Run `npm start` to start the server.

## Usage intructions

By default, the server will run on port 8080. To change the port, change the value of the `port` variable in server.mjs.

As of now, the API has one endpoint: `/spoonacular/fetchRecipes`, which will return a list of recipes that can be filtered using `includeIgredients`, `excludeIngredients`, and `diet` criteria. Values for these criteria should be passed from the client in the body of http request. Values for `includeIngredients` and `excludeIngredients` should be strings with each ingredient separated by a comma. Values for diet are also a string, but can be separated by either a comma or a pipe character ('|'). A commas will be interpreted as AND and pipe characters will be interpreted as OR. A list of accepted diet options is available [here](https://spoonacular.com/food-api/docs#Diets). Below is a sample call:

```
const recipes = await axios.get("http://localhost:8080/spoonacular/fetchRecipes", {includeIgredients: "tomato,mozzarella", excludeIngredients: "capers", diet: "vegetarian|vegan"})
```

This call produces the following results:

```
[
    {
        "id": 782585,
        "title": "Cannellini Bean and Asparagus Salad with Mushrooms",
        "image": "https://spoonacular.com/recipeImages/782585-312x231.jpg",
        "imageType": "jpg"
    },
    {
        "id": 716426,
        "title": "Cauliflower, Brown Rice, and Vegetable Fried Rice",
        "image": "https://spoonacular.com/recipeImages/716426-312x231.jpg",
        "imageType": "jpg"
    },
    {
        "id": 715497,
        "title": "Berry Banana Breakfast Smoothie",
        "image": "https://spoonacular.com/recipeImages/715497-312x231.jpg",
        "imageType": "jpg"
    },
    {
        "id": 716406,
        "title": "Asparagus and Pea Soup: Real Convenience Food",
        "image": "https://spoonacular.com/recipeImages/716406-312x231.jpg",
        "imageType": "jpg"
    },
    {
        "id": 644387,
        "title": "Garlicky Kale",
        "image": "https://spoonacular.com/recipeImages/644387-312x231.jpg",
        "imageType": "jpg"
    },
    {
        "id": 782601,
        "title": "Red Kidney Bean Jambalaya",
        "image": "https://spoonacular.com/recipeImages/782601-312x231.jpg",
        "imageType": "jpg"
    },
    {
        "id": 766453,
        "title": "Hummus and Za'atar",
        "image": "https://spoonacular.com/recipeImages/766453-312x231.jpg",
        "imageType": "jpg"
    },
    {
        "id": 716627,
        "title": "Easy Homemade Rice and Beans",
        "image": "https://spoonacular.com/recipeImages/716627-312x231.jpg",
        "imageType": "jpg"
    },
    {
        "id": 664147,
        "title": "Tuscan White Bean Soup with Olive Oil and Rosemary",
        "image": "https://spoonacular.com/recipeImages/664147-312x231.jpg",
        "imageType": "jpg"
    },
    {
        "id": 640941,
        "title": "Crunchy Brussels Sprouts Side Dish",
        "image": "https://spoonacular.com/recipeImages/640941-312x231.jpg",
        "imageType": "jpg"
    }
]
```
