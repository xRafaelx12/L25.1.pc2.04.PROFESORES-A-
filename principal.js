import Cl_Fijo from "./Cl_fijo.js";
import Cl_profesor from "./Cl_profesor.js";

let profesor1= new Cl_Fijo("Carlos",25,100)
let profesor2= new Cl_Fijo("Carolina",40,90)

let salida = document.getElementById("salida");

salida.innerHTML = ` 
<br>nombre del profesor: ${profesor1.nombre},
<br>Monto Del bono: ${profesor1.bono},
<br>Monto del sueldo: ${profesor1.sueldo},
<br>ingresos total del profesor: ${profesor1.calcularSueldo()},
<br>nombre del profesor: ${profesor2.nombre},
<br>Monto Del bono: ${profesor2.bono},
<br>Monto del sueldo: ${profesor2.sueldo},
<br>ingresos total del profesor: ${profesor2.calcularSueldo()}`