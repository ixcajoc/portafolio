import { Injectable } from '@angular/core';
import { Project } from '../Interfaces/proyect.interface';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {

  proyects: Project[] = [
    {
      name: 'Pasteleria Quetzal',
      description: '',
      bg_proyect: 'images/pasteleria_quetzal.jpg',
      technologies: ['Vue.js', 'PHP', 'MySQL'],
      previewViewUrl:'https://frontend-pasteleria.vercel.app/#/home',
      frontendUrl:'https://ixcajoc.github.io/denis-cafe/',
      backendUrl:'https://github.com/ixcajoc/backend-pasteleria',
      
    },
    {
      name: 'Plataforma para descarga de diplomas digitales',
      description: 'El más importante de todos, ya no por su calidad sino por todo lo que significa. Fue el proyecto que me mostró que si era capaz de crear soluciones que ayudaran a resolver el problema de alguien más.',
      technologies: ['HTML', 'CSS', 'Js'],
      bg_proyect: 'images/cursos_municipales.jpg',
      previewViewUrl:'https://ixcajoc.github.io/juventudcursos/',
      frontendUrl:'https://github.com/ixcajoc/juventudcursos',
      backendUrl:'',
    },
    {
      name: 'Bienes raices',
      description: '',
      technologies: ['HTML','Sass','Js', 'Gulp'],
      bg_proyect: 'images/bienesraices.jpg',
      previewViewUrl:'https://ixcajoc.github.io/bienesraices/',
      frontendUrl:'https://github.com/ixcajoc/bienesraices',
      backendUrl:'',
    },
    {
      name: 'Festival de música',
      description: '',
      technologies: ['HTML','Sass','Js', 'Gulp'],
      bg_proyect: 'images/festival.jpg',
      previewViewUrl:'https://ixcajoc.github.io/festival-musica/',
      frontendUrl:'https://github.com/ixcajoc/festival-musica',
      backendUrl:'',
    },
    {
      name: 'Denis Cafeteria',
      description: '',
      technologies: ['html', 'css', 'Js'],
      bg_proyect: 'images/blog_cafe.jpg',
      previewViewUrl:'https://ixcajoc.github.io/denis-cafe/',
      frontendUrl:'https://github.com/ixcajoc/denis-cafe',
      backendUrl:'',
    },
    


  ];
  
}
