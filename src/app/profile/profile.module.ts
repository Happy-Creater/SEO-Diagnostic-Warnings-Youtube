import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { ModalModule } from 'ngx-modialog';
import { BootstrapModalModule } from 'ngx-modialog/plugins/bootstrap';
import { BoxLoadingModule } from '../_modules/box-loading/box-loading.module';

@NgModule({
  imports: [
    CommonModule,
    SettingsRoutingModule,
    BootstrapModalModule,
    BoxLoadingModule,
    ModalModule.forRoot()
  ],
  declarations: [ProfileComponent]
})
export class ProfileModule { }
