import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmallProjectLocation } from '../../entities/small-project-location';

@Component({
    standalone:true,
    selector: 'app-small-project-list-item',
    imports: [CommonModule],
    templateUrl: './small-project-list-item.component.html',
    styleUrl: './small-project-list-item.component.css'
})
export class SmallProjectListItemComponent {
  @Input() smallProjectLocation!: SmallProjectLocation;
}
