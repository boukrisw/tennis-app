import { Player } from './../../model/player.model'
import { Component, OnInit } from '@angular/core'
import { PlayerService } from 'src/app/services/player.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  players: Player[]

  constructor(private playerService: PlayerService) {
    this.playerService.getPlayers().subscribe((players) => {
      this.players = players
    })
  }

  ngOnInit(): void {}
}
