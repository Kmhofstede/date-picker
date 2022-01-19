import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent  {

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
