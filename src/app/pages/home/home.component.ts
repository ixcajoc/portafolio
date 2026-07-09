import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { HeroComponent } from "../../components/hero-section/hero.component";
import { SkillsSectionComponent } from "../../components/skills-section/skills-section.component";
import { ProyectsSectionComponent } from "../../components/proyects-section/proyects-section.component";
import { ContactSectionComponent } from "../../components/contact-section/contact-section.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-home',
  imports: [
    NavbarComponent,
    HeroComponent,
    SkillsSectionComponent,
    ProyectsSectionComponent,
    ContactSectionComponent,
    FooterComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {

}
