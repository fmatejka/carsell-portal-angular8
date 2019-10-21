import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../../models/car.model';
import { Router } from '@angular/router';
import { CarService } from '../../services/car.service';
import { Manufacturer } from '../../models/manufacturer.model';
import { Model } from '../../models/model.model';


@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  cars: Observable<Car[]>;
  constructor(private carService: CarService,
    private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.cars = this.carService.getCarList();
  }

}
