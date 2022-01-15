import { Component, HostListener, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

const defaultLang = 'pt';

@Component({
  selector: 'app-mfe1',
  templateUrl: './mfe1.component.html',
  styleUrls: ['./mfe1.component.scss']
})
export class Mfe1Component implements OnInit {

  constructor(private translateService: TranslateService) {
    this.translateService.setDefaultLang(defaultLang);
    this.translateService.use(localStorage.getItem('lang') || defaultLang);
  }


  ngOnInit(): void {

  }

  @HostListener('document:changeLang', ['$event'])
  handleLangChange(event: KeyboardEvent) {
    this.translateService.use(event.detail + '' || defaultLang);
  }

}
