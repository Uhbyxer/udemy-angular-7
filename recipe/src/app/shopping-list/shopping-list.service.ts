import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientChanged = new Subject<Ingredient[]>();
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

  addIngregients(ingredients: Ingredient[]) {
    this._ingredients.push(...ingredients);
    this.ingredientChanged.next(this.ingredients);
  }

  constructor() { }
}
