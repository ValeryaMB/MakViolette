import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { ComprasComponent } from './components/compras/compras.component';
import { PagoComponent } from './components/pago/pago.component';

const routes: Routes = [
  {
    path:'',component:LoginComponent
  },
  {
    path:'2',component:ErrorComponent
  },
  {
    path:'3',component:ComprasComponent
  },
  {
    path:'4',component:PagoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
