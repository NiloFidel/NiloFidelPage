import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';


@NgModule({
  declarations: [
    SkillsComponent,
    ExperienceComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule
  ]
})
export class ComponentsModule { }
