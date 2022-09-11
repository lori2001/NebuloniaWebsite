import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Page Components
import { MainComponent } from './components/page-main/app.main.component';
import { NotFoundComponent } from './components/page-not-found/app.not-found.component';
import { ArchiveComponent } from './components/page-archive/app.archive.component';
import { PointsComponent } from './components/page-points/app.points.component';
import { CreatorsComponent } from './components/page-creators/app.creators.component';
import { AdminComponent } from './components/page-admin/app.admin.component';
import { EsportsEventComponent } from './components/page-esports-event/app.esports-event.component';
import { WorkInProgressComponent } from './components/comp-work-in-progress/app.work-in-progress.component';
import { LanguageComponent } from './app.language.component';

const routes: Routes = [
  { path: 'admin', redirectTo: 'hu/admin', pathMatch: 'full' }, // for convenience

  {
    path: ':lang',
    component: LanguageComponent,
    children: [
      { path: 'main', component: MainComponent },
      { path: 'archive', component: ArchiveComponent },
      { path: 'points', component: PointsComponent },
      { path: 'creators', component: CreatorsComponent },
      { path: 'admin', component: AdminComponent },

      // EVENT
      { path: 'esports-event', component: EsportsEventComponent },

      // fallback for components under construction
      { path: 'work-in-progress', component: WorkInProgressComponent },

      // FALLBACKS
      { path: 'not-found', component: NotFoundComponent },

      { path: '', redirectTo: 'main', pathMatch: 'full' },
      { path: '**', redirectTo: 'not-found', pathMatch: 'full' },
    ],
  },

  { path: '', redirectTo: 'hu/main', pathMatch: 'full' }, // catches default URL
  { path: '**', redirectTo: 'hu/not-found', pathMatch: 'full' }, // catches wrong URL*/
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
