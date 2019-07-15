import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
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
  constructor(public navCtrl: NavController, public provider:MacroProvider,public toastController: ToastController) {
    
  }

  getFoodList() {
    return this.provider.getFoodList();
  }

  public addItemToTotal(carbs, protein,fat) {
    let carbsValue = carbs.innerText ? parseFloat(carbs.innerText) : 0;
    let proteinValue = protein.innerText ? parseFloat(protein.innerText) : 0;
    let fatValue = fat.innerText ? parseFloat(fat.innerText) : 0;
    this.provider.addToTotals(carbsValue,proteinValue,fatValue);
    this.presentAddedToast();
  }

  public goToCreateNewFoodItemPage() {
    this.navCtrl.push(CreateFoodItemPage);
  }


  
  private async presentAddedToast() {
    const toast = await this.toastController.create({
      message: 'Added',
      duration: 2000,
      showCloseButton : true
    });
    toast.present();
  }

}
