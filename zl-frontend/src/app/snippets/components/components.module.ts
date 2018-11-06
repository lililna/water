import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [ CommonModule, ReactiveFormsModule, FormsModule ],
  exports: [ CommonModule, ReactiveFormsModule, FormsModule],
  declarations: []
})
export class ComponentsModule { }
