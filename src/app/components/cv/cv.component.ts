import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateService } from '../../services/translate.service';
import { Subscription } from 'rxjs';
import { TranslationStrategy } from '../../services/strategy/translationStrategy';

@Component({
  standalone: true,
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css'
})
export class CvComponent implements OnInit, OnDestroy {
  isFrench: boolean = true;
  private translateSubscription!: Subscription;
  private translateService: TranslateService;
  private translationStrategy: TranslationStrategy;
  protected readonly frenchArray: string[] = [
    'Pour connaître mon expérience en plus grands détails, explorez mon curriculum vitae.',
    'Telécharger mon CV',
  ];
  protected readonly englishArray: string[] = [
    'To learn more about my experience in greater details, explore my resume.',
    'Download my resume',
  ];
  constructor(translateService: TranslateService, translationStrategy: TranslationStrategy) {
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

  translateComponent(isFrench: boolean) {
    const arrayToUse: string[] = isFrench
      ? this.frenchArray
      : this.englishArray;
    const textElements = document.getElementById("cv-div")?.querySelectorAll('p, button');

    this.translationStrategy.translateComponent(arrayToUse, textElements!);
  }

  downloadElement() {
    let link = document.createElement('a');
    link.setAttribute('type', 'hidden');
    link.href = 'resources/CV_GL.pdf-4';
    link.download = '';
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
}
