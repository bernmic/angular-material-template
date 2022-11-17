import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {Router} from '@angular/router';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import {SettingsDialogComponent} from './settings-dialog/settings-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy{

  fillerNav = Array(50).fill(0).map((_, i) => `Nav Item ${i + 1}`);

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  theme = 'indigo-pink-light';

  constructor(private router: Router, public dialog: MatDialog, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  currentTheme() {
    return {[this.theme]: true};
  }

  setCurrentTheme(theme: string) {
    this.theme = theme;
  }

  openSettingsDialog() {
    const dialogRef = this.dialog.open(SettingsDialogComponent, {
      width: '400px',
      data: { fullname: 'Michael Bernards', email: 'michael.bernards@mail.de', birthday: '9/22/1963', gender: 'male' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }
}
