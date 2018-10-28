import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Rise', 'Omnomnom', 'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fimg1.southernliving.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2F2017%2F12%2Fmain%2F2548201_lostc_0009.jpg%3Fitok%3DEOonZOIk&w=700&q=85')
    ,
    new Recipe('Pizzka', 'mmmmmm', 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(rec: Recipe) {
    this.recipeWasSelected.emit(rec);
  }
}
