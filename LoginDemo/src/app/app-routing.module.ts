import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CoursedetailsComponent } from './coursedetails/coursedetails.component';
import { CourselistComponent } from './courselist/courselist.component';
import { RegisterReactiveFormComponent } from './register-reactive-form/register-reactive-form.component';
import { CardlayoutComponent } from './cardlayout/cardlayout.component';


const routes: Routes = [
{path : 'login', component: LoginComponent},
{path : 'register', component: RegisterComponent},
{path : 'dashboard', component: DashboardComponent},
{path : 'courselist', component: CourselistComponent},
{path : 'coursedetails/:id', component: CoursedetailsComponent},
{path : 'dashboard/:username', component: DashboardComponent},
{path : 'registerReactForm', component: RegisterReactiveFormComponent},
{path : 'cardlayout', component: CardlayoutComponent}
// {path: 'coursedetails', pathMatch: 'full', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
