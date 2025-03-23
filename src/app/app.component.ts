import { Component, inject } from '@angular/core';
import { ChildrenOutletContexts, RouterOutlet } from '@angular/router';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { routerAnimation } from './animations';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TooltipModule, HeaderComponent, NavComponent, ModalModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [routerAnimation()],
  standalone: true,
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
