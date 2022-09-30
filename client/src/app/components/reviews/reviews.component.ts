import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Review } from 'src/app/models/review.model';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  public reviews !: Review[];
  

  constructor(private reviewService: ReviewService,
    public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.reviewService.getAllByGuitar(this.route.snapshot.params['id']).subscribe(
      response => {
        this.reviews = response;
        console.log(response);
        
      }
    )
  }

}
