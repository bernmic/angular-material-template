import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LayoutModule } from '@angular/cdk/layout';

import { AppComponent } from './app.component';
import { TextComponent } from './text/text.component';
import { DataComponent } from './data/data.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsDialogComponent } from './settings-dialog/settings-dialog.component';
import { DashboardCardComponent, TodoDashboardCardComponent } from './dashboard/dashboard-card.component';
import { ChartComponent } from './chart/chart.component';


export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'text', component: TextComponent },
  { path: 'data', component: DataComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'chart', component: ChartComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        TextComponent,
        DataComponent,
        DashboardComponent,
        ProfileComponent,
        SettingsDialogComponent,
        DashboardCardComponent,
        TodoDashboardCardComponent,
        ChartComponent
    ],
    imports: [
        FormsModule,
        RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
        BrowserModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        MatButtonModule,
        LayoutModule,
        MatSidenavModule,
        MatListModule,
        MatTableModule,
        MatSortModule,
        MatGridListModule,
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatRadioModule,
        MatDialogModule,
        MatCardModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
