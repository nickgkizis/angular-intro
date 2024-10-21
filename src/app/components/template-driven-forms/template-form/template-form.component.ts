import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormField } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { EPerson } from '../../../shared/interfaces/person';


@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [
    MatSelectModule,
    MatInputModule,
    MatFormField,
    MatButtonModule,
    FormsModule],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css'
})
export class TemplateFormComponent {
  @Output()person = new EventEmitter<EPerson>;

  onSubmit(value: any){
    console.log('value: ' + value);
    this.person.emit(value as EPerson);
  }

}
