# Resolver juego inestable o con "pegadas"

El 99.9% de los problemas de inestabilidad y "pegadas" de Wakfu proviene de la insuficiencia de recursos,
es decir, falta de poder de procesador (tanto CPU y GPU) y memoria RAM disponible, aparte por su supuesto de la hitória mala optimización y manejo "basura" de Java y de la falta de atención que ha tenido la empresa
(Ankama Games) al juego, por desgracia esto nos afecta a todos de forma distinta y es difícil saber que hacer en cada situación ya que cada PC es distinta, y demás. La solución mas obvia es, por consecuencia, asignar mas recursos al juego de los que vienen configurados por defecto, y de esta forma solventar el problema hasta que la empres se digne a tomar cartas en el asunto o el juego sea reprogramado en otro lenguaje.

Para los imbéciles, neófitos y Yopukas, aquí les va el tutorial:

* Abre el **Ankama Launcher** y ve a la pestaña de **WAKFU**

* Haz click en el botón ⛭ **Opciones del juego** que se encuentra debajo del botón **JUGAR**

* Activa la opción **Mostrar configuraciones avanzadas** en la primera caja de texto (**Java XMS**), borra la cifra por defecto (200m) y reemplazala por **al menos 512m**

* En la segunda caja de texto (**Java XMX**) , reemplaza el valor por defecto (512m) por **al menos 768m**

!!! warning "Solo tocar si sabes que rayos estas haciendo, **YOPUKAS DE LA AUDIENCIA, ALEJENSE, CUENTEN HASTA 10 Y SIGAN ALEJÁNDOSE**"

* En la tercera caja de texto, reemplaza los valores por defecto

´´´
-XX:+UnlockExperimentalVMOptions -XX:+UseG1GC -XX:G1NewSizePercent=20 -XX:G1ReservePercent=20 -Djava.net.preferIPv4Stack=true -Dsun.awt.noerasebackground=true -Dsun.java2d.noddraw=true -Djogl.disable.openglarbcontext
´´´

 Por esto:

´´´
-XX:+UnlockExperimentalVMOptions -XX:+UseG1GC -XX:G1NewSizePercent=20 -XX:G1ReservePercent=20 -Djava.net.preferIPv4Stack=true -Dsun.awt.noerasebackground=true -Dsun.java2d.noddraw=true -Djogl.disable.openglarbcontext -d64
´´´

 Nota: Esta modificación sólo es válida para sistemas de 64 bits, si no estas seguro de tu sistema, no toques esto.

Si por alguna razón el juego deja de iniciarse, realiza las siguientes pruebas una por una (es decir, haz el cambio, prueba, si funciona bien, sino, prueba el siguiente):

* Cierra el juego y el lanzador por completo

* Revisa que los cambios fueron realizados siguiendo las instrucciones

* Desactiva las opciones avanzadas y prueba iniciar el juego nuevamente

* Probablemente tu equipo no tiene suficientes recursos, baja el los valores de memoria

* Vuelve a los valores por defecto para las 2 variables de memoria (200m y 512m)

* Si el problema persiste, desactiva las opciones por completo, por una razón u otra esta optimización no se puede usar en tu equipo, consulta a un especialista (como yo por ejemplo, eso si, te voy a cobrar :moneybag: #CuentasClaras, tranquilo, es poco, probablemente unas pocas kamas, euros, dolares o lo que sea tu moneda local)
