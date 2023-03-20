import { Component, Input } from '@angular/core';
import { UserenvironmentsService } from 'src/app/userenvironments.service';

@Component({
  selector: 'app-commission',
  templateUrl: './commission.component.html',
  styleUrls: ['./commission.component.css']
})
export class CommissionComponent {
  commisionIdData: any;
  summary: any;
  sum = 0;
  sum1 = 0;
  growth: any;
  growthtype: any;
  symbol: any
  @Input() data: any;

  constructor(private userEnvironments: UserenvironmentsService) { }

  ngOnInit(): void {
    var token = localStorage.getItem('Token');
    this.userEnvironments.commissionIdSummary(this.data.Id, token).subscribe(response => {
      this.commisionIdData = response
      for (var i = 0; i < this.commisionIdData.length; i++) {
        if (this.commisionIdData[i].UserId == '{USER_SELF}') {
          this.summary = this.commisionIdData[i].Summary;
          this.growth = this.commisionIdData[i].Growth;
          this.symbol = this.commisionIdData[i].Growth.charAt(0);
          this.growthtype = this.commisionIdData[i].GrowthType;
          break;
        }
        else {
          for (var i = 0; i < this.commisionIdData.length; i++) {
            this.sum = parseInt(this.commisionIdData[i].Summary.substr(1))
            this.summary = this.summary + this.sum;
            this.sum1 = parseInt(this.commisionIdData[i].Growth.slice(0, -1))
            this.growth = this.growth + this.sum1;
          }
          this.growth = (this.growth) / this.commisionIdData.length;
          this.growthtype = this.commisionIdData[i].GrowthType
        }
      }
    }
    )
  }

  getArrow(symbol: any) {
    if (symbol == '-')
      return false;
    else
      return true;
  }

}