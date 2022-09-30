import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Review } from 'src/app/models/review.model';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-user-review-edit',
  templateUrl: './user-review-edit.component.html',
  styleUrls: ['./user-review-edit.component.css']
})
export class UserReviewEditComponent implements OnInit {


  public review !: Review;
  public formGroup !: FormGroup;
  public reviewText: string = '';
  public numberOfCharacters: number = 5000;
  public isOver = false;

  constructor(private reviewService: ReviewService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.reviewService.getById(this.route.snapshot.params['id']).subscribe(
      response => {
        console.log(response)
        this.review = response;
        console.log(this.review.review)
        this.reviewText = response.review;
        this.numberOfCharacters = 5000 - this.reviewText.length;
        this.formGroup = new FormGroup({
          'review': new FormControl(response.review, [Validators.required, Validators.maxLength(5000)])
        })
      }
    )
  }


  count() {
    this.numberOfCharacters = 5000 - this.reviewText.length;
    if (this.numberOfCharacters <= 0) {
      this.isOver = true;
    } else {
      this.isOver = false;
    }
  }

  onPost() {
    if (this.formGroup.status === "VALID") {
      this.review.review = this.formGroup.value['review'];

      this.reviewService.updateReview(this.review);


    }
  }

  onDelete(id: number) {
    this.reviewService.deleteReview(id);
  }

}
