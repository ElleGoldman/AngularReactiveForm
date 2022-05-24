import { Component } from '@angular/core';
import { Contact } from './contact';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'contact-list';

  allContacts = [
    { name: 'Helen', age: 25, email: 'elena@endava.md' },
  ];

  get contacts() {
    return this.allContacts
  };

  addContact(contact: Contact) {
    this.allContacts.unshift(contact);
  }
}
