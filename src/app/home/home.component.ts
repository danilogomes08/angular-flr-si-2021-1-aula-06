import { Component, OnInit } from '@angular/core';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

tempo = 0;

  constructor(public timer: TimerService) { 
    this.timer.start(this.tempo);
  }


  ngOnInit() {
  }

}