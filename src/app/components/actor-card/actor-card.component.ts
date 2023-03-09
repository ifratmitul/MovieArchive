import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { People } from 'src/app/core/models/people';
import { baseConfig } from 'src/app/core/config/baseConfig';

//material 
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-actor-card',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './actor-card.component.html',
  styleUrls: ['./actor-card.component.scss']
})
export class ActorCardComponent {
  imageBaseUrl:string = baseConfig.imageBaseUrl;
  @Input() details: People | null = null;

  onSelect(id:number){
    console.log(id);
  }
}
