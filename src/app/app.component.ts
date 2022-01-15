import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MFE 1';

  constructor(private translateService: TranslateService) {
    this.translateService.setDefaultLang('pt');
    this.translateService.use(localStorage.getItem('lang') || 'pt');
  }

  changeLang(lang: string) {
    this.translateService.use(lang);
  }
}
