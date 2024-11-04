<template>
  <div>
    <h1>Customers Component</h1>

    <form v-on:submit.prevent="buscarCliente()">
      <label>Id Cliente</label>
      <input type="text" v-model="idCliente" />
      <button>Buscar Customer</button>
    </form>

    <div v-if="cliente">
      <h2>Nombre: {{ cliente.contactName }}</h2>
      <h2>Compañia: {{ cliente.companyName }}</h2>
      <h2>Título: {{ cliente.contactTitle }}</h2>
    </div>

    <table border="1">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Empresa</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="cliente in customers" :key="cliente">
          <td>{{ cliente.contactName }}</td>
          <td>{{ cliente.companyName }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template> 

<script>
import axios from "axios";
import Global from "./../Global";

export default {
  name: "CustomersComponent",

  data() {
    return {
      customers: [],
      idCliente: "",
      cliente: null,
    };
  },

  mounted() {
    let request = "customers.json";
    let url = Global.urlApiCustomers + request;

    axios.get(url).then((response) => {
      console.log("leyendo");
      this.customers = response.data.results;
    });
  },

  methods: {
    buscarCliente() {
      let request = "customers/" + this.idCliente + ".json";
      let url = Global.urlApiCustomers + request;

      axios.get(url).then((response) => {
        console.log("Buscando customer");
        this.cliente = response.data.customer;
      });
    },
  },
};
</script> 