import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Renderer2,
} from '@angular/core';
import { SectionComponent } from '../../components/section/section.component';

@Component({
  selector: 'app-hero',
  imports: [SectionComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {
  private renderer = inject(Renderer2);

  protected goToGithub(): void {
    window.open('https://github.com/reed756', '_blank');
  }

  protected goToProjects(): void {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  protected downloadPdf(): void {
    const link = this.renderer.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute(
      'href',
      '../../assets/James Reed - Angular Developer.pdf',
    );
    link.setAttribute('download', 'James Reed - Angular Developer.pdf');
    link.click();
    link.remove();
  }
}
