import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateLoader } from '@ngx-translate/core';
import { catchError, Observable, of } from 'rxjs';
import { translations } from 'src/i18n/translations';



@Injectable({
  providedIn: 'root'
})
export class CustomTranslateLoader implements TranslateLoader {

  constructor(private httpClient: HttpClient) {}

  getTranslation(lang: string): Observable<any> {
    return of(translations[lang])
    // return this.httpClient.get(url)
    // .pipe(catchError((_) => {
    //   console.log(url + ' not found');
    //   return this.httpClient.get(`/assets/i18n/en.json`)
    // }));
  }
  
}

