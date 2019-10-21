import { Component, OnInit } from '@angular/core';
import { Car } from '../../models/car.model';
import { Comment } from '../../models/comment.model';
import { Observable } from 'rxjs';
import { CarService } from 'src/app/services/car.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

  carId:number;
  comments: Observable<Comment[]>;

  constructor(private route: ActivatedRoute, private carService: CarService, private router: Router) { }

  ngOnInit() {
    this.carId = this.route.snapshot.params['id'];
    this.reloadData();
  }

  reloadData() {
    this.comments = this.carService.showComments(this.carId);
  }
}
