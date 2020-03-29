import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThirdPageRoutingModule } from './third-routing.module';

import { ThirdPage } from './third.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThirdPageRoutingModule
  ],
  declarations: [ThirdPage]
})
export class ThirdPageModule {}
