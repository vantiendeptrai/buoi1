import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'buoi1';
  myName: string = "lê văn Tiến";
  myage :number = 20;
  status: boolean = true;
}
