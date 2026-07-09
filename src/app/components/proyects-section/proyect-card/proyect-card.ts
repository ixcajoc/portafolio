import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Project } from '../interface/proyect.interface';

@Component({
  selector: 'app-proyect-card',
  imports: [CommonModule],
  templateUrl: './proyect-card.html',
  styleUrl: './proyect-card.css',
})

export default class ProyectCard {

  
  
  @Input() proyect?: Project;
  

}