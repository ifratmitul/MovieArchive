import { Component, Input } from '@angular/core';
import { baseConfig } from '../../config/baseConfig';
import { People } from '../../models/people';

@Component({
  selector: 'app-actor-card',
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
