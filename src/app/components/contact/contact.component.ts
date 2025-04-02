import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateService } from '../../services/translate.service';
import { Subscription } from 'rxjs';
import { TranslationStrategy } from '../../services/strategy/translationStrategy';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit, OnDestroy {
  isFrench : boolean = true
  private translateSubscription!: Subscription;
  private translateService: TranslateService;
  private translationStrategy: TranslationStrategy;
  
  protected readonly frenchArray: string[] = [
    "Me Contacter",
    "Pour me contacter utilisez l'address courriel suivante: gabriellaperle&#64;gmail.com",
    "Ou clickez ici:",
    "Par Courriel"
  ];
  protected readonly englishArray: string[] = [
    "Contact Me",
    "To contact me, use this email adress: gabriellaperle&#64;gmail.com",
    "Or click here:",
    "By email"
  ];

  constructor(translateService: TranslateService, translationStrategy: TranslationStrategy){
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

  translateComponent(isFrench: boolean) {
    const textElements = document.getElementById("contact")?.querySelectorAll("h2, p, a")
    const arrayToUse : string[] = isFrench? this.frenchArray: this.englishArray;

    this.translationStrategy.translateComponent(arrayToUse, textElements!);
  }
}
