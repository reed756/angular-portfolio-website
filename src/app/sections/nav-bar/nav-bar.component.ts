import {
  ChangeDetectionStrategy,
  Component,
  DOCUMENT,
  inject,
  OnInit,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavBarComponent implements OnInit {
  private readonly window = inject(DOCUMENT).defaultView;

  private prevScrollPos = signal(0);
  protected navbarTop = signal('0');

  ngOnInit() {
    if (!this.window) return;

    this.prevScrollPos.set(this.window.pageYOffset);

    const updateNavbarPosition = () => {
      const currentScrollPos = this.window?.pageYOffset ?? 0;
      const prev = this.prevScrollPos();

      if (prev > currentScrollPos) {
        this.navbarTop.set('0');
      } else {
        this.navbarTop.set('-50px');
      }
      this.prevScrollPos.set(currentScrollPos);
    };

    this.window.addEventListener('scroll', updateNavbarPosition);
  }
}
