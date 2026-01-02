import { Component, computed, signal } from '@angular/core';
import { SectionComponent } from '../../components/section/section.component';
import { TitleCasePipe } from '@angular/common';

export interface TechStack {
  frontend: string[];
  backend: string[];
  tools: string[];
}

export type TechCategory = keyof TechStack;

@Component({
  selector: 'app-tech-stack',
  imports: [SectionComponent, TitleCasePipe],
  templateUrl: './tech-stack.component.html',
  styleUrl: './tech-stack.component.scss',
})
export class TechStackComponent {
  protected techStack = signal({
    frontend: ['Angular', 'TypeScript', 'JavaScript', 'RxJS', 'Tailwind CSS'],
    backend: ['Node.js', 'Express.js', 'PostgreSQL', 'SQL Anywhere'],
    tools: ['Git', 'Jira'],
  });

  protected techCategories = computed<TechCategory[]>(() => {
    return Object.keys(this.techStack()) as TechCategory[];
  });
}
