import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterAnaliseApplicationSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [JhipsterAnaliseApplicationSharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent],
})
export class JhipsterAnaliseApplicationHomeModule {}
