/* SPREAD OPERATOR */

const arr = ["A", "B"];
const otroArray = [...arr, "C"];
//otroArray incorpora arr y suma "C"

const alumno = {
    firstname: "Gustavo",
    lastname: "Gonzales"
};

const copiaAlumno = {...alumno};

const spreadstring = [..."BC"]

//Desestructuracion

const {firstname, lastname} = alumno;

const array = ["Diego", "Camilo", "Yanina"];
const [primernombre, segundonombre, tercernombre] = arraynombres;

const saludar = (firstname) => {
    console.log(firstname);
}
saludar(alumno.firstname);


const saludarDesestructurado = ({firstname}) => {
    console.log("Estoy saludando a: ", firstname);
}
saludarDesestructurado(alumno);

//Desafio pollyfind

const find = (array, func) => {
    array.forEach
}