import { Component, OnInit, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { Project } from '../_models/Project';
import { ProjectsService } from '../_services/projects.service';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { Tag } from '../_models/Tag';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectCardComponent, CollapseModule, FormsModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent implements OnInit {

  projects = [] as Project[];
  projectService = inject(ProjectsService);

  typescript: boolean = false;
  angular: boolean = false;

  isCollapsed: boolean = true;

  filtering: boolean = false;

  constructor(private title: Title) {
    this.title.setTitle('James Reed - Portfolio');
  }

  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
  }

  filter() {
    let filterTags: Tag[] = [];

    if (this.typescript) {
      filterTags.push(Tag.TYPESCRIPT);
    }
    if (this.angular) {
      filterTags.push(Tag.ANGULAR);
    }

    if (filterTags.length > 0) {
      this.filtering = true;
    } else {
      this.filtering = false;
    }

    this.projects = this.projectService.getProjectsByFilter(filterTags);
  }

  reset() {
    this.typescript = false;
    this.angular = false;
    this.filtering = false;

    this.projects = this.projectService.getProjects();
  }
}
