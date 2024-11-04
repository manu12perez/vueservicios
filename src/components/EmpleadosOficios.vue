<template>
  <div>
    <h1>Empleados Oficios</h1>
    <table class="table table-warning">
        <thead>
            <tr>
                <th>Apellido</th>
                <th>Oficio</th>
                <th>Salario</th>
                <th>Departamento</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="emp in empleados" :key="emp">
                <td>{{emp.apellido}}</td>
                <td>{{emp.oficio}}</td>
                <td>{{emp.salario}}</td>
                <td>{{emp.departamento}}</td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
// import Global from "./../Global";
// import axios from "axios";
import ServiceEmpleados from './../services/ServiceEmpleados'

const service = new ServiceEmpleados();

export default {
  name: "EmpleadosOficio",

  mounted() {
    this.loadEmpleados();
  },

  watch: {
    '$route.params.oficio'(nextVal, oldVal) {
        if (nextVal != oldVal) {
            this.loadEmpleados();
        }
    }
  },

  data() {
    return {
        empleados: [],
    }
  },

  methods: {
    loadEmpleados() {
        let oficio = this.$route.params.oficio;
        // let request = "api/empleados/empleadosoficio/" + oficio;
        // let url = Global.urlApiEmpleados + request;

        // axios.get(url).then(response => {
        //     console.log("Empleados oficio");
        //     this.empleados = response.data;
        // })

        service.getEmpleadosOficio(oficio).then(result => {
          this.empleados = result;
        })
    },
  },
};
</script>