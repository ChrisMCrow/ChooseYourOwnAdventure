import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Player } from './player.model';
import { PlayerService } from './player.service';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PlayerService]
})
export class AppComponent implements OnInit {
  title = 'app';

  players: FirebaseListObservable<any[]>;
  
  ngOnInit() {
    this.players = this.playerService.getPlayers();
  }
  
  
  //code not working because we don't know how to get data from the intro component
  public newPlayer: Player;
  constructor(private router: Router, private playerService: PlayerService) { }
  selectCharacter(player) {
    this.newPlayer = new Player(player.age, player.description, player.gender, player.name, player.points);
  }
}
