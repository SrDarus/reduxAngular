import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../model/todo.model';
import { FormControl, Validators } from '@angular/forms';
// redux
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import * as fromTodo from '../todo.action';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @ViewChild('txtInputFisico', {static: false}) txtInputFisico: ElementRef;

  chbTodo: FormControl;
  txtInput: FormControl;

  editando: boolean;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {

    this.chbTodo = new FormControl(this.todo.completado);
    this.chbTodo.valueChanges
      .subscribe( () => {
        const action = new fromTodo.ToggleAction(this.todo.id);
        this.store.dispatch( action );
      });
    this.txtInput = new FormControl(this.todo.texto, Validators.required);
  }

  editar() {

    this.editando = true;
    setTimeout(() => {
      this.txtInputFisico.nativeElement.select();
    }, 1);
  }

  terminarEdicion() {
    this.editando = false;
    if (this.txtInput.invalid) {
      return;
    }
    if (this.txtInput.value === this.todo.texto) {
      return;
    }
    const action = new fromTodo.EditarAction(this.todo.id, this.txtInput.value);
    this.store.dispatch( action );
  }

  eliminarTodo() {
    const action = new fromTodo.EliminarAction(this.todo.id);
    this.store.dispatch( action );
  }

}
