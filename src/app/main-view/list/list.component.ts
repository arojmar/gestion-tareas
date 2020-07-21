import { Component, OnInit, Output } from '@angular/core';
import { Tareas } from 'src/models/models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {


  @Output() nuevaTarea: Tareas;

  constructor() { }

  ngOnInit(): void {
  }

  
}
