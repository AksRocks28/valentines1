import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MemoryLaneComponent } from './memory-lane.component';

describe('MemoryLaneComponent', () => {
  let component: MemoryLaneComponent;
  let fixture: ComponentFixture<MemoryLaneComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [MemoryLaneComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MemoryLaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
