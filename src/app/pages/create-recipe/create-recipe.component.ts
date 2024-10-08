import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import { RecipeServiceService } from '../../services/Recipe/recipe-service.service';

@Component({
  selector: 'app-create-recipe',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatRadioModule],
  templateUrl: './create-recipe.component.html',
  styleUrl: './create-recipe.component.scss'
})
export class CreateRecipeComponent {

  recipeItem:any={
    title:"",
    description:"",
    foodType:"",
    image:""
  }
  
  constructor(private recipeService:RecipeServiceService){}
  
  onSubmit(){
    console.log("values", this.recipeItem)
    this.recipeService.createRecipes(this.recipeItem).subscribe(
      {
        next:data=>console.log("Created Recipe", data),
        error: error=>console.log("Error Creating Recipe", error)
      }
    )
  }

}
