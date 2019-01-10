import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Page Components
import { MainComponent } from './components/main/app.main.component';
import { NotFoundComponent } from './components/not-found/app.not-found.component';

const routes: Routes = [
    {path : 'main', component : MainComponent},
    {path : 'not-found', component : NotFoundComponent},
    {path : '', redirectTo : '/main', pathMatch: 'full'}, // catches default URL
    {path: '**', redirectTo: '/not-found'}, // catches wrong URL
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
