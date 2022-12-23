import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component'; 
import { DetailsComponent } from './details/details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
const routes: Routes = [
                        {path:'details/:id',component:DetailsComponent},
                        {path:'employees',component:EmployeeListComponent},
                        {path:"**",component:PageNotFoundComponent}
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[
                                DetailsComponent,
                                PageNotFoundComponent,
                                EmployeeListComponent
                              ]