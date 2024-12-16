import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjetListItemComponent } from '../projet-list-item/projet-list-item.component';
import { ProjectLocation } from '../project-location';
import { TranslateService } from '../services/translate.service';
import { elementAt, Subscription } from 'rxjs';

@Component({
  selector: 'app-my-projects',
  standalone: true,
  imports: [ProjetListItemComponent, CommonModule],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.css',
})
export class MyProjectsComponent implements OnInit, OnDestroy {
  protected projetLocationList: ProjectLocation[] = [
    {
      id: 0,
      image: 'resources/warbrigade/warbrigade-mission.png',
      name: 'WarBrigade',
      description: [
        "Ce jeu a été réalisé au cours du projet synthèse à la fin de ma technique au cégep de Sainte-Foy en programmation web, mobile et jeux vidéos. Il a été dévellopé avec Unity sur une période de deux mois avec trois autres collègues de class. L'objectif est d'acomplir une série de mission. Pour ce projet, ma contribution se concentra sur l'interface utilisateur tant lorsque le joueur est en jeu que lorsqu'il navigue les menus.",
        'This game was created during the synthesis project at the end of my program at Cégep de Sainte-Foy in web, mobile, and video game programming. It was developed using Unity over a period of two months with three other classmates. The goal is to complete a series of missions. For this project, my contribution focused on the user interface, both when the player is in the game and when navigating the menus.',
      ],
      hyperlink: 'https://krahab.itch.io/warbrigade',
    },
    {
      id: 1,
      image: 'resources/blingland/blingLand.png',
      name: 'Bling Land',
      description: [
        "Avec trois autres collègues rencontrés au cégep, nous avons décidé d'expérimenter avec Godot pour découvrir ce programme. Pour ce faire, nous avons créé Bling Land. Dans ce jeu fortement inspiré de Kingdom Two Crowns, le joueur doit fortifier son royaume, recruter des villageois et le défendre contre des envahisseurs, Dans ce projet j'ai principalement contribué aux menus",
        'With three other colleagues I met at Cégep, we decided to experiment with Godot to explore this software. To do so, we created Bling Land. In this game, heavily inspired by Kingdom Two Crowns, the player must fortify their kingdom, recruit villagers, and defend it against invaders. For this project, I primarily contributed to the menus.',
      ],
      hyperlink: 'https://krahab.itch.io/blingland',
    },
  ];

  isFrench: boolean = true;
  private translateSubscription!: Subscription;

  constructor(private translateService: TranslateService) {}

  ngOnInit(): void {
    this.translateSubscription = this.translateService.translate$.subscribe(
      (data) => {
        this.isFrench = !data;
        this.translateComponent(this.isFrench);
      }
    );
  }

  ngOnDestroy(): void {
    this.translateSubscription.unsubscribe();
  }

  translateComponent(isFrench: boolean) {
    const projectListItemsParagraph = document
      .getElementById('projet-list-section')
      ?.querySelectorAll('p');
    const projectListItemsHyperlink = document
      .getElementById('projet-list-section')
      ?.querySelectorAll('a');
    const arrayToUse = isFrench ? 0 : 1;

    let array = 0;

    projectListItemsParagraph?.forEach((element) => {
      element.innerHTML =
        this.projetLocationList[array].description[arrayToUse];
      array++;
    });

    projectListItemsHyperlink?.forEach((element) => {
      if (this.isFrench) {
        element.innerHTML = 'Consulter le projet'
      } else {
        element.innerHTML = 'View the project';
      }
    });
  }
}
