import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Post} from '../app.component';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  @Output() public onAdd: EventEmitter<Post> = new EventEmitter<Post>();
  @ViewChild('titleInput', {static: false}) public inputRef: ElementRef;
  public title = '';
  public text = '';

  constructor() {
  }

  public ngOnInit(): void {
  }

  public addPost(): void {
    if (this.title.trim() && this.text.trim()) {
      const post: Post = {
        title: this.title,
        text: this.text
      };
      this.onAdd.emit(post);

      this.title = this.text = '';
    }
  }

  public focusTitle(): void {
    this.inputRef.nativeElement.focus();
  }
}

