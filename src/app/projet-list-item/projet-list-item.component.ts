import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectLocation } from '../project-location';

@Component({
  selector: 'app-projet-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projet-list-item.component.html',
  styleUrl: './projet-list-item.component.css'
})
export class ProjetListItemComponent {
  @Input() projectLocation!: ProjectLocation;

  test(){
    console.log("allio")
  }
}
