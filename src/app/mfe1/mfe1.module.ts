import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Mfe1RoutingModule } from './mfe1-routing.module';
import { Mfe1Component } from './mfe1.component';
import { FormComponent } from './form/form.component';

@NgModule({
    declarations: [
        Mfe1Component,
        FormComponent
    ],
    imports: [
        BrowserModule,
        Mfe1RoutingModule,
    ],
    providers: [],
})
export class Mfe1Module { }