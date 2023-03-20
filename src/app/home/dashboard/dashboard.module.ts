import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgChartsModule } from 'ng2-charts';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatBadgeModule} from '@angular/material/badge';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatTabsModule} from '@angular/material/tabs';
import { DashComponent } from './dash/dash.component';
import { SearchComponent } from './dash/search/search.component';
import { CommissionComponent } from './dash/commission/commission.component';
import { PoliciesComponent } from './dash/policies/policies.component';
import { TasksComponent } from './dash/tasks/tasks.component';
import { WorkflowsComponent } from './dash/workflows/workflows.component';
import { GraphComponent } from './dash/graph/graph.component';
import { FiltersComponent } from './dash/filters/filters.component';
import { DialogComponent } from './dialog/dialog.component';
import { ProfileComponent } from './dash/profile/profile.component';

@NgModule({
  declarations: [
    DashboardComponent,DashComponent,
    DialogComponent,
    SearchComponent,
    CommissionComponent,
    PoliciesComponent,
    TasksComponent,
    WorkflowsComponent,
    FiltersComponent,
    GraphComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule, MatIconModule, MatDialogModule,
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
    MatTabsModule,
    MatTooltipModule,
    MatBadgeModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class DashboardModule { }
