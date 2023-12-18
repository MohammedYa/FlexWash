import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { ServiceComponent } from './component/service/service.component';
import { PartenershipComponent } from './component/partenership/partenership.component';
import { MyworkComponent } from './component/mywork/mywork.component';
import { PartenerOneComponent } from './component/partener-one/partener-one.component';
import { PartenerTwoComponent } from './component/partener-two/partener-two.component';
import { PartenerThreeComponent } from './component/partener-three/partener-three.component';
import { ServiceDetailsComponent } from './component/service-details/service-details.component';

// Import the HttpClientModule

const routes: Routes = [
  {path:"",redirectTo:"/Home",pathMatch:"full"},
  {path:"Home",component:HomeComponent},
  {path:"About",component:AboutComponent},
  {path:"Services",component:ServiceComponent},
  {path:"partenerShips",component:PartenershipComponent},
  {path:"MyWork",component:MyworkComponent},
  {path:"DriveXpress",component:PartenerOneComponent},
  {path:"BROADREACH",component:PartenerTwoComponent},
  {path:"FLEXEXPRESSCOURIER",component:PartenerThreeComponent},
  {path:"serviceItem/:id",component:ServiceDetailsComponent},
  {path:"**",component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
