import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  defaultLike = 1;

  constructor(private postService: PostService, private router: Router) {}

  ngOnInit() {}

  onSubmit(form: NgForm) {
    const title = form.value['title'];
    const content = form.value['content'];
    const like = form.value['like'] == '0' ? false : true;

    this.postService.addPost(title, content, like);
    this.router.navigate(['/posts']);
  }
}
