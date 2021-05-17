import {Component} from '@angular/core';

export interface Post {
  title: string;
  text: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Post[] = [
    {title: 'Lorem ipsum dolor sit amet. Nam, similique.', text: 'Lorem ipsum dolor sit amet. Nam, similique.', id: 1},
    // {title: 'Lorem ipsum dolor sit amet. Nam, similique2.', text: 'Lorem ipsum dolor sit amet. Nam, similique2.', id: 1}
  ];

  updatePosts(post: Post) {
    this.posts.unshift(post);
  }
}
