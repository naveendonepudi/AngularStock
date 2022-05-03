import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SpinnerOverlayComponent } from './spinner-overlay/spinner-overlay.component';
import { MaterialComponentsModule } from '../material-components/material-components.module';

@NgModule({
  declarations: [
    SpinnerOverlayComponent
  ],
  imports: [
    ReactiveFormsModule,
    MaterialComponentsModule
  ], exports:[
    ReactiveFormsModule,
    SpinnerOverlayComponent
  ], providers:[
  ]
})
export class SharedModule { }
