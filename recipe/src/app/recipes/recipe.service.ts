import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();


  private _recipes: Recipe[] = [
    new Recipe(
      'Rise',
      'Omnomnom', 'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fimg1.southernliving.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2F2017%2F12%2Fmain%2F2548201_lostc_0009.jpg%3Fitok%3DEOonZOIk&w=700&q=85',
      [
        new Ingredient('Meat', 2),
        new Ingredient('Salo', 3),

      ])

    ,
    new Recipe('Pizzka', 'mmmmmm', 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg',
      [
        new Ingredient('Cake', 1)
      ])
  ];

  constructor(private shoppingListService: ShoppingListService) {
  }

  get recipes(): Recipe[] {
    return this._recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngregients(ingredients);
  }
}
