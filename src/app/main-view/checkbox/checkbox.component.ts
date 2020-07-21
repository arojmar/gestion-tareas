import { Component, OnInit, Input } from '@angular/core';
import { Tareas } from '../../../models/models'

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  @Input() nTarea: Tareas;

  tareas: Tareas[] = [];

  constructor() { }

  ngOnInit(): void {
      this.cargarTareasIniciales();
  }

  cargarTareasIniciales(): void {
    this.tareas.push({
      tarea: 'Investigar Vue',
      tag: 'Tasks'
    });

    this.tareas.push({
      tarea: 'Estudiar Git',
      tag: 'Tasks'
    });
  }


}
