import { Player } from './../model/player.model'
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Stats } from '../model/stats.model'

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  readonly URL = 'https://tennis-microservice.herokuapp.com/api/player/'

  /**
   * Constructeur
   * @param {HttpClient} http Service d'exécution de requête http
   */
  constructor(public http: HttpClient) {}

  getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(`${this.URL}all`)
  }

  getPlayerById(id: number): Observable<Player> {
    return this.http.get<Player>(`${this.URL}${id}`)
  }

  getStats(): Observable<Stats> {
    return this.http.get<Stats>(`${this.URL}statistics`)
  }
}
