export class Food {
    
    id!:number;
    name!: string;
    description?: string;
    tags?:string[];
    favorite?:boolean=false;
    stars:number = 0;
    imageUrl!:string;
    origins?:string[];
    auteur!: string;
    comments?:string[];

}