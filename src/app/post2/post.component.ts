import {Component} from '@angular/core';

@Component({
  selector: './app-post2',
  template: `
    <div class="post2">
      <h2>Hello Post 2</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, sunt.</p>
    </div>`,
  styles: [`
    .post2 {
      padding: 5rem;
      border: 2px solid black;
    }

    h2 {
      font-size: 3em;
    }
  `]
})
export class Post2Component {
}
