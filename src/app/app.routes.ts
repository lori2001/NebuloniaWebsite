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

const routes: Routes = [
    {path : 'main', component : MainComponent},
    {path : 'archive', component : ArchiveComponent},
    {path : 'points', component : PointsComponent},
    {path : 'creators', component : CreatorsComponent},
    {path : 'admin', component : AdminComponent},

    // EVENT
    {path : 'esports-event', component : EsportsEventComponent},

    // FALLBACKS
    {path : 'not-found', component : NotFoundComponent},
    {path : '', redirectTo : '/main', pathMatch: 'full'}, // catches default URL
    {path: '**', redirectTo: '/not-found'} // catches wrong URL
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
