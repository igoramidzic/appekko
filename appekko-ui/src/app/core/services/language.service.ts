import { Injectable } from '@angular/core';
import { ETechnologyLanguage } from '../enums/languages';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor() { }

  get languages(): { value: ETechnologyLanguage; label: string }[] {
    let list: { value: ETechnologyLanguage; label: string }[] = [];

    for (const key in ETechnologyLanguage) {
      if (Object.prototype.hasOwnProperty.call(ETechnologyLanguage, key)) {
        console.log(key)
      }
    }

    return list;
  }

}