import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../todo/model/todo.model';

import * as fromFiltros from './filter.action';

@Pipe({
  name: 'filtroTodo'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filtro: fromFiltros.filtrosValidos): any {

    switch (filtro) {
      case 'completados':
        return todos.filter( t => t.completado );

      case 'pendientes':
        return todos.filter( t => !t.completado );

      default:
        return todos;
    }
  }

}
