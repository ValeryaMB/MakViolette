import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent implements OnInit {

  constructor() { }

  datos = []
  total:number=0

  ngOnInit() {
    this.recuperarDatos()
  }

  recuperarDatos(){
    console.log('ingresa');
    
    for (const key in localStorage) {
      if (key.startsWith("Producto")) {
        let valor=localStorage[key];
        console.log(key, "Dato", valor);
        let partes=valor.split('#');
        console.log(partes);
        if (partes.length==3){
          let l_cantidad=+partes[1];
          if(l_cantidad!=0){

          let l_descripcion='';
          let l_img='';
          if (key=='Producto1'){
          l_descripcion='Mouse';
          l_img='assets/Imagenes/mause.jpg';
          }
          if(key=='Producto2'){
            l_descripcion='Sombras de colores calidos';
            l_img='https://i.pinimg.com/564x/99/8a/a6/998aa6223ac3ed8fa61e65554638416b.jpg';

          }
          if (key=='Producto3') {
            l_descripcion='Serums';
            l_img='https://i.pinimg.com/564x/9a/e7/c1/9ae7c1340c7a782a32da279aa6f3183a.jpg';
          }
          if (key=='Producto4') {
            l_descripcion='Skincare aclarante';
            l_img='https://i.pinimg.com/564x/26/05/3f/26053fbc512277a5055f9c9ebfb86859.jpg';

          }
          if (key=='Producto5') {
            l_descripcion='Perfumes';
            l_img='https://i.pinimg.com/564x/96/76/ac/9676accde0cf75c594dbc2eddbebaf76.jpg';

          }
          if (key=='Producto6') {
            l_descripcion='Brillos labiales';
            l_img='https://i.pinimg.com/564x/57/54/94/575494f2336026825b21620d1926e057.jpg';
          }
          if (key=='Producto7') {
            l_descripcion='Mascarillas faciales';
            l_img='https://i.pinimg.com/564x/84/fb/dc/84fbdc94a0d7f1eef540b8b4c65f8f3c.jpg';

          }
          if (key=='Producto8') {
            l_descripcion='Cremas hidratantes';
            l_img='https://i.pinimg.com/564x/0e/ce/95/0ece95f2f8427dd6a197c2cfd3bd6783.jpg';

          }

          let l_dato=[l_img,l_descripcion,l_cantidad,partes[2],+partes[0]];
          this.datos.push(l_dato);

          this.total=this.total + (+partes[0]);

          }
          
        }
      }
    }
  }

}
