Predictor -> HECHO 
Acquire -> Falta por Hacer
Orquestrador -> Falta por Imaginar
UI / API -> FALTA POR IMAGINAR

PREDICCIÓN DE CONSUMO ELÉCTRICO CON ARQUITECTURA DISTRIBUIDA

En esta práctica construiremos una aplicación distribuida que permite predecir el consumo eléctrico en el edificio de la Universidad de Alicante Germán Bernancer. El proyecto se desarrolla en Node.js, empleando una arquitectura de microservicios REST y almacenamiento en MongoDB.

Para el desarrollo del proyecto se usa la metodología de gestión de actividades SCRUM. Un tablero público muestra la información en: https://trello.com/b/pqLWekyD/practica-sd

- Node.js es la base de todos los microservicios del proyecto

- Se usa un sistema de Microservicios, donde cada componente tiene una función bien definida y se comunica con los demás mediante peticiones de red.

- Los microservicios se comunican utilizando una API RESTful.

- Se entrenará un modelo de IA de estructura MLP de manera offline y después se usará para hacer inferencia del gasto eléctrico en el siguiente o próximos días.

- Para el diseño y entrenamiento del modelo se usará Python y las herramientas correspondientes como Numpy, Keras, Tensorflow...

- El Entrenamiento se realizará de forma remota usando la aplicación en la nuble Kaggle que presta temporalmente poder computacional, parecido a Jupyter.

Además de este README.md hay una memoria con TODA la información pertinente.
