import { Component, OnInit, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';
import { Project } from '../../_models/Project';
import { ProjectsService } from '../../_services/projects.service';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { Tag } from '../../_models/Tag';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-portfolio',
  imports: [ProjectCardComponent, CollapseModule, FormsModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent implements OnInit {
  private readonly title = inject(Title);

  projects = [] as Project[];
  projectService = inject(ProjectsService);

  skills: Record<string, boolean> = {
    typescript: false,
    angular: false,
    rxjs: false,
    jasmine: false,
    firebase: false,
    ionic: false,
    react: false,
    nodejs: false,
    express: false,
    javascript: false,
  };

  isCollapsed = true;

  filtering = false;

  constructor() {
    this.title.setTitle('James Reed - Portfolio');
  }

  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
  }

  filter(tag: keyof typeof Tag | string) {
    const filterTags: Tag[] = [];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    filterTags.push((Tag as any)[tag]);

    if (filterTags.length > 0) {
      this.filtering = true;
    } else {
      this.filtering = false;
    }

    this.projects = this.projectService.getProjectsByFilter(filterTags);
  }

  reset() {
    Object.keys(this.skills).forEach((v: keyof Record<string, boolean>) => {
      this.skills[v] = false;
    });
    this.filtering = false;
    this.projects = this.projectService.getProjects();
  }
}
