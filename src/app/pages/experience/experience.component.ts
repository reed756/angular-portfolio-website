import { Component, Renderer2, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AccordionModule } from 'ngx-bootstrap/accordion';

@Component({
  selector: 'app-experience',
  imports: [AccordionModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  private readonly title = inject(Title);

  renderer = inject(Renderer2);

  isWorkExperienceOpen = false;
  isEducationOpen = false;
  isCertificationsOpen = false;
  isSkillsOpen = false;

  constructor() {
    this.title.setTitle('James Reed - Experience');
  }

  downloadPdf() {
    const link = this.renderer.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute(
      'href',
      '../../assets/Front End Developer - James Reed.pdf',
    );
    link.setAttribute('download', 'Front End Developer - James Reed.pdf');
    link.click();
    link.remove();
  }
}
