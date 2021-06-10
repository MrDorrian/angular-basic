import {Component, OnInit} from '@angular/core';
import {Todo, TodosService} from './tofos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  todos: Todo[] = [];
  todoTitle = '';
  loading = false;

  constructor(private todosService: TodosService) {
  }

  ngOnInit(): void {
  }

  addTodo(): void {
    if (!this.todoTitle.trim()) {
      return;
    }

    this.todosService.addTodo({
      title: this.todoTitle,
      completed: false,
    }).subscribe(todo => {
      this.todos.push(todo);
      this.todoTitle = '';
    });
  }

  fetchTodos(): void {
    this.loading = true;
    this.todosService.fetchTodos()
      .subscribe(response => {
        this.todos = response;
        this.loading = false;
      });
  }

  removeTodo(id: number): void {
    this.todosService.removeTodo(id)
      .subscribe(res => {
        this.todos = this.todos.filter(t => t.id !== id);
      });
  }

  completeTodo(id: number) {
    this.todosService.completeTodo(id).subscribe(todo => {
      this.todos.find(t => t.id = todo.id).completed = true;
    });
  }

}
