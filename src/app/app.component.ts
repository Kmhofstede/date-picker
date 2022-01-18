import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Contact } from './models/contact';
import { ContactNamePipe } from './pipes/contact-name.pipe';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})



export class AppComponent {

  addContactForm = new FormGroup({
    firstName: new FormControl(),
    surname: new FormControl(),
    email: new FormControl('', Validators.pattern('^.+@.+\.nl$')),
  });

  title: string = "date-picker";
  contacts: Contact[] = [
    { firstName: 'Sam', surname: 'Smith', email: 'sam.smith@music.com' },
    { firstName: 'Frank', surname: 'Muscles', email: 'frank@muscles.com' },
    { firstName: 'Eddy', surname: 'Valentino', email: 'eddy@valfam.co.uk' },
  ];
  newContact: Contact = { firstName: '', surname: '', email: '' };
  addContact(contact: Contact) {
    console.log('Submitted value:', contact);
    this.contacts.push(contact);
  };
  deleteContact(contact: Contact){
    var ken = this.contacts.indexOf(contact);
    this.contacts.splice(ken, 1);
  };
}
