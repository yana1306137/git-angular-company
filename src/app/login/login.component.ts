import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup, Validators, FormControl, FormBuilder} from '@angular/forms';
import { Login } from './login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    formLogin;
    constructor(
        private router: Router,
        private formBuilder: FormBuilder
    ) {
        this.formLogin = this.formBuilder.group(
            {
                username: ['', Validators],
                password: ['', Validators]
            }
        );
    }

    ngOnInit() {
    }

    login() {
        const payload: Login = this.formLogin.value;
        if (payload) {
            this.router.navigateByUrl('/home');
            console.log(payload);
        }
    }
}
