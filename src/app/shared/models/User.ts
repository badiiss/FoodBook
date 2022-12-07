import { Food } from "./Food";

export class User {
    userId?: string;
    name?: string;
    surname?: string;
    username!:string;
    password!: string;
    picture?: string;
    roles?: String[];
    email?: string;
}