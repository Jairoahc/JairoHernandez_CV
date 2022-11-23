import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerdescComponent } from './bannerdesc.component';

describe('BannerdescComponent', () => {
  let component: BannerdescComponent;
  let fixture: ComponentFixture<BannerdescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerdescComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerdescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
