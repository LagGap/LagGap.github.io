import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectLocation } from '../../entities/project-location';

@Component({
    standalone:true,
    selector: 'app-projet-list-item',
    imports: [CommonModule],
    templateUrl: './projet-list-item.component.html',
    styleUrl: './projet-list-item.component.css'
})
export class ProjetListItemComponent {
  @Input() projectLocation!: ProjectLocation;
}
