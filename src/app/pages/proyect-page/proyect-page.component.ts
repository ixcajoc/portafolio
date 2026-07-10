import { Component, inject } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { CommonModule } from '@angular/common';
import { Project } from '../../Interfaces/proyect.interface';
import { PojectsService } from '../../services/pojects.service';

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

  proyectService = inject(PojectsService);

  proyects: Project[] = this.proyectService.proyects;

}
