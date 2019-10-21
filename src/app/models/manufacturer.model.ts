import { Model }  from './model.model';
import { Car } from './car.model';
import { User } from './user.model';


export class Manufacturer {
    id: number;
	name: string;
	models: Model[];
	users: User[];
	cars: Car[];
}