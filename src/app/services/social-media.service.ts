import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SocialMediaService {

  // socialMediaLinks = {
  //   linkedin: 'https://www.linkedin.com/in/denis-ixcajoc/',
  //   youtube: 'https://www.youtube.com/@denis-ixcajoc',
  //   github: 'https://github.com/ixcajoc',
  //   cv: 'https://drive.google.com/drive/folders/1e1vl9MdWt1rSpbXYYjrDY9MJKY3iuMVW?usp=sharing',
  // }

  linkedinUrl: string = 'https://www.linkedin.com/in/denis-ixcajoc/';
  youtubeUrl: string = 'https://www.youtube.com/@denis-ixcajoc';
  githubUrl: string = 'https://github.com/ixcajoc';
  cvUrl: string = 'https://drive.google.com/drive/folders/1e1vl9MdWt1rSpbXYYjrDY9MJKY3iuMVW?usp=sharing';
}
