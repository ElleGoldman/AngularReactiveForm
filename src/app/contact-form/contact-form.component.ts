import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Contact } from '../contact';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  @Output() contactAdded: EventEmitter<Contact> = new EventEmitter();

  contactForm = this.formBuilder.group({
    name: ['', Validators.required],
    age: ['', Validators.required],
    email: ['', Validators.compose([Validators.required, Validators.email])],
  });

  constructor(private formBuilder: FormBuilder) { }

  onSubmit() {
    this.contactAdded.emit(this.contactForm.value)
    this.contactForm.reset();
  }

  ngOnInit(): void {
  }

}
