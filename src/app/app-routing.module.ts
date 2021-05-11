import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FiveDComponent } from '../app/components/fived/fived.component';
import { ClassComponent } from '../app/components/class/class.component';
import { GroupComponent } from '../app/components/group/group.component';
import { DivisionComponent } from '../app/components/division/division.component';
import { SectionComponent } from '../app/components/section/section.component';
import { DashBoardComponent } from '../app/components/dash-board/dash-board.component';
import { UsersComponent } from '../app/components/users/users.component';


const routes: Routes = [
  {path: '', component: DashBoardComponent},
  {path: 'FiveD', component: FiveDComponent},
  {path: 'Class', component: ClassComponent},
  {path: 'Group', component: GroupComponent},
  {path: 'Division', component: DivisionComponent},
  {path: 'Section', component: SectionComponent},
  {path: 'LOGIN', component: UsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
