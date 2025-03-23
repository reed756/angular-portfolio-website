import { Component, inject } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Project } from '../../_models/Project';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-project-modal',
  imports: [CarouselModule],
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.scss',
  standalone: true,
})
export class ProjectModalComponent {

  project = {} as Project;

  bsModalRef = inject(BsModalRef);

}
