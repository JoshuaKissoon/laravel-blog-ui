import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UserLoginComponent } from './user/login.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'user/login', component: UserLoginComponent }
];

import { PostAddComponent } from './post/postAdd.component';
routes.push({ path: 'post/create', component: PostAddComponent });

export const RoutingProvider = RouterModule.forRoot(routes, { useHash: true });