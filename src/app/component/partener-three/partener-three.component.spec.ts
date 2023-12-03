import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartenerThreeComponent } from './partener-three.component';

describe('PartenerThreeComponent', () => {
  let component: PartenerThreeComponent;
  let fixture: ComponentFixture<PartenerThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartenerThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartenerThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
