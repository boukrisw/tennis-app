import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Player } from 'src/app/model/player.model'
import { PlayerService } from 'src/app/services/player.service'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  player: Player

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private playerService: PlayerService,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.playerService.getPlayerById(params['id']).subscribe((player) => {
        this.player = player
      })
    })
  }
}
