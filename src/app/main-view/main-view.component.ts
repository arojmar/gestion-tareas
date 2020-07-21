import { Component, OnInit } from '@angular/core';
import { Tareas } from 'src/models/models';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  newTarea: Tareas;

  constructor() { }

  ngOnInit(): void {
  }

  nuevaTarea(valor: Tareas): void {
    this.newTarea = valor;
  }

}
