import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FiveDComponent } from './components/fived/fived.component';
import { ClassComponent } from './components/class/class.component';
import { GroupComponent } from './components/group/group.component';
import { DivisionComponent } from './components/division/division.component';
import { SectionComponent } from './components/section/section.component';
import { UsersComponent } from './components/users/users.component';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    FiveDComponent,
    UsersComponent,
    DashBoardComponent,
    ClassComponent,
    GroupComponent,
    DivisionComponent,
    SectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }