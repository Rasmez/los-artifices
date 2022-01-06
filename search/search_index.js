const local_index = {"config":{"indexing":"full","lang":["es"],"min_search_length":3,"prebuild_index":false,"separator":"[\\s\\-]+"},"docs":[{"location":"index.html","text":"Los Artifices \u00bfQuienes somos? Somos un gremio de artesanos en el MMORPG T\u00e1ctico Wakfu, en el servidor internacional Rubilax. Ejemplo de Item en lista lorem ipsum.","title":"Inicio"},{"location":"index.html#los-artifices","text":"","title":"Los Artifices"},{"location":"index.html#quienes-somos","text":"Somos un gremio de artesanos en el MMORPG T\u00e1ctico Wakfu, en el servidor internacional Rubilax. Ejemplo de Item en lista lorem ipsum.","title":"\u00bfQuienes somos?"},{"location":"lag_fix.html","text":"Resolver juego inestable o con \"pegadas","title":"Resolver juego inestable o con \"pegadas"},{"location":"lag_fix.html#resolver-juego-inestable-o-con-pegadas","text":"","title":"Resolver juego inestable o con \"pegadas"},{"location":"ram_fix.html","text":"Resolver juego inestable o con \"pegadas\" El 99.9% de los problemas de inestabilidad y \"pegadas\" de Wakfu proviene de la insuficiencia de recursos, es decir, falta de poder de procesador (tanto CPU y GPU) y memoria RAM disponible, aparte por su supuesto de la hit\u00f3ria mala optimizaci\u00f3n y manejo \"basura\" de Java y de la falta de atenci\u00f3n que ha tenido la empresa (Ankama Games) al juego, por desgracia esto nos afecta a todos de forma distinta y es dif\u00edcil saber que hacer en cada situaci\u00f3n ya que cada PC es distinta, y dem\u00e1s. La soluci\u00f3n mas obvia es, por consecuencia, asignar mas recursos al juego de los que vienen configurados por defecto, y de esta forma solventar el problema hasta que la empres se digne a tomar cartas en el asunto o el juego sea reprogramado en otro lenguaje. Para los imb\u00e9ciles, ne\u00f3fitos y Yopukas, aqu\u00ed les va el tutorial: Abre el Ankama Launcher y ve a la pesta\u00f1a de WAKFU Haz click en el bot\u00f3n \u26ed Opciones del juego que se encuentra debajo del bot\u00f3n JUGAR Activa la opci\u00f3n Mostrar configuraciones avanzadas en la primera caja de texto ( Java XMS ), borra la cifra por defecto (200m) y reemplazala por al menos 512m En la segunda caja de texto ( Java XMX ) , reemplaza el valor por defecto (512m) por al menos 768m Solo tocar si sabes que rayos estas haciendo, YOPUKAS DE LA AUDIENCIA, ALEJENSE, CUENTEN HASTA 10 Y SIGAN ALEJ\u00c1NDOSE En la tercera caja de texto, reemplaza los valores por defecto -XX:+UnlockExperimentalVMOptions -XX:+UseG1GC -XX:G1NewSizePercent=20 -XX:G1ReservePercent=20 -Djava.net.preferIPv4Stack=true -Dsun.awt.noerasebackground=true -Dsun.java2d.noddraw=true -Djogl.disable.openglarbcontext Por esto: -XX:+UnlockExperimentalVMOptions -XX:+UseG1GC -XX:G1NewSizePercent=20 -XX:G1ReservePercent=20 -Djava.net.preferIPv4Stack=true -Dsun.awt.noerasebackground=true -Dsun.java2d.noddraw=true -Djogl.disable.openglarbcontext -d64 Nota: Esta modificaci\u00f3n s\u00f3lo es v\u00e1lida para sistemas de 64 bits, si no estas seguro de tu sistema, no toques esto. Si por alguna raz\u00f3n el juego deja de iniciarse, realiza las siguientes pruebas una por una (es decir, haz el cambio, prueba, si funciona bien, sino, prueba el siguiente): Cierra el juego y el lanzador por completo Revisa que los cambios fueron realizados siguiendo las instrucciones Desactiva las opciones avanzadas y prueba iniciar el juego nuevamente Probablemente tu equipo no tiene suficientes recursos, baja el los valores de memoria Vuelve a los valores por defecto para las 2 variables de memoria (200m y 512m) Si el problema persiste, desactiva las opciones por completo, por una raz\u00f3n u otra esta optimizaci\u00f3n no se puede usar en tu equipo, consulta a un especialista (como yo por ejemplo, eso si, te voy a cobrar #CuentasClaras, tranquilo, es poco, probablemente unas pocas kamas, euros, dolares o lo que sea tu moneda local)","title":"Resolver juego inestable o con \"pegadas\""},{"location":"ram_fix.html#resolver-juego-inestable-o-con-pegadas","text":"El 99.9% de los problemas de inestabilidad y \"pegadas\" de Wakfu proviene de la insuficiencia de recursos, es decir, falta de poder de procesador (tanto CPU y GPU) y memoria RAM disponible, aparte por su supuesto de la hit\u00f3ria mala optimizaci\u00f3n y manejo \"basura\" de Java y de la falta de atenci\u00f3n que ha tenido la empresa (Ankama Games) al juego, por desgracia esto nos afecta a todos de forma distinta y es dif\u00edcil saber que hacer en cada situaci\u00f3n ya que cada PC es distinta, y dem\u00e1s. La soluci\u00f3n mas obvia es, por consecuencia, asignar mas recursos al juego de los que vienen configurados por defecto, y de esta forma solventar el problema hasta que la empres se digne a tomar cartas en el asunto o el juego sea reprogramado en otro lenguaje. Para los imb\u00e9ciles, ne\u00f3fitos y Yopukas, aqu\u00ed les va el tutorial: Abre el Ankama Launcher y ve a la pesta\u00f1a de WAKFU Haz click en el bot\u00f3n \u26ed Opciones del juego que se encuentra debajo del bot\u00f3n JUGAR Activa la opci\u00f3n Mostrar configuraciones avanzadas en la primera caja de texto ( Java XMS ), borra la cifra por defecto (200m) y reemplazala por al menos 512m En la segunda caja de texto ( Java XMX ) , reemplaza el valor por defecto (512m) por al menos 768m Solo tocar si sabes que rayos estas haciendo, YOPUKAS DE LA AUDIENCIA, ALEJENSE, CUENTEN HASTA 10 Y SIGAN ALEJ\u00c1NDOSE En la tercera caja de texto, reemplaza los valores por defecto -XX:+UnlockExperimentalVMOptions -XX:+UseG1GC -XX:G1NewSizePercent=20 -XX:G1ReservePercent=20 -Djava.net.preferIPv4Stack=true -Dsun.awt.noerasebackground=true -Dsun.java2d.noddraw=true -Djogl.disable.openglarbcontext Por esto: -XX:+UnlockExperimentalVMOptions -XX:+UseG1GC -XX:G1NewSizePercent=20 -XX:G1ReservePercent=20 -Djava.net.preferIPv4Stack=true -Dsun.awt.noerasebackground=true -Dsun.java2d.noddraw=true -Djogl.disable.openglarbcontext -d64 Nota: Esta modificaci\u00f3n s\u00f3lo es v\u00e1lida para sistemas de 64 bits, si no estas seguro de tu sistema, no toques esto. Si por alguna raz\u00f3n el juego deja de iniciarse, realiza las siguientes pruebas una por una (es decir, haz el cambio, prueba, si funciona bien, sino, prueba el siguiente): Cierra el juego y el lanzador por completo Revisa que los cambios fueron realizados siguiendo las instrucciones Desactiva las opciones avanzadas y prueba iniciar el juego nuevamente Probablemente tu equipo no tiene suficientes recursos, baja el los valores de memoria Vuelve a los valores por defecto para las 2 variables de memoria (200m y 512m) Si el problema persiste, desactiva las opciones por completo, por una raz\u00f3n u otra esta optimizaci\u00f3n no se puede usar en tu equipo, consulta a un especialista (como yo por ejemplo, eso si, te voy a cobrar #CuentasClaras, tranquilo, es poco, probablemente unas pocas kamas, euros, dolares o lo que sea tu moneda local)","title":"Resolver juego inestable o con \"pegadas\""},{"location":"welcome.html","text":"Bienvenid@ a la LOCURA Esto es un texto de prueba.","title":"Bienvenid@"},{"location":"welcome.html#bienvenid-a-la-locura","text":"Esto es un texto de prueba.","title":"Bienvenid@ a la LOCURA"}]}; var __search = { index: Promise.resolve(local_index) }