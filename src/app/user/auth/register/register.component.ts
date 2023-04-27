import {Component, OnInit} from '@angular/core';
import {UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../core/service/user/user.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
  registrationForm: UntypedFormGroup;
constructor(private fb: UntypedFormBuilder,
            private userService: UserService) {
  this.registrationForm = this.createForm() ;
}
createForm(): UntypedFormGroup{
  return this.fb.group({
    firstName: ["",Validators.required],
    lastName: ["",Validators.required],
    email: ["",Validators.required],
    username: ["",Validators.required],
    password: ["",Validators.required],
  })
}
formControl = new UntypedFormControl("",[
  Validators.required
]);
  submit(){
    console.log(this.registrationForm.getRawValue());
    this.userService.addUser(this.registrationForm.getRawValue()).subscribe(() =>{
      console.log('saved');
      this.registrationForm.reset();
    })
  }
  ngOnInit(): void {
  }
}
