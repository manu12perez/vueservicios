<template>
  <nav
    class="navbar navbar-expand-sm navbar-dark bg-dark"
    aria-label="Third navbar example"
  >
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Expand at sm</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarsExample03"
        aria-controls="navbarsExample03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExample03">
        <ul class="navbar-nav me-auto mb-2 mb-sm-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link"> Home </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/coches" class="nav-link"> Coches </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/customers" class="nav-link">
              Customers
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/empleados" class="nav-link">
              Empleados
            </router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
              Oficios
            </a>
            <ul class="dropdown-menu">
              <li v-for="ofi in oficios" :key="ofi">
                <router-link class="dropdown-item" :to="'/empleadosoficio/' + ofi ">{{ofi}}</router-link>
              </li>
            </ul>
          </li>
        </ul>

        <form role="search">
          <input
            class="form-control"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
// import Global from "./../Global";
// import axios from "axios";
import ServiceEmpleados from './../services/ServiceEmpleados'

const service = new ServiceEmpleados();

export default {
  name: "MenuComponent",

  data() {
    return {
      oficios: [],
    };
  },

  mounted() {
    // let request = "api/empleados/oficios";
    // let url = Global.urlApiEmpleados + request;

    // axios.get(url).then((response) => {
    //   console.log("Leyendo oficios");
    //   this.oficios = response.data;
    // });

    service.getOficios().then(result => {
      this.oficios = result;
    })
  },
};
</script>