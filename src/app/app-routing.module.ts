import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { ServiceComponent } from './component/service/service.component';
import { PartenerItemComponent } from './component/partener-item/partener-item.component';
import { PartenershipComponent } from './component/partenership/partenership.component';
import { ServiceDetailsComponent } from './component/service-details/service-details.component';
import { MyworkComponent } from './component/mywork/mywork.component';

// Import the HttpClientModule

const routes: Routes = [
  {path:"",redirectTo:"/Home",pathMatch:"full"},
  {path:"Home",component:HomeComponent},
  {path:"About",component:AboutComponent},
  {path:"Services",component:ServiceComponent},
  {path:"partenerShips",component:PartenershipComponent},
  {path:"MyWork",component:MyworkComponent},
  {path:"partenerItem/:id",component:PartenerItemComponent},
  {path:"serviceItem/:id",component:ServiceDetailsComponent},
  {path:"**",component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
