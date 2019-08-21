import * as fromFiltro from './filter.action';


const estadoInicial: fromFiltro.filtrosValidos = 'todos';

export function FiltroReducer(state = estadoInicial,
                              action: fromFiltro.actiones ): fromFiltro.filtrosValidos {
    switch (action.type) {
      case fromFiltro.SET_FILTRO:
        return action.filtro;

      default:
        return state;
    }
  }
