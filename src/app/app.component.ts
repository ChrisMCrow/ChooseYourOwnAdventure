import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router) { }
  title = 'app';

  selectCharacter(clickedCharacter){
    this.router.navigate(['players', clickedCharacter.$keys]);
  }
}
