import { Component, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav>
      <a target="_blank" rel="noopener" href="https://angular.io/tutorial">Tour of Heroes</a>
      <a target="_blank" rel="noopener" href="https://angular.io/cli">CLI Documentation</a>
      <a target="_blank" rel="noopener" href="https://blog.angular.io/">Angular blog</a>
      <a *ngIf="showMySettings_" href="#" (click)="onMySettingsClick($event)">My settings</a>
    </nav>
  `,
  styles: []
})
export class HeaderComponent {
  title = 'header-component';

  showMySettings_: boolean;
  @Input()
  set showMySettings(value: string | boolean ) {
    if (value != null && value === true || value === 'true') {
      this.showMySettings_ = true;
    } else {
      this.showMySettings_ = false;
    }
    this.cd.markForCheck();
  }

  @Output()
  menuSelected = new EventEmitter<'my-settings'>();

  constructor(private cd: ChangeDetectorRef) {}

  onMySettingsClick(event: Event) {
    if (event && event.preventDefault) {
      event.preventDefault();
    }
    console.log('called!');
    this.menuSelected.next('my-settings');
    this.cd.markForCheck();
  }
}
