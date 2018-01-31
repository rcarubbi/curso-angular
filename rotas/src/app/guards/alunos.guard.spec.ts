import { TestBed, async, inject } from '@angular/core/testing';

import { AlunosGuard } from './alunos.guard';

describe('AlunosGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlunosGuard]
    });
  });

  it('should ...', inject([AlunosGuard], (guard: AlunosGuard) => {
    expect(guard).toBeTruthy();
  }));
});
