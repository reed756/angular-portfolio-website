import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  projects: Project[] = [
    {
      id: 0,
      name: 'Movie Explorer App',
      summary:
        'Movie Finder Application that lets you scroll through different movie lists, search for a particular movie and also see further details about a movie.',
      description:
        "Movie Finder Application that lets you scroll through different movie lists, search for a particular movie and also see further details about a movie. Built using TypeScript, Angular, Angular Material, RxJS, Jasmine and Vitest on the frontend. Has a Node.js Express backend that uses the TMDB API for it's data",
      projectLink: 'https://github.com/reed756/movie-explorer',
      images: [
        '../../assets/movie-explorer-1.png',
        '../../assets/movie-explorer-2.png',
        '../../assets/movie-explorer-3.png',
      ],
      tags: [
        Tag.ANGULAR,
        Tag.TYPESCRIPT,
        Tag.MATERIAL,
        Tag.RXJS,
        Tag.NODEJS,
        Tag.JAVASCRIPT,
        Tag.JASMINE,
        Tag.EXPRESS,
      ],
    },
    {
      id: 1,
      name: 'Learn Greek App',
      summary: 'Application that helps you learn Greek',
      description:
        'A responsive full-stack web app that uses Angular 20 on the frontend and Node.js on the backend. The app lets users learn the Greek alphabet and then test themselves on it. They can also post their score to a leaderboard.',
      projectLink: 'https://github.com/reed756/learn_greek',
      images: [
        '../../assets/learn-greek-1.png',
        '../../assets/learn-greek-2.png',
        '../../assets/learn-greek-3.png',
      ],
      tags: [
        Tag.ANGULAR,
        Tag.TYPESCRIPT,
        Tag.JAVASCRIPT,
        Tag.NODEJS,
        Tag.EXPRESS,
        Tag.RXJS,
      ],
    },
    {
      id: 2,
      name: 'Portfolio Website',
      summary: 'My personal portfolio website',
      description:
        'Portfolio website built using TypeScript, Angular and ngx-bootstrap then hosted on Netlify',
      projectLink: 'https://github.com/reed756/angular-portfolio-website',
      images: [
        '../../assets/portfolio-1.png',
        '../../assets/portfolio-2.png',
        '../../assets/portfolio-3.png',
      ],
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.JAVASCRIPT],
    },
  ];

  getProjects(): Project[] {
    return this.projects;
  }

  getProjectById(id: number): Project {
    const project = this.findProjectByID(id);

    if (project === undefined) {
      throw new TypeError(`There is no project with id: ${id}`);
    }

    return project;
  }

  private findProjectByID(id: number): Project | undefined {
    return this.projects.find((project) => project.id === id);
  }

  getProjectsByFilter(filterTags: Tag[]) {
    const filteredProjects: Project[] = [];
    this.projects.forEach((project) => {
      let foundAll = true;

      filterTags.forEach((filterTag) => {
        if (this.filterTags(project, filterTag)) {
          foundAll = false;
        }
      });
      if (foundAll) {
        filteredProjects.push(project);
      }
    });
    return filteredProjects;
  }

  private filterTags(project: Project, filterTag: Tag): boolean {
    return project.tags.includes(filterTag) == false;
  }
}
