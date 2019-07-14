import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MacroProvider } from '../../providers/macro/macro'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public carbs: number;
  public protein: number;
  public fat: number;

  constructor(public navCtrl: NavController, private provider: MacroProvider) {
    this.carbs = 0;
    this.protein = 0;
    this.fat = 0;
    this.provider = provider;
  }

  public getTotalCarbs() {
    return this.provider.carbs;
  }

  public getTotalProtein() {
    return this.provider.protein;
  }

  
  public getTotalFat() {
    return this.provider.fat;
  }

  public addToTotals(carbs, protein, fat) {
    this.provider.addToTotals(carbs.value,protein.value,fat.value);
    this.resetInput(carbs,protein,fat);
  }

  private resetInput (carbs, protein, fat) {
    carbs.value="";
    protein.value="";
    fat.value="";
  }

}
