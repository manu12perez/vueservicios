import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from './components/HomeComponent.vue';
import CochesComponent from './components/CochesComponent.vue';
import CustomersComponent from './components/CustomersComponent.vue';
import EmpleadosDetalle from './components/EmpleadosDetalle.vue';
import EmpleadosOficios from './components/EmpleadosOficios.vue';

//CREAMOS UNA CONSTANTE ARRAY PARA LA RUTA
const myRoutes = [
    { path: "/", component: HomeComponent },
    { path: "/coches", component: CochesComponent },
    { path: "/customers", component: CustomersComponent },
    { path: "/empleados", component: EmpleadosDetalle },
    { path: "/empleadosoficio/:oficio", component: EmpleadosOficios },
]

//CREAMOS UNA CONSTANTE PARA EL HISTORIAL E INCLUIR EN EL ARRAY DE RUTAS
//DICHO NOMBRE DE CONSTANTE SERA EL QUE UTILIZAREMOS DENRO DE Main.js
const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

//POR ULTIMO EXPORTAMOS LA CONSTANTE router PARA SER UTILIZADA EN App
export default router;