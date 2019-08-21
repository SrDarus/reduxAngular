import * as fromTodo from './todo.action';
import { Todo } from './model/todo.model';

const todo1 = new Todo('tanos');
const todo2 = new Todo('tor');

todo1.completado = true;

const estadoInicial: Todo[] = [todo1, todo2];

export function todoReducer(state= estadoInicial, action: fromTodo.Acciones): Todo[] {

  console.log(action.type);
  switch ( action.type ) {

    case fromTodo.AGREGAR:
      const todoAgregar = new Todo( action.texto);
      return [...state, todoAgregar];

    case fromTodo.EDITAR:
      return state.map(state => {
        if ( state.id === action.id) {
          return {
            ...state,
            texto: action.texto
          };
        } else {
          return state;
        }

      });

    case fromTodo.TOGGLE:
      return state.map(state => {
        if (state.id === action.id) {
          return {
            ...state,
            completado: !state.completado
          };
        } else {
          return state;
        }
      });

    case fromTodo.TOGGLE_ALL:
      return state.map(s => {
        return {
          ...s,
          completado: action.completado
        };
      });

    case fromTodo.TOGGLE_CLEAN_ALL:
      return state.filter( t => !t.completado);

    case fromTodo.ELIMINAR:
      return state.filter( s => s.id !== action.id);



    default:
      return state;
  }
}
