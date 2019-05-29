import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit, AfterViewInit {

  @ViewChild('myChart',  {read: ElementRef, static: true}) canvas: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    const ctx = this.canvas.nativeElement.getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ["New", "In Progress", "On Hold"],
        datasets: [{
          label: '# of Votes',
          data: [19, 12, 33],
          backgroundColor: [
            'rgba(54, 162, 235, 1)'
          ],
          borderWidth: 1,
          fill: false
        },{
          label: 'Age',
          data: [17.5, 22.9, 13.0],
          backgroundColor: [
            'rgba(255, 99, 132, 1)'
          ],
          borderWidth: 1,
          fill: false
        }]
      },
      options: {
        responsive: false,
        display: true
      }
    });
  }
}
