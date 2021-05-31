import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PostComponent } from '../post/post.component';
import { PostViewComponent } from '../post-view/post-view.component';
import { AuthComponent } from '../auth/auth.component';

import { PostService } from '../service/post.service';
import { AuthService } from '../service/auth.service';
import { UserService } from '../service/user.service';
import { AuthGuard } from '../service/auth-guard.service';

import { RouterModule, Routes } from '@angular/router';
import { SinglePostComponent } from '../single-post/single-post.component';
import { FourOhFourComponent } from '../four-oh-four/four-oh-four.component';

import { EditPostComponent } from '../edit-post/edit-post.component';
import { UserListComponent } from '../user-list/user-list.component';
import { NewUserComponent } from '../new-user/new-user.component';

const appRoutes: Routes = [
  { path: 'posts', canActivate: [AuthGuard], component: PostViewComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'users', component: UserListComponent },
  { path: 'new-user', component: NewUserComponent },
  { path: '', component: PostViewComponent },
  {
    path: 'posts/:id',
    canActivate: [AuthGuard],
    component: SinglePostComponent
  },
  { path: 'edit', canActivate: [AuthGuard], component: EditPostComponent },
  { path: 'not-found', component: FourOhFourComponent },

  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    PostComponent,
    AuthComponent,
    PostViewComponent,
    SinglePostComponent,
    FourOhFourComponent,
    EditPostComponent,
    UserListComponent,
    NewUserComponent
  ],
  bootstrap: [AppComponent],
  providers: [PostService, AuthService, AuthGuard, UserService]
})
export class AppModule {}
