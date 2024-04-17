import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects: Project[] = [
    {
      id: 0,
      name: 'Sample Application One',
      summary: 'Test Description',
      description: 'Test Description',
      projectLink: 'XXXXXXXXXXXXXXXXXXXXXX',
      images: ['XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'],
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT]
    },
    {
      id: 0,
      name: 'Sample Application One',
      summary: 'Test Description',
      description: 'Test Description',
      projectLink: 'XXXXXXXXXXXXXXXXXXXXXX',
      images: ['XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'],
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT]
    },
    {
      id: 0,
      name: 'Sample Application One',
      summary: 'Test Description',
      description: 'Test Description',
      projectLink: 'XXXXXXXXXXXXXXXXXXXXXX',
      images: ['XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'],
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT]
    },
    {
      id: 0,
      name: 'Sample Application One',
      summary: 'Test Description',
      description: 'Test Description',
      projectLink: 'XXXXXXXXXXXXXXXXXXXXXX',
      images: ['XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'],
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT]
    },
    {
      id: 0,
      name: 'Sample Application One',
      summary: 'Test Description',
      description: 'Test Description',
      projectLink: 'XXXXXXXXXXXXXXXXXXXXXX',
      images: ['XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'],
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT]
    },
    {
      id: 0,
      name: 'Sample Application One',
      summary: 'Test Description',
      description: 'Test Description',
      projectLink: 'XXXXXXXXXXXXXXXXXXXXXX',
      images: ['XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'],
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT]
    },
  ]

  constructor() {}

  getProjects(): Project[] {
    return this.projects;
  }

  getProjectById(id: number): Project {
    let project = this.projects.find(project => project.id === id);

    if (project === undefined) {
      throw new TypeError(`There is no project with id: ${id}`);
    }

    return project;
  }

}
