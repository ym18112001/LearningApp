import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { MockComponent } from './mock/mock.component';
import { authGuard } from './auth.guard';
import { authResolver } from './auth.resolver';
import { noAuthGuard } from './no-auth.guard';
import { CoursesComponent } from './courses/courses.component';

export const routes: Routes = [

    { path: '', component: HomeComponent ,title:'Home',
      resolve:{user:authResolver}
    },
    { path: 'home', component: HomeComponent },
    { path: 'mock', component: MockComponent ,title:'Mock' , canActivate:[authGuard] ,
      resolve:{user:authResolver}
    },
    { path: 'courses', component: CoursesComponent },
    { path: 'login', component: LoginComponent ,title:'Login' , canActivate:[noAuthGuard] },
    { path: 'register', component: RegisterComponent,title:'Register', canActivate:[noAuthGuard]},
    {path :'notfound', component: NotfoundComponent, title:'Not Found'},

    { path: '**', component: NotfoundComponent,title:'Page Not Found' }
];