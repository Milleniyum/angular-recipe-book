import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test','https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'),
        new Recipe('Another Test Recipe', 'This is simply a test','https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&h=650&w=940')
      ];

    getRecipes(){
        return this.recipes.slice();
    }
}