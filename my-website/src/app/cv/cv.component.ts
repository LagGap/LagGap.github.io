import { Component } from '@angular/core';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css',
})
export class CvComponent {
  downloadElement() {
    console.log('allo');
    let link = document.createElement('a');
    link.setAttribute('type', 'hidden');
    link.href = 'resources/CV_GL.pdf';
    link.download = '';
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
}
