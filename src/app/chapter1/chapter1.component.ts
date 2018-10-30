import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-chapter1',
  templateUrl: './chapter1.component.html',
  styleUrls: ['./chapter1.component.css'],
  providers: [PlayerService]
})
export class Chapter1Component implements OnInit {
  title="Chapter 1";
  
  constructor() { }

  ngOnInit() {
  }

}
