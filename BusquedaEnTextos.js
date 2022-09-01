//Algoritmo de Busqueda en texto de Fuerza bruta

const PromptSync = require("prompt-sync");
const prompt = require("prompt-sync")();



texto = prompt("Ingresa un texto: ");
console.log(texto);
arreglo = texto.split("");
console.log(arreglo.length);
console.log(arreglo);

patron = prompt("Ingresa un texto: ");
console.log(patron);
arreglo2 = patron.split("");
console.log(arreglo2.length);
console.log(arreglo2);



for (i = 0; i < texto.length; i++) 
{

    if (arreglo[i] == arreglo2[0])
    {
                
        for(j = 0; j < patron.length; j++)
        {
            if(arreglo[i+j] == arreglo2[j])
            {
                console.log("si");
                console.log(arreglo[i+j]);
                console.log("posicion: " + j);
            }
                    
        }
    }
    else
    {
    console.log("no");
    }  
        
}
