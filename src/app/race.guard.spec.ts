import { TestBed, async, inject } from '@angular/core/testing';

import { RaceGuard } from './race.guard';

describe('RaceGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RaceGuard]
    });
  });

  it('should ...', inject([RaceGuard], (guard: RaceGuard) => {
    expect(guard).toBeTruthy();
  }));
});
