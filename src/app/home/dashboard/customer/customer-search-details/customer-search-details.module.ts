import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerSearchDetailsRoutingModule } from './customer-search-details-routing.module';
import { CustomerSearchDetailsComponent } from './customer-search-details.component';
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
import { CustomerPersonalDetailsComponent } from './customer-personal-details/customer-personal-details.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { ActivitiesComponent } from './activities/activities.component';
import { ClaimsComponent } from './claims/claims.component';
import { IntelligenceComponent } from './intelligence/intelligence.component';
import { LimitsCoverageComponent } from './limits-coverage/limits-coverage.component';
import { PolicyComponent } from './policy/policy.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@NgModule({
  declarations: [
    CustomerSearchDetailsComponent,
    CustomerPersonalDetailsComponent,
    CustomerListComponent,
    ActivitiesComponent,
    ClaimsComponent,
    IntelligenceComponent,
    LimitsCoverageComponent,
    PolicyComponent,
    TasksListComponent
  ],
  imports: [
    CommonModule,
    CustomerSearchDetailsRoutingModule, MatIconModule, MatDialogModule,MatTabsModule,MatButtonToggleModule,
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
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class CustomerSearchDetailsModule { }
