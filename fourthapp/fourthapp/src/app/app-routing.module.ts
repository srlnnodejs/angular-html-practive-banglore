import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { MeetComponent } from './meet/meet.component';
import { WhatwedoComponent } from './whatwedo/whatwedo.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = 
[{path:'',redirectTo:"/home",pathMatch:'full'},
{path:"home",component:HomeComponent},
{path:"about",component:AboutusComponent},
{path:"meet",component:MeetComponent},
{path:"whatwedo",component:WhatwedoComponent},
{path:"contact",component:ContactComponent},
{path:"**",component:PagenotfoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent=[PagenotfoundComponent,HomeComponent,AboutusComponent,MeetComponent,WhatwedoComponent,ContactComponent]

