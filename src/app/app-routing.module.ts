import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { Page404Component } from './routes/page404/page404.component';

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "home"},
  {path: "home", component: HomeComponent},
  {path: "**", component: Page404Component}

/*   {path: "main", component: MainComponent},
  {path: "que-es-net", component: QueEsNetComponent},
  {path: "indevelopment", component: IndevelopmentComponent},
  {path: "**", component: Page404Component}, //Siempre este debe ir de ultimo */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
