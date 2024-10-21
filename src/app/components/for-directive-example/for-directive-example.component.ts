import { Component } from '@angular/core';
import { Person } from '../../shared/interfaces/person';
import { PersonTableComponent } from '../person-table/person-table.component';

@Component({
  selector: 'app-for-directive-example',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './for-directive-example.component.html',
  styleUrl: './for-directive-example.component.css'
})
export class ForDirectiveExampleComponent {
  users:Person[]=[
    {
      givenName: 'John3',
      surName: 'John3',
      age: 30,
      email: 'john1@example.com',
      address: '1231 Main Street'
    },
    {
      "givenName": "Claire",
      "surName": "Russell",
      "email": "c.j@hotmail.com",
      "age": 22,
      "address": "Bismarck"
    },
    {
      "givenName": "Joshua",
      "surName": "Scott",
      "email": "j.scott@ymail.com",
      "age": 35,
      "address": "Carson City"
    },
    {
      "givenName": "Ryan",
      "surName": "Morgan",
      "email": "r_morgan50@yahoo.com",
      "age": 44,
      "address": "Corunna"
    },
    {
      "givenName": "Brandon",
      "surName": "Coleman",
      "email": "brandonacoleman@gmail.com",
      "age": 47,
      "address": "Lake Hiawatha"
    },
    {
      "givenName": "Eric",
      "surName": "Taylor",
      "email": "e_e_taylor40@hotmail.com",
      "age": 21,
      "address": "Lublin"
    },
    {
      "givenName": "Julian",
      "surName": "Long",
      "email": "julianray@yahoo.com",
      "age": 60,
      "address": "Land O' Lakes"
    },
    {
      "givenName": "Adam",
      "surName": "Cox",
      "email": "ajcox@live.com",
      "age": 18,
      "address": "Plant City"
    },
    {
      "givenName": "Alexander",
      "surName": "White",
      "email": "alexander25@rocketmail.com",
      "age": 44,
      "address": "Austin"
    },
    {
      "givenName": "Alyssa",
      "surName": "Simmons",
      "email": "alyssasimmons@outlook.com",
      "age": 63,
      "address": "Gorham"
    },
    {
      "givenName": "Steven",
      "surName": "Perez",
      "email": "steven_scott_perez@hotmail.com",
      "age": 68,
      "address": "Pierce"
    }
  ]

}
