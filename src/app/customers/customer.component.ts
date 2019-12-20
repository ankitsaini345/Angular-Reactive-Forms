import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { Customer } from './customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customerForm: FormGroup
  customer = new Customer();

  constructor() { }

  ngOnInit() {
    this.customerForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      email: new FormControl(),
      sendcatalog : new FormControl(true)

    });
  }

  populateTestData() {
    this.customerForm.setValue({
    firstName: 'first',
    lastName: 'last',
    email: 'test@gmail.com',
    sendcatalog: false
    })
  }

  save() {
    console.log(this.customerForm.form);
    console.log('Saved: ' + JSON.stringify(this.customerForm.value));
  }
}
