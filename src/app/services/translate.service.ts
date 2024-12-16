import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TranslateService {
  private translateSubject = new Subject<any>();

  translate$ = this.translateSubject.asObservable();

  emitEvent(data: any) {
    this.translateSubject.next(data);
  }
}
