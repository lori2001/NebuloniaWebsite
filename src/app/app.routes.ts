import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Page Components
import { MainComponent } from './components/main/app.main.component';
import { NotFoundComponent } from './components/not-found/app.not-found.component';
import { ArchiveComponent } from './components/archive/app.archive.component';

const routes: Routes = [
    {path : 'main', component : MainComponent},
    {path : 'archive', component : ArchiveComponent},
    {path : 'not-found', component : NotFoundComponent},
    {path : '', redirectTo : '/main', pathMatch: 'full'}, // catches default URL
    {path: '**', redirectTo: '/not-found'} // catches wrong URL
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
