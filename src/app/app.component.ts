import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Spring_7_Tasca';

  started:boolean=false

  toStart(){
    if (this.started) this.started=false
    else this.started=true
  }

}
