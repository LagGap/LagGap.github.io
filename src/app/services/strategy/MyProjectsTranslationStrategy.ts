import { Injectable } from '@angular/core';
import { ITranslationStrategy } from './ITranslationStrategy';

export
@Injectable({
  providedIn: 'root',
})
class MyProjectsTranslationStrategy extends ITranslationStrategy {

  translateComponent(arrayToUse: string[], textElements: NodeListOf<Element>): void {
    textElements?.forEach((element, indexArray) => {
        element.innerHTML = arrayToUse[indexArray];
    })
  }

  translateHyperlink(hyperlinkTextElements: NodeListOf<Element>, isFrench : boolean): void {
    hyperlinkTextElements?.forEach((element) => {
        if (isFrench) {
          element.innerHTML = 'Consulter le projet';
        } else {
          element.innerHTML = 'View the project';
        }
      });
  }
}
