import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const appRoutes: Routes = [
    // { path: '**', redirectTo: 'goals', pathMatch: 'full' },
    { path: 'goals', loadChildren: () => import('@workspace/goal-list').then(m => m.GoalListModule) } ,
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabled',
    //   useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
