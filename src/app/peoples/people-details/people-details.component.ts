import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeopleDetails } from 'src/app/core/models/people';
import { PeopleService } from '../people.service';
import { baseConfig } from 'src/app/core/config/baseConfig';

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.scss']
})
export class PeopleDetailsComponent implements OnInit{

  imageUrl =  baseConfig.imageBaseUrl;
  peopleDetails: PeopleDetails | null = null;

  constructor(private activatedRoute:ActivatedRoute, private peopleService:PeopleService, private router: Router) {}

  ngOnInit(): void {
    console.log(this.activatedRoute)
    const id = this.activatedRoute.snapshot.params['peopleId'] || null;
    
    if(id) {
      this.fetchDetails(id);
    }
    else {
      this.router.navigateByUrl("/")
    }
  }

  fetchDetails(id: any) {
    this.peopleService.getDetails(id).subscribe({
      next: (res:PeopleDetails) => {
        this.peopleDetails = {...res};
      },
      error: (err:any) => {
        console.log(err);
      }
    })
  }

}
