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
  recherche: string = ''

  constructor(private playerService: PlayerService) {
    this.playerService.getPlayers().subscribe((players) => {
      this.players = players
    })
  }

  ngOnInit(): void {}

  search(recherche: string) {
    this.recherche = recherche
    this.playerService.getPlayers().subscribe((players) => {
      this.players = players.filter((player) => {
        return (
          player.firstname.toLowerCase().includes(recherche) ||
          player.lastname.toLowerCase().includes(recherche) ||
          recherche === ''
        )
      })
    })
  }
}
