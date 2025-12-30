import { Component, inject, signal } from '@angular/core';
import { ProjectsService } from '../../_services/projects.service';
import { SectionComponent } from '../../components/section/section.component';

@Component({
  selector: 'app-projects',
  imports: [SectionComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  private projectsService = inject(ProjectsService);

  protected projects = signal(this.projectsService.projects);
}
