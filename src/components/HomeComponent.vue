<template>
  <div>
    <h1 style="color: blue">Home</h1>
    <h2 style="color:red">{{mensaje}}</h2>
    <img src="./../assets/images/up.png" />
  </div>
</template>

<script>
import ServiceEjemplo from './../services/ServiceEjemplo';

//PARA PODER UTILIZAR EL SERVICIO, NECESITAMOS UNA COSTANTE
//INSTANCIADA CON LA CLASE DEL SERVICIO NECESARIO
const service = new ServiceEjemplo();

export default {
  name: "HomeComponent",
  mounted() {
    this.mensaje = service.getSaludo("Alumno");
  },
  data() {
    return {
      mensaje: "",
    }
  },
};
</script>