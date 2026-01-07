import { NgxSliderModule, Options } from '@angular-slider/ngx-slider';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-slider',
  imports: [NgxSliderModule],
  templateUrl: './slider.html',
  styleUrl: './slider.css',
})
export class Slider {
  @Output() childValueChange = new EventEmitter<{ value: number; highValue?: number }>();

  value: number = 10;
  highValue: number = 50;
  options: Options = {
    floor: 0,
    ceil: 60,
    step: 10,
    showTicksValues: true,
    showTicks: true,
    getPointerColor: (value: number) => '#3BB1FF',
    translate: (value: number): string => {
      const rangeMap: { [key: number]: string } = {
        0: '1-3',
        10: '4-10',
        20: '11-20',
        30: '21-30',
        40: '31-50',
        50: '50+',
        60: 'Any'
      };
      return rangeMap[value] || value.toString();
    },
  };

  onSlide(event: { value: number; highValue?: number }) {
    this.childValueChange.emit({ value: event.value, highValue: event.highValue });
    console.log('Sliding values:', event.value, event.highValue);
  }
}