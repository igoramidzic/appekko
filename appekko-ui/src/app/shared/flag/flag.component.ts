import { Component, Input, OnInit } from '@angular/core';
import { EFlagTypes } from 'src/app/core/enums/flags';
import { EFlagSizes } from '../../../../../ui-web/src/core/enums/flags';

@Component({
  selector: 'app-flag',
  templateUrl: './flag.component.html',
  styleUrls: ['./flag.component.scss']
})
export class FlagComponent implements OnInit {

  @Input() type: EFlagTypes;
  @Input() size: EFlagSizes;

  constructor() { }

  ngOnInit(): void {
  }

  get typeClass(): string {
    switch (this.type) {
      case EFlagTypes.Project:
        return 'flag-project';
      default:
        return '';
    }
  }

  get typeLabel(): string {
    switch (this.type) {
      case EFlagTypes.Project:
        return 'New Project';
      default:
        return '';
    }
  }

  get sizeClass(): string {
    switch (this.size) {
      case EFlagSizes.Small:
        return 'flag-sm';
      case EFlagSizes.Medium:
        return 'flag-md';
      case EFlagSizes.Large:
        return 'flag-lg';
      default:
        return '';
    }
  }

}
