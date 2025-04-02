import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateService } from '../../services/translate.service';
import { Subscription } from 'rxjs';
import { TranslationStrategy } from '../../services/strategy/translationStrategy';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})

export class NavbarComponent implements OnInit, OnDestroy {
  isFrench: boolean = true;
  private translateSubscription!: Subscription;
  private translateService: TranslateService;
  private translationStrategy: TranslationStrategy;
  protected readonly frenchArray: string[] = [
    'À propos',
    'Mes projets',
    'Mon Curiculum Vitae',
    'Me contacter',
    'FR / EN',
  ];
  protected readonly englishArray: string[] = [
    'About',
    'My projects',
    'My Curiculum Vitae',
    'Contact me',
    'EN / FR',
  ];
  constructor(translateService: TranslateService, translationStrategy: TranslationStrategy) {
    this.translateService = translateService;
    this.translationStrategy = translationStrategy;
  }

  ngOnInit(): void {
    this.translateSubscription = this.translateService.translate$.subscribe((data) => {
      this.isFrench = !data;
      this.translateComponent(this.isFrench);
    });
  }

  ngOnDestroy(): void {
    this.translateSubscription.unsubscribe();
  }

  changeLanguageEvent(event: Event) {
    event.preventDefault();
    this.translateService.emitEvent(this.isFrench);
  }

  translateComponent(data: boolean) {
    const textElements = document.getElementById('navbar-to-translate')?.querySelectorAll('a');
    const arrayToUse : string[] = data? this.frenchArray: this.englishArray;
    const newLanguage : string = data? 'fr-CA' : 'en-CA';

    document.documentElement.lang = newLanguage; // TODO devrait être changer d'endroit-> pourquoi la navbar s'occupe du document au complet

    this.translationStrategy.translateComponent(arrayToUse, textElements!);

  }
}
