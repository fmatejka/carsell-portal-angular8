import { Manufacturer } from './manufacturer.model';
import { Car } from './car.model';

export class Model {
    id: number;
    name: string;
    manufacturer: Manufacturer;
    cars: Car[];
}