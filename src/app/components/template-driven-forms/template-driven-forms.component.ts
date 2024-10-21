import { Component } from '@angular/core';
import { TemplateFormComponent } from './template-form/template-form.component';
import { EPerson } from '../../shared/interfaces/person';
import { SimpleDatatableComponent } from '../simple-datatable/simple-datatable.component';
import { PersonTableComponent } from '../person-table/person-table.component';

@Component({
  selector: 'app-template-driven-forms',
  standalone: true,
  imports: [TemplateFormComponent, SimpleDatatableComponent, PersonTableComponent],
  templateUrl: './template-driven-forms.component.html',
  styleUrl: './template-driven-forms.component.css'
})
export class TemplateDrivenFormsComponent {
  currentPerson: EPerson | undefined;
  persons: EPerson[] = [];
  onPerson(person: EPerson){
    console.log('person');
    this.currentPerson = person;
    this.persons.push(person);
    console.log('current',this.currentPerson)
    console.log('persons',this.persons)

  }

}