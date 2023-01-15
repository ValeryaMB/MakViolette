import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  nombre: any
  correo:any

  constructor(private router:Router) { }

  ngOnInit() {
  }

  recebird(){

  }
  navegar(){
    console.log(this.nombre)
    console.log(this.correo)
    if(this.nombre='valeria'&&this.correo=='1234'){
      this.router.navigate(['3'])
    }
    else{
      this.router.navigate(['2'])
    }
  }
}
