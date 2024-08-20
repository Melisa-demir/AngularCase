import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


const languages = [
  {
    name: 'English',
    code: 'en'
  },
  {
    name: 'French',
    code: 'fr'
  },
  {
    name: 'Portuguese',
    code: 'pt'
  }
]

@Injectable({
  providedIn: 'root'
})
export class LangService {

  constructor(private translate: TranslateService) { }

  getLanguages() {
    return languages;
  }
  
  setLanguage(lang: string) {
    localStorage.setItem('lang', lang);
  }
  
  getLanguage() {
    const lang = localStorage.getItem('lang') || 'en';
    return languages.find(l => l.code === lang)!;
  }

}
