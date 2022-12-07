import { Injectable } from '@angular/core';
import { Post } from 'src/app/shared/models/Food';
import { Tag } from 'src/app/shared/models/Tags';
import { UUID } from 'angular2-uuid';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  addNew(Post: Post) {
    //Post.id = ;
    //this.Posts

  }

  getPostById(id: number): Post{
    return this.getAll().find(post => post.id == id)!;
  }

  getAllPostsByTag(tag: string): Post[] {
    return tag == "All" ?
      this.getAll() :
      this.getAll().filter(post => post.tags?.includes(tag.toLowerCase()));
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

  getAll(): Post[] {
    return [
      {
        id: 1,
        name: 'Pizza',
        favorite: false,
        origins: ['italy'],
        stars: 4,
        imageUrl: '/assets/images/3dess.jpg',
        tags: ['FastPost', 'Pizza', 'Lunch'],
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
        tags: ['SlowPost', 'Lunch'],
        auteur: 'tebboune',
      },
      {
        id: 3,
        name: 'Couscous',
        favorite: false,
        origins: ['germany', 'us'],
        stars: 5,
        imageUrl: '/assets/images/3dess.jpg',
        tags: ['FastPost', 'Hamburger'],
        auteur: 'messi',
      },
      {
        id: 4,
        name: 'Gratin',
        favorite: true,
        origins: ['belgium', 'france'],
        stars: 1,
        imageUrl: '/assets/images/chorba.jpg',
        tags: ['FastPost', 'Fry'],
        auteur: 'giroud',
      },
      {
        id: 5,
        name: 'Test',
        favorite: false,
        origins: [],
        stars: 2,
        imageUrl: '/assets/images/chorba.jpg',
        tags: ['SlowPost', 'Soup'],
        auteur :'anis'
      },
      {
        id: 6,
        name: 'Test',
        favorite: false,
        origins: ['italy'],
        stars: 4.0,
        imageUrl: '/assets/images/3dess.jpg',
        tags: ['FastPost', 'Pizza', 'Lunch'],
        auteur: 'maguire',
      },
    ];
  }
}
