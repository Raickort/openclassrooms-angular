export class PostService {
  posts = [
    {
      id: 1,
      title: "Harry Potter à l'école des sorciers",
      content:
        ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce hendrerit libero sit amet vehicula lobortis. Etiam nulla magna, commodo et ipsum ut, molestie elementum augue. Donec sagittis molestie ullamcorper. Nullam a urna id ligula scelerisque lobortis sed et nunc. Donec id erat mollis, aliquet ante non, faucibus mi. Pellentesque elit metus, molestie semper risus at, condimentum dignissim magna. In hac habitasse platea dictumst. Phasellus quis augue metus. Quisque pellentesque, ante in mollis ullamcorper, nulla est cursus ipsum, a ornare libero nibh non metus. Nam posuere venenatis velit, quis volutpat ligula laoreet id. Vivamus consequat, mi at commodo dictum, ligula ligula efficitur nulla, eu pulvinar urna est ut neque. Cras at rhoncus ex. Duis varius, odio ut faucibus tincidunt, nulla urna varius magna, vitae tempor arcu magna in dui. Curabitur eu suscipit dui',
      like: true,
      createdAt: new Date('2021-05-28')
    },
    {
      id: 2,
      title: 'Harry Potter et la chambre des secrets',
      content:
        'Sed maximus sit amet ex volutpat cursus. Curabitur eget purus aliquam justo tristique feugiat id quis erat. Suspendisse congue eros id erat egestas egestas. Mauris at diam ante. Fusce euismod a nunc et cursus. Ut sit amet erat pellentesque, pretium eros eget, viverra erat. Nulla quis volutpat ante. Aliquam lobortis sollicitudin ornare. Maecenas ullamcorper, magna venenatis rhoncus rutrum, velit elit ultrices purus, ut m',
      like: true,
      createdAt: new Date('2021-03-20')
    },
    {
      id: 3,
      title: "Harry Potter et le prisonnier d'Azkaban",
      content:
        'raesent gravida nibh sed ornare rutrum. Fusce nisi sem, pharetra in est sollicitudin, malesuada mattis magna. Sed ultricies at ipsum vitae dictum. Nam facilisis orci eget sapien tristique, at sagittis augue semper. Vestibulum vel cursus odio. Cras imperdiet volutpat eros, vitae euismod lacus tristique eu. Fusce quis lectus eu mi pharetra dictum. Etiam ullamcorper justo non convallis viverra. Quisque fermentum felis auctor sollicitudin dignissim. Proin in ipsum hendrerit, vehicula nibh eu, posuere lorem. Sed imperdiet aliquam feugiat. Aliquam dignissim lectus ut orci vestibulum, congue consequat orci efficitur. ',
      like: false,
      createdAt: new Date('2021-01-01')
    },
    {
      id: 4,
      title: 'Harry Potter et la coupe de feu',
      content:
        'Ut aliquet ut ex ut rutrum. Fusce vel augue eget nisl congue sollicitudin. In hac habitasse platea dictumst. Ut interdum porttitor sodales. Aenean eget est nisl. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus semper orci at ante porta, ac interdum lectus viverra. Suspendisse potenti. Cras nibh libero, imperdiet pellentesque tincidunt non, consequat in purus. Morbi pellentesque purus non consectetur blandit. ',
      like: true,
      createdAt: new Date('2020-10-13')
    }
  ];

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
  }

  eraseLike() {
    for (let post of this.posts) {
      post.like = false;
    }
  }

  likeOne(index: number) {
    this.posts[index].like = true;
  }

  dislikeOne(index: number) {
    this.posts[index].like = false;
  }
}
