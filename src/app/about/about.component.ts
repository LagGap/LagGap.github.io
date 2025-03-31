import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '../services/translate.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent implements OnInit, OnDestroy {
  isFrench: boolean = true;
  private translateSubscription!: Subscription;

  protected readonly frenchArray: string[] = [
    'Bienvenue!',
    "Je suis présentement à la recherche d'un emploi après avoir terminé mes études. Sur cette page, vous trouverez des informations à mon sujet : les projets auxquels j'ai participé, une copie de mon curriculum vitae et un lien vers mon courriel.",
  ];
  protected readonly englishArray: string[] = [
    'Welcome!',
    'I am currently looking for a job after completing my studies. On this page, you will find information about me: the projects I have participated in, a copy of my resume, and a link to my email.',
  ];

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

  translateComponent(isInFrench: boolean) {
    const arrayToUse: string[] = isInFrench
      ? this.frenchArray
      : this.englishArray;

    const textElements = document
      .getElementById('div-to-translate')
      ?.querySelectorAll('h1, p');

    let arrayIndex = 0;

    textElements?.forEach((text) => {
      text.innerHTML = arrayToUse[arrayIndex];
      arrayIndex++;
    });
    arrayIndex = 0;
  }
}
