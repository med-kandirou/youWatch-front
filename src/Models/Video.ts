import { Category } from "./Categorie";
import { Channel } from "./Channel";

export interface Video{
    id:number;
    title:string;
    description:string;
    link:string;
    thumbnail:string;
    datePosting:Date;
    nbrVues:number;
    nbrLikes:number;
    category:Category;
    channel:Channel;
}