import { Component, OnInit } from '@angular/core';

import * as fromFiltros from '../../filter/filter.action';
import * as fromTodos from '../../todo/todo.action';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { Todo } from '../model/todo.model';
@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  pendientes: number;

  filtrosValidos: fromFiltros.filtrosValidos[] = ['todos', 'completados', 'pendientes'];
  filtroActual: fromFiltros.filtrosValidos;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe(state => {
      this.contarPendientes(state.todos);
      this.filtroActual = state.filtros;
    });
  }

  cambiarFiltro(filtro: fromFiltros.filtrosValidos) {
    const action = new fromFiltros.SetFiltroAction(filtro);
    this.store.dispatch( action );
  }

  contarPendientes(todos: Todo []) {
    this.pendientes = todos.filter(todo => !todo.completado).length;
  }

  despejarCompletados() {
    const action = new fromTodos.ToggleCleanAllAction();
    this.store.dispatch(action);
  }

}
