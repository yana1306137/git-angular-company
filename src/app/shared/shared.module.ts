import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header/header.component';
import { ModuleWithProviders } from '../../../node_modules/@angular/compiler/src/core';
import { GenderPipe } from './pipe/gender.pipe';
import { RouterModule } from '../../../node_modules/@angular/router';
import { TranslatePipe } from './pipe/translate.pipe';

@NgModule({
  declarations: [
    GenderPipe,
    TranslatePipe
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    // HeaderComponent
    GenderPipe,
    TranslatePipe
  ]
})
export class SharedModule {
  // static forRoot() {
  //   return {
  //       ngModule: SharedModule,
  //   };
  // }
}
