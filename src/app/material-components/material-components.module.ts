import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from "@angular/material/card";

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatCardModule
  ], exports:[
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatCardModule
  ]
})
export class MaterialComponentsModule { }
