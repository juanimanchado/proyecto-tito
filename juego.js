// Función para obtener la opción aleatoria de la computadora
function obtenerOpcionComputadora() {
    var opciones = ["Piedra", "Papel", "Tijera", "Lagarto", "Spock"];
    var indice = Math.floor(Math.random() * 5);
    return opciones[indice];
}

// Función para comparar las opciones y determinar el resultado
function compararOpciones(usuario, computadora) {
    if (usuario === computadora) {
        return "Empate";
    } else if (
        (usuario === "Piedra" && (computadora === "Tijera" || computadora === "Lagarto")) ||
        (usuario === "Papel" && (computadora === "Piedra" || computadora === "Spock")) ||
        (usuario === "Tijera" && (computadora === "Papel" || computadora === "Lagarto")) ||
        (usuario === "Lagarto" && (computadora === "Papel" || computadora === "Spock")) ||
        (usuario === "Spock" && (computadora === "Piedra" || computadora === "Tijera"))
    ) {
        return "¡Ganaste!";
    } else {
        return "¡Perdiste!";
    }
}

// Función principal del juego
function jugar() {
    var opcionUsuario;
    var opcionComputadora;
    var continuarJugando = true;

    while (continuarJugando) {
        do {
            opcionUsuario = prompt("Elige una opción: Piedra, Papel, Tijera, Lagarto o Spock").capitalize();
        } while (!["Piedra", "Papel", "Tijera", "Lagarto", "Spock"].includes(opcionUsuario));

        opcionComputadora = obtenerOpcionComputadora();

        var resultado = compararOpciones(opcionUsuario, opcionComputadora);
        console.log("Tú elegiste: " + opcionUsuario);
        console.log("La computadora eligió: " + opcionComputadora);
        console.log(resultado);

        var continuar = prompt("¿Quieres jugar de nuevo? (Sí/No)").toLowerCase();
        if (continuar !== "sí") {
            continuarJugando = false;
        }
    }
}

// Función para capitalizar la primera letra de una cadena
String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

// Iniciar el juego
jugar();