import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { WaffleGeneratorComponent } from './waffle-generator/waffle-generator.component';
import { LandingComponent } from './landing/landing.component';
import { ShareComponent } from './share/share.component';
import { EndComponent } from './end/end.component';
import {ShareModule} from 'ng2share/share.module'


@NgModule({
  declarations: [
    AppComponent,
    WaffleGeneratorComponent,
    LandingComponent,
    ShareComponent,
    EndComponent
  ],
  imports: [
    ShareModule,
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      {
      path: '',
      component: LandingComponent
    },
    {
      path: 'waffle',
      component: WaffleGeneratorComponent
    },
    {
      path: 'share',
      component: ShareComponent
    }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
