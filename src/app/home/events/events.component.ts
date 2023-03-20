import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EventsComponent {
  value!:string

  constructor(private route: ActivatedRoute){}

  ngOnInit(){
    var d = Number( this.route.snapshot.paramMap.get('id'))
    if(d == 1)
        this.value = 'Workflow'
    else
        this.value = 'Task'
  }

}
