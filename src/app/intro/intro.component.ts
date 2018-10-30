import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
  title="Introduction"
  constructor(private router: Router, private playerService: PlayerService) { }
  
  players: FirebaseListObservable<any[]>;
  
  ngOnInit() {
    this.players = this.playerService.getPlayers();
  }

  playerSelected(selectedPlayer: Player) {
    this.router.navigate(['chapter1']);
  }
}
