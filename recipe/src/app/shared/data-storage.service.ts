import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class DataStorageService {

  constructor(private http: Http, private recipeService: RecipeService) {}

  storeRecipes() {
    return this.http.put('https://ng-recipe-book-80a19.firebaseio.com/recipes.json', this.recipeService.recipes);
  }

  getRecipes() {
    return this.http.get('https://ng-recipe-book-80a19.firebaseio.com/recipes.json').pipe(map((response: Response) => {
      const recipes: Recipe[] = response.json();

      for (const recipe of recipes) {
        if (!recipe['ingredients']) {
          console.log(recipe);
          recipe['ingredients'] = [];
        }
      }
      return recipes;
    }))
      .subscribe(
        (recipes: Recipe[]) => {this.recipeService.setRecipes(recipes);
      return recipes;
    }
    );
  }
}