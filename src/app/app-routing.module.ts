import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FiveDComponent } from '../app/components/fived/fived.component';

const routes: Routes = [
  {path: 'FiveD', component: FiveDComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
