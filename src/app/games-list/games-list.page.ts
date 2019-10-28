import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GamesArrayService } from '../games-array.service';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.page.html',
  styleUrls: ['./games-list.page.scss'],
})
export class GamesListPage implements OnInit {

  constructor(
    private router: Router,
    private gamesArrayService: GamesArrayService
    ) {}

    games = [];

  ngOnInit() {
    console.log('nothing on init');
  }
  changeUrl(user) {
    const id = user.id.substring(0, 4);
    const url = `games-list/${id}`;

    this.router.navigateByUrl(url);

    // or

    // this.router.navigate([url]);
  }

  ionViewDidEnter() {
    console.log('view Enter');
    this.games = this.gamesArrayService.returnGamesList();
  }

}
