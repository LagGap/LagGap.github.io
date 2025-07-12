import { Component, OnInit, OnDestroy, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjetListItemComponent } from '../projet-list-item/projet-list-item.component';
import { ProjectLocation } from '../../entities/project-location';
import { TranslateService } from '../../services/translate.service';
import { elementAt, Subscription } from 'rxjs';
import * as projectLocationListJSON from '../../../model/projects.json';
import * as smallProjectLocationListJSON from '../../../model/small-projects.json';
import { SmallProjectListItemComponent } from '../small-project-list-item/small-project-list-item.component';
import { SmallProjectLocation } from '../../entities/small-project-location';
import { MyProjectsTranslationStrategy } from '../../services/strategy/MyProjectsTranslationStrategy';

@Component({
    selector: 'app-my-projects',
    standalone: true,
    imports: [CommonModule, ProjetListItemComponent, SmallProjectListItemComponent],
    templateUrl: './my-projects.component.html',
    styleUrl: './my-projects.component.css'
})
export class MyProjectsComponent implements OnInit, OnDestroy {
  private translateSubscription!: Subscription;
  private translateService: TranslateService;
  private translationStrategy: MyProjectsTranslationStrategy;

  protected projetLocationList: ProjectLocation[] = (
    projectLocationListJSON as any
  ).default;
  protected smallProjetLocationList: SmallProjectLocation[] = (
    smallProjectLocationListJSON as any
  ).default;

  isFrench: boolean = true;

  constructor(translateService: TranslateService, myProjectsTranslationStrategy: MyProjectsTranslationStrategy) {
    this.translateService = translateService;
    this.translationStrategy = myProjectsTranslationStrategy;
  }

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
    const projectListItemsParagraph = document.getElementById('projet-list-section')?.querySelectorAll('p'); // fetches all texts in the components ProjectLocation and SmallProjectLocation
    const projectListItemsHyperlink = document.getElementById('projet-list-section')?.querySelectorAll('a'); // fetches all hyperlinks in the components 
    const arrayToUse = isFrench ? 0 : 1;

    let allDescriptions : string[] = [];// combine the list of descriptions into a single array to dispactch later
    this.projetLocationList.forEach((element) => allDescriptions.push(element.description[arrayToUse]));
    this.smallProjetLocationList.forEach((element) => allDescriptions.push(element.description[arrayToUse])); 

    this.translationStrategy.translateComponent(allDescriptions, projectListItemsParagraph!);
    this.translationStrategy.translateHyperlink(projectListItemsHyperlink!, this.isFrench)
  }
}
    /*{
      Remettre dans /model/small-projects.json lorsque le projet sera terminé

        "id": 2,
        "name": "Expense Tracker",
        "description": [
            "Ce projet de roadmap.sh a pour objectif de créer une API permettant à un utilisateur de suivre ses dépenses. J'ai décidé de le réaliser en Java. Parmi les contraintes présentées, je dois également implémenter une authentification via un JSON Web Token et connecter mon API à une base de données. Dans ce projet, je compte aussi implémenter une interface utilisateur.",
            "The goal of this roadmap.sh project is to create an API that allows a user to track their expenses. I have decided to implement it in Java. Among the constraints presented, I must also implement authentication via a JSON Web Token and connect my API to a database. In this project, I also plan to implement a user interface."
        ],
        "hyperlink": "https://github.com/LagGap/ExpenseTracker"
    }*/