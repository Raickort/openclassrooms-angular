import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {
  postTitle: string;
  postContent: string;
  postLike: boolean;
  postCreatedAt: Date;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.postTitle = this.postService.getPostById(+id).title;
    this.postContent = this.postService.getPostById(+id).content;
    this.postLike = this.postService.getPostById(+id).like;
    this.postCreatedAt = this.postService.getPostById(+id).createdAt;
  }
}
