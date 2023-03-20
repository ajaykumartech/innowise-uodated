import { Component, Input } from '@angular/core';
import { UserenvironmentsService } from 'src/app/userenvironments.service';

@Component({
  selector: 'app-policies',
  templateUrl: './policies.component.html',
  styleUrls: ['./policies.component.css']
})
export class PoliciesComponent {

  @Input() data: any;
  policyIdData: any;
  summary = 0;
  growth = 0;
  categorydata: any;
  sum1 = 0;
  billed = 0;
  due = 0;
  symbol: any;
  growthtype: any;
  schema: any;

  constructor(private userEnvironments: UserenvironmentsService) { }

  ngOnInit(): void {
    var token = localStorage.getItem('Token');
    this.userEnvironments.policyIdSummary(this.data.Id, token).subscribe(response => {
      this.policyIdData = response
      for (var i = 0; i < this.policyIdData.length; i++) {
        if (this.policyIdData[i].UserId == '{USER_SELF}') {
          this.summary = this.policyIdData[i].Summary;
          this.growth = this.policyIdData[i].Growth;
          this.symbol = this.policyIdData[i].Growth.charAt(0)
          this.growthtype = this.policyIdData[i].GrowthType
          this.schema = this.data.InfoCategory;
          this.categorydata = this.policyIdData[i].InfoCategoryData
          break;
        }
        else {
          this.summary = this.summary + parseInt(this.policyIdData[i].Summary);
          this.growth = this.growth + this.sum1;
          this.billed = this.billed + parseInt(this.policyIdData[i].InfoCategoryData[0])
          this.due = this.due + parseInt(this.policyIdData[i].InfoCategoryData[1])
        }
        this.growthtype = this.policyIdData[i].GrowthType;
      }
    })
  }
  getArrow(symbol: any) {
    if (symbol == '-')
      return false;
    else
      return true;
  }

}