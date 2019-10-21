import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Car } from '../../models/car.model';
import { Model } from '../../models/model.model';
import { Manufacturer } from '../../models/manufacturer.model';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-create',
  templateUrl: './car-create.component.html',
  styleUrls: ['./car-create.component.css']
})
export class CarCreateComponent implements OnInit {

  car: Car = new Car();
  submitted = false;

  constructor(private carService: CarService, private router: Router) { }

  ngOnInit() {
  }

  newCar(): void {
    this.submitted = true;
    this.car = new Car();
  }

  save() {
    this.carService.createCar(this.car)
      .subscribe(data => console.log(data), error => console.log(error));
    this.car = new Car();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  

  gotoList() {
    this.router.navigate(['/cars']);
  }


}

