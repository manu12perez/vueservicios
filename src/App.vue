<template>
  <!-- <CochesComponent /> -->
  <!-- <CustomersComponent /> -->
  <!-- <EmpleadosDetalle /> -->
  <MenuComponent />
  <hr />
  <router-view />
  <hr />
</template>

<script>
// import CochesComponent from './components/CochesComponent.vue'
// import CustomersComponent from './components/CustomersComponent.vue'
// import EmpleadosDetalle from './components/EmpleadosDetalle.vue'
import MenuComponent from './components/MenuComponent.vue'

export default {
  name: 'App',
  components: {
    // CochesComponent
    // CustomersComponent
    // EmpleadosDetalle,
    MenuComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
