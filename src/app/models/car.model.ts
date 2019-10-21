import { Manufacturer } from './manufacturer.model';
import { Model } from './model.model';
import { Comment } from './comment.model';

export class Car {
	id: number;
    manufacturer : Manufacturer;
	model: Model;
	price: number;
	firstRegistration: string;
	mileage: string;
    fuel: string;
	location: string;
	contact: string;
	cubicCapacity: string;
	gearbox: string;
	additionalAccessories: string;	
	description: string;
	comments: Comment[];
}