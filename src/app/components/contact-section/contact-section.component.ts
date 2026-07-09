import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SocialMediaService } from '../../services/social-media.service';

@Component({
  selector: 'app-contact-section',
  imports: [],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.css',
})
export class ContactSectionComponent {

  // linkedinUrl: string = 'https://www.linkedin.com/in/denis-ixcajoc/';

  socialMediaService = inject(SocialMediaService);

  linkedin = this.socialMediaService.linkedinUrl;
  youtube = this.socialMediaService.youtubeUrl;
  github = this.socialMediaService.githubUrl;

}
