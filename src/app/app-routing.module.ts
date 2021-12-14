import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditsComponent } from './credits/credits.component';
import { AlertsComponent } from './events/alerts.component';

const routes: Routes = [
  { path: "alerts", component: AlertsComponent },
  { path: "credits", component: CreditsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
