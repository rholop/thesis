import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskListContainerComponent } from './task-list-container/task-list-container.component';
import { TaskMakerComponent } from './task-maker/task-maker.component';
import { TaskManualComponent } from './task-manual/task-manual.component';
import { TaskHelperComponent } from './task-helper/task-helper.component';
import { ListExporterComponent } from './list-exporter/list-exporter.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskListContainerComponent,
    TaskMakerComponent,
    TaskManualComponent,
    TaskHelperComponent,
    ListExporterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
