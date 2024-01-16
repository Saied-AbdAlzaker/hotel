import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
TranslateService
@Injectable({
    providedIn : 'root'
})
export class HelperService {
  textDir:string='ltr';
    private darkMode = false;

constructor(
    private _HttpClient:HttpClient,
    public translate:TranslateService
) { 
  translate.onLangChange.subscribe((event: LangChangeEvent) => {
    console.log(event);
    
  });
  
}
isDarkMode() {
    return this.darkMode;
  }
  setDarkMode(isDarkMode: boolean) {
    this.darkMode = isDarkMode;
    if (isDarkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }

  
  onchangeLang(lang:string){
    console.log(this.translate.currentLang );
  
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
  
  }
  }  

