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
        name: 'Test',
        favorite: false,
        origins: ['italy'],
        stars: 4,
        imageUrl: '/assets/images/3dess.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
        auteur: 'badis',
      },
      {
        id: 2,
        name: 'Test',
        favorite: true,
        origins: ['Algeria'],
        stars: 3,
        imageUrl: '/assets/images/chorba.jpg',
        tags: ['SlowFood', 'Lunch'],
        auteur: 'tebboune',
      },
      {
        id: 3,
        name: 'Test',
        favorite: false,
        origins: ['germany', 'us'],
        stars: 5,
        imageUrl: '/assets/images/3dess.jpg',
        tags: ['FastFood', 'Hamburger'],
        auteur: 'messi',
      },
      {
        id: 4,
        name: 'Test',
        favorite: true,
        origins: ['belgium', 'france'],
        stars: 1,
        imageUrl: '/assets/images/chorba.jpg',
        tags: ['FastFood', 'Fry'],
        auteur: 'giroud',
      },
      {
        id: 5,
        name: 'Test',
        favorite: false,
        origins: [],
        stars: 2,
        imageUrl: '/assets/images/chorba.jpg',
        tags: ['SlowFood', 'Soup'],
        auteur :'anis'
      },
      {
        id: 6,
        name: 'Test',
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
