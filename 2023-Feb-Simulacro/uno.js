/*
El alumno deberá ingresar: Nombre del alumno Carrera (Programación, Psicología, Diseño gráfico
    ) Estado de la carrera: en curso-abandono-finalizado Sexo (femenino-masculino-nobinario) 
    Edad (18 o más) Nota (entre 1 y 10) Se desconoce la cantidad de alumnos que se ingresaran.
     El programa deberá informar: 
     A. Cantidad total de alumnos de cada carrera. 
     B. Cantidad total de mujeres que cursan la carrera de programación
      C. Cantidad de alumnos no binarios.
       D. Promedio de notas de los alumnos finalizantes. 
       E. Nombre, sexo y edad del alumno mas viejo en la carrera de psicología.
     F. Nombre, nota y estado de la carrera del mejor alumno no binario que estudia psicología.) 
G. ¿Cuál es la carrera que tiene más alumnos?
*/
function mostrar() {

    let nombreIngresado;
    let carrera;
    let estadoCarrera;
    let sexoIngresado;
    let edadIngresada;
    let nota;
    let respuesta = "si";
    let contadorProgramacion = 0;
    let contadorDiseño = 0;
    let contadorPsicologia = 0;
    let contMujeresProgramacion = 0;
    let contadorNoBinarios = 0;
    let promedioFinalizantes = 0;
    let notasFinalizantes = 0;
    let contadorFinalizantes = 0;
    let masViejo;
    let nombreMasViejo;
    let sexoMasViejo;
    let banderaMejorNoBinario = true;
    let nombreMejorNoBinario;
    let notaNobinario;
    let estadoCarreraNoBinario;
    let masAlumnos;

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

        carrera = prompt("Ingrese la carrera curzante ('programacion', 'psicologia', 'diseño grafico')");
        while (carrera != "programacion" & carrera != "diseño grafico" && carrera != "psicologia") {
            carrera = prompt("ERROR Ingrese una carrera valida ('programacion', 'psicologia', 'diseño grafico')");
        }

        estadoCarrera = prompt("Ingrese el estado de la carrera ('curso', 'abandono', 'finalizado')");
        while (estadoCarrera != "curso" & estadoCarrera != "finalizado" && estadoCarrera != "abandono") {
            estadoCarrera = prompt("ERROR Ingrese CORRECTAMENTE el estado de la carrera ('curso', 'abandono', 'finalizado')");
        }

        nota = parseInt(prompt("Ingrese la nota"));
        while (isNaN(nota) || nota > 10 || nota < 1) {
            nota = parseInt(prompt("ERROR Ingrese la nota (entre 1 y 10)"));
        }

        switch (carrera) {
            case "programacion":
                contadorProgramacion = contadorProgramacion + 1
                if (sexoIngresado == "f" && estadoCarrera == "curso") {
                    contMujeresProgramacion = contMujeresProgramacion + 1;
                }
                break;

            case "psicologia":

                if (contadorPsicologia == 0 || masViejo > edadIngresada) {
                    masViejo = edadIngresada;
                    nombreMasViejo = nombreIngresado;
                    sexoMasViejo = sexoIngresado
                }


                if (banderaMejorNoBinario == true || (sexoIngresado == "n" && notaNobinario > nota)) {
                    notaNobinario = nota;
                    nombreMejorNoBinario = nombreIngresado;
                    estadoCarreraNoBinario = estadoCarrera
                    banderaMejorNoBinario = false;
                }
                contadorPsicologia = contadorPsicologia + 1
                break;

            default:
                contadorDiseño = contadorDiseño + 1
                break;
        }


        if (sexoIngresado == "n") {
            contadorNoBinarios = contadorNoBinarios + 1;
        }

        if (estadoCarrera == "finalizado") {
            notasFinalizantes = notasFinalizantes + nota;
            contadorFinalizantes = contadorFinalizantes + 1;
        }



        respuesta = prompt("Desea continuar? escriba 'si'")
    }



    if (contadorDiseño > contadorProgramacion && contadorDiseño > contadorPsicologia) {
        masAlumnos = "La carrera con mas alumnos es Diseño Grafico"
    } else if (contadorProgramacion > contadorPsicologia) {
        masAlumnos = "La carrera con mas alumnos es Programacion"
    } else {
        masAlumnos = "La carrera con mas alumnos es Psicologia "
    }



    if (contadorFinalizantes != 0) {
        promedioFinalizantes = notasFinalizantes / contadorFinalizantes;
    }
    else {
        promedioFinalizantes = 0;
    }

    console.log("La cantidad total de alumnos en progamacion es de: " + contadorProgramacion);
    console.log("La cantidad total de alumnos en psicologia es de: " + contadorPsicologia);
    console.log("La cantidad total de alumnos en diseño grafico es de:  " + contadorDiseño);
    console.log("La cantidad total de mujeres que cursan la carrera de programacion es de: " + contMujeresProgramacion);
    console.log("La cantidad de alumnes no binaries es de: " + contadorNoBinarios);
    console.log("El promedio de nota entre los finalizantes es de: " + promedioFinalizantes);
    console.log("El nombre de la persona mas vieja es: " + nombreMasViejo + " su sexo es " + sexoMasViejo + " y su edad es " + masViejo);
    console.log("El nombre de la persona no binaria con mejor nota es: " + nombreMejorNoBinario + " su estado de carrera es " + estadoCarreraNoBinario + " y su nota es " + notaNobinario);
    console.log(masAlumnos);

}//fin de funcion
/*
El alumno deberá ingresar: Nombre del alumno Carrera (Programación, Psicología, Diseño gráfico
    ) Estado de la carrera: en curso-abandono-finalizado Sexo (femenino-masculino-nobinario) 
    Edad (18 o más) Nota (entre 1 y 10) Se desconoce la cantidad de alumnos que se ingresaran.
     El programa deberá informar: 
     A. Cantidad total de alumnos de cada carrera. 
     B. Cantidad total de mujeres que cursan la carrera de programación
      C. Cantidad de alumnos no binarios.
       D. Promedio de notas de los alumnos finalizantes. 
       E. Nombre, sexo y edad del alumno mas viejo en la carrera de psicología.
     F. Nombre, nota y estado de la carrera del mejor alumno no binario que estudia psicología.) 
G. ¿Cuál es la carrera que tiene más alumnos?
*/