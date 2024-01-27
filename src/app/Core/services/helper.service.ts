import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

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
    if(event.lang==='en'){
      this.textDir='ltr'
    }
    else{
      this.textDir='rtl'
    }
  });
}
  onchangeLang(lang:string){    
      this.translate.setDefaultLang(lang);
      this.translate.use(lang);
      localStorage.setItem('lang', lang)
    }


  }  

