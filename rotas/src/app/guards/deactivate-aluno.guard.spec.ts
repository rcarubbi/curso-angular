import { TestBed, async, inject } from '@angular/core/testing';

import { DeactivateAlunoGuard } from './deactivate-aluno.guard';

describe('DeactivateAlunoGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeactivateAlunoGuard]
    });
  });

  it('should ...', inject([DeactivateAlunoGuard], (guard: DeactivateAlunoGuard) => {
    expect(guard).toBeTruthy();
  }));
});
