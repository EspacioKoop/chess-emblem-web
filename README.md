# Chess Emblem — build web público

Sitio estático generado del juego **Chess Emblem**, un RPG táctico de fantasía por turnos en WebAssembly para navegador de PC, móvil y tablet.

Este repositorio solo contiene el resultado compilado (WebAssembly + runtime web) para servirlo por GitHub Pages. El código fuente en Rust vive en el repositorio privado `EspacioKoop/chess-emblem` y se regenera con `scripts/build_web.sh`.

## Jugar

Abre la URL de GitHub Pages y elige un nivel entre los 15 disponibles. Selecciona una unidad y pulsa una casilla marcada para mover; sobre un rival, el primer toque muestra la previsión de combate (acierto, daño y contraataque) y el segundo confirma el ataque. `W` (o el botón táctil) cambia el arma de la unidad seleccionada una vez por turno; el color del marco indica ventaja, empate o desventaja. `U` deshace tus jugadas paso a paso y `R` rehace la última deshecha. El combate usa precisión, daño y PV; hay contraataque si el defensor alcanza al atacante. El rival puntúa todas sus acciones legales y ejecuta la mejor; los jefes aún no tienen patrones exclusivos.

El progreso de niveles superados y el botín se guarda en `localStorage` del navegador y sobrevive al cerrar la pestaña. Puede instalarse como aplicación web desde el menú del navegador y funciona sin conexión tras la primera carga.
