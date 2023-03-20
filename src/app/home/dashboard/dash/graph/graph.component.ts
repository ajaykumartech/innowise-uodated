import { Component, HostListener, Input, ViewEncapsulation } from '@angular/core';
import { Chart, Colors, registerables } from 'chart.js';
import { UserenvironmentsService } from 'src/app/userenvironments.service';
Chart.register(...registerables);


@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})

export class GraphComponent {
  @Input() data: any;
  constructor(private userEnvironments: UserenvironmentsService) { }
  myChart: any
  list: any
  po = 0
  num = 0
  filter1 = ""
  filter2: any
  filter3 = ""
  localdata: any
  self = false
  label: any
  homeData: any
  dashboardata: any
  colors = ['rgba(0, 186, 52, 1)', 'rgba(249, 134, 0, 1)', 'rgba(0, 133, 255, 1)', 'rgb(153, 51, 255)', 'rgb(255, 204, 0)', 'rgb(204, 51, 0)', 'rgb(0, 77, 0)']
  datasets: any
  showDropDown3 = false
  showDropDown1 = false

  ngOnInit(): void {
    var token = localStorage.getItem('Token');
    this.userEnvironments.getDashboardDatabyID(this.data.Id, token).subscribe(response => {
      this.dashboardata = response;
      this.dataformat()
    })
    this.filter2 = this.data.Filter2Selected
    this.list = this.data.Filter2
    if (this.myChart != null)
      this.myChart.destroy();
  }

  @HostListener('window:resize', ['$event']) onWindowResize() {
    if (this.myChart != null) {
      this.myChart.destroy();
      this.chart()
    }
  }


  //Chat Function------------------------
  chart() {
    this.myChart = new Chart("myChart", {
      type: 'line',
      data: {
        labels: this.label,
        datasets: this.datasets
      },
      options: {
        responsive: true,
        interaction: {
          mode: 'index',
          intersect: false,
        },
        hover: {
          mode: 'index',
          intersect: false
        },
        plugins: {
          title: {
            display: true,
          },
          tooltip: {
            backgroundColor: "rgba(255,255,255)",
            titleColor: "black",
            bodySpacing: 5,
            callbacks: {
              label: function (context) {
                let label = context.dataset.label || '';
                if (label) {
                  label += ':     ';
                }
                if (context.parsed.y !== null) {
                  label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed.y);
                }
                return label;
              },
              labelTextColor: function (context) {

                return '#000000';
              },
              labelColor: function (context) {
                return {
                  borderColor: 'white',
                  backgroundColor: `${context.dataset.backgroundColor}`,
                };
              },
              title: function (context) {
                var month = context[0].label.split(";")[0];
                var year = context[0].label.split(";")[1];
                return month + " " + year
              }
            }
          },
          legend: {
            display: true,
            position: 'bottom',
            align: 'center',
            labels: {
              usePointStyle: true,
              pointStyle: 'circle',
              padding: 25
            },
          }
        },
        scales: {
          x: {
            grid: {
              display: false // only want the grid lines for one axis to show up
            },
            ticks: {
              font: {
                size: 15
              },
              callback: function (label: any) {
                let realLabel = this.getLabelForValue(label)
                var month = realLabel.split(";")[0];
                return month;
              }
            }
          },
          xAxis1: {
            type: "category",
            border: {
              display: false
            },
            grid: {
              drawOnChartArea: false,
              // only want the grid lines for one axis to show up
            },
            ticks: {
              font: {
                size: 17
              },
              color: "black",
              callback: function (label: any) {
                let realLabel = this.getLabelForValue(label)
                var month = realLabel.split(";")[0];
                var year = realLabel.split(";")[1];

                //console.log("reallabel",realLabel);

                if (month === "Jan" || month === "Aug") {
                  return year;
                }
                else {
                  return "";
                }
              }
            }
          }, y: {

            grid: {

              // only want the grid lines for one axis to show up
            },
            border: {
              display: false,
              dash: [6, 4],
            },
            beginAtZero: true,
            ticks: {
              callback: function (value, index, ticks) {
                return "$" + value
              }
            }

          },
        }
      },


    });
  }


  //DateFormat and Data--------------------------------------
  dataformat() {

    this.self = false
    this.homeData = [[]]
    this.datasets = []

    for (var k = 0, n = 0; k < this.filter2.length; k++) {
      this.num = this.dashboardata.length
      for (var m = 0; m < this.dashboardata.length; m++) {
        this.po = 0
        if (this.filter1 == "Self" || this.filter1 == "") {
          this.self = true
          this.po = m
          this.num = 1
        }
      }

      let d2 = {
        pointStyle: 'circle',
        pointRadius: 5,
        pointHoverRadius: 7,
        pointBackgroundColor: "",
        pointHoverBackgroundColor: "White",
        pointHoverBorderColor: "",
        label: "",
        borderColor: "",
        backgroundColor: "",
        borderWidth: 1.5,
        data: []
      }

      this.homeData = new Array(100)
      this.localdata = []

      for (var l = 0; l < this.num; l++, this.po++) {
        this.localdata = []
        this.label = []
        for (var i = 0; i < this.dashboardata[this.po][`${this.filter2[k]}`].length; i++) {
          for (var j = 0; j < this.dashboardata[this.po][`${this.filter2[k]}`][i].months.length; j++, n++) {
            var local1 = this.dashboardata[this.po][`${this.filter2[k]}`][i].months[j].monthName + ';' + this.dashboardata[0][`${this.data.Filter2Selected[k]}`][i].year
            this.label.push(local1)
            var sub1 = parseInt(this.dashboardata[this.po][`${this.filter2[k]}`][i].months[j].value.substring(1, this.dashboardata[0][`${this.data.Filter2Selected[k]}`][i].months[j].value.length))
            if (this.filter2[k] == "GL") {
              sub1 += 50
            }
            if (this.filter2[k] == "Flood") {
              sub1 += 70
            }
            if (this.filter2[k] == "Auto") {
              sub1 -= 50
            }
            this.localdata.push(sub1)
          }
        }
        if (this.self) {
          this.homeData = this.localdata
        }
        else {
          for (var a = 0; a < this.localdata.length; a++) {

            if (this.homeData[a] == undefined)
              this.homeData[a] = 0
            this.homeData[a] = this.localdata[a] + this.homeData[a]
          }
        }
      }
      d2.data = this.homeData
      this.datasets[k] = d2
      d2.label = this.filter2[k]
      d2.pointBackgroundColor = this.colors[k]
      d2.pointBackgroundColor = this.colors[k]
      d2.pointHoverBorderColor = this.colors[k]
      d2.borderColor = this.colors[k]
      d2.backgroundColor = this.colors[k]
    }
    if (this.myChart != null)
      this.myChart.destroy();
    this.chart()
  }

  getselectedValue1(event: any) {
    this.filter1 = event
    this.dataformat()
  }

  getselectedValue3(event: any) {
    this.filter3 = event.target.value
    localStorage.setItem('Daily/Weekly/Monthly/Yearly', event.target.value)
  }

  shareCheckedList(item: any[]) {
    this.filter2 = item
    this.dataformat()
  }


}