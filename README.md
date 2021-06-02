# Cuemby FIFA12 Ultime Team

Cuemby Test es una es una prueba que pretende construir y consumir una replica de la api FIFA 12 Ultime Team permitiendo hacer busqueda de judaores y equipos.

## Comenzando 🚀

Para probar el funcionamiento de nuestro proyecto, podemos realizar la descarga del repositorio ubicado en Github.
* <a href="https://github.com/steven-cruz/cuemby-test"><img src="https://github.com/steven-cruz/cuemby-test/blob/master/docs/img/github.png?raw=true" width="80px"></a>

* Estando ubicados en el GitHub seleccionaremos la opción **Code** el cual se encuentra en un recuadro de color verde, el siguiente paso sera seleccionar la opción **Download ZIP** y este iniciara con la descarga del archivo.

## Despliegue

Cuando la descarga del archivo haya finalizado haremos la descompresión y nos debera quedar una carpeta con el nombre **cuemby-test-master**

### Pre-requisitos 📋

Para poner en marcha el proyecto nos ayudaremos de una consola, en mi caso utilizo el sistema operativo Ubuntu 20.04 pero las instrucciones son las mismas para otros sistemas.

Desde la consola abriremos la ubicación de la carpeta que acabamos de descomprimir, esto lo podemos lograr abriendo la carpeta y luego con clic derecho seleccionamos **Abrir en una terminal** como se muestra a continuación.

![Abrir consola](https://github.com/steven-cruz/cuemby-test/blob/master/docs/img/Selecci%C3%B3n_060.png?raw=true)

El siguiente paso sera abrir el directorio llamado api; primero comprobaremos que la ruta de nuestra consola sea similar a la siguiente:

```
jhonatan@asus:~/Descargas/cuemby-test-master$
```
Para abrir el directorio en mención escribiremos en la consola **cd api** seguido de un enter. Nuestra nueva ruta debe ser similar a la siguiente.

```
jhonatan@asus:~/Descargas/cuemby-test-master/api$
```

### Instalación 🔧

Para que la api pueda ser visible desde un navegador debemos crear un entorno, ya que esta se encuentra en un docker y no permite ser visualizada.

* El primer paso sera construir nuestros contenedores, esto lo haremos con el siguiente comando:

```
sudo docker-compose up --build
```

<img src="https://github.githubassets.com/images/icons/emoji/unicode/26a0.png?v8" width="13px"> **En caso de ser requerida una contraseña la introduciremos**

* Cuando haya terminado, abrimos una nueva terminal y ejecutamos los siguientes comandos:

```
sudo ps
```
_En la información mostrada buscaremos la columna **NAMES**  y veremos en nombre de nuestro contenedor, en nuestro caso es **cuemby-test-master_api_1**_

* El siguiente comando sera:
```
sudo docker exec -it cuemby-test-master_api_1 bash
```
_El comando anterior nos creara una nueva ruta en la consola, ahora pondremos el ultimo comando para terminar de construir nuestra api._

```
npm run extract
```

_El comando anterior recopilara toda la información que utilizaremos en nuestra api y al mismo tiempo la escribirá en una base de datos la cual nos permitirá el manejo de la información_ 
<img src="https://github.githubassets.com/images/icons/emoji/unicode/26a0.png?v8" width="13px"> **Este paso puede tomar un tiempo** <img src="https://github.githubassets.com/images/icons/emoji/unicode/23f3.png?v8" width="13px">

## Ejecutando las pruebas ⚙️

Ahora para poder ver la api en funcionamiento solo debemos abrir el navegador de internet de nuestra preferencia, en el campo de la URL escribiremos lo siguiente:

```
http://localhost:8080/
```

Para iniciar una búsqueda en el campo de **Search** pondremos una palabra o letra clave para obtener los resultados de  los jugadores, como opciones podemos filtrar las búsquedas por orden ascendente o descendente.
<img src="https://github.com/steven-cruz/cuemby-test/blob/master/docs/img/Selecci%C3%B3n_062.png?raw=true">
<img src="https://github.com/steven-cruz/cuemby-test/blob/master/docs/img/Selecci%C3%B3n_061.png?raw=true">

Para poder ver todos los jugadores pertenecientes a determinado equipo debemos cambiar la opción de **Name** por **Team** e introducir el nombre del equipo por completo seguido de enter.
<img src="https://github.com/steven-cruz/cuemby-test/blob/master/docs/img/Selecci%C3%B3n_063.png?raw=true">


### Analice las pruebas end-to-end 🔩

_Explica que verifican estas pruebas y por qué_

```
Da un ejemplo
```

### Y las pruebas de estilo de codificación ⌨️

_Explica que verifican estas pruebas y por qué_

```
Da un ejemplo
```

## Despliegue 📦

_Agrega notas adicionales sobre como hacer deploy_

## Construido con 🛠️

_Menciona las herramientas que utilizaste para crear tu proyecto_

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - El framework web usado
* [Maven](https://maven.apache.org/) - Manejador de dependencias
* [ROME](https://rometools.github.io/rome/) - Usado para generar RSS

## Contribuyendo 🖇️

Por favor lee el [CONTRIBUTING.md](https://gist.github.com/villanuevand/xxxxxx) para detalles de nuestro código de conducta, y el proceso para enviarnos pull requests.

## Wiki 📖

Puedes encontrar mucho más de cómo utilizar este proyecto en nuestra [Wiki](https://github.com/tu/proyecto/wiki)

## Versionado 📌

Usamos [SemVer](http://semver.org/) para el versionado. Para todas las versiones disponibles, mira los [tags en este repositorio](https://github.com/tu/proyecto/tags).

## Autores ✒️

_Menciona a todos aquellos que ayudaron a levantar el proyecto desde sus inicios_

* **Andrés Villanueva** - *Trabajo Inicial* - [villanuevand](https://github.com/villanuevand)
* **Fulanito Detal** - *Documentación* - [fulanitodetal](#fulanito-de-tal)

También puedes mirar la lista de todos los [contribuyentes](https://github.com/your/project/contributors) quíenes han participado en este proyecto. 

## Licencia 📄

Este proyecto está bajo la Licencia (Tu Licencia) - mira el archivo [LICENSE.md](LICENSE.md) para detalles

## Expresiones de Gratitud 🎁

* Comenta a otros sobre este proyecto 📢
* Invita una cerveza 🍺 o un café ☕ a alguien del equipo. 
* Da las gracias públicamente 🤓.
* etc.



---
⌨️ con ❤️ por [Villanuevand](https://github.com/Villanuevand) 😊