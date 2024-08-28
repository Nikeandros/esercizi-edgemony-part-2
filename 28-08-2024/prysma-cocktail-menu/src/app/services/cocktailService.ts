// src/services/cocktailService.ts
import axios from 'axios';

const API_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export const fetchCocktails = async (searchTerm: string) => {
    try {
        const response = await axios.get(`${API_URL}${searchTerm}`);
        const drinks = response.data.drinks || [];
        
        return drinks.map((drink: any) => ({
            idDrink: drink.idDrink,
            strDrink: drink.strDrink,
            strDrinkThumb: drink.strDrinkThumb,
            strInstructions: drink.strInstructions,
            strCategory: drink.strCategory,
            strGlass: drink.strGlass,
            strAlcoholic: drink.strAlcoholic,
            strIngredients: {
                strIngredient1: drink.strIngredient1,
                strIngredient2: drink.strIngredient2,
                strIngredient3: drink.strIngredient3,
                strIngredient4: drink.strIngredient4,
                strIngredient5: drink.strIngredient5,
                strIngredient6: drink.strIngredient6,
                strIngredient7: drink.strIngredient7,
                strIngredient8: drink.strIngredient8,
                strIngredient9: drink.strIngredient9,
                strIngredient10: drink.strIngredient10,
                strIngredient11: drink.strIngredient11,
                strIngredient12: drink.strIngredient12,
                strIngredient13: drink.strIngredient13,
                strIngredient14: drink.strIngredient14,
                strIngredient15: drink.strIngredient15,
            }
        }));
    } catch (error) {
        console.error('Error fetching cocktails:', error);
        return [];
    }
};
