import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UpdateService } from 'src/app/service/update.service';
import { Register } from 'src/app/model/register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  private updateService: UpdateService;
  constructor(private u: UpdateService) {
    this.updateService = u;
  }


  registerForm: Register;

  submitted = false;
  onSubmit(registerForm: NgForm) {

    console.log(registerForm.value);
    this.submitted = true;
    registerForm.reset();
    this.updateService.getData();
  }
}
