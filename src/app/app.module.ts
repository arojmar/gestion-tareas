import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainViewComponent } from './main-view/main-view.component';
<<<<<<< HEAD
import { ListComponent } from './main-view/list/list.component';
=======
import { CheckboxComponent } from './main-view/checkbox/checkbox.component';
>>>>>>> main-view/checkbox

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainViewComponent,
<<<<<<< HEAD
    ListComponent
=======
    CheckboxComponent
>>>>>>> main-view/checkbox
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
