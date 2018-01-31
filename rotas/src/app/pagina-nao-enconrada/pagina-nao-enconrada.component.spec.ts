import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaNaoEnconradaComponent } from './pagina-nao-enconrada.component';

describe('PaginaNaoEnconradaComponent', () => {
  let component: PaginaNaoEnconradaComponent;
  let fixture: ComponentFixture<PaginaNaoEnconradaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaNaoEnconradaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaNaoEnconradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
