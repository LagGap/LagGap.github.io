import { Injectable } from '@angular/core';
import { ITranslationStrategy } from './ITranslationStrategy';

export
@Injectable({
  providedIn: 'root',
})
class TranslationStrategy extends ITranslationStrategy {
  translateComponent(
    arrayToUse: string[],
    textElements: NodeListOf<Element>
  ): void {
    textElements?.forEach((text, arrayIndex) => {
      text.innerHTML = arrayToUse[arrayIndex];
      arrayIndex++;
    });
  }
}
