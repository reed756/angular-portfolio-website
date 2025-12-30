import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-nav',
  imports: [RouterLink, FontAwesomeModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavComponent {
  faGithub = faGithub;
  faLinkedin = faLinkedin;

  protected goToGithub(): void {
    window.open('https://github.com/reed756', '_blank');
  }

  protected goToLinkedIn(): void {
    window.open('https://www.linkedin.com/in/james-an-reed/', '_blank');
  }
}
