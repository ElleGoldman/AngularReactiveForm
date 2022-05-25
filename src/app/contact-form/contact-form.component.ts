import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { FormBuilder, AbstractControl, Validators, ValidatorFn, ValidationErrors } from '@angular/forms';
import { Contact } from '../contact';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})

export class ContactFormComponent implements OnInit {
  @Output() contactAdded: EventEmitter<Contact> = new EventEmitter();

  contactForm = this.formBuilder.group({
    name: ['',  [Validators.required, ValidatePhone()]],
    age: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
  });

  constructor(private formBuilder: FormBuilder) { }

  get name() {
    return this.contactForm.controls['name'];
  }

  onSubmit() {
    console.log(this.contactForm.value)
    this.contactAdded.emit(this.contactForm.value)
    this.contactForm.reset();
  }

  ngOnInit(): void {
  }
}

function ValidatePhone(): ValidatorFn  {
  return (control:AbstractControl) : ValidationErrors | null => {
    if (control.value && control.value[0].toUpperCase() !== control.value[0]) {
      return { 'nameInvalid': true };
    }
    return null;
  }
}
