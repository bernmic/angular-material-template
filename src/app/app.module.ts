import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatGridListModule, MatIconModule, MatListModule, MatMenuModule, MatSidenavModule, MatTableModule,
  MatToolbarModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatRadioModule,
  MatSortModule
} from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';

import { AppComponent } from './app.component';
import { TextComponent } from './text/text.component';
import { DataComponent } from './data/data.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';


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
    ProfileComponent
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
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
