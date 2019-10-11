import { async, TestBed } from '@angular/core/testing';
import { AppNavModule } from './app-nav.module';

describe('AppNavModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppNavModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AppNavModule).toBeDefined();
  });
});
