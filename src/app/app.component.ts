import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactComponent } from "./components/contact/contact.component";
import { FooterComponent } from "./components/footer/footer.component";
import { CvComponent } from "./components/cv/cv.component";
import { MyProjectsComponent } from "./components/my-projects/my-projects.component";
import { AboutComponent } from "./components/about/about.component";

@Component({
    selector: 'app-root',
    imports: [NavbarComponent, ContactComponent, FooterComponent, CvComponent, MyProjectsComponent, AboutComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent  {
  title = 'my-website';
}
