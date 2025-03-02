import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateService } from '../services/translate.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css',
})
export class CvComponent implements OnInit, OnDestroy {
  isFrench: boolean = true;
  private translateSubscription!: Subscription;
  protected readonly frenchArray: string[] = [
    'Pour connaître mon expérience en de plus grands détails, explorer mon curiculum vitae.',
    'Telécharger mon CV',
  ];
  protected readonly englishArray: string[] = [
    'To learn more about my experience in greater detail, explore my resume.',
    'Download my resume',
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

  translateComponent(isFrench: boolean) {
    const arrayToUse: string[] = isFrench
      ? this.frenchArray
      : this.englishArray;
    const textElements = document.getElementById("cv-div")?.querySelectorAll('p, button');

    let arrayIndex = 0;

    textElements?.forEach((text) => {
      text.innerHTML = arrayToUse[arrayIndex];
      arrayIndex++;
    });
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
