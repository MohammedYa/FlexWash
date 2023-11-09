import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { MyworkComponent } from './component/mywork/mywork.component';
import { ServiceComponent } from './component/service/service.component';
import { PartenershipComponent } from './component/partenership/partenership.component';
import { PartenerItemComponent } from './component/partener-item/partener-item.component';
import { ServiceDetailsComponent } from './component/service-details/service-details.component';
import { ReqestServiesComponent } from './component/reqest-servies/reqest-servies.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeOurWorkComponent } from './component/home-our-work/home-our-work.component';
import { HomeAboutComponent } from './component/home-about/home-about.component';
import { HomeOurPartenerComponent } from './component/home-our-partener/home-our-partener.component';
import { HomeOurWellcomeComponent } from './component/home-our-wellcome/home-our-wellcome.component';
import { HomeServiceComponent } from './component/home-service/home-service.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    FooterComponent,
    MyworkComponent,
    ServiceComponent,
    PartenershipComponent,
    PartenerItemComponent,
    ServiceDetailsComponent,
    ReqestServiesComponent,
    HomeOurWorkComponent,
    HomeAboutComponent,
    HomeOurPartenerComponent,
    HomeOurWellcomeComponent,
    HomeServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CarouselModule,
    BrowserAnimationsModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
