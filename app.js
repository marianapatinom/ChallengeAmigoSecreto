// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Variables globales
const listaAmigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    // Obtener el valor del input
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();
    
    // Validar que el campo no esté vacío
    if (nombreAmigo === '') {
        alert('Por favor, ingresa un nombre válido');
        return;
    }
    
    // Agregar el nombre a la lista de amigos
    listaAmigos.push(nombreAmigo);
    
    // Actualizar la lista visual de amigos
    actualizarListaAmigos();
    
    // Limpiar el campo de entrada
    inputAmigo.value = '';
    
    // Enfocar nuevamente el campo de entrada para facilitar la adición de más nombres
    inputAmigo.focus();
}

// Función para actualizar la lista visual de amigos
function actualizarListaAmigos() {
    const listaElemento = document.getElementById('listaAmigos');
    
    // Limpiar la lista actual
    listaElemento.innerHTML = '';
    
    // Agregar cada amigo a la lista
    listaAmigos.forEach((amigo, index) => {
        const elementoLi = document.createElement('li');
        elementoLi.textContent = amigo;
        elementoLi.className = 'name-item';
        listaElemento.appendChild(elementoLi);
    });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    const resultadoElemento = document.getElementById('resultado');
    
    // Validar que haya al menos un amigo en la lista
    if (listaAmigos.length === 0) {
        alert('Debes agregar al menos un amigo para realizar el sorteo');
        return;
    }
    
    // Mostrar un efecto de "sorteando" antes de mostrar el resultado final
    mostrarEfectoSorteo(resultadoElemento);
}

// Función para mostrar un efecto de sorteo antes de mostrar el resultado final
function mostrarEfectoSorteo(elementoResultado) {
    // Limpiar resultados anteriores
    elementoResultado.innerHTML = '';
    
    // Crear elemento para mostrar el "sorteo en progreso"
    const sorteandoElemento = document.createElement('li');
    sorteandoElemento.textContent = 'Sorteando...';
    sorteandoElemento.className = 'result-item sorting';
    elementoResultado.appendChild(sorteandoElemento);
    
    // Array para simular el efecto de sorteo
    const nombresAleatorios = [...listaAmigos];
    let contador = 0;
    const totalIteraciones = 10; // Número de veces que cambiará el nombre antes de mostrar el resultado final
    
    // Función para ir cambiando el nombre mostrado
    const cambiarNombre = () => {
        // Barajar el array
        nombresAleatorios.sort(() => Math.random() - 0.5);
        
        // Actualizar el texto con un nombre aleatorio
        sorteandoElemento.textContent = `Sorteando: ${nombresAleatorios[0]}`;
        
        contador++;
        
        if (contador < totalIteraciones) {
            // Continuar con el efecto
            setTimeout(cambiarNombre, 200);
        } else {
            // Mostrar el resultado final
            mostrarResultadoFinal(elementoResultado);
        }
    };
    
    // Iniciar el efecto de sorteo
    setTimeout(cambiarNombre, 500);
}

// Función para mostrar el resultado final del sorteo
function mostrarResultadoFinal(elementoResultado) {
    // Seleccionar un amigo aleatorio
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSeleccionado = listaAmigos[indiceAleatorio];
    
    // Limpiar el elemento de resultado
    elementoResultado.innerHTML = '';
    
    // Crear y mostrar el resultado final
    const resultadoElemento = document.createElement('li');
    resultadoElemento.textContent = `¡Tu amigo secreto es: ${amigoSeleccionado}!`;
    resultadoElemento.className = 'result-item final';
    elementoResultado.appendChild(resultadoElemento);
}

// Agregar evento para el campo de entrada (permitir presionar Enter para agregar amigo)
document.addEventListener('DOMContentLoaded', () => {
    const inputAmigo = document.getElementById('amigo');
    
    inputAmigo.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            agregarAmigo();
        }
    });
});