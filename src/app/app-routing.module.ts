import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { IndexComponent } from './landing/index/index.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'about', }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
