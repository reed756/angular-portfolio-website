import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionComponent } from '../../components/section/section.component';

@Component({
  selector: 'app-hero',
  imports: [SectionComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {}
