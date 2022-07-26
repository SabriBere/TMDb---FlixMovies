# TMDB

![logop5](https://p5-hall-of-fame.s3.amazonaws.com/p5logo.png)

### Objetivos

En este proyecto se creó una aplicación que muestra películas y programas de televisión. Para eso, consume la información desde la API [_The Movie Database_ (TMDB)](https://www.themoviedb.org/).

Para armar el _front-end_, se utlizaron tecnologías como Bootstrap, css, html y react.

Para el _back-end_, se configuro una base de datos para construir las funcionalidades detalladas a continuación.

A su vez la información de los usuarios **persiste** en el _back-end_.

### ¿Qué contiene la Aplicación?

👩‍🏫👨‍🏫 Para armar la aplicación se trabajo con el [**método MoSCoW**](https://www.itdo.com/blog/moscow-que-es-y-como-priorizar-en-el-desarrollo-de-tu-aplicacion/), una técnica que sirve para determinar prioridades de forma estratégica y ordenada.

En este sentido, se hizo foco primero en las funcionalidades _Must Have_ (de prioridad alta) antes de avanzar a funcionalidades _Should Have_ (prioridad media).

### Requisitos

👩‍🏫👨‍🏫 Para este proyecto, el orden utilizado para completar las tareas fue de: **prioridad alta** y **media**, considerandose las de **prioridad normal** y **baja** como un desafío para desarrollar dentro del portfolio.

📕 **Prioridad Alta** (_Must Have_)

- Buscar y listar películas.
- Ver los detalles de una película o programa de televisión.
- Crear usuarios.
- _Loguear_ y _desloguear_ usuarios.

📘 **Prioridad Media** (_Should Have_)

- Agregar una película o programa a una lista de favoritos.
- Ver una lista de favoritos.
- Remover una película o programa de una lista de favoritos.
- Diferenciar las rutas de _front-end_ para películas y programas de televisión.

📗 **Prioridad Normal** (_Could Have_)

- Buscar usuarios.
- Ver el perfil de un usuario específico (con sus películas o programas favoritos).
- Mantener sesión abierta ante un cierre del _browser_ o `refresh`.

📓 **Prioridad Baja** (_Won't Have_)

- _Full responsive_.
- _Loguear_ usuarios a través de su cuenta en Google.

### Organización de las carpetas. 


src: Carpeta que aloja el código fuente del front-end de la aplicación.
assets: Imágenes y otros archivos estáticos.
components: Componentes con lógica o elementos propios de una vista que no reutilizarás. Por ejemplo: navbar o sidebar.
commons: Componentes reutilizables.
hooks: Custom Hooks.
store: Todo lo relacionado con Redux.
utils: Funciones genéricas.


api: Carpeta que aloja el código fuente del back-end de la aplicación.
models: Modelos de la base de datos.
controllers: Controladores de las rutas.
config: Cualquier estructura de configuración que pueda ir aislada como autenticación o conexiones a la DB.
routes: Los archivos de rutas.
utils: Funciones genéricas.
