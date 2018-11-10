import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  private _ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ]

  get ingredients(): Ingredient[] {
    return this._ingredients.slice();
  }

  addIngregient(ingredient: Ingredient) {
    this._ingredients.push(ingredient);
    this.ingredientChanged.next(this.ingredients);
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this._ingredients[index] = newIngredient;
    this.ingredientChanged.next(this.ingredients);
  }

  deleteIngredient(index: number) {
    this._ingredients.splice(index, 1);
    this.ingredientChanged.next(this.ingredients);
  }


  getIngredient(index: number) {
    return this._ingredients[index];
  }

  addIngregients(ingredients: Ingredient[]) {
    this._ingredients.push(...ingredients);
    this.ingredientChanged.next(this.ingredients);
  }

  constructor() { }
}
