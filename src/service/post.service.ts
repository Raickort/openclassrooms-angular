import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable()
export class PostService {
  postSubject = new Subject<any[]>();

  private posts = [];

  constructor(private httpClient: HttpClient) {}

  emitPostSubject() {
    this.postSubject.next(this.posts.slice());
  }

  getPostById(id: number) {
    const post = this.posts.find(postObject => {
      return postObject.id === id;
    });
    return post;
  }

  giveMoreLike() {
    for (let post of this.posts) {
      post.like = true;
    }
    this.emitPostSubject();
  }

  eraseLike() {
    for (let post of this.posts) {
      post.like = false;
    }
    this.emitPostSubject();
  }

  likeOne(index: number) {
    this.posts[index].like = true;
    this.emitPostSubject();
  }

  dislikeOne(index: number) {
    this.posts[index].like = false;
    this.emitPostSubject();
  }

  addPost(title: string, content: string, like: boolean) {
    const postObject = {
      id: 0,
      title: '',
      content: '',
      like: false,
      createdAt: new Date()
    };
    postObject.title = title;
    postObject.content = content;
    postObject.like = like;
    postObject.id = this.posts[this.posts.length - 1].id + 1;
    this.posts.push(postObject);
    this.emitPostSubject();
  }

  saveAppareilsToServer() {
    this.httpClient
      .put(
        'https://angularclassrooms-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
        this.posts
      )
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        error => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  getPostsFromServeur() {
    this.httpClient
      .get<any[]>(
        'https://angularclassrooms-default-rtdb.europe-west1.firebasedatabase.app/posts.json'
      )
      .subscribe(
        response => {
          this.posts = response;
          this.emitPostSubject();
        },
        error => {
          console.log('Erreur de chargement !' + error);
        }
      );
  }
}
