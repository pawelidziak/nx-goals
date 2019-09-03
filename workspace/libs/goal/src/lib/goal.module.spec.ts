import { async, TestBed } from '@angular/core/testing';
import { GoalModule } from './goal.module';

describe('GoalModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [GoalModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(GoalModule).toBeDefined();
  });
});
