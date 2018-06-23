import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'third';
  str:string='Inside function'
  str2:string='Marvellous infosystem';
  fun() :var
  {
    return 'lenght is '+this.str.length+', string in uppercase is '+this.str.toUpperCase();
  }
  gun() :var
  {
    this.str2='button clicked';
  }

}
