import React, {Component} from "react";

class ListadoElemento extends Component {

    clickPelicula =(item) =>{
        const {AgregarAlCarrito} = this.props

        if(typeof AgregarAlCarrito === 'function'){
            AgregarAlCarrito(item)
        }
    }
    
     render(){
         const{Peliculas}=this.props
         return(
             <div>
  <div>
  {Peliculas.map((item, index)=>{
 
     return(
  <div onClick={()=>{this.clickPelicula(item)}} key={index}>
   {item.nombre}
  </div>
 
   )
   })}
   </div>
 </div>
  )
 }
    
 }
export default ListadoElemento