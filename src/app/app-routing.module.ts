import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { FormDetailsComponent } from './form-details/form-details.component';


const routes: Routes = [
  {path: '' , component: FormComponent},
  {path: 'register', component: FormComponent},
  {path: 'details', component: FormDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingComponents = [FormComponent, FormDetailsComponent];
