import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestplacesComponent } from './bestplaces.component';

describe('BestplacesComponent', () => {
  let component: BestplacesComponent;
  let fixture: ComponentFixture<BestplacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestplacesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BestplacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
