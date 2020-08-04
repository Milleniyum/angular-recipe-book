import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
        new Recipe(
          'tasty Schnitzel', 
          'A super-tasty Schnitzel - just awesome',
          'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
          [
            new Ingredient('Meat', 1),
            new Ingredient('French Fries', 20)
          ]),

        new Recipe(
          'Sous Vide pork loin', 
          'Super Tender',
          'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
          [
            new Ingredient('Pork loin', 1),
            new Ingredient('Asparagus', 5),
            new Ingredient('Tomatoe', 3),
          ])
      ];

      constructor(private slService: ShoppingListService){}

    getRecipes(){
        return this.recipes.slice();
    }

    getRecipe(index: number){
      return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
      this.slService.addIngredients(ingredients)
    }
}