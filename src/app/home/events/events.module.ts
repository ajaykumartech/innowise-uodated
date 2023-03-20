import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullCalendarModule } from '@fullcalendar/angular';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgChartsModule } from 'ng2-charts';
import { ProfileComponent } from './profile/profile.component';
import { MyTaskComponent } from './my-task/my-task.component';
import { MyWorkflowComponent } from './my-workflow/my-workflow.component';
import { TaskDialogComponent } from './task-dialog/task-dialog.component';



@NgModule({
  declarations: [
    EventsComponent,
    ProfileComponent,
    MyTaskComponent,
    MyWorkflowComponent,
    TaskDialogComponent
  ],
  imports: [
    CommonModule,
    EventsRoutingModule, MatIconModule, MatDialogModule, MatDatepickerModule, MatNativeDateModule, MatInputModule,

    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    NgChartsModule,
    MatTableModule,
    MatTooltipModule,
    MatBadgeModule,
    MatPaginatorModule,
    MatNativeDateModule,
    FullCalendarModule 
  ]
})
export class EventsModule { }
