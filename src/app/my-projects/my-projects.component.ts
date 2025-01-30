import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjetListItemComponent } from '../projet-list-item/projet-list-item.component';
import { ProjectLocation } from '../project-location';
import { TranslateService } from '../services/translate.service';
import { elementAt, Subscription } from 'rxjs';
import * as projectLocationListJSON from '../../model/projects.json';

@Component({
  selector: 'app-my-projects',
  standalone: true,
  imports: [ProjetListItemComponent, CommonModule],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.css',
})
export class MyProjectsComponent implements OnInit, OnDestroy {
  
  protected projetLocationList: ProjectLocation[] = (projectLocationListJSON as any).default

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
