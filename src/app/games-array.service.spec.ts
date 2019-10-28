import { TestBed } from '@angular/core/testing';

import { GamesArrayService } from './games-array.service';

describe('GamesArrayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GamesArrayService = TestBed.get(GamesArrayService);
    expect(service).toBeTruthy();
  });
});
