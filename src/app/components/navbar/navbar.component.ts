import { Component, inject } from '@angular/core';
import { SocialMediaService } from '../../services/social-media.service';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {

  socialMediaService = inject(SocialMediaService);

  cv: string = this.socialMediaService.cvUrl;

}
