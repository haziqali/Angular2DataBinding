import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  interval;
  counter= 0;
  @Output() intervalFired = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  startCounter() {
    this.interval = setInterval( () => {
      this.intervalFired.emit(this.counter + 1);
      this.counter++;
    }, 1000);
  }

    stopCounter() {
      clearInterval(this.interval);
    }
}
