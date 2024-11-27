import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjetListItemComponent } from '../projet-list-item/projet-list-item.component';
import { ProjectLocation } from '../project-location';

@Component({
  selector: 'app-my-projects',
  standalone: true,
  imports: [ProjetListItemComponent, CommonModule],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.css'
})
export class MyProjectsComponent {
  protected projetLocationList : ProjectLocation[] =
   [{
    "id": 0,
    "image":"resources/600x400.png", 
    "name": "WarBrigade",
    "description": "Description",
    "hyperlink" : "https://krahab.itch.io/warbrigade"
   },
   {
    "id": 1,
    "image":"resources/blingLand.png", 
    "name": "Bling Land",
    "description": "Description2",
    "hyperlink" : "https://krahab.itch.io/blingland"
   }
  ]; 
}
