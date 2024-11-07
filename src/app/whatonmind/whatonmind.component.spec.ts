import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatonmindComponent } from './whatonmind.component';

describe('WhatonmindComponent', () => {
  let component: WhatonmindComponent;
  let fixture: ComponentFixture<WhatonmindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatonmindComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhatonmindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
