
        var precio_base = 2000;
        var edad_18 = 0.1; // 10%
        var edad_25 = 0.2; // 20%
        var edad_50 = 0.3; // 30%
        var casado_18 = 0.1; // 10%
        var casado_25 = 0.2; // 20%
        var casado_50 = 0.3; // 30%
        var propiedad = 0.35 // 35%
        var salario_5k = .05 // 5%
        var salario_10k = .1 // 5%
        var salario_15k = .15 // 15%
        var salario_20k = .2 //20%
        var salario_25k = .25 //25%
        var hijos_recargo = 0.2; // 20%
        var recargo = 0;
        var precio_final = 0;
        var recargo_total = 0;

        //---------------> DATA INSERT
        alert('Bienvenido a Asegurada TK-U. A continuación nuestro cotizador te hará algunas preguntas.');
        var nombre = prompt("Ingresa tu nombre, por favor");
        var mayor_edad = prompt('Eres mayor de edad, 18 años o más? (escribe si o no)');

        while(true){
            if(mayor_edad == 'si'){
            var edad = prompt("¿Cuántos años tienes? Ingresa solamente números");
            var casado = prompt("¿Estás casado actualmente? (si o no)");
            var edad_numero = parseInt(edad);

            //---------------> COUPLE DATA
            var recargo_conyugue = 0;
            var edad_conyuge;

            if("SI" == casado.toUpperCase()){
                edad_conyuge = prompt("¿Qué edad tiene tu esposo/a? Ingresa solamente números");
                var edad_conyuge_numero = parseInt(edad_conyuge);
                if (edad_conyuge_numero <= 25){
                    recargo_conyugue = precio_base * casado_18;
                } else if(edad_conyuge <= 49){
                    recargo_conyugue = precio_base * casado_25;
                } else {
                    recargo_conyugue = precio_base * casado_50;
                }
            }

            //---------------> CHILDREN'S DATA
            var recargo_hijos = 0;
            var hijos = prompt("¿Tienes hijos o hijas? (si o no) ");

            if("SI" == hijos.toUpperCase()){
                var cant_hijos = prompt("¿Cuántos hijos tienes?Ingresa solamente números");
                var cantidad_hijos = parseInt(cant_hijos);
                recargo_hijos = (cantidad_hijos * precio_base) * hijos_recargo;
            }
            //--------------->  FINAL PRICE
            var recargo_propiedad = 0;
            var propiedades = prompt("Posees propiedades");
            if("SI" == propiedades.toUpperCase()){
                var cant_prop = prompt("¿Cuántas propiedades tienes que estén a tu nombre? Ingrese solo los valores en números.");
                var cantidad_prop = parseInt(cant_prop);
                recargo_propiedad = (cantidad_prop * precio_base) * propiedad;
            }


            var recargo_salario = 0
            var salario = prompt('Por favor ingresa tu  salario mensual');
            if(parseFloat(salario)  <= 5000){
                recargo_salario = precio_base * salario_5k;
            }else if(parseFloat(salario)  <= 10000){
                recargo_salario = precio_base * salario_10k;
            }else if(parseFloat(salario)  <= 15000){
                recargo_salario = precio_base * salario_15k;
            }else if(parseFloat(salario)  <= 20000){
                recargo_salario = precio_base * salario_20k;
            }else if(parseFloat(salario)  <= 25000){
                recargo_salario = precio_base * salario_25k;
            }


            //--------------->  FINAL PRICE
            if(edad_numero >= 18 && edad_numero < 25){
                recargo = precio_base * edad_18;
                recargo_total = recargo_hijos + recargo + recargo_conyugue + recargo_propiedad + recargo_salario;
            } else if (edad_numero >= 25 && edad_numero <= 49){
                recargo = precio_base * edad_25;
                recargo_total = recargo_hijos + recargo + recargo_conyugue + recargo_propiedad + recargo_salario;
            } else if (edad_numero > 49){
                recargo = precio_base * edad_50;
                recargo_total = recargo_hijos + recargo + recargo_conyugue + recargo_propiedad + recargo_salario;
            }

            precio_final = precio_base + recargo_total;
            alert('Gracias por tu paciencia ' + nombre + ', El valor base de la prima es de: Q'+ precio_base+ '. \nEl recargo a tu prima será de Q' + recargo_total + '\nEl precio final de la prima será de: Q' + precio_final);

        } else {
            alert('Lo sentimos, debes ser mayor de edad para optar a un seguro');
        }
        var salir = prompt("Escribe  'salir' si deseas finalizar la cotización o 'continuar' cancelar si deseas continuar");
            if (salir.toLocaleLowerCase() === 'salir') {
                break; 
            }
        }
