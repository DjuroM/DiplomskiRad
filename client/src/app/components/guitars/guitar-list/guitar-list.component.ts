import { Component, OnDestroy, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatDrawer } from '@angular/material/sidenav';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { Guitar } from 'src/app/models/guitar.model';
import { GuitarService } from 'src/app/services/guitar.service';

@Component({
  selector: 'app-guitar-list',
  templateUrl: './guitar-list.component.html',
  styleUrls: ['./guitar-list.component.css']
})
export class GuitarListComponent implements OnInit {

  public guitars!: Guitar[];
  public fakeGuitars!: Guitar[];
  public fakeGuitarsCounter = 0;

  length = 100;
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  // MatPaginator Output
  pageEvent!: PageEvent;

  private sub!: Subscription;
  public selectedBrand: string = 'none';
  public selectedGuitarType: string = 'none';



  constructor(private guitarService: GuitarService,
    private route: ActivatedRoute,
    private router: Router) { }




  ngOnInit(): void {
    if (this.route.snapshot.queryParams['type'] == 'guitarType') {

      this.selectedGuitarType = this.route.snapshot.queryParams['id'];
      this.guitarService.getAllByType(this.route.snapshot.queryParams['id']).subscribe(
        response => {
          this.guitars = response
          this.fakeGuitars = this.guitars.slice(0, 5);
          this.length = this.guitars.length;
        }
      );
    } else if (this.route.snapshot.queryParams['type'] == 'brand') {
      this.selectedBrand = this.route.snapshot.queryParams['id'];
      console.log(this.selectedBrand)
      this.guitarService.getAllByBrand(this.route.snapshot.queryParams['id']).subscribe(
        response => {
          this.guitars = response
          this.fakeGuitars = this.guitars.slice(0, 5);
          this.length = this.guitars.length;
        }
      );
    } else if (this.route.snapshot.queryParams['type'] == 'all') {
      this.guitarService.getAll().subscribe(
        response => {
          this.guitars = response;
          this.fakeGuitars = this.guitars.slice(0, 5);
          this.length = this.guitars.length;
        }
      )
    }

    this.sub = this.guitarService.isChanged.subscribe(
      Response => {

        this.fakeGuitars = Response;
      }
    )


  }
  OnPagginationEvent(event: PageEvent) {
    console.log(event)

    let pageIndex = event.pageIndex;
    let previousPageIndux = event.previousPageIndex!;
    if (pageIndex > previousPageIndux) {

      this.fakeGuitarsCounter += 5;
      this.guitarService.PagginatorGuitar(this.guitars, this.fakeGuitarsCounter, this.fakeGuitarsCounter + 5);
    } else {
      this.fakeGuitarsCounter -= 5;
      this.guitarService.PagginatorGuitar(this.guitars, this.fakeGuitarsCounter, this.fakeGuitarsCounter + 5);
    }


  }


  OnFilter() {

    let brandId = this.selectedBrand == 'none' ? 0 : Number.parseInt(this.selectedBrand)
    let guitarTypeID = this.selectedGuitarType == 'none' ? 0 : Number.parseInt(this.selectedGuitarType)

    this.fakeGuitarsCounter = 0;

    if (brandId != 0 && guitarTypeID != 0) {

      this.guitarService.getAllByTypeAndBrand(brandId, guitarTypeID).subscribe(
        response => {
          this.guitars = response;
          this.length = this.guitars.length;
          this.guitarService.PagginatorGuitar(this.guitars, this.fakeGuitarsCounter, this.fakeGuitarsCounter + 5)

        }
      )
    } else if (brandId == 0 && guitarTypeID != 0) {
      this.guitarService.getAllByType(guitarTypeID).subscribe(
        response => {
          this.guitars = response;
          this.length = this.guitars.length;
          this.guitarService.PagginatorGuitar(this.guitars, this.fakeGuitarsCounter, this.fakeGuitarsCounter + 5)
        }
      )
    } else if (guitarTypeID == 0 && brandId != 0) {
      this.guitarService.getAllByBrand(brandId).subscribe(
        response => {
          this.guitars = response;
          this.length = this.guitars.length;
          this.guitarService.PagginatorGuitar(this.guitars, this.fakeGuitarsCounter, this.fakeGuitarsCounter + 5)

        }
      )
    } else {
      this.guitarService.getAll().subscribe(
        response => {
          console.log(response);
          this.guitars = response;
          this.length = this.guitars.length;
          this.guitarService.PagginatorGuitar(this.guitars, this.fakeGuitarsCounter, this.fakeGuitarsCounter + 5)

        }
      )
    }


  }

}
