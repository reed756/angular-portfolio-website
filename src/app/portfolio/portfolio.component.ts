import { Component, OnInit, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { Project } from '../_models/Project';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectCardComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent implements OnInit {

  projects = [] as Project[];
  projectService = inject(ProjectsService);

  constructor(private title: Title) {
    this.title.setTitle('James Reed - Portfolio');
  }

  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
  }
}
