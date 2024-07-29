import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PersonComponent } from './components/person/person.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '/login', component: LoginComponent },
  { path: '/person', component: PersonComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

