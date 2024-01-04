import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SixcardsComponent } from './sixcards/sixcards.component';
import { TwelvecardsComponent } from './twelvecards/twelvecards.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  
  {
    path:"6cards",
    component:SixcardsComponent
  },
  {
    path:"12cards",
    component:TwelvecardsComponent
  },{
    path:'**',
    component:HomeComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
