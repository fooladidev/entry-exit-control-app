import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PeopleInsideTheBuildingComponent } from './pages/people-inside-the-building/people-inside-the-building.component';
import { ListOfLicensedPersonsComponent } from './pages/list-of-licensed-persons/list-of-licensed-persons.component';
import { DashboardService } from './pages/dashboard/shared/dashboard.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    DashboardComponent,
    PeopleInsideTheBuildingComponent,
    ListOfLicensedPersonsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DashboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
