<template>
  <div>
    <h1>Empleados Detalles</h1>
    <form v-on:submit.prevent="buscarEmpleado()">
      <label>Seleccione el empleado</label>
      <select class="form-control" v-model="idEmpleado">
        <option v-for="emp in empleados" :key="emp" :value="emp.idEmpleado">
          {{ emp.apellido }}
        </option>
      </select>
      <button class="btn btn-info">Detalles Empleado</button>
    </form>
    <div v-if="empleado">
      <dl>
        <dt>Oficio:</dt>
        <dl>{{ empleado.oficio }}</dl>
        <dt>Salario:</dt>
        <dl>{{ empleado.salario }}</dl>
        <dt>Departamento:</dt>
        <dl>{{ empleado.departamento }}</dl>
      </dl>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
// import Global from "./../Global";
import ServiceEmpleados from './../services/ServiceEmpleados'

const service = new ServiceEmpleados();

export default {
  name: "EmpleadosDetalle",

  data() {
    return {
      empleados: [],
      idEmpleado: 0,
      empleado: null,
    };
  },

  mounted() {
    // let request = "api/empleados";
    // let url = Global.urlApiEmpleados + request;

    // axios(url).then((response) => {
    //   console.log("Leyendo empleados");
    //   this.empleados = response.data;
    // });

    service.getEmpleados().then(result => {
      this.empleados = result;
    })
  },

  methods: {
    buscarEmpleado() {
      // let request = "api/empleados/" + this.idEmpleado;
      // let url = Global.urlApiEmpleados + request;

      // axios.get(url).then((response) => {
      //   console.log("Buscando emleado");
      //   this.empleado = response.data;
      // });

      service.findEmpleado(this.idEmpleado).then(result => {
        this.empleado = result;
      })
    },
  },
};
</script>