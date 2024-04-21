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
  rxjs: boolean = false;
  jasmine: boolean = false;
  firebase: boolean = false;
  ionic: boolean = false;
  react: boolean = false;
  nodejs: boolean = false;
  express: boolean = false;
  javascript: boolean = false;

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
    if (this.rxjs) {
      filterTags.push(Tag.RXJS);
    }
    if (this.jasmine) {
      filterTags.push(Tag.JASMINE);
    }
    if (this.firebase) {
      filterTags.push(Tag.FIREBASE);
    }
    if (this.ionic) {
      filterTags.push(Tag.IONIC);
    }
    if (this.react) {
      filterTags.push(Tag.REACT);
    }
    if (this.nodejs) {
      filterTags.push(Tag.NODEJS);
    }
    if (this.express) {
      filterTags.push(Tag.EXPRESS);
    }
    if (this.javascript) {
      filterTags.push(Tag.JAVASCRIPT);
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
