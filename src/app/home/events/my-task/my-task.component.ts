import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { Calendar, CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { NONE_TYPE } from '@angular/compiler';
import { style } from '@angular/animations';
import { MatDialog } from '@angular/material/dialog';
import { TaskDialogComponent } from '../task-dialog/task-dialog.component';

@Component({
  selector: 'app-my-task',
  templateUrl: './my-task.component.html',
  styleUrls: ['./my-task.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MyTaskComponent {

  title = 'calender';
  @ViewChild('calendar') calendarComponent!: FullCalendarComponent;
  calendar!: Calendar;
 
  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, timeGridPlugin],
    initialView: 'dayGridMonth',
    weekends: true,
    headerToolbar: {
      left: 'title prev,next today',
      right: 'dayGridMonth,timeGridWeek,timeGridDay',
    },
    buttonText:{
      today:'Today',
      month: 'Month',
      week: 'Week',
      day: 'Day'
    },
    events: [
      { title: 'Proposal', date: '2023-03-07', backgroundColor:'#E6F8EB',textColor:'#00B932', borderColor: '#E6F8EB', fontStyle: '50', fontFamily: 'Arial' },
      { title: 'Policy Renewal', date: '2023-03-07',backgroundColor:'#FFF4E8',textColor:'#F98600', borderColor: '#FFF4E8', fontStyle: '50', fontFamily: 'Arial' },
      { title: 'RPA - Rating', date: '2023-03-16', extendedProps: {name: 'HS'}, backgroundColor:'#E6F3FF',textColor:'#0082FF', borderColor: '#E6F3FF', fontStyle: '50', fontFamily: 'Arial'},
      { title: 'Policy Renewal', date: '2023-03-23',backgroundColor:'#FFF4E8',textColor:'#F98600', borderColor: '#FFF4E8', fontStyle: '50', fontFamily: 'Arial' },
      { title: 'RPA - Rating', date: '2023-03-20',  backgroundColor:'#E6F3FF',textColor:'#0082FF', borderColor: '#E6F3FF', fontStyle: '50', fontFamily: 'Arial'},
      { title: 'Policy Renewal', date: '2023-03-20', backgroundColor:'#FFF4E8',textColor:'#F98600', borderColor: '#FFF4E8', fontStyle: '50', fontFamily: 'Arial' },
      { title: 'Policy Renewal', date: '2023-03-29', backgroundColor:'#FFF4E8',textColor:'#F98600', borderColor: '#FFF4E8', fontStyle: '50', fontFamily: 'Arial' },
      { title: 'Proposal', date: '2023-04-04', backgroundColor:'#E6F8EB',textColor:'#00B932', borderColor: '#E6F8EB', fontStyle: '50', fontFamily: 'Arial' },
      { title: 'RPA - Rating', date: '2023-04-01', backgroundColor:'#E6F3FF',textColor:'#0082FF', borderColor: '#E6F3FF', fontStyle: '50', fontFamily: 'Arial'},
      { title: 'Proposal', date: '2023-04-01', backgroundColor:'#E6F8EB',textColor:'#00B932', borderColor: '#E6F8EB', fontStyle: '50', fontFamily: 'Arial' }
    ],
    dayCellDidMount: (info) => {
      const cellEl = info.el;
      // const plusE1 = document.createElement('span')
      // plusE1.innerHTML = '+';
      // plusE1.className = 'plus-symbol';
      // cellEl.appendChild(plusE1);

      cellEl.addEventListener('mouseenter', () => {
        // cellEl.classList.add('fc-highlight');
        const date = info.date;
        console.log("date: ", date)
        cellEl.style.cursor = 'pointer';
        // plusE1.style.display = 'inline';
      });
      cellEl.addEventListener('mouseleave', () => {
        // cellEl.classList.remove('fc-highlight');
        cellEl.style.cursor = '';
      });
     
    }
   
  };
  
  ngAfterViewInit() {
    this.calendar = this.calendarComponent.getApi();
  }

  createDialog(){
    this.dialog.open(TaskDialogComponent)
  }

  constructor(private dialog: MatDialog){}
}
