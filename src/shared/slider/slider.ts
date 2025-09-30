import { NgxSliderModule, Options } from '@angular-slider/ngx-slider';
import { Component, EventEmitter, Output, output } from '@angular/core';

@Component({
  selector: 'app-slider',
  imports: [NgxSliderModule],
  templateUrl: './slider.html',
  styleUrl: './slider.css',
})
export class Slider {
  @Output() childValueChange = new EventEmitter<{ value: number; highValue?: number }>();

  value: number = 10;
  highValue: number = 90;
  options: Options = {
    floor: 0,
    ceil: 100,
    step: 10,
    showTicksValues: true,
    showTicks: true,
    getPointerColor: (value: number) => '#3BB1FF',
    translate: (value: number): string => {
      if (value === 100) {
        return 'Any';
      }
      return value.toString();
    },
  };

  onSlide(event: { value: number; highValue?: number }) {
    this.childValueChange.emit({ value: event.value, highValue: event.highValue });
    console.log('Sliding values:', event.value, event.highValue);
  }
}
