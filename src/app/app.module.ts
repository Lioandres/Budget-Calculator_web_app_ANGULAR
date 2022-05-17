import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PanellComponent } from './panell/panell.component';
import { InputButtonsComponent } from './input-buttons/input-buttons.component';
import { RouterModule, Routes } from '@angular/router';


const appRoutes:Routes=[
 
 

  {
    path:'home',
    component:HomeComponent,
    pathMatch:'full'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PanellComponent,
    InputButtonsComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports:[
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
