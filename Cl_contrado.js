import Cl_profesor from "./Cl_profesor.js";
export default class Cl_Contrado extends Cl_profesor{
    constructor(nombre,horasTrabajadas){
        super(nombre);
        this.horasTrabajadas = horasTrabajadas;
    }

}