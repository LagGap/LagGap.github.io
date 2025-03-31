import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjetListItemComponent } from '../projet-list-item/projet-list-item.component';
import { ProjectLocation } from '../entities/project-location';
import { TranslateService } from '../services/translate.service';
import { elementAt, Subscription } from 'rxjs';
import * as projectLocationListJSON from '../../model/projects.json';
import * as smallProjectLocationListJSON from '../../model/small-projects.json';
import { SmallProjectListItemComponent } from '../small-project-list-item/small-project-list-item.component';
import { SmallProjectLocation } from '../entities/small-project-location';

@Component({
  selector: 'app-my-projects',
  standalone: true,
  imports: [
    ProjetListItemComponent,
    CommonModule,
    SmallProjectListItemComponent,
  ],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.css',
})
export class MyProjectsComponent implements OnInit, OnDestroy {
  protected projetLocationList: ProjectLocation[] = (
    projectLocationListJSON as any
  ).default;
  protected smallProjetLocationList: SmallProjectLocation[] = (
    smallProjectLocationListJSON as any
  ).default;

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
      ?.querySelectorAll('p'); // fetches all texts in the components ProjectLocation and SmallProjectLocation
    const projectListItemsHyperlink = document
      .getElementById('projet-list-section')
      ?.querySelectorAll('a'); // fetches all hyperlinks in the components 
    const arrayToUse = isFrench ? 0 : 1;

    let array = 0;

    let allDescriptions : string[] = [];// combine the list of descriptions into a single array to dispactch later
    this.projetLocationList.forEach((element) => allDescriptions.push(element.description[arrayToUse]));
    this.smallProjetLocationList.forEach((element) => allDescriptions.push(element.description[arrayToUse])); 

    projectListItemsParagraph?.forEach((element) => {
      element.innerHTML =
        allDescriptions[array];
      array++;
    });

    projectListItemsHyperlink?.forEach((element) => {
      if (this.isFrench) {
        element.innerHTML = 'Consulter le projet';
      } else {
        element.innerHTML = 'View the project';
      }
    });
  }
}
