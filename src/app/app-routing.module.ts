import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from './base/base.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProjectsComponent } from './projects/projects.component';
import { ServicesComponent } from './services/services.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: BaseComponent
  },
  {
    path: 'contact-us',
    pathMatch: 'full',
    redirectTo: 'contact-us'
  },
  {
    path: 'contact-us',
    component: ContactUsComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  },
  {
    path: '**',
    component: ServicesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
