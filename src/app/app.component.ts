import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';

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

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
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
}
