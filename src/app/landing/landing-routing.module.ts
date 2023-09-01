import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing.component';
import { IndexComponent } from './index/index.component';
import { SkillsComponent } from '../components/skills/skills.component';
import { ExperienceComponent } from '../components/experience/experience.component';

const childRoutes: Routes = [

  {
    path: '',
    component: LandingComponent,
    children: [
      { path: '', redirectTo: 'about', pathMatch: 'full'},
      { path: 'about', component: IndexComponent },
      { path: 'mySkills', component: SkillsComponent },
      { path: 'myExperience', component: ExperienceComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
