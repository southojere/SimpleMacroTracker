import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MacroProvider } from '../../providers/macro/macro'

@Component({
  selector: 'page-contact',
  templateUrl: 'createFoodItem.html'
})
export class CreateFoodItemPage {

  constructor(public navCtrl: NavController, public provider:MacroProvider) {

  }

  createNewFoodListItem() {
    this.provider.addNewEntryToFoodList('Meat balls', 42,23,1.5);
  }


}
