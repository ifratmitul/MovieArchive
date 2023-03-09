import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { People } from 'src/app/core/models/people';
import { baseConfig } from 'src/app/core/config/baseConfig';

//material 
import { MatCardModule } from '@angular/material/card';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-actor-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, RouterModule],
  templateUrl: './actor-card.component.html',
  styleUrls: ['./actor-card.component.scss']
})
export class ActorCardComponent {
  imageBaseUrl:string = baseConfig.imageBaseUrl;
  @Input() details: People | null = null;

  constructor (private router:Router) {}

  onSelect(id:number){
    console.log(id);
    this.router.navigate(['people', 'details',  id])
  }
}
