import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Food } from 'src/app/shared/models/Food';
import { Tag } from 'src/app/shared/models/Tags';
import { Comment } from 'src/app/shared/models/Comment';
@Injectable({
  providedIn: 'root'
})
export class FoodService {
  private comments!:Array<Comment>
  private foods !: Array<Food>;
  public food !: Food;
  public comment !: Comment;
  constructor() {
    this.comments = [
      { auteurCom: 'Badis', content: 'Tasty' },
      { auteurCom: 'Ion', content: 'un repas delicieux' },
      { auteurCom: 'Anis', content: 'Tasty' },
      { auteurCom: 'Leo', content: 'un repas delicieux' },
      { auteurCom: 'Some', content: 'Tasty' },
      { auteurCom: 'Asus', content: 'un repas delicieux' },
    ]

    this.foods = [
      {
        id: 1,
        name: 'Falefel',
        favorite: false,
        origins: ['Liban'],
        stars: 4,
        imageUrl: '/assets/images/falafel.jpg',
        tags: ['Liban', 'Moyen-Orient', 'Vegetarien'],
        auteur: 'Rami',
        comments: ['super', 'cest nul'],
                description: 'Nam velit metus, rutrum et vehicula in, aliquet nec orci. Vivamus maximus, tortor in dictum congue, tortor lorem varius magna, quis fringilla neque enim a risus. Duis mattis leo elit, non congue lacus accumsan in. Sed semper felis condimentum enim efficitur, vitae vulputate nisi ullamcorper.',

      },
      {
        id: 2,
        name: 'Gratin',
        favorite: true,
        origins: ['France'],
        stars: 3,
        imageUrl: '/assets/images/gratin.jpg',
        tags: [ 'Lunch'],
        auteur: 'Martin',
        description: 'Nam velit metus, rutrum et vehicula in, aliquet nec orci. Vivamus maximus, tortor in dictum congue, tortor lorem varius magna, quis fringilla neque enim a risus. Duis mattis leo elit, non congue lacus accumsan in. Sed semper felis condimentum enim efficitur, vitae vulputate nisi ullamcorper.',
      },
      {
        id: 3,
        name: 'Spaghetti',
        favorite: false,
        origins: ['Italie'],
        stars: 5,
        imageUrl: '/assets/images/spaghetti.jpg',
        tags: ['Pates', 'Italie'],
        auteur: 'Marco',
        description: 'Nam velit metus, rutrum et vehicula in, aliquet nec orci. Vivamus maximus, tortor in dictum congue, tortor lorem varius magna, quis fringilla neque enim a risus. Duis mattis leo elit, non congue lacus accumsan in. Sed semper felis condimentum enim efficitur, vitae vulputate nisi ullamcorper.',

      },
      {
        id: 4,
        name: 'Chorba',
        favorite: true,
        origins: ['Algerie'],
        stars: 1,
        imageUrl: '/assets/images/chorba.jpg',
        tags: ['Maghreb'],
        auteur: 'Martina',
        description: 'Nam velit metus, rutrum et vehicula in, aliquet nec orci. Vivamus maximus, tortor in dictum congue, tortor lorem varius magna, quis fringilla neque enim a risus. Duis mattis leo elit, non congue lacus accumsan in. Sed semper felis condimentum enim efficitur, vitae vulputate nisi ullamcorper.',

      },
      {
        id: 5,
        name: 'Paella',
        favorite: false,
        origins: ['Espagne'],
        stars: 2,
        imageUrl: '/assets/images/paella.jpg',
        tags: ['Fruis de mers', 'Riz'],
        auteur: 'Badis',
                description: 'Nam velit metus, rutrum et vehicula in, aliquet nec orci. Vivamus maximus, tortor in dictum congue, tortor lorem varius magna, quis fringilla neque enim a risus. Duis mattis leo elit, non congue lacus accumsan in. Sed semper felis condimentum enim efficitur, vitae vulputate nisi ullamcorper.',

      },
      {
        id: 6,
        name: 'Tacos',
        favorite: false,
        origins: ['Mexique'],
        stars: 4.0,
        imageUrl: '/assets/images/tacos.jpg',
        tags: ['Latin','Mexique'],
        auteur: 'Daniela',
                description: 'Nam velit metus, rutrum et vehicula in, aliquet nec orci. Vivamus maximus, tortor in dictum congue, tortor lorem varius magna, quis fringilla neque enim a risus. Duis mattis leo elit, non congue lacus accumsan in. Sed semper felis condimentum enim efficitur, vitae vulputate nisi ullamcorper.',

      },
      {
        id: 7,
        name: 'Sushi',
        favorite: false,
        origins: ['Japon'],
        stars: 4.0,
        imageUrl: '/assets/images/sushi.jpg',
        tags: ['Asiatique'],
        auteur: 'Guillaume',
                description: 'Nam velit metus, rutrum et vehicula in, aliquet nec orci. Vivamus maximus, tortor in dictum congue, tortor lorem varius magna, quis fringilla neque enim a risus. Duis mattis leo elit, non congue lacus accumsan in. Sed semper felis condimentum enim efficitur, vitae vulputate nisi ullamcorper.',

      },
      {
        id: 8,
        name: 'Cassoulet',
        favorite: false,
        origins: ['Français'],
        stars: 4.0,
        imageUrl: '/assets/images/cassoulet.jpg',
        tags: ['France'],
        auteur: 'Julien',
                description: 'Nam velit metus, rutrum et vehicula in, aliquet nec orci. Vivamus maximus, tortor in dictum congue, tortor lorem varius magna, quis fringilla neque enim a risus. Duis mattis leo elit, non congue lacus accumsan in. Sed semper felis condimentum enim efficitur, vitae vulputate nisi ullamcorper.',

      },
      {
        id: 9,
        name: 'Nachos',
        favorite: true,
        origins: ['Mexique'],
        stars: 4.0,
        imageUrl: '/assets/images/nachos.jpg',
        tags: ['Latin'],
        auteur: 'Oumaima',
                description: 'Nam velit metus, rutrum et vehicula in, aliquet nec orci. Vivamus maximus, tortor in dictum congue, tortor lorem varius magna, quis fringilla neque enim a risus. Duis mattis leo elit, non congue lacus accumsan in. Sed semper felis condimentum enim efficitur, vitae vulputate nisi ullamcorper.',

      },
      
    ]
  }

