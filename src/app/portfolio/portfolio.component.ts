import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectCardComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  project: Project = {
    id: 0,
    name: 'Sample Application One',
    summary: 'Test Description',
    description: 'Test Description',
    projectLink: 'XXXXXXXXXXXXXXXXXXXXXX',
    images: ['XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'],
    tags: [Tag.ANGULAR, Tag.TYPESCRIPT]
  }

  constructor(private title: Title) {
    this.title.setTitle('James Reed - Portfolio');
  }
}
