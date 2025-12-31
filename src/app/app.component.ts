import { Component, inject } from '@angular/core';
import { ChildrenOutletContexts, RouterOutlet } from '@angular/router';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HeroComponent } from './sections/hero/hero.component';
import { NavBarComponent } from './sections/nav-bar/nav-bar.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { TechStackComponent } from './sections/tech-stack/tech-stack.component';
import { ExperienceComponent } from './sections/experience/experience.component';
import { ContactComponent } from './sections/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    TooltipModule,
    HeaderComponent,
    NavComponent,
    ModalModule,
    HeroComponent,
    NavBarComponent,
    ProjectsComponent,
    TechStackComponent,
    ExperienceComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-portfolio-website';
  contexts = inject(ChildrenOutletContexts);

  public getRouteAnimation(outlet: RouterOutlet) {
    const res =
      outlet.activatedRouteData['num'] === undefined
        ? -1
        : outlet.activatedRouteData['num'];

    return res;
  }
}
