import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectCardComponent } from '../project-card/project-card.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectCardComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  constructor(private title: Title) {
    this.title.setTitle('James Reed - Portfolio');
  }
}
