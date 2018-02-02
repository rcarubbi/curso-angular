import { DataFormComponent } from './data-form/data-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

 
const routes: Routes = [
  { path: 'dataForm', component: DataFormComponent },
  { path: 'templateForm', component: TemplateFormComponent },
  { path: '', redirectTo: 'dataForm', pathMatch: 'full'}
];

const routing = RouterModule.forRoot(routes);



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
