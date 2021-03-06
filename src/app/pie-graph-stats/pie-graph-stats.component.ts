import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-graph-stats',
  templateUrl: './pie-graph-stats.component.html',
  styleUrls: ['./pie-graph-stats.component.css', '../../../node_modules/nvd3/build/nv.d3.css']
})
export class PieGraphStatsComponent implements OnInit {


  options;
  data;
  ngOnInit() {
    this.options = {
      chart: {
        type: 'pieChart',
        height: 450,
        donut: true,
        x: function (d) { return d.key; },
        y: function (d) { return d.y; },
        showLabels: true,
        pie: {
          startAngle: function (d) { return d.startAngle / 2 - Math.PI / 2 },
          endAngle: function (d) { return d.endAngle / 2 - Math.PI / 2 }
        },
        duration: 500,
        title: 'Types of Services Taken',
        legend: {
          margin: {
            top: 5,
            right: 140,
            bottom: 5,
            left: 0
          }
        }
      }
    }
    this.data = [
      {
        key: "One",
        y: 5
      },
      {
        key: "Two",
        y: 2
      },
      {
        key: "Three",
        y: 9
      }
    ]
  }



}
