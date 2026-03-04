import { Routes } from '@angular/router';
import { CardComponent } from '../components/card/card.component';
import { ParentComponent } from '../components/parent/parent.component';
import { RegisterFormComponent } from '../components/register-form/register-form.component';
import { LoginComponent } from '../components/login/login.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'app',
    pathMatch: 'full',
    },
    {
        path: 'app',
        component:ParentComponent
    },
  {
    path: 'user',
    component: CardComponent,
  }, {
    path: 'add-user',
    component:RegisterFormComponent
  }, {
    path: 'login',
    component:LoginComponent
  }
];
