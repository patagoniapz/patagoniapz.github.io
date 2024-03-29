Title: Preguntas frecuentes
Slug: faq

# General

- **¿El servidor es pvp o piensa ser pvp en algún momento?**

No, el servidor nació con la idea de ser una comunidad cooperativa, la cual, luche contra las hordas de los infectados, consiguiendo todo tipo de materiales, para proteger sus refugios. Dado que todos los jugadores pueden verse en el mapa y cuentan con la posibilidad de tener una zona ampliada más grande, que la que el juego permite, no estaríamos en condiciones de cambiar el servidor a pvp. Si se formara una comunidad más grande, y se pudiera mantener un segundo servidor que fuera independiente del actual, y se consiga gente que lo pueda administrar, a pesar de que va a ser totalmente anárquico, quizás, si se cumplen esas condiciones, se podría llegar a formar un segundo reino, que no sería el actual.

- **¿Se pueden añadir más slot?**

Según lo que investigamos, cada slot en el servidor, requiere de 512 MB de RAM. La máquina actual, cuenta con 8 cores y 20 GB de RAM. Siendo que tenemos 32 slot, eso sería 16 GB de RAM solo para las conexiones, quedándole al servidor unos 4 GB disponibles. Por una recomendación de los desarrolladores del juego, si bien, el límite de jugador puede llegar a ser 100, ellos no recomiendan más de 32 slot.

```
# Número máximo de jugadores que pueden estar en el servidor a la vez. Esto excluye a los administradores.
# ADVERTENCIA: Un número de jugadores en el servidor superior a 32 puede provocar una mala transmisión del mapa y desincronización. Por favor, avance con precaución.
Mínimo=1 Máximo=100 Por defecto=32
MaxPlayers=32
```

- **¿Se pueden añadir mods?**

Siempre se pueden añadir mods, pero no es la idea del servidor. El servidor nació siendo vanilla, y se añadieron algunas pequeñas cosas, para poder solventar, lo que es finito, por ejemplo, autos, piezas de motor, generadores, y otros tipos de creaciones, que se van a ir añadiendo a el mod propio, creado para el servidor. Además, depender de otros mod, requiere que los dueños de los mismos, los mantengan actualizaciones, y puede ocurrir que en algún momento, los dueños cambien algún parámetro dentro del mod, y el mismo ya no se adapte a lo que el servidor quiere ofrecer.

- **¿Está permitido el robo?**

No, somos una comunidad pve. Eso significa, que no estamos viendo, o a la expectativa que se libere el refugio de una persona, para ir a buscar todos los materiales que el mismo fue guardando durante todo ese tiempo. Eso no significa, que si el refugio se libera por inactividad (lo cual ocurre luego de 7 días que el dueño del refugio no entra al servidor) se puedan tomar esos items, y que puedan ser aprovechados por otra persona.

- **Habilitar el chat el de voz**