  getAuteur() {
    return this.food.auteur
  }
  getAuteurCom() {
    return this.comment.auteurCom;
  }
  // TODO 
  public addNewPost(post: Food): Observable<Food>{
    this.foods.push(post);
    console.log(post);
    return of(post);
  }
  


  public deletPost(id: number): Observable<boolean> {
    this.foods = this.foods.filter(food => food.id != id);
    return of(true);
    
  }

  getFoodById(id: number): Food{
    return this.getAll().find(food => food.id == id)!;
  }


  // à abandoner ça marche pas 
  getAllFoodsByTag(tag: string): Food[] {
    return tag == "All" ?
      this.getAll() :
      this.getAll().filter(food => food.tags?.includes(tag.toLowerCase()));
  }

  getAllTags(): Tag[] {
    return [
      { name: 'All', count: 14 },
      { name: 'Tag1', count: 4 },
      { name: 'Tag2', count: 2 },
      { name: 'Tag3', count: 3 },
      { name: 'Tag4', count: 2 },
      { name: 'Tag5', count: 1 },
      { name: 'Tag6', count: 1 },
      { name: 'Tag7', count: 1 },
    ];
  }

  getComments(){
    return this.comments;
  }


  getAll() {
    return this.foods;
  }
  /*
  getAll(): Food[] {
    return [
      {
        id: 1,
        name: 'Pizza',
        favorite: false,
        origins: ['italy'],
        stars: 4,
        imageUrl: '/assets/images/3dess.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
        auteur: 'badis',
        comments :['super', 'cest nul']
      },
      {
        id: 2,
        name: 'Soupe',
        favorite: true,
        origins: ['Algeria'],
        stars: 3,
        imageUrl: '/assets/images/chorba.jpg',
        tags: ['SlowFood', 'Lunch'],
        auteur: 'tebboune',
      },
      {
        id: 3,
        name: 'Couscous',
        favorite: false,
        origins: ['germany', 'us'],
        stars: 5,
        imageUrl: '/assets/images/3dess.jpg',
        tags: ['FastFood', 'Hamburger'],
        auteur: 'messi',
      },
      {
        id: 4,
        name: 'Gratin',
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
  }*/
}
