import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  ocultar: boolean;
  @Output() logeado = new EventEmitter<boolean>(false);

  constructor() { 
    this.ocultar = false;
  }

  ngOnInit(): void {
        
  }

  ocultarForm(){
    this.ocultar =!this.ocultar;
    this.logeado.emit(!this.ocultar);
  }

}
