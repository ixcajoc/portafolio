import { Component } from '@angular/core';
import { Project } from '../../components/proyects-section/interface/proyect.interface';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-proyect-page',
  imports: [
    CommonModule,
    NavbarComponent, 
    FooterComponent],
  templateUrl: './proyect-page.component.html',
  styleUrl: './proyect-page.component.css',
})
export class ProyectPageComponent {

  proyects: Project[] = [
      {
        name: 'Plataforma para entrega de diplomas digitales',
        description: 'This is a description of Project 1.',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        bg_proyect: 'images/cursos_municipales.jpg',
        previewViewUrl:'https://ixcajoc.github.io/juventudcursos/',
        frontendUrl:'https://github.com/ixcajoc/juventudcursos',
        backendUrl:'',
      },
      {
        name: 'Project 2',
        description: 'This is a description of Project 2.',
        technologies: ['SwiftUI', 'Combine'],
        previewViewUrl:'https://example.com/project2',
        frontendUrl:'https://example.com/project2/frontend',
        backendUrl:'',
      },
      {
        name: 'Project 3',
        technologies: ['Next.js', 'Tailwind CSS'],
        previewViewUrl:'https://example.com/project3',
        frontendUrl:'https://example.com/project3/frontend',
        backendUrl:'https://example.com/project3/backend',
      },
      {
        name: 'Project 4',
        technologies: ['Next.js', 'Tailwind CSS'],
        previewViewUrl:'https://example.com/project4',
        frontendUrl:'https://example.com/project4/frontend',
        backendUrl:'https://example.com/project4/backend',
      },
   
  
    ];

}
