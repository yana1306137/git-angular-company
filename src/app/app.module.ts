import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AppRouteModule } from './app-route/app-route.module';
import { ReactiveFormsModule } from '../../node_modules/@angular/forms';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRouteModule,
    // SharedModule,
    // SharedModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
