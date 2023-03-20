import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserenvironmentsService } from 'src/app/userenvironments.service';

@Component({
  selector: 'app-intelligence',
  templateUrl: './intelligence.component.html',
  styleUrls: ['./intelligence.component.css']
})
export class IntelligenceComponent {

  customerId: any;
  intelligenceData:any;
  url:any
  token:any;

  @Input() imageUrl!: string;
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() buttonText!: string;

  constructor(private service: UserenvironmentsService, private route: ActivatedRoute) { }

  // cards = [
  //   {
  //     imageUrl: './assets/icon.png',
  //     title: 'Flood Policy',
  //     subtitle: 'Basis people in the same area pincode we see a trend in buying Flood Policy',
  //     buttonText: 'Get a Flood Quote for Ralph'
  //   },
  //   {
  //     imageUrl: './assets/icon.png',
  //     title: 'Endorsement',
  //     subtitle: 'Most people in this vicinity has a swimming pool in their backyard. Did you check for Ralph?',
  //     buttonText: 'Check for Endorsement'
  //   },

  //   {
  //     imageUrl: './assets/icon.png',
  //     title: 'Accident',
  //     subtitle: "We found that Ralph's Driver's license has a reported at fault accident on 23-Dec-2022. Did you account for it?",
  //     buttonText: 'Add Accident in Auto Policy'
  //   }

  // ]
  ngOnInit() {
   
   this.token = localStorage.getItem('Token')
    this.customerId = this.route.snapshot.paramMap.get('id')
    this.service.getintelligenceData(this.token, this.customerId).subscribe(response =>{
      this.intelligenceData = response;
      this.intelligenceData = this.intelligenceData.Items
    })
  }

  onclickIntelligence(url:any){
    this.service.intelligencebuttonUrl(url, this.token).subscribe(response => {
      this.url = response;
    })
  }
}
