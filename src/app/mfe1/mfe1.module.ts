import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Mfe1RoutingModule } from './mfe1-routing.module';
import { Mfe1Component } from './mfe1.component';
import { FormComponent } from './form/form.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { CustomTranslateLoader } from '../loader/custom-translate.loader';
import { HttpClient } from '@angular/common/http';

@NgModule({
    declarations: [
        Mfe1Component,
        FormComponent
    ],
    imports: [
        BrowserModule,
        Mfe1RoutingModule,
        // TranslateModule,
        TranslateModule.forChild({
            loader: {
              provide: TranslateLoader,
              useClass: CustomTranslateLoader,
              deps: [HttpClient],
            },
            isolate: true
        }),
    ],
    providers: [],
})
export class Mfe1Module { }