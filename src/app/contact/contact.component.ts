import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateService } from '../services/translate.service';
import { Subscription } from 'rxjs';

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

  constructor(private translateService: TranslateService){}

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

    let arrayIndex = 0;

    textElements?.forEach((text) => {
      text.innerHTML = arrayToUse[arrayIndex]
      arrayIndex++;
    })
  }

}
