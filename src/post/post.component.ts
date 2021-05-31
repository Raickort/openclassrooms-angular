import { Component, Injectable, Input, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent implements OnInit {
  @Input() postTitle: String;
  @Input() postContent: String;
  @Input() postLike: boolean;
  @Input() postCreatedAt: Date;
  @Input() indexOfPost: number;
  @Input() id: number;

  constructor(private postService: PostService) {}

  ngOnInit() {}

  onLike() {
    this.postService.likeOne(this.indexOfPost);
  }

  onDislike() {
    this.postService.dislikeOne(this.indexOfPost);
  }

  on;
}
