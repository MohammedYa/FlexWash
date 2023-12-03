import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartenerTwoComponent } from './partener-two.component';

describe('PartenerTwoComponent', () => {
  let component: PartenerTwoComponent;
  let fixture: ComponentFixture<PartenerTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartenerTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartenerTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
