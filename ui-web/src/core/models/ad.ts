import { IAuthor } from "./project";

export interface IAd {
    name: string;
    description: string;
    owner: IAuthor;
}