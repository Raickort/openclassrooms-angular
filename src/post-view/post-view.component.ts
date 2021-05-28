import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css']
})
export class PostViewComponent implements OnInit {
  posts: any[];
  postSubscription = new Subscription();

  constructor(private postService: PostService) {}
  ngOnInit() {
    this.posts = this.postService.postSubject.subscribe((posts: any[]) => {
      this.posts = posts;
    });
    this.postService.emitPostSubject();
  }

  onLikeAll() {
    this.postService.giveMoreLike();
  }
  onDislikeAll() {
    this.postService.eraseLike();
  }
}
