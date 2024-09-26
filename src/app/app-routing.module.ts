import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},  // Route mặc định
  { path: 'login', component: LoginComponent},  // Route cho trang chủ
  { path: 'register', component: RegisterComponent },  // Route cho trang about
  { path: '**', redirectTo: '' },  // Redirect nếu không tìm thấy route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
