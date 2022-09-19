import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Test', 'Some Test', 'https://dummyimage.com/600x400/000/fff', [
        new Ingredient('Apples', 5),
        new Ingredient('Tomato', 10),
      ]),
    new Recipe('Test2', 'Some Test2', 'https://dummyimage.com/600x400/000/fff', [
        new Ingredient('Apples', 5),
        new Ingredient('Tomato', 10),
        new Ingredient('Cucumber', 10),
      ]),
    new Recipe('Test3', 'Some Test3', 'https://dummyimage.com/600x400/000/fff', [
        new Ingredient('Apples', 5),
        new Ingredient('Tomato', 10),
      ]),
  ];

  constructor(private slService:ShoppingListService){}

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(index: number){
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients :Ingredient[]){
    this.slService.addIngredients(ingredients);
  }
}
