import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators, AbstractControl } from "@angular/forms";
import { Customer } from "./customer";

function ratingRange(c: AbstractControl): {[key: string]:boolean} | null {
  if(c.value != null && isNaN(c.value) || c.value<1 || c.value>5){
    return {range: true};
  }
  return null;
}

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
      phone: '',
      notification: 'email',
      rating: [null,ratingRange],
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

  setNotification(notifyVia: string){
    const phoneControl = this.customerForm.get('phone');
    if(notifyVia === 'text'){
      phoneControl.setValidators(Validators.required);
    }
    else {
      phoneControl.clearValidators();
    }
    phoneControl.updateValueAndValidity();
  }
}
