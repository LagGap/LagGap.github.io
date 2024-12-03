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
  private subscription!: Subscription;
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
    this.subscription = this.translateService.translate$.subscribe((data) => {
      this.isFrench = !data;
      this.translateComponent(this.isFrench);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  changeLanguageEvent(event: Event) {
    event.preventDefault();
    this.translateService.emitEvent(this.isFrench);
  }

  translateComponent(data: any) {
    const navbar = document.getElementById('navbar-to-translate');
    const linkElements = navbar?.querySelectorAll('a');
    const arrayToUse : string[] = data? this.frenchArray: this.englishArray;
    const newLanguage : string = data? 'fr-CA' : 'en-CA';
    let arrayIndex = 0;

    document.documentElement.lang = newLanguage;
    linkElements?.forEach((element) => {
      element.innerHTML = arrayToUse[arrayIndex];
      arrayIndex++;
    });
    
    arrayIndex = 0;
  }
}
