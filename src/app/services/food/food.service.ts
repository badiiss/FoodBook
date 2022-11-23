import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/Food';
import { Tag } from 'src/app/shared/models/Tags';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getAllFoodsByTag(tag: string): Food[] {
    return tag == "All" ?
      this.getAll() :
      this.getAll().filter(food => food.tags?.includes(tag.toLowerCase()));
  }

  getAllTags(): Tag[] {
    return [
      { name: 'All', count: 14 },
      { name: 'FastFood', count: 4 },
      { name: 'Pizza', count: 2 },
      { name: 'Lunch', count: 3 },
      { name: 'SlowFood', count: 2 },
      { name: 'Hamburger', count: 1 },
      { name: 'Fry', count: 1 },
      { name: 'Soup', count: 1 },
    ];
  }

  getAll(): Food[] {
    return [
      {
        id: 1,
        name: 'Pizza Pepperoni',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        stars: 4,
        imageUrl: '/assets/images/3dess.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
        auteur: 'badis',
      },
      {
        id: 2,
        name: 'Hrira',
        price: 20,
        cookTime: '20-30',
        favorite: true,
        origins: ['Algeria'],
        stars: 3,
        imageUrl: '/assets/images/chorba.jpg',
        tags: ['SlowFood', 'Lunch'],
        auteur: 'tebboune',
      },
      {
        id: 3,
        name: 'Hamburger',
        price: 5,
        cookTime: '10-15',
        favorite: false,
        origins: ['germany', 'us'],
        stars: 5,
        imageUrl: '/assets/images/3dess.jpg',
        tags: ['FastFood', 'Hamburger'],
        auteur: 'messi',
      },
      {
        id: 4,
        name: 'Fried Potatoes',
        price: 2,
        cookTime: '15-20',
        favorite: true,
        origins: ['belgium', 'france'],
        stars: 1,
        imageUrl: '/assets/images/chorba.jpg',
        tags: ['FastFood', 'Fry'],
        auteur: 'giroud',
      },
      {
        id: 5,
        name: 'Chicken Soup',
        price: 11,
        cookTime: '40-50',
        favorite: false,
        origins: ['india', 'asia'],
        stars: 2,
        imageUrl: '/assets/images/chorba.jpg',
        tags: ['SlowFood', 'Soup'],
        auteur :'anis'
      },
      {
        id: 6,
        name: 'Vegetables Pizza',
        price: 9,
        cookTime: '40-50',
        favorite: false,
        origins: ['italy'],
        stars: 4.0,
        imageUrl: '/assets/images/3dess.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
        auteur: 'maguire',
      },
    ];
  }
}
