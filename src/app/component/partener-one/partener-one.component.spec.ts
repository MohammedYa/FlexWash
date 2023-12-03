import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartenerOneComponent } from './partener-one.component';

describe('PartenerOneComponent', () => {
  let component: PartenerOneComponent;
  let fixture: ComponentFixture<PartenerOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartenerOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartenerOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
