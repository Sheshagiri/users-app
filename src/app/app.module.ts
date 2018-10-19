import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { UsersComponent } from './comoonents/users/users.component';
import { UserServce } from './services/user.service';
import { PostsComponent } from './comoonents/posts/posts.component';
import { PostService } from './services/post.service';
import { HttpClientModule } from '@angular/common/http';
import { PostFormComponent } from './comoonents/post-form/post-form.component';
import { NavbarComponent } from './comoonents/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PostsComponent,
    PostFormComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserServce, PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
