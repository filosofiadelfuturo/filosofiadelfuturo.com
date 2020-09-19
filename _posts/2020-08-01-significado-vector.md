---
layout: post
title: "El significado y su vector"
date: 2020-08-01
authors: "Joaquín Bardauil"
excerpt: ""
tags: [ia, nlp]
comments: true
image: ""
---

En el campo de la inteligencia artificial, diferentes épocas pueden ser identificadas con la tarea que estaba siendo conquistada por las computadoras. Por ejemplo, en el año 2012 se produjo una ruptura en el campo del procesamiento de imágenes con la publicación del modelo [AlexNet](https://papers.nips.cc/paper/4824-imagenet-classification-with-deep-convolutional-neural-networks.pdf), que superó ampliamente a sus predecesores en la clasificación de imágenes del dataset [ImageNet](http://www.image-net.org). En estas últimas semanas, con la [presentación del modelo GPT-3](https://arxiv.org/abs/2005.14165), la tarea en la que las máquinas lograron resultados sorprendentes fue el procesamiento de lenguaje natural y la generación automática de texto. Pero uno de los conceptos principales sobre los que se basa este modelo -el embedding-, tiene una historia que se remonta algunos años atrás.

Un embedding es una representación vectorial del significado de una palabra, es decir, un conjunto de números reales organizados de una manera particular que permiten que una máquina comprenda relaciones semánticas entre la palabra en cuestión con otras. Para ser construido, una red neuronal procesa grandes volúmenes de texto en los que registra los contextos en los que dicha palabra aparece, y en función de ellos crea el vector correspondiente. Con esta representación, pueden obtenerse resultados como tomar el vector de la palabra “rey”, restarle el vector de “hombre”, sumarle el vector “mujer” y obtener, por último, el vector de “reina”. Además, permite que la computadora, al recibir una palabra como input, prediga cuál es la palabra que más probabilidad tiene de venir a continuación. De esa manera, recibiendo palabras y prediciendo, es que se produce el texto de forma automática.

Este método de representación vectorial mostró su gran potencial en [un artículo de 2013 escrito por un equipo de investigadores de Google](https://arxiv.org/abs/1301.3781). Pero la idea de que el significado de una palabra viene dado por su contexto no es nueva ni propia de la computación, sino que tiene un antecedente en una corriente lingüística conocida como [distribucionalismo](https://es.wikipedia.org/wiki/Distribucionalismo). Entre sus objetivos, se encontraba la tarea antropológica de comprender y reconstruir lenguas desconocidas a partir de la lectura y el análisis de grandes cantidades de texto escrito en dicha lengua, llamados corpus de texto. La hipótesis principal que se sostenía era que, a partir de un criterio de recurrencia, podía identificarse la denominada distribución de un signo lingüístico en función de los contextos en los que ese signo ocurría y que, con esto, podía inferirse su significado.

La historia terminó mostrando ciertas limitaciones del distribucionalismo como teoría del lenguaje en humanxs, en particular con el desarrollo y difusión de la gramática generativa de Chomsky. Sin embargo, algunas de las posturas filosóficas que sostenía el distribucionalismo fueron retomadas tiempo después por algunos filósofos. En 1980, el filósofo estadounidense Saul Kripke publicó un texto en el que propuso una novedosa interpretación de las Investigaciones Filosóficas de Ludwig Wittgenstein. Según Kripke, el punto central de la obra del filósofo alemán es el que él llamó la “paradoja escéptica”, en la cual se critica la idea de que el seguimiento de una regla brinde una justificación en la acción. Por ejemplo, si se me pregunta cuál es el resultado de “2 + 2” yo responderé “4”, y creeré que estoy justificado en hacerlo porque seguí la regla de la suma. Imaginemos que 2 + 2 es una suma que nunca en mi vida había realizado. Dado que yo produje una cantidad finita de su
mas, existen infinitas reglas que coinciden exactamente con mi conducta al respecto de las sumas que yo ya hice, pero que difieren para otros casos. Por lo tanto, yo en realidad no tengo ninguna seguridad de que siempre que seguí la regla para la suma en mi vida, en realidad no seguía una regla diferente que indica que para “2 + 2” el resultado es “5”. Lo que se sigue es que, a fin de cuentas, no estoy justificado a responder “4” en ese caso particular, y, puesto en términos generales, seguir una regla no justifica mis acciones.

Si bien esta paradoja puede parecer inocua, resulta particularmente difícil encontrar una respuesta que no vuelva a caer en los mismos problemas que intenta resolver. Y concluir que toda acción significativa en el lenguaje está injustificada es una consecuencia poco deseable. La solución que da Wittgenstein, y que Kripke reconstruye, apunta precisamente en la misma dirección que la que se señaló a propósito del distribucionalismo. La razón por la que estamos justificados a contestar que 2 + 2 es igual a 4 es que adquirimos la habilidad de realizar ciertos movimientos en un juego del lenguaje, que en el contexto de una comunidad, premia algunas aseveraciones acertadas y castiga a aquellas que no. De todos modos, hubo muchas personas a quienes esta respuesta les resultó insatisfactoria. Por ejemplo, intelectuales como Chomsky continuaron insistiendo con que el lenguaje es una facultad que los humanos poseemos de manera innata, postura que incluso ha sido respaldada por estudios empíricos.
Pero el valor del argumento de Wittgenstein se encuentra más en la paradoja escéptica, que suscita profundas dificultades para cualquiera que quisiera fundamentar el significado en algo que no sean las meras prácticas sociales -y, en consecuencia-, en la distribución de las palabras.

Teniendo esto en cuenta podemos volver a pensar en el concepto de embedding. En [un artículo](https://towardsdatascience.com/neural-networks-and-philosophy-of-language-31c34c0796da) en el que se resumen los fundamentos técnicos del procesamiento del lenguaje natural y de los embeddings se encuentra esta misma relación entre este área de la inteligencia artificial y la filosofía del lenguaje de Wittgenstein. Si la postura de Kripke, Wittgenstein y el distribucionalismo fuese cierta, entonces podríamos decir que aquello que las máquinas extraen de los corpus de texto que procesan es, efectivamente, el significado de las palabras. Inclusive, [esta idea fue defendida recientemente por un filósofo](https://www.youtube.com/watch?v=eh2WleVBrss), quien resumió la postura en un eslogan: el significado es un vector. Si, además, aceptáramos que tener ese significado codificado es en algún sentido equivalente a comprenderlo, esto nos compromete con que la computadora efectivamente entiende los
significados de las palabras.

Esto último resultaría decisivo en la discusión sobre si las máquinas pueden pensar, ya que ser capaces de comprender el significado de una palabra es una característica importante en la atribución general de inteligencia. Pero es claro que, incluso si fuese posible que una máquina pensara, no es este el momento para realizar dicha afirmación. [Algunos resultados](https://minimaxir.com/2020/07/gpt3-expectations/) de GPT-3 apuntan en la dirección contraria, mostrando que el modelo da respuestas que no siempre son las más esperables. Pero en cualquier caso, el punto filosóficamente relevante en esta discusión es que no parece haber buenos argumentos en contra de que el significado sea algo más que aquello que es capturado por los embeddings. De hecho, los argumentos están siendo en defensa de esa postura.

---

##### Los embeddings resultan particularmente interesantes por varias razones. Por un lado, son el desarrollo sobre el que se basan estos modelos, y suscita las preguntas filosóficas que te contamos en este artículo. Pero por otro lado, resultan una herramienta novedosa incluso para problemas en filosofía del lenguaje, y te contamos de un trabajo en donde se las importa desde la filosofía. Otra linea de trabajo en inteligencia artificial en donde se está haciendo uso de embeddings es en el área de razonamiento automático. En [este trabajo](https://arxiv.org/abs/1808.07980) se construyen embeddings pero que, en vez de codificar la distribución de ciertos términos lingüísticos, codifican las inferencias que pueden realizarse a partir del significado de una palabra. Sería interesante ver el resultado de combinar los modelos de procesamiento de lenguaje natural con los modelos de razonamiento automático en la confección de textos, y la discusión que te presentamos en este artículo podría tomar nuevos matices.

##### Te dejamos también algunos links interesantes sobre filosofía y GPT-3
- ##### [En este link](https://dailynous.com/2020/07/30/philosophers-gpt-3/) hay algunas discusiones de filósofxs académicos sobre distintas temáticas de GPT-3
- ##### [Acá](https://twitter.com/raphamilliere/status/1287047986233708546?s=19) un hilo de Twitter con un texto que escribió GPT-3 sobre si las máquinas pueden ser concientes.