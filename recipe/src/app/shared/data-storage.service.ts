import {Injectable} from '@angular/core';
import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class DataStorageService {

  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeRecipes() {
    return this.http.put('https://ng-recipe-book-80a19.firebaseio.com/recipes.json', this.recipeService.recipes);
  }

  getRecipes() {
    return this.http.get<Recipe[]>('https://ng-recipe-book-80a19.firebaseio.com/recipes.json').pipe(map((recipes) => {
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
