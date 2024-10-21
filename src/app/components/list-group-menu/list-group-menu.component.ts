import { Component } from '@angular/core';
import { MenuEntry } from '../../shared/interfaces/menu-entry';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-list-group-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './list-group-menu.component.html',
  styleUrl: './list-group-menu.component.css'
})
export class ListGroupMenuComponent {
  menu: MenuEntry[] = [
    {text:"Component input example", routerLink:"component-input-example"},
    {text:"@for directives", routerLink:"for-directive-example"},
    {text:"event bind", routerLink:"event-bind-example"},
    {text:"simple datatables", routerLink:"simple-datatable"},
    {text:"component output example", routerLink:"comp-out"},
    {text:"Template Driven Form", routerLink:"template-driven-form"}
  ];

}
