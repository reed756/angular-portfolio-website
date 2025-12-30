import { Component, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contact',
  imports: [FontAwesomeModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  private readonly title = inject(Title);
  faGithub = faGithub;
  faLinkedin = faLinkedin;

  constructor() {
    this.title.setTitle('James Reed - Contact');
  }
}
