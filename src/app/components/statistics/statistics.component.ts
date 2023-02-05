import { Stats } from './../../model/stats.model'
import { Component, OnInit } from '@angular/core'
import { PlayerService } from 'src/app/services/player.service'

@Component({
  selector: 'players-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css'],
})
export class StatisticsComponent implements OnInit {
  statistics: Stats

  constructor(private playerService: PlayerService) {}

  ngOnInit(): void {
    this.playerService.getStats().subscribe((stats) => {
      this.statistics = stats
    })
  }
}
