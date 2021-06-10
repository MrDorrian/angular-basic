import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {delay} from 'rxjs/operators';

export interface Todo {
  completed: boolean;
  title: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  todos: Todo[] = [];
  todoTitle = '';
  loading = false;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  addTodo(): void {
    if (!this.todoTitle.trim()) {
      return;
    }

    const newTodo: Todo = {
      title: this.todoTitle,
      completed: false,
    };
    this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos', newTodo)
      .subscribe(todo => {
        this.todos.push(todo);
        this.todoTitle = '';
      });
  }

  fetchTodos(): void {
    this.loading = true;
    this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=2')
      .pipe(delay(1500))
      .subscribe(response => {
        this.todos = response;
        this.loading = false;
      });
  }

  removeTodo(id: number) {
    this.http.delete(`https://jsonplaceholder.typicode.com/todos/` + id)
      .subscribe(res => {
        this.todos = this.todos.filter(t => t.id !== id);
      });
  }
}
