import { Component, HostListener, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  href: string = "";
  constructor(private route: Router) { }

  showToggle!: string;
  mode: any;
  openSidenav!: boolean;
  private screenWidth$ = new BehaviorSubject<number>(window.innerWidth);

  @ViewChild('sidenav') matSidenav!: MatSidenav;

  ngOnInit() {
    this.getScreenWidth().subscribe(width => {
      if (width < 800) {
        this.showToggle = 'show';
        this.mode = 'over';
        this.openSidenav = false;
      }
      else if (width > 800) {
        this.showToggle = 'hide';
        this.mode = 'side';
        this.openSidenav = true;
      }
    });
    var h = this.route.url.split('/');
    this.href = h[2]
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth$.next(event.target.innerWidth);
  }

  getScreenWidth(): Observable<number> {
    return this.screenWidth$.asObservable();
  }

  val1() {
    setTimeout(() => {
      var h = this.route.url.split('/');
      this.href = h[2]
    }, 200);
  }

}