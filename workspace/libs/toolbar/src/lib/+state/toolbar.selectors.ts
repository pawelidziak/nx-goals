import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TOOLBAR_FEATURE_KEY, NgrxToolbar } from './toolbar.reducer';

export const getNgrxToolbarState = createFeatureSelector<NgrxToolbar>(
  TOOLBAR_FEATURE_KEY
);

export const getNavLinks = createSelector(
  getNgrxToolbarState,
  (state: NgrxToolbar) => state.navLinks
);
