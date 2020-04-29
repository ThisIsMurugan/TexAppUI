import { HomePageComponent } from './Home.HomePageComponent';
import { MasterPageComponent } from './Home.MasterPageComponent';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeRoutingModule } from 'src/Routing/Home-HomeRouting.module';

@NgModule({
  declarations: [
    HomePageComponent,
    MasterPageComponent
  ],
  imports: [
    HomeRoutingModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [MasterPageComponent]
})
export class HomeModule { }
