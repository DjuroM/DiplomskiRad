import { Component, Input, OnInit } from '@angular/core';
import { Review } from 'src/app/models/review.model';
import { User } from 'src/app/models/user.model';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-user-reviews',
  templateUrl: './user-reviews.component.html',
  styleUrls: ['./user-reviews.component.css']
})
export class UserReviewsComponent implements OnInit {

  @Input() user !: User;
  public reviews!: Review[];

  

  constructor(private reviewService: ReviewService) { }


  ngOnInit(): void {

    this.reviewService.getAllByUser(this.user.id!).subscribe(
      response => {
        this.reviews = response;
      }
    )
  }

}
