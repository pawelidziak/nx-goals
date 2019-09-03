import { async, TestBed } from '@angular/core/testing';
import { GoalListModule } from './goal-list.module';

describe('GoalListModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [GoalListModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(GoalListModule).toBeDefined();
  });
});
