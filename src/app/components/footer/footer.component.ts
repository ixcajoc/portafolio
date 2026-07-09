import { Component, inject } from '@angular/core';
import { SocialMediaService } from '../../services/social-media.service';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  
  currentYear: number = new Date().getFullYear();

  socialMediaService = inject(SocialMediaService);

  linkedin = this.socialMediaService.linkedinUrl;
  youtube = this.socialMediaService.youtubeUrl;
  github = this.socialMediaService.githubUrl;

}
