
import { Injectable } from '@angular/core';

/*
  Generated class for the MacroProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MacroProvider {

  public carbs: number;
  public protein: number;
  public fat: number;
  
  // Food list
  public foodList: Object[];
  constructor() {
    this.carbs = 0;
    this.protein = 0;
    this.fat = 0;

    this.foodList = [
      {
        id: 1,
        name: 'Weetbix',
        carbs: 24,
        protein: 6,
        fat: 1
      },
      {
        id: 2,
        name: 'Toast',
        carbs: 25,
        protein: 8,
        fat: 2
      },
      {
        id: 3,
        name: 'Egg',
        carbs: 3,
        protein: 7,
        fat: 1
      },
      {
        id: 4,
        name: 'Baked Beans',
        carbs: 30,
        protein: 8,
        fat: 5
      },
      {
        id: 5,
        name: 'Watermellon',
        carbs: 6,
        protein: 1,
        fat: 0
      },
      {
        id: 6,
        name: 'Big Mac',
        carbs: 40,
        protein: 14.5,
        fat: 9.5
      },
      {
        id: 7,
        name: 'Chips',
        carbs: 20,
        protein: 5,
        fat: 7
      },
      {
        id: 8,
        name: 'Adeline',
        carbs: 10000,
        protein: 10,
        fat: -100
      }
    ];
  }

  
  public addToTotals(carbs, protein, fat) {
    console.log(carbs, protein, fat)
    let carbsValue = parseFloat(carbs);
    let proteinValue = parseFloat(protein);
    let fatValue = parseFloat(fat);
    
    console.log(typeof carbsValue, proteinValue, fatValue)
    this.carbs += carbsValue;
    this.protein += proteinValue;
    this.fat += fatValue;
  }


  public getFoodList() {
    return this.foodList;
  }


  public addNewEntryToFoodList(name:string, carbs:number, protein:number, fat:number) {
    this.foodList.push(
      {
        name,
        carbs,
        protein,
        fat
      }
    )
  }

}
