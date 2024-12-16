import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateService } from '../services/translate.service';
import { Subscription } from 'rxjs';

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
  constructor(private translateService: TranslateService) {}

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
    const linkElements = document.getElementById('navbar-to-translate')?.querySelectorAll('a');
    const arrayToUse : string[] = data? this.frenchArray: this.englishArray;
    const newLanguage : string = data? 'fr-CA' : 'en-CA';
    
    let arrayIndex = 0;

    document.documentElement.lang = newLanguage; // TODO devrait être changer d'endroit-> pourquoi la navbar s'occupe du document au complet
    linkElements?.forEach((element) => {
      element.innerHTML = arrayToUse[arrayIndex];
      arrayIndex++;
    });
  }
}
