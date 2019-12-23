import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
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
      firstName: ['', [ Validators.required, Validators.minLength(4) ]],
      lastName: ['', [ Validators.required, Validators.maxLength(6) ]],
      email:  ['', [ Validators.required, Validators.email ]],
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
