import { category } from "app/category/model/category";

export class ressource {
    ressourceId: number;
    nom: string;
    description: string;
    categories: category[];
    fileURL: string;

}