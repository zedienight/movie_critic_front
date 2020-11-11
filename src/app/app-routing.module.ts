import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainTrendingComponent } from './main-trending/main-trending.component';
import { MainComponent } from './main/main.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path: 'main', component: MainComponent},
  {path: 'main-trending', component: MainTrendingComponent},
  {path: 'main-header', component: MainHeaderComponent},
  {path: 'main-footer', component: MainFooterComponent},
  {path: 'sign-in', component: SignInComponent},
  {path: 'sign-up', component: SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
