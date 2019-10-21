import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Manufacturer } from '../models/manufacturer.model';
import { Observable } from 'rxjs';
import { ManufacturerService } from '../services/manufacturer.service';


@Component({
  selector: 'app-manufacturers',
  templateUrl: './manufacturers.component.html',
  styleUrls: ['./manufacturers.component.css']
})
export class ManufacturersComponent implements OnInit {

  manufacturers: Observable<Manufacturer[]>;
  constructor(private manufacturerService: ManufacturerService,
    private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.manufacturers = this.manufacturerService.getManufacturers();
  }

}