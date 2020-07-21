import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
 
 
  visible: boolean;

  constructor() {

  }

  ngOnInit(): void {
    this.visible = true;
    console.log("aqui el valor de visible es " + this.visible);   
  }

  logeado(vis: boolean) {
    console.log("aqui el valor de logeado es" + vis);
    return this.visible = vis;
  }

}
