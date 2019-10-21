import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car.model';

import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from 'src/app/services/car.service';
import { Manufacturer } from '../../models/manufacturer.model';
import { Model } from '../../models/model.model';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {

  id: number;
  car: Car;

  constructor(private route: ActivatedRoute,private router: Router,
    private carService: CarService) { }

  ngOnInit() {

    this.car = new Car();

    this.id = this.route.snapshot.params['id'];
    
    this.carService.getCar(this.id)
      .subscribe(data => {
        console.log(data)
        this.car = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['cars']);
  }

  deleteCar(id: number){
    this.carService.deleteCar(id)
      .subscribe(
        data=>{
          console.log(data);
        }, error => console.log(error));
  }



}
