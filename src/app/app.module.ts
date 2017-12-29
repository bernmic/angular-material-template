import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatGridListModule, MatIconModule, MatListModule, MatMenuModule, MatSidenavModule, MatTableModule,
  MatToolbarModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatRadioModule,
  MatSortModule, MatDialogModule
} from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';

import { AppComponent } from './app.component';
import { TextComponent } from './text/text.component';
import { DataComponent } from './data/data.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsDialogComponent } from './settings-dialog/settings-dialog.component';


export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'text', component: TextComponent },
  { path: 'data', component: DataComponent },
  { path: 'profile', component: ProfileComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TextComponent,
    DataComponent,
    DashboardComponent,
    ProfileComponent,
    SettingsDialogComponent
  ],
  imports: [
    FormsModule,
    RouterModule.forRoot(routes),
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
    MatDialogModule
  ],
  entryComponents: [SettingsDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
