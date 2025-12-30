import { Component, OnInit, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../../_models/Project';
import { ProjectsService } from '../../_services/projects.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  private readonly title = inject(Title);

  featuredProject = {} as Project;
  projectsService = inject(ProjectsService);

  constructor() {
    this.title.setTitle('James Reed - Home');
  }

  ngOnInit(): void {
    this.featuredProject = this.projectsService.getProjectById(0);
  }

  scrollTo(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
