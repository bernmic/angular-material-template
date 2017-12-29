import {Component, Input, OnInit} from '@angular/core';
import {isNullOrUndefined} from 'util';

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.scss']
})
export class DashboardCardComponent implements OnInit {

  @Input() title: string;
  @Input() subtitle: string;
  @Input() footer: string;

  constructor() { }

  ngOnInit() {
  }

  hasHeader(): boolean {
    return this.hasTitle() || this.hasSubtitle();
  }

  hasTitle(): boolean {
    return !isNullOrUndefined(this.title);
  }

  hasSubtitle(): boolean {
    return !isNullOrUndefined(this.subtitle);
  }

  hasFooter(): boolean {
    return !isNullOrUndefined(this.footer);
  }
}

@Component({
  selector: 'app-todo-dashboard-card',
  templateUrl: './todo-dashboard-card.component.html',
  styleUrls: ['./todo-dashboard-card.component.scss']
})
export class TodoDashboardCardComponent extends DashboardCardComponent implements OnInit {

  @Input() list: string;

  items: string[] = [];

  ngOnInit() {
    if (!isNullOrUndefined(this.list)) {
      this.items = this.list.split(",");
    }
  }
}
