----

# Project Rules

(no me preguntes por que escribi esto en ingles... me salio del alma)
Everytime you clone the repo to your local directory you need to:

- have node installed
- run npm install to update/ install the corresponding project dependencies
- no need to push node_modules to git

----

# Testing Framework que vamos a estar usando
## Mocha & Selenium Webdriver

- npm install mocha
- npm install selenium-webdriver

----

# Page Oject Model (POM)

Para mi, "POM" significa la metodologia o forma de organizar el proyecto de forma tal que sea facil de mantener y de reutilizar. 
Esto pasa en concreto cuando en el directorio "pages"(*1) se comienzan a crear clases que se corresponden con cada pagina que se quiere testear. Y por otro lado, en la carpeta "tests"(*2) se crea la suite de tests de esa pagina independientemente del archivo anterior.
Ademas de esas dos carpetas, tambien cree una que se llama "utilities"... realmente creo que esta es independiente del POM pero suele usarse mucho para -como lo sugiere su nombre- "utilidades" que vamos a tener que usar constantemente dentro del proyecto.


(*1) se llama "pages" por comodidad, se podria llamar "juancar" tambien pero sigue el patron POM porque al fin de cuenta, se le daria el mismo uso. Por lo general se llama "pages" pero sino puede llamarse de alguna forma similar.

(*2) se llama tests tambien por comodidad.. tambien se podria nombrar ese directorio "juancharls" si uno quisiera, pero por cuestion de facil ubicacion se suele nombrar asi o algo por estilo


  
