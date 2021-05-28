import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PostComponent } from '../post/post.component';
import { PostViewComponent } from '../post-view/post-view.component';
import { AuthComponent } from '../auth/auth.component';

import { PostService } from '../service/post.service';
import { AuthService } from '../service/auth.service';

import { RouterModule, Routes } from '@angular/router';
import { SinglePostComponent } from '../single-post/single-post.component';
import { FourOhFourComponent } from '../four-oh-four/four-oh-four.component';
import { AuthGuard } from '../service/auth-guard.service';

const appRoutes: Routes = [
  { path: 'posts', canActivate: [AuthGuard], component: PostViewComponent },
  { path: 'auth', component: AuthComponent },
  { path: '', component: PostViewComponent },
  {
    path: 'posts/:id',
    canActivate: [AuthGuard],
    component: SinglePostComponent
  },
  { path: 'not-found', component: FourOhFourComponent },

  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  declarations: [
    AppComponent,
    HelloComponent,
    PostComponent,
    AuthComponent,
    PostViewComponent,
    SinglePostComponent,
    FourOhFourComponent
  ],
  bootstrap: [AppComponent],
  providers: [PostService, AuthService]
})
export class AppModule {}
