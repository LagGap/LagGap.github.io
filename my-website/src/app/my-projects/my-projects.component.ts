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
    "image":"resources/warbrigade/warbrigade-mission.png", 
    "name": "WarBrigade",
    "description": "Ce jeu a été réalisé au cours du projet synthèse à la fin de ma technique au cégep de Sainte-Foy en programmation web, mobile et jeux vidéos. Il a été dévellopé avec Unity sur une période de deux mois avec trois autres collègues de class. L'objectif est d'acomplir une série de mission. Pour ce projet, ma contribution se concentra sur l'interface utilisateur tant lorsque le joueur est en jeu que lorsqu'il navigue les menus.",
    "hyperlink" : "https://krahab.itch.io/warbrigade"
   },
   {
    "id": 1,
    "image":"resources/blingland/blingLand.png", 
    "name": "Bling Land",
    "description": "Avec trois autres collègues rencontrés au cégep, nous avons décidé d'expérimenter avec Godot pour découvrir ce programme. Pour ce faire, nous avons créé Bling Land. Dans ce jeu fortement inspiré de Kingdom Two Crowns, le joueur doit fortifier son royaume, recruter des villageois et le défendre contre des envahisseurs, Dans ce projet j'ai principalement contribué aux menus",
    "hyperlink" : "https://krahab.itch.io/blingland"
   }
  ]; 
}
