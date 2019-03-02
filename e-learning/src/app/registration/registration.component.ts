import { Component, OnInit } from '@angular/core';
import{ FormBuilder, Validators, FormGroup} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  private signInForm:FormGroup;
  constructor(private fb:  FormBuilder,private router : Router) {
   }
  ngOnInit() {
    this.signInForm= this.fb.group({
      name:[null,[Validators.required, Validators.minLength(4), Validators.maxLength(12)]],
      mobileNumber: [null, [Validators.required, Validators.minLength(10)]],
      email: [null, [Validators.required]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      retypePassword: [null, [Validators.required, Validators.minLength(6)]]
    })
  }

  register(){
    console.log(this.signInForm.value);
    this.router.navigate(['/register-success'])
  }


}
