import { Injectable } from '@angular/core';
import { Project } from '../Interfaces/proyect.interface';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {

  proyects: Project[] = [
    {
      name: 'Pasteleria Quetzal',
      description: 'App para gestion de pasteles, ingredientes y pedidos',
      bg_proyect: 'images/pasteleria_quetzal.jpg',
      technologies: ['Vue.js', 'PHP', 'MySQL'],
      previewViewUrl:'https://frontend-pasteleria.vercel.app/#/home',
      frontendUrl:'https://github.com/ixcajoc/frontend-pasteleria',
      backendUrl:'https://github.com/ixcajoc/backend-pasteleria',
    },
    {
      name: 'Asofutbol',
      description: 'App para gestion de ligas deportivas y asociadas',
      bg_proyect: 'images/asofutbol.jpg',
      technologies: ['Angular', 'Express.js', 'PostgreSQL'],
      previewViewUrl:'https://asofutbolsanlucas.vercel.app/',
      frontendUrl:'https://github.com/ixcajoc/client-asofutbol',
      backendUrl:'https://github.com/ixcajoc/server-asofutbol',
    },
    {
      name: 'Trashy',
      description: 'App gamificada para clasificacion de residuos, entidades educativas',
      bg_proyect: 'images/trashy.jpg',
      technologies: ['Angular', 'Express.js', 'Mongo DB'],
      previewViewUrl:'https://reciclaje-plataforma-interactiva.vercel.app/',
      frontendUrl:'https://github.com/ixcajoc/reciclaje-plataforma-interactiva',
      backendUrl:'https://github.com/ixcajoc/reciclajegameproject_mongodb',
    },
    {
      name: 'App Diplomas Municipales',
      description: 'Plataforma para descarga de diplomas digitales',
      technologies: ['HTML', 'CSS', 'Js'],
      bg_proyect: 'images/cursos_municipales.jpg',
      previewViewUrl:'https://ixcajoc.github.io/juventudcursos/',
      frontendUrl:'https://github.com/ixcajoc/juventudcursos',
      backendUrl:'',
    },
    {
      name: 'Bienes raices',
      description: 'App para gestion de bienes raices',
      technologies: ['HTML','Sass','Js', 'Gulp'],
      bg_proyect: 'images/bienesraices.jpg',
      previewViewUrl:'https://ixcajoc.github.io/bienesraices/',
      frontendUrl:'https://github.com/ixcajoc/bienesraices',
      backendUrl:'',
    },
    {
      name: 'Festival de música',
      description: 'Landing para promocion de festivales de musica',
      technologies: ['HTML','Sass','Js', 'Gulp'],
      bg_proyect: 'images/festival.jpg',
      previewViewUrl:'https://ixcajoc.github.io/festival-musica/',
      frontendUrl:'https://github.com/ixcajoc/festival-musica',
      backendUrl:'',
    },
    {
      name: 'Denis Cafeteria',
      description: 'Landing para cafeterias',
      technologies: ['html', 'css', 'Js'],
      bg_proyect: 'images/blog_cafe.jpg',
      previewViewUrl:'https://ixcajoc.github.io/denis-cafe/',
      frontendUrl:'https://github.com/ixcajoc/denis-cafe',
      backendUrl:'',
    },
    


  ];
  
}
