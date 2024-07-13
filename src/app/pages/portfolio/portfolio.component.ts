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
  standalone: true,
  imports: [ProjectCardComponent, CollapseModule, FormsModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent implements OnInit {

  projects = [] as Project[];
  projectService = inject(ProjectsService);

  skills: { [index: string]: boolean } = {
    typescript: false,
    angular: false,
    rxjs: false,
    jasmine: false,
    firebase: false,
    ionic: false,
    react: false,
    nodejs: false,
    express: false,
    javascript: false
  }


  isCollapsed: boolean = true;

  filtering: boolean = false;

  constructor(private title: Title) {
    this.title.setTitle('James Reed - Portfolio');
  }

  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
  }

  filter(tag: keyof typeof Tag | string) {
    let filterTags: Tag[] = [];
    filterTags.push((Tag as any)[tag]);

    if (filterTags.length > 0) {
      this.filtering = true;
    } else {
      this.filtering = false;
    }

    this.projects = this.projectService.getProjectsByFilter(filterTags);
  }

  reset() {
    this.filtering = false;
    Object.keys(this.skills).forEach((v: keyof { [index: string]: boolean }) => {
      this.skills[v] = false;
    })
    this.projects = this.projectService.getProjects();
  }
}
