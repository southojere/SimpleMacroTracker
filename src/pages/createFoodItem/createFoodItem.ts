import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { MacroProvider } from '../../providers/macro/macro'

@Component({
  selector: 'page-contact',
  templateUrl: 'createFoodItem.html'
})
export class CreateFoodItemPage {

  constructor(public navCtrl: NavController, public provider: MacroProvider, public toastController: ToastController) {

  }

  public createNewFoodListItem(name, carbs, protein, fat) {
    if (!name.value) {
      this.presentToast()
    } else {
      this.provider.addNewEntryToFoodList(name.value, carbs.value, protein.value, fat.value);
      this.resetFields([name, carbs, protein, fat]);
      this.navCtrl.pop();
    }
  }

  private resetFields(listOfInputs: any[]) {
    listOfInputs.forEach(f => {
      f.value = "";
    })
  }


  private async presentToast() {
    const toast = await this.toastController.create({
      message: 'Please enter a name',
      duration: 2000,
      showCloseButton : true
    });
    toast.present();
  }


}
