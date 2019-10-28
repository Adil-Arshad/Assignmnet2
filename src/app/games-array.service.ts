import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GamesArrayService {
  games = [
    { id: '3198', name: 'Call Of Duty' },
    { id: '3199', name: 'Need 4 Speed' },
    { id: '3200', name: 'San Andreas' },
    { id: '3203', name: 'Counter Strike' },
    { id: '3204', name: 'Project IGI' },
    { id: '3217', name: 'PUBG' }
  ];
  constructor() {}
    returnGamesList() {
      return this.games;
    }
    deleteGame(id) {
      this.games = this.games.filter(e => {
        return e.id !== id;
      });
    }
    get getGames() {
      return this.games;
    }
    getAllGames() {
      return this.games;
    }
    
}
