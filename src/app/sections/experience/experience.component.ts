import { Component, signal } from '@angular/core';
import { SectionComponent } from '../../components/section/section.component';
import { experiencesData } from './experiences';

@Component({
  selector: 'app-experience',
  imports: [SectionComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  protected experiences = signal(experiencesData);
}
