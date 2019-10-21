import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Model } from '../models/model.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ManufacturerService } from '../services/manufacturer.service';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {

  models: Observable<Model[]>;
  mid: number;

  constructor(private route: ActivatedRoute,private manufacturerService: ManufacturerService,
    private router: Router) { }

  ngOnInit() {
    this.mid = this.route.snapshot.params['id'];
    this.reloadData();
  }

  reloadData() {
    this.models = this.manufacturerService.showModels(this.mid);
  }
}
