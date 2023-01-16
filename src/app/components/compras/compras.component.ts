import { NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {

  constructor(private router:Router) { }

  cantidad:number=0
  cantidad2:number=0
  cantidad3:number=0
  cantidad4:number=0
  cantidad5:number=0
  cantidad6:number=0
  cantidad7:number=0
  cantidad8:number=0
  
  total:any
  total2:any
  total3:any
  total4:any
  total5:any
  total6:any
  total7:any
  total8:any

  carro:any  

  ngOnInit() {
    this.calcular()
  }

  navegar(){
    this.router.navigate([''])
    this.limpiar()
  }

  navegar2(){
    this.router.navigate(['4'])
  }

  sumar(precio:number,nombreproducto:string,cant:number,tot:number){
    tot=cant*precio
    this.calcular()
  }

  restar(precio:number,nombreproducto:string,cant:number,tot:number){
    tot=cant*precio   
    this.calcular()
  }

  comprar(precio:number, nombreproducto:string,cant:number,tot:number){    
    tot=cant*precio
    localStorage.setItem(nombreproducto,tot.toString()+ '#'+ cant.toString()+'#'+precio.toString())
    this.calcular()
  }

  limpiar(){
    localStorage.clear();
  }

  calcular() {
    this.carro=0;
    for (const key in localStorage) {
      if (key.startsWith("Producto")) {
        let valor=localStorage[key];
        console.log(key, "Dato", valor);
        let partes=valor.split('#');
        console.log(partes);
        let l_total='0';
        if (partes.length==3){
          l_total=partes[0];
        }
        this.carro = this.carro +  (+l_total);
      }
    }
    console.log(this.carro);
  }

}
