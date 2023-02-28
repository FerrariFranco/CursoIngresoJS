/*

Realizar el algoritmo que permita ingresar los datos de los alumnos de una division de la UTN FRA, los datos solicitados son:
Nombre
Situcación laboral ("buscando" , "trabajando" o "solo estudiante")
Cantidad de materias( mas de cero y menos de 8)
Sexo ( femenino , masculino , no binario)
Nota promedio (entre 0 y 10)
Edad (validar)
Se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio de los que tarbajan o estan buscando
b) El nombre del mas viejo de los alumnos que solo sea estudiantes
c) El promedio de nota por situacion laboral
d) La edad y nombre del que cursa menos cantidad de materias y que este buscando trabajo
*/
function mostrar() {
    let nombreIngresado;
    let edadIngresada;
    let sexoIngresado;
    let nota;
    let cantidadDeMaterias;
    let situacionLaboral;
    let banderaMejorTrabajador = true;
    let mejorTrabajador;
    let nombreMejorTrabajador;
    let nombreMasViejo;
    let masViejo;
    let respuesta = "si"
    let contadorBuscando = 0;
    let contadorTrabajando = 0;
    let contadorEstudiante = 0;
    let acumuladorNotaEstudiante = 0;
    let acumuladorNotaTrabajando = 0;
    let acumuladorBuscando = 0;
    let promedioBuscando;
    let promedioTrabajando;
    let promedioEstudiando;
    let nombreMenosMaterias;
    let menosMaterias;
    let edadMenosMaterias;
    let mensajeB = "";
    let mensajeD = "";
    let mensajeA = "";



    while (respuesta == "si" || respuesta == "SI" || respuesta == "Si" || respuesta == "sI") {

        nombreIngresado = prompt("Ingrese el nombre del alumno.");
        while (!isNaN(parseInt(nombreIngresado))) {
            nombreIngresado = prompt("Ingrese un nombre valido.");
        }

        sexoIngresado = prompt("Ingrese el sexo del alumno (masculino = 'm', femenino = 'f', no binario = 'n')");
        while (sexoIngresado != "f" & sexoIngresado != "m" && sexoIngresado != "n") {
            sexoIngresado = prompt("ERROR Ingrese un sexo valido del alumno (masculino = 'm', femenino = 'f', no binario = 'n')");
        }

        edadIngresada = parseInt(prompt("Ingrese la edad del alumno"));
        while (isNaN(edadIngresada) || edadIngresada > 110 || edadIngresada < 18) {
            edadIngresada = parseInt(prompt("ERR0R Ingrese la edad del alumno correctamente (mayor de edad))"));
        }

        cantidadDeMaterias = parseInt(prompt("Ingrese la cantidad de materias del alumno (entre 0 y 8)"));
        while (isNaN(cantidadDeMaterias) || cantidadDeMaterias > 8 || cantidadDeMaterias < 1) {
            cantidadDeMaterias = parseInt(prompt("ERROR Ingrese una cantidad de materias del alumno VALIDA (entre 0 y 8)"));
        }

        situacionLaboral = prompt("Ingrese la situacion laboral del alumno ('trabajando', 'estudiando', 'buscando')");
        while (situacionLaboral != "trabajando" & situacionLaboral != "estudiando" && situacionLaboral != "buscando") {
            situacionLaboral = prompt("ERROR Ingrese correctamente la carrera curzante ('trabajando', 'buscando', 'estudiando')");
        }

        estadoCarrera = prompt("Ingrese el estado de la carrera ('curso', 'abandono', 'finalizado')");
        while (estadoCarrera != "curso" & estadoCarrera != "finalizado" && estadoCarrera != "abandono") {
            estadoCarrera = prompt("Ingrese el estado de la carrera ('curso', 'abandono', 'finalizado')");
        }

        nota = parseInt(prompt("Ingrese la nota"));
        while (isNaN(nota) || nota > 10 || nota < 0) {
            nota = parseInt(prompt("Ingrese la nota valida (de 1 a 10)"));
        }

        switch (situacionLaboral) {
            case "trabajando":
                if (banderaMejorTrabajador == true || mejorTrabajador > nota) {
                    mejorTrabajador = nota;
                    nombreMejorTrabajador = nombreIngresado;
                    banderaMejorTrabajador = false;
                    mensajeA = "El nombre del alumno que tiene mejor promedio y esta buscando trabajo o trabajando es " + nombreMejorTrabajador;
                }
                contadorTrabajando = contadorTrabajando + 1;
                acumuladorNotaTrabajando = acumuladorNotaTrabajando + nota;
                break;

            case "buscando":

                if (banderaMejorTrabajador == true || mejorTrabajador > nota) {
                    mejorTrabajador = nota;
                    nombreMejorTrabajador = nombreIngresado;
                    banderaMejorTrabajador = false;
                    mensajeA = "El nombre del alumno que tiene mejor promedio y esta buscando trabajo o trabajando es " + nombreMejorTrabajador;
                }


                if (contadorBuscando == 0 || menosMaterias > cantidadDeMaterias) {
                    menosMaterias = cantidadDeMaterias;
                    nombreMenosMaterias = nombreIngresado;
                    edadMenosMaterias = edadIngresada;
                    mensajeD = "El nombre del alumno que eta buscando trabajo y esta en menos materias es " + nombreMenosMaterias + " su edad es " + edadMenosMaterias;
                }
                contadorBuscando = contadorBuscando + 1;
                acumuladorBuscando = acumuladorBuscando + nota;
                break;

            default:
                if (contadorEstudiante == 0 || masViejo > edadIngresada) {
                    masViejo = edadIngresada;
                    nombreMasViejo = nombreIngresado;
                    mensajeB = "El nombre del mas viejo de los alumnos es" + nombreMasViejo + " y su edad es: " + masViejo;
                }
                contadorEstudiante = contadorEstudiante + 1;
                acumuladorNotaEstudiante = acumuladorNotaEstudiante + nota;
                break;
        }

        respuesta = prompt("Desea continuar? escriba 'si'")
    }

    if (contadorBuscando != 0) {
        promedioBuscando = acumuladorBuscando / contadorBuscando;
        console.log("El promedio de nota de los que estan buscando trabajo es de: " + promedioBuscando);
    } else {
        console.log("No hay alumnos buscando");
    }
    if (contadorEstudiante != 0) {
        promedioEstudiando = acumuladorNotaEstudiante / contadorEstudiante;
        console.log("El promedio de nota de los que estudiando es de " + promedioEstudiando);
    } else {
        console.log("No hay alumnos estudiando");
    }
    if (contadorTrabajando != 0) {
        promedioTrabajando = acumuladorNotaTrabajando / contadorTrabajando;
        console.log("El promedio de nota de los que estan trabajando es de " + promedioTrabajando);
    } else {
        console.log("No hay alumnos trabajando");
    }

    console.log(mensajeB);
    console.log(mensajeA);
    console.log(mensajeD);


    /*
    
    Realizar el algoritmo que permita ingresar los datos de los alumnos de una division de la UTN FRA, los datos solicitados son:
    Nombre
    Situcación laboral ("buscando" , "trabajando" o "solo estudiante")
    Cantidad de materias( mas de cero y menos de 8)
    Sexo ( femenino , masculino , no binario)
    Nota promedio (entre 0 y 10)
    Edad (validar)
    Se debe informar de existir, o informar que no existe , en el caso que corresponda.
    a) El nombre del mejor promedio de los que tarbajan o estan buscando
    b) El nombre del mas viejo de los alumnos que solo sea estudiantes
    c) El promedio de nota por situacion laboral
    d) La edad y nombre del que cursa menos cantidad de materias y que este buscando trabajo
    */
}
