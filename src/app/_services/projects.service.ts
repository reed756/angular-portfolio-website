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
      images: ['../../assets/card-profile.png', '../../assets/nc-logo.jpeg', '../../assets/primate.png'],
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT]
    },
    {
      id: 1,
      name: 'Sample Application One',
      summary: 'Test Description',
      description: 'Test Description',
      projectLink: 'XXXXXXXXXXXXXXXXXXXXXX',
      images: ['../../assets/card-profile.png', '../../assets/nc-logo.jpeg', '../../assets/primate.png'],
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT]
    },
    {
      id: 2,
      name: 'Sample Application One',
      summary: 'Test Description',
      description: 'Test Description',
      projectLink: 'XXXXXXXXXXXXXXXXXXXXXX',
      images: ['../../assets/card-profile.png', '../../assets/nc-logo.jpeg', '../../assets/primate.png'],
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT]
    },
    {
      id: 3,
      name: 'Sample Application One',
      summary: 'Test Description',
      description: 'Test Description',
      projectLink: 'XXXXXXXXXXXXXXXXXXXXXX',
      images: ['../../assets/card-profile.png', '../../assets/nc-logo.jpeg', '../../assets/primate.png'],
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT]
    },
    {
      id: 2,
      name: 'Sample Application One',
      summary: 'Test Description',
      description: 'Test Description',
      projectLink: 'XXXXXXXXXXXXXXXXXXXXXX',
      images: ['../../assets/card-profile.png', '../../assets/nc-logo.jpeg', '../../assets/primate.png'],
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT]
    },
    {
      id: 4,
      name: 'Sample Application One',
      summary: 'Test Description',
      description: 'Test Description',
      projectLink: 'XXXXXXXXXXXXXXXXXXXXXX',
      images: ['../../assets/card-profile.png', '../../assets/nc-logo.jpeg', '../../assets/primate.png'],
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

  getProjectsByFilter(filterTags: Tag[]) {
    let filteredProjects: Project[] = [];
    this.projects.forEach(project => {
      let foundAll = true;

      filterTags.forEach(filterTag => {
        if (project.tags.includes(filterTag) == false) {
          foundAll = false;
        }
      })
      if (foundAll) {
        filteredProjects.push(project);
      }
    }
    );
  }

}
