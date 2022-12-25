import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TipPageComponent } from './tip-page/tip-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MagicPageComponent } from './magic-page/magic-page.component';

const routes: Routes = [
  { path: '',   redirectTo: '/home-page', pathMatch: 'full' }, // redirect to `first-component`
  { path: 'home-page', component: HomePageComponent },
  { path: 'tip-page', component: TipPageComponent },
  { path: 'magic-page', component: MagicPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
