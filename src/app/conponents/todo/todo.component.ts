import { Component, OnInit } from '@angular/core';
// redux
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';

import * as fromTodo from './todo.action';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

    completado = false;
  constructor( private store: Store<AppState>) { }

  ngOnInit() {
  }

  cambiarTodo() {
    this.completado = !this.completado;
    const action = new fromTodo.ToggleAllAction(this.completado);
    this.store.dispatch( action );
  }
}
