import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PanellComponent } from './panell/panell.component';
import { InputButtonsComponent } from './input-buttons/input-buttons.component';
import { RouterModule, Routes } from '@angular/router';
import { ModalComponent } from './modal/modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PressupostListComponent } from './pressupost-list/pressupost-list.component';
import { QuotationFormComponent } from './quotation-form/quotation-form.component';
import { InputButtomsPagesComponent } from './input-buttoms-pages/input-buttoms-pages.component';
import { ModalPagesComponent } from './modal-pages/modal-pages.component';






const appRoutes:Routes=[
 
  // {
  //   path:'',
  //   component:AppComponent,
  //   pathMatch:'full'
  // },
  {
    path:'home',
    component:HomeComponent,
    pathMatch:'full'
  },
  {
    path:'home/:web/:seo/:google/:numPages/:numLang/:start',
    component:HomeComponent,
    pathMatch:'full'
  },
  {
    path:'**',
    redirectTo:''
  }

]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PanellComponent,
    InputButtonsComponent,
    ModalComponent,
    PressupostListComponent,
    QuotationFormComponent,
    InputButtomsPagesComponent,
    ModalPagesComponent
    
  ],
  imports: [
    BrowserModule,
    
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    NgbModule,
    
  ],
  exports:[
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
