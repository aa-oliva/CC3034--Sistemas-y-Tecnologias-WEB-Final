# minimal-react-boilerplate
Un boilerplate simple para la clase CC3034
autor: Andres Oliva 
Correo: oli12149@uvg.edu.gt

### Que es un boilerplate?

un framework HTML que permite construir aplicaciones y sitios Web responsive. En otras palabras, es un paquete de desarrollo que entrega al usuario varias soluciones que solo hace falta activar / desactivar para iniciar el proyecto Web.

### boilerplate vs create-react-app

create-react-app es una herramienta con la cual se crea la estructura de una aplicacion web de forma rapida e increiblemente rapida, s una herramienta de aprendizaje fantástica si empiezas desde cero porque toda la magia está oculta para tu vista, solo te concentras en Reaccionar y dejas que la aplicación-crear-reaccionar se haga cargo de los detalles.

Pero realmente es la mejor manera de aprender?
El problema es que muchas veces, no sabemos que es lo que esta pasando detras de esta magia, y cuando necesitamos tener este conocimiento se vuelve tedioso y doloroso.
por eso es buena idea empezar desde 0 con un boilerplate sencillo que uno configura segun las necesidades.

## Para este proyecto se decide desarrollar un boilerplate sencillo con las tecnologias, React, Webpack4, babel7, Express Web Server

# Empezar

## Pre requisitos
* Node JS
* NPM
* Yarn

## Como utilizar este boilerplate
1. Descargar del repositorio o clonelo


2. run command npm install inside root folder app: it will download all the dependencies required to run it

    npm run build : Para Construir la aplicacion
    npm start     : Para correr la aplicacion en el puerto 8080

## Realizar pruebas
`npm run test : Es el comando para realizar las pruebas`


### Babel
 
Babel te permite escribir código con JavaScript, que aún no se admite en la mayoría de los navegadores. talvez has escuchado sobre JavaScript ES6 (ES2015) y más allá. Con Babel, el código se volverá a compilar en JavaScript de vainilla para que todos los    
  navegadores, puedan interpretarlo sin tener implementadas todas las funciones de JavaScript ES6.
 
### Webpack

Webpack nos permite modular nuestro código fácilmente y agruparlo en un solo archivo Javascript. Es compatible con numerosos
  complementos, y es probable que exista un complemento para casi cualquier tarea de compilación que se pueda imaginar.
  
### Babel Loader

  Antes de poder ejecutar Webpack, necesitamos configurarlo para manejar el código ES6 y JSX
  
### Eslint

    En Javascript existen multiples guías de estilo con prestigio como por ejemplo las de Airbnb, Google o Idiomatic. Es estas guías se detallan con mucha precisión la forma de escribir el código, es decir, las reglas a usar.

ESLint dispone de una gran cantidad reglas a comprobar en el proyecto. A partir de la guía de estilo debemos buscar la configuración de reglas ESLint que queremos aplicar. Esta configuración se guarda en el fichero “.eslintrc.json”. En la red existen ya ficheros “.eslintrc.json” con la configuración necesaria para seguir cada una de las guías de estilo más conocidas. ESLint también dispone de una configuración recomendada por ellos. Se puede partir de una de estas configuraciones y realizar pequeñas modificaciones sobre ella.

definir el fichero “.eslintrc.json” en el root y agregar 

{
    "extends" : "eslint:recommended",
    "root": true,
    "rules": {
        "camelcase": 2,
        "space-infix-ops": 2
    }
}

Después de cada regla, el valor “2” significa que una violación supondría un error. Si hubieramos puesto 1 generaría un “warning” y un valor de 0 deshabilitaría la regla.

## Estructura del folder

![estructura](https://github.com/aa-oliva/CC3034--Sistemas-y-Tecnologias-WEB/blob/master/Proyecto%20%23%201%20-%20React%20Boilerplate/minimal-react-boilerplate/estructura.PNG)

La estructura siempre puede variar dependiendo de las necesidades o gusto del programador, en lo personal me gusta mantener separadas los componentes de diseño a los de logica, por lo cual una estructura mas formal seria:

![Estructura 2](https://github.com/aa-oliva/CC3034--Sistemas-y-Tecnologias-WEB/blob/master/Proyecto%20%23%201%20-%20React%20Boilerplate/minimal-react-boilerplate/estructura2.PNG)
