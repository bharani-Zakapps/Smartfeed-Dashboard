import { NgxSliderModule, Options } from '@angular-slider/ngx-slider';
import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  imports: [NgxSliderModule],
  templateUrl: './slider.html',
  styleUrl: './slider.css'
})
export class Slider {
value: number = 10;
  highValue: number = 90;
  options: Options = {
    floor: 0,
    ceil: 100,
    step: 10,
    showTicksValues: true,
    showTicks: true,
    getPointerColor: (value: number) => '#3BB1FF',
  };

  onSlide(event: { value: number; highValue?: number }) {
    console.log("Sliding values:", event.value, event.highValue);
    // call your function here
  }
}
