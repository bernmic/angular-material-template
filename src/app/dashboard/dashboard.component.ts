import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  numCols(): number {
    const width = window.innerWidth;
    if ( width < 768) {
      return 1;
    }
    if ( width < 992) {
      return 2;
    }
    if ( width < 1200) {
      return 3;
    }
    return 4;
  }
}
