import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { PlayerCardComponent } from './components/player-card/player-card.component'
import { HomeComponent } from './pages/home//home.component'
import { DetailsComponent } from './pages/details/details.component'
import { HttpClientModule } from '@angular/common/http'
import { StatisticsComponent } from './components/statistics/statistics.component'
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    PlayerCardComponent,
    StatisticsComponent,
    HomeComponent,
    DetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
