import { Component, Renderer2, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AccordionModule } from 'ngx-bootstrap/accordion';

@Component({
    selector: 'app-experience',
    imports: [AccordionModule],
    templateUrl: './experience.component.html',
    styleUrl: './experience.component.scss'
})
export class ExperienceComponent {

  renderer = inject(Renderer2)

  isWorkExperienceOpen: boolean = false;
  isEducationOpen: boolean = false;
  isCertificationsOpen: boolean = false;
  isSkillsOpen: boolean = false;

  constructor(private title: Title) {
    this.title.setTitle('James Reed - Experience');
  }

  downloadPdf() {
    const link = this.renderer.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', '../../assets/Front End Developer - James Reed.pdf');
    link.setAttribute('download', 'Front End Developer - James Reed.pdf');
    link.click();
    link.remove();
  }
}
