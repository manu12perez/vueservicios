import axios from "axios"
import Global from './../Global'

export default class ServiceEmpleados {

    getEmpleados() {
        return new Promise(function (resolve) {
            let empleados = [];

            let request = "api/empleados";
            let url = Global.urlApiEmpleados + request;

            axios.get(url).then(response => {
                empleados = response.data;
                resolve(empleados);
            })
        })
    }

    findEmpleado(idEmpleado) {
        return new Promise(function (resolve) {
            let empleado = {}

            let request = "api/empleados/" + idEmpleado;
            let url = Global.urlApiEmpleados + request;

            axios.get(url).then(response => {
                empleado = response.data;
                resolve(empleado);
            })
        })
    }

    getOficios() {
        return new Promise(function(resolve){
            let oficios = [];

            let request = "api/empleados/oficios" ;
            let url = Global.urlApiEmpleados + request;

            axios.get(url).then(response => {
                oficios = response.data;
                resolve(oficios);
            })
        })
    }

    getEmpleadosOficio (oficio) {
        return new Promise(function(resolve) {
            let empleados = [];

            let request = "api/empleados/empleadosoficio/" + oficio;
            let url = Global.urlApiEmpleados + request;

            axios.get(url).then(response => {
                console.log(response.data);
                empleados = response.data;
                resolve(empleados)
            })
        })
    }
}