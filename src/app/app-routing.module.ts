import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../config/auth.guard';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginAdminComponent } from './auth/admin/login-admin/login-admin.component';

const routes: Routes = [
  {
    path: 'portal',
    loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule),
    //canLoad: [AuthGuard]
  },
  
    //canLoad: [AuthGuard]
  
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'portal' }
];

@NgModule({

  declarations: [
    NotFoundComponent
  ],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule,
    NotFoundComponent
  ]
})
export class AppRoutingModule { }
