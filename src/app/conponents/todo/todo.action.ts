import { Action } from '@ngrx/store';

export const AGREGAR = '[TODO] Agregar';
export const EDITAR = '[TODO] Editar';
export const ELIMINAR = '[TODO] Eliminar';
export const TOGGLE = '[TODO] Toggle';
export const TOGGLE_ALL = '[TODO] Toggle all';
export const TOGGLE_CLEAN_ALL = '[TODO] Toggle clean all';

export class AgregarAction implements Action {
  readonly type = AGREGAR;
  constructor(public texto: string) { }
}

export class EditarAction implements Action {
  readonly type = EDITAR;
  constructor(public id: number, public texto: string) { }
}

export class EliminarAction implements Action {
  readonly type = ELIMINAR;
  constructor(public id: number) { }
}

export class ToggleAction implements Action {
  readonly type = TOGGLE;
  constructor(public id: number) {  }
}

export class ToggleAllAction implements Action {
  readonly type = TOGGLE_ALL;
  constructor(public completado: boolean) {  }
}

export class ToggleCleanAllAction implements Action {
  readonly type = TOGGLE_CLEAN_ALL;
}
export type Acciones = AgregarAction |
                       EditarAction |
                       EliminarAction |
                       ToggleAction |
                       ToggleAllAction |
                       ToggleCleanAllAction;
