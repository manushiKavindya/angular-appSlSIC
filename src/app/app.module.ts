import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FiveDComponent } from './components/fived/fived.component';
import { ClassComponent } from './components/class/class.component';
import { DivisionComponent } from './components/division/division.component';
import { GroupComponent } from './components/group/group.component';
import { SectionComponent } from './components/section/section.component';
import { UsersComponent } from './components/users/users.component';
import { ClassItemComponent } from './components/class-item/class-item.component';
import { GroupItemComponent } from './components/group-item/group-item.component';
import { DivItemComponent } from './components/div-item/div-item.component';
import { ScnItemComponent } from './components/scn-item/scn-item.component';

@NgModule({
  declarations: [
    AppComponent,
    FiveDComponent,
    ClassComponent,
    DivisionComponent,
    GroupComponent,
    SectionComponent,
    UsersComponent,
    ClassItemComponent,
    GroupItemComponent,
    DivItemComponent,
    ScnItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }