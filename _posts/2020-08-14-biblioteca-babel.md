---
layout: post
title: "¿Y si tuviéramos la Biblioteca de Babel?"
date: 2020-08-15
authors: "Juan Fernández Zaragoza"
excerpt: ""
tags: [datos]
comments: true
image: "biblioteca_babel.svg"
---
En la [Biblioteca de Babel](http://biblio3.url.edu.gt/Libros/borges/babel.pdf) , encontrar un libro es escribirlo.

Recordemos cómo la describe Borges, su escritor (¿descubridor?). Con 410 páginas por libro, 40 renglones por página y 80 símbolos por renglón, esta biblioteca contendría todos los libros escritos por la humanidad, todos aquellos por escribirse, las biografías de todos nosotrxs y una cantidad inmensa de calumnias y de textos sin sentido. ¿Por qué? Por la inmensa cantidad de libros que contiene.

Se construyen de la siguiente manera: tomamos los 23 símbolos del alfabeto junto al espacio, la coma y el punto. Ordenados los símbolos, el primer volumen se construye llenando todos los renglones de todas las páginas del libro con el primero de ellos, supongamos la “a”. El segundo libro se construye casi del mismo modo, llenando todos los símbolos con la “a” excepto el último, que se llena con el segundo símbolo, supongamos la “b”. A continuación, se construye el tercero, que es una tira de “a”s hasta el último elemento, ahora una “c”. Se construyen todos los libros haciendo crecer sólo la última posición, hasta que esta pasa por la “z”, el espacio, la coma y el punto. En este caso, pasamos a construir el libro siguiente, con una “a” en todas las posiciones salvo la penúltima, que pasará a tener una “b”. La construcción de los libros es similar a cómo contamos en el sistema decimal, rellenando con ceros a la izquierda el número: después del 009 escribimos el
010, después del 198 escribimos el 199 y luego el 200. La única diferencia es que en lugar de los 10 símbolos 0 - 9 tenemos los 25 símbolos a - z, coma, punto y espacio, y que en lugar de 3 posiciones contamos con 410 páginas de 40 renglones y 80 símbolos cada una.

De este modo, por fuerza bruta, se construyen todas las combinaciones. La Biblioteca de Babel, continente de todas ellas, tiene escondidos, entre un sinfín de tiras de símbolos impronunciables, los grandes secretos del universo y cada unx de nosotrxs, las mejores novelas factibles de escribir y todos los libros que leímos.

¿Pero cómo encontrar un libro en la biblioteca? ¿Cómo encontrar un libro que estamos buscando? ¿Cómo haríamos para encontrar cualquier libro en la biblioteca? Descartando el azar (que estemos donde estemos, podemos extender el brazo y encontrar el libro que esté enfrente). ¿Cómo puedo hacer, por ejemplo, para encontrar Ficciones, en esa biblioteca, sin de antemano saber dónde está?

Para empezar, la biblioteca debe estar ordenada de alguna manera, de otro modo sería imposible encontrarlo sin recorrer toda la biblioteca. Asumamos que sigue un orden alfabético. En ese caso, si yo quisiera encontrar ficciones, tendría que ir primero a la sección de los libros que comienzan con la misma letra que comienza Ficciones. De entre ellos, a continuación, debería acotar mi búsqueda entre los que siguen con la segunda letra de Ficciones, y así continuar hasta encontrar el libro exacto. Por el tamaño de la biblioteca, y precisamente por el hecho de que todas las combinaciones están presentes, para encontrar un libro necesito de antemano conocerlo por entero. Si las primeras cinco letras de todos los libros fueran diferentes, o si todos los títulos difirieran entre sí, yo podría encontrar cualquier libro conociendo sólo las primeras cinco letras, o conociendo sólo el título, respectivamente.

Cuanta más información hay en la biblioteca, más cuesta encontrar algo en ella. Cuando toda la información posible dentro de sus límites está ahí, encontrar un libro es escribirlo. Ya hemos de tener toda la información del libro disponible para encontrarlo, lo cual se puede visualizar muy bien cuando están ordenados alfabéticamente, en que [cada paso de la búsqueda equivale directamente a escribir un símbolo](https://es.wikipedia.org/wiki/Trie) .

Hoy no tenemos enfrente una biblioteca, pero sí una innumerable cantidad de información. Su gran parte valiosa es ínfima comparada con la enorme cantidad de ruido y sinsentido. Podríamos incluso llegar a pensar que ya está todo dicho, que ya fueron defendidas todas las ideas, que no hay lugar para la originalidad. Muy probablemente hasta esta misma nota, o alguna con pequeñas variaciones, ya esté escrita en otro lado, o hace mucho, inaccesible para mí y mis amigxs. A veces sólo encontramos una idea publicada cuando ya se nos ocurrió ¿cómo íbamos a buscarla antes?

Cuando realmente esté todo dicho, no será el fin de la creatividad. Al contrario. Necesitaremos tanta como el primer día.
Hoy, por suerte, estamos lejos de ese punto. No es cuestión de reinventar la rueda a cada rato. Hay información filtrada, de calidad, hay buenas bases de datos, y por lo tanto seguimos pudiendo hacer de la lectura y el estudio un importantísimo apoyo. Pero no hay que tener miedo a dar el salto y escribir, que a veces hasta es la única manera de encontrar una lectura pertinente. Recordemos siempre que el límite al infinito de la biblioteca es, literalmente, en términos de información, exactamente lo mismo que nada.