Para habilitar el chat de voz, tenes que hacer una serie de pasos, que mejor que explicarlo en texto, es que mires el video del canal de YouTube, donde se explican esos temas. Te dejo el enlace al [video](https://youtube.com/watch?v=nkJvy5DXoc0&si=EnSIkaIECMiOmarE&t=124), en el tiempo en el que empieza a hablar sobre como habilitar el micrófono. Te dejo algunas imágenes que te pueden ayudar, sin embargo, es mejor ver el video. Dado que se explica todo pasó por paso.

![20230224184734_1](https://user-images.githubusercontent.com/2810187/221299805-2692771f-c60d-4c0b-bcc6-adb1b11aab92.jpg)

![20230224184744_1](https://user-images.githubusercontent.com/2810187/221299832-8926dc5e-30b4-4469-af94-7022e3d36bf7.jpg)

![20230224184752_1](https://user-images.githubusercontent.com/2810187/221299863-d6ab07ae-a68b-461b-a6e3-9641873ff099.jpg)

- **Tipos de chat dentro del juego**

Dentro del juego, existen varios tipos de chat disponibles.

- `/say mensaje` habla en el lugar.
- `/yell mensaje` habla en el lugar, pero es como un grito.
- `/all mensaje` se lo envía a todo el servidor.
- `/whisper usuario mensaje` manda un mensaje personal a alguien.

- **¿Cómo crear facciones?**

Para crear facción, tenes que acceder al menú de la izquierda, buscar el icono que tiene la palabra CLIENT y luego seleccionar la opción de facciones.

![20230224185455_1](https://user-images.githubusercontent.com/2810187/221300663-5e43e88f-eb61-419e-bcf3-fbd5677ae729.jpg)

![20230224185503_1](https://user-images.githubusercontent.com/2810187/221300751-02d25ded-faf6-4993-a8de-a8cf3271a76a.jpg)

- **Respawn de loot**

El respawn de loot, se lleva a cabo en contenedores que alguna vez hayan sido limpiados por alguien. Si un contenedor, nunca fue vaciado, este tendrá siempre el mismo loot. Les recomiendo, que tiren al suelo todo lo que no les sirve, para que el servidor lo borre, y de esa forma, consigan nuevo loot cuando se respawnee el mismo. Tienen que tener también en cuenta, que algunos edificios, por problemas del juego, no pueden respawnee el loot de manera natural, por lo que los estamos identificando, para poder hacer que aparezca el loot nosotros.

**El respawn actualmente, es cada 120 horas ingame | 5 días ingame. Lo cual debería de ser 10 horas reales.**

- **¿Cómo se cuánto tiempo llevo sobrevivido?**

Para saber el tiempo que llevas sobrevivido, basta con tener un reloj digital equipado.

Luego te diriges a la parte donde aparece la información de tu personaje.

Y debajo de la cantidad de zombies asesinados, podrás ver los días que lleva sobrevivido tu personaje.

![20230224190100_1](https://user-images.githubusercontent.com/2810187/221301611-429890dd-a205-4a8c-8d31-9c028efd3aa6.jpg)

# Refugio

- **¿Cuánto tiempo tengo que sobrevivir para reclamar el refugio?**

De momento, para reclamar el refugio, tenes que sobrevivir 48 horas dentro del juego.

Eso equivale a 4 horas de la vida real. 1 día de juego, son 2 horas reales.

```
-- Por defecto=1 hora
-- 1 = 15 minutos
-- 2 = 30 minutos
-- 3 = 1 hora
-- 4 = 2 horas
...
DayLength = 4,
```

- **¿Cómo hago para reaparecer en el refugio?**

Una vez que tengas un refugio, podrás encontrar dentro del menú izquierdo, dentro de la opción CLIENT, una opción nueva, que dice refugio y acceder a él. También podrás hacerlo, dentro del refugio, dándole click derecho al suelo y en el menú elegir la opción de VER REFUGIO. En él, podrás añadir amigos, y también te aparecerá en la parte inferior izquierda, una opción para tildar que dice: “reaparecer en el refugio”. De esa forma, al morir, podrás aparecer dentro de tu casa. Pero tendrás que dejar todos los ítems antes de morir, porque si no, en caso contrario, los vas a perder o tendrás que volver a recuperarlos persiguiendo al zombie que los tiene.

- **¿Cómo hago para expandir los límites del refugio?**

Los refugios por defecto, ocupan la casa, y 2 cuadrados en cada dirección de la misma (NORTE, SUR, ESTE Y OESTE). Dependiendo de la casa, los cuadrados exteriores, pueden tener forma de cuadrado, valga la redundancia, o bien, pueden tener otra forma, en caso de que la casa, este un poco extendida en alguno de los lados. Pero siempre son 2 cuadrados, desde la pared de la casa, en cada una de las direcciones anteriormente mencionadas.

- **¿Con quién tengo que hablar para ampliar mi refugio?**

Hasta hace poco tiempo, con solamente mandarle un mensaje al administrador, era más que suficiente para poder coordinar la extensión del refugio. Ahora, para poder conseguirlo, se necesitan farmear puntos, viendo los directos de los creadores de contenido. ¿Por qué se cambió esto? Los refugios por defecto, duran 7 días desde la última vez que se conectó el dueño del mismo, es decir, si vos tenes un refugio y no te conectaste en 7 días, cuando vuelvas a entrar, no vas a tener ni el refugio, ni quizás, nada de las cosas que había dentro de él. Entonces, como era algo sencillo de conseguir, no importaba si lo perdían o no, total, con mandar un mensaje, volvían a solicitar la extensión y listo. Ahora, para tener la extensión, necesitan conseguir puntos en los directos de los creadores de contenido. De esa forma, lo que buscamos, es que se valore más el refugio y que tengan más precaución a la hora de no conectarse, sabiendo que si no lo hacen, pierden la extensión y tendrán que volver a farmear los puntos nuevamente.
