import { Component } from '@angular/core';
import { Person } from '../../shared/interfaces/person';
import { PersonTableComponent } from '../person-table/person-table.component';

@Component({
  selector: 'app-component-input-example',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './component-input-example.component.html',
  styleUrl: './component-input-example.component.css'
})
export class ComponentInputExampleComponent {
  person0:Person={
    givenName: 'John',
    surName: 'John',
    age: 30,
    email: 'john@example.com',
    address: '123 Main Street'
  }

  person1:Person={
    givenName: 'John1',
    surName: 'John1',
    age: 30,
    email: 'john1@example.com',
    address: '1231 Main Street'
  }
}
