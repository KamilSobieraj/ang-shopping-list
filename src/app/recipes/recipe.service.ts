import {Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      'Pizza',
      'Test Recipe description',
      'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2019/02/caponata-pasta.jpg?itok=oyipDvVn',
      [new Ingredient('Flour', 1), new Ingredient('Mozzarella', 2), new Ingredient('Tomato', 4)]),
    new Recipe(
      'Spaghetti Carbonara',
      'Recipe description for second dish',
      'https://www.acouplecooks.com/wp-content/uploads/2019/01/Crispy-Cauliflower-Tacos-036.jpg',
      [new Ingredient('Pasta', 1), new Ingredient('Parmegiano Cheese', 1), new Ingredient('Egg', 1)])
  ];

  getRecipes() {
    // Slice method is just the trick to cut off a reference to our object in the service
    return this.recipes.slice();
  }
  constructor(private shoppingListService: ShoppingListService) { }

  getRecipe(index: number) {
    return this.recipes[index];
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredientsFromRecipe(ingredients);
  }
}
