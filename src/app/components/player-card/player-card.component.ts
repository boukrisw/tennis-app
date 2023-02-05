import { Player } from './../../model/player.model'
import { Component, Input, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.css'],
})
export class PlayerCardComponent implements OnInit {
  @Input() player: Player
  constructor(private router: Router) {}

  ngOnInit(): void {}

  showDetails() {
    this.router.navigate(['/details', this.player.id])
  }
}
