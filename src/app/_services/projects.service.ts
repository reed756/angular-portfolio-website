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
      name: 'Weather App',
      summary: 'Weather Application that lets users search for weather in a location and add them to their favourites.',
      description: 'Weather Application that lets users search for weather in a location and add them to their favourites. built using TypeScript, Angular, Tailwind.css, Preline UI and RxJS. Also makes use of unit testing with Karma and the Jasmine framework. Uses OpenWeatherMap API for weather data.',
      projectLink: 'https://github.com/reed756/weather-dashboard',
      images: ['../../assets/weather-app-1.png', '../../assets/weather-app-2.png', '../../assets/weather-app-3.png'],
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.RXJS, Tag.JASMINE]
    },
    {
      id: 1,
      name: 'Currency Converter',
      summary: 'Currency converter application that lets users convert one currency to another.',
      description: 'Currency converter application that lets users convert one currency to another. Application built using TypeScript, Angular, Ionic and RxJS. Uses fixer API on for up to date currency rates and also uses Karma and Jasmine Framework for unit tests.',
      projectLink: 'https://github.com/reed756/currency-converter',
      images: ['../../assets/currency-1.png', '../../assets/currency-2.png', '../../assets/currency-3.png'],
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.IONIC, Tag.RXJS, Tag.JASMINE]
    },
    {
      id: 2,
      name: 'Primate',
      summary: 'Mobile Application that lets users find their favourite primates.',
      description: 'This is a Demo Mobile app that helps nature enthusiasts find primates. Built using Ionic, Angular, TypeScript and Capacitor. Utilises mapbox.gl api for the home map screen and also Firebase for both authorisation and authentication.',
      projectLink: 'https://github.com/reed756/primate',
      images: ['../../assets/primate-1.png', '../../assets/primate-2.png', '../../assets/primate-3.png'],
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.FIREBASE, Tag.IONIC]
    },
    {
      id: 3,
      name: 'NC News',
      summary: 'News article site like reddit',
      description: 'News article site built using JavaScript, Node.js, React.js, Express.js and PostgreSQL. Also followed TDD principles and used Jest for testing both frontend and backend. Front End UI hosted on Netlify and Backend API hosted on Render.',
      projectLink: 'https://github.com/reed756/nc-news',
      images: ['../../assets/nc-news-1.png', '../../assets/nc-news-2.png', '../../assets/nc-news-3.png'],
      tags: [Tag.JAVASCRIPT, Tag.EXPRESS, Tag.NODEJS, Tag.REACT]
    },
    {
      id: 4,
      name: 'Portfolio Website',
      summary: 'My personal portfolio website',
      description: 'Portfolio website built using TypeScript, Angular 17 and ngx-bootstrap then hosted on Netlify',
      projectLink: 'https://github.com/reed756/angular-portfolio-website',
      images: ['../../assets/portfolio-1.png', '../../assets/portfolio-2.png', '../../assets/portfolio-3.png'],
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT]
    }
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
    });
    return filteredProjects;
  }
}
