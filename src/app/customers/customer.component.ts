import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { Customer } from "./customer";

@Component({
  selector: "app-customer",
  templateUrl: "./customer.component.html",
  styleUrls: ["./customer.component.css"]
})
export class CustomerComponent implements OnInit {
  customerForm: FormGroup;
  customer = new Customer();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.customerForm = this.fb.group({
      firstName: '',
      lastName: {value: 'disabled', disabled: true},
      email: '',
      sendcatalog: true
    });
  }

  populateTestData() {
    this.customerForm.setValue({
      firstName: "first",
      lastName: "last",
      email: "test@gmail.com",
      sendcatalog: false
    });
  }

  save() {
    console.log(this.customerForm.form);
    console.log("Saved: " + JSON.stringify(this.customerForm.value));
  }
}
