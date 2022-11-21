import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
} from '@angular/core';

@Component({
  selector: 'veera-ng-step',
  template: `<ng-content></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepComponent {
  constructor(public ref: ElementRef) {}

  @HostBinding('class') get getHostClasses(): string {
    return 'veera-steps__step';
  }
}
