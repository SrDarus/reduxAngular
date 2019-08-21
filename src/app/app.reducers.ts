import { Todo } from './conponents/todo/model/todo.model';
import { ActionReducerMap } from '@ngrx/store';
import { todoReducer } from './conponents/todo/todo.reducer';
import * as fromTodo from './conponents/todo/todo.reducer';
import * as fromFilter from './conponents/filter/filter.reducer';
import * as fromFilterValid from './conponents/filter/filter.action';

export interface AppState {
  todos: Todo[];
  filtros: fromFilterValid.filtrosValidos;
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: fromTodo.todoReducer,
  filtros: fromFilter.FiltroReducer
}


