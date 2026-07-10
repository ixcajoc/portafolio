import { Component, inject } from '@angular/core';
import ProyectCard from './proyect-card/proyect-card';
import { CommonModule } from '@angular/common';
import { Project } from '../../Interfaces/proyect.interface';
import { PojectsService } from '../../services/pojects.service';

@Component({
  selector: 'app-proyects-section',
  imports: [
    // ProyectCard
    CommonModule,
  ],
  templateUrl: './proyects-section.component.html',
  styleUrl: './proyects-section.component.css',
})
export class ProyectsSectionComponent {

  proyectService = inject(PojectsService);

  proyects: Project[] = this.proyectService.proyects;  

}
