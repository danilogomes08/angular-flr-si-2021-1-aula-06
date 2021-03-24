import { Injectable } from '@angular/core';

@Injectable()
export class TimerService {
  private timer: any;
  private contador = 0;

  constructor() { }

  start(ms: number) {
    if(!this.timer) {
      this.timer = setInterval (
        () => {
          this.contador ++;
        }, ms
      );
    }
  }

  stop() {
    if(this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  getContador() {
    return this.contador;
  }
}