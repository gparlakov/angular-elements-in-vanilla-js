import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardTileComponent } from './dashboard-tile.component';
import { createCustomElement } from '@angular/elements';
@NgModule({
  declarations: [DashboardTileComponent],
  imports: [CommonModule],
  entryComponents: [DashboardTileComponent]
})
export class DashboardTileModule {
  constructor(private injector: Injector) {
    const dashboardTileCustomElement = createCustomElement(DashboardTileComponent, { injector: this.injector });
    customElements.define('gp-dashboard-tile', dashboardTileCustomElement);
  }
}
