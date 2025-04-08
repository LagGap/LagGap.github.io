import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '../../services/translate.service';
import { TranslationStrategy } from '../../services/strategy/translationStrategy';
import { Subscription } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit, OnDestroy {
  isFrench: boolean = true;
  private translateSubscription!: Subscription;
  private translateService: TranslateService;
  private translationStrategy: TranslationStrategy;

  protected readonly frenchArray: string[] = [
    'Bienvenue!',
    "Je suis présentement à la recherche d'un emploi après avoir terminé mes études. Sur cette page, vous trouverez des informations à mon sujet : les projets auxquels j'ai participé, une copie de mon curriculum vitae et un lien vers mon courriel.",
  ];
  protected readonly englishArray: string[] = [
    'Welcome!',
    'I am currently looking for a job after completing my studies. On this page, you will find information about me: the projects I have participated in, a copy of my resume, and a link to my email.',
  ];

  constructor(
    translateService: TranslateService,
    translationStrategy: TranslationStrategy
  ) {
    this.translateService = translateService;
    this.translationStrategy = translationStrategy;
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

  translateComponent(isInFrench: boolean) {
    const arrayToUse: string[] = isInFrench
      ? this.frenchArray
      : this.englishArray;

    const textElements = document
      .getElementById('div-to-translate')
      ?.querySelectorAll('h1, p');

    this.translationStrategy.translateComponent(arrayToUse, textElements!);
  }
}
