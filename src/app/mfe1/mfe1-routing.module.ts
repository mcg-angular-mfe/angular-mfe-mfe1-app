import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { Mfe1Component } from './mfe1.component';

const routes: Routes = [
  {
    path: '',
    component: Mfe1Component
  },
  {
    path: 'form',
    component: FormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Mfe1RoutingModule { }