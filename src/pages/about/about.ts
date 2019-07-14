import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {CreateFoodItemPage} from '../createFoodItem/createFoodItem';
import { MacroProvider } from '../../providers/macro/macro'
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {


  /**
   * Contains our food objects 
   * {
   *  name,
   *  carbs, protein, fat
   * }
   */
  public foodList: Object[];
  constructor(public navCtrl: NavController, public provider:MacroProvider) {
    
  }

  getFoodList() {
    return this.provider.getFoodList();
  }


  public goToCreateNewFoodItemPage() {
    this.navCtrl.push(CreateFoodItemPage);
  }

}
