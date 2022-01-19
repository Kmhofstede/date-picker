import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Contact } from '../models/contact';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  @Output() add = new EventEmitter<Contact>();
  
  addContactForm = new FormGroup({
    firstName: new FormControl(),
    surname: new FormControl(),
    email: new FormControl('', Validators.pattern('^.+@.+\.nl$')),
  });

  addContact(contact: Contact) {
    this.add.emit(contact);
    this.addContactForm.reset();
 }



}
