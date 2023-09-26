document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search-input");
    const wordList = document.getElementById("word-list");
    const showDefinitionButton = document.getElementById("show-definition");
    const definitionArea = document.getElementById("definition-area");
    
    const dictionary = {
        "fútbol": "Deporte que se juega con un balón y dos equipos de 11 jugadores cada uno.",
        "baloncesto": "Deporte de equipo que se juega con una pelota y dos canastas en un campo rectangular.",
        "tenis": "Deporte de raqueta que se juega en una cancha rectangular dividida por una red.",
        "natación": "Actividad deportiva que implica nadar en piscinas, ríos o mares.",
        "atletismo": "Deporte que incluye diversas disciplinas como carreras, saltos y lanzamientos.",
        "ciclismo": "Deporte que involucra montar en bicicleta, ya sea en carretera o montaña.",
        "golf": "Deporte en el que los jugadores intentan golpear una pelota en un hoyo en el menor número de golpes.",
        "béisbol": "Deporte de equipo en el que dos equipos compiten por anotar carreras golpeando una pelota con un bate.",
        "hockey": "Deporte de equipo que se juega en una pista con patines y un disco.",
        "boxeo": "Deporte de combate en el que dos personas se enfrentan en un cuadrilátero.",
        "esgrima": "Deporte en el que los competidores usan espadas para marcar puntos tocando al oponente.",
        "ajedrez": "Juego de mesa estratégico que se juega en un tablero con piezas.",
        "karate": "Arte marcial que implica movimientos de golpeo y patadas.",
        "taekwondo": "Arte marcial que se enfoca en patadas altas y movimientos acrobáticos.",
        "kickboxing": "Deporte de combate que combina técnicas de boxeo y patadas.",
        "programación": "Proceso de escribir y diseñar un programa de computadora para realizar tareas específicas.",
        "algoritmo": "Conjunto de pasos ordenados que describe la solución a un problema o tarea.",
        "base de datos": "Conjunto organizado de datos que se almacenan y gestionan electrónicamente.",
        "ciberseguridad": "Prácticas y tecnologías utilizadas para proteger sistemas y datos en línea.",
        "inteligencia artificial": "Rama de la informática que se enfoca en crear sistemas que pueden realizar tareas que requieren inteligencia humana.",
        "lenguaje de programación": "Conjunto de instrucciones que se utilizan para escribir programas de computadora.",
        "red de computadoras": "Conjunto de dispositivos interconectados que se utilizan para compartir recursos y comunicarse.",
        "hardware": "Componentes físicos de una computadora, como procesadores y memoria.",
        "software": "Programas y aplicaciones informáticas que se ejecutan en una computadora.",
        "código fuente": "Texto legible por humanos que describe las instrucciones de un programa de computadora.",
        "encriptación": "Proceso de convertir datos en un formato ilegible para proteger la privacidad.",
        "firewall": "Software o hardware diseñado para proteger una red de computadoras de amenazas externas.",
        "servidor": "Computadora que proporciona servicios, como almacenamiento de archivos o sitios web, a otras computadoras en una red.",
        "programador": "Persona que escribe código de programación para crear software.",
        "desarrollo web": "Proceso de crear y mantener sitios web y aplicaciones web.",
        "URL": "Uniform Resource Locator, una dirección web que se utiliza para acceder a recursos en línea.",
        "correo electrónico": "Método de comunicación digital que permite enviar mensajes a través de Internet.",
        "navegador web": "Aplicación que se utiliza para acceder a sitios web en Internet.",
        "sistema operativo": "Software que gestiona el hardware y permite que otros programas se ejecuten en una computadora.",
        "algoritmo de búsqueda": "Método utilizado para encontrar información específica en grandes conjuntos de datos.",
        "base de datos relacional": "Tipo de base de datos que organiza la información en tablas relacionadas entre sí.",
        "copia de seguridad": "Copia de los datos para protegerlos contra la pérdida o el daño.",
        "ciberataque": "Ataque malicioso realizado por personas o software en línea.",
        "programación orientada a objetos": "Paradigma de programación que utiliza objetos y clases para organizar el código.",
        "lanzamiento de software": "Etapa en la que un programa se pone a disposición del público.",
        "interfaz de usuario": "Parte de un programa que permite a los usuarios interactuar con él.",
        "nube (cloud) computing": "Provisión de servicios informáticos a través de Internet.",
        "analítica de datos": "Proceso de examinar y analizar datos para obtener información útil.",
        "hacker": "Persona que busca vulnerabilidades en sistemas informáticos.",
        "dominio web": "Dirección única que se utiliza para acceder a un sitio web en Internet.",
        "red social": "Plataforma en línea que permite a las personas conectarse y comunicarse.",
        "cifrado de extremo a extremo": "Técnica de seguridad que protege la información durante su transmisión de un extremo a otro.",
        "sistema de archivos": "Forma en que se organizan y almacenan los archivos en una computadora.",
        "lenguaje de marcas": "Lenguaje que se utiliza para estructurar y formatear documentos, como HTML para páginas web.",
        "inteligencia de negocios": "Uso de datos para ayudar en la toma de decisiones empresariales.",
        "aplicación móvil": "Programa diseñado para funcionar en dispositivos móviles como teléfonos inteligentes y tabletas.",
        "reproductor de medios": "Software o dispositivo que reproduce archivos de audio y video.",
        "correo electrónico": "Método de comunicación digital que permite enviar mensajes a través de Internet.",
        "dirección IP": "Identificador numérico asignado a cada dispositivo en una red.",
        "ciclo de vida del desarrollo de software": "Proceso de desarrollo de software que incluye planificación, diseño, implementación y mantenimiento.",
        "inteligencia artificial": "Rama de la informática que se enfoca en crear sistemas que pueden realizar tareas que requieren inteligencia humana.",
        "plataforma de redes sociales": "Sitio web o aplicación que permite a las personas conectarse y comunicarse.",
        "tecnología": "Conjunto de conocimientos y técnicas que se utilizan para producir bienes y servicios.",
        "internet": "Red global de computadoras interconectadas que permite el acceso a información y servicios en línea.",
        "sitio web": "Página o conjunto de páginas en Internet que forman una unidad informativa o de entretenimiento.",
        "código": "Conjunto de instrucciones que se utilizan en programación para realizar una tarea específica.",
        "datos": "Información procesable o información almacenada en una computadora.",
        "seguridad informática": "Prácticas y tecnologías utilizadas para proteger sistemas de información y datos.",
        "navegación web": "Acto de moverse de una página web a otra utilizando un navegador de Internet.",
        "virus informático": "Programa malicioso diseñado para dañar o robar información de una computadora.",
        "interfaz gráfica de usuario": "Entorno visual que permite a los usuarios interactuar con programas informáticos.",
        "archivos adjuntos": "Archivos enviados junto con un correo electrónico u otro mensaje digital.",
        "procesador de texto": "Programa de software utilizado para crear y editar documentos de texto.",
        "ciberespacio": "Entorno digital en el que se desarrolla la actividad en línea.",
        "hardware": "Componentes físicos de una computadora, como procesadores y memoria.",
        "software": "Programas y aplicaciones informáticas que se ejecutan en una computadora.",
        "algoritmo": "Conjunto de pasos ordenados que describe la solución a un problema o tarea.",
        "código fuente": "Texto legible por humanos que describe las instrucciones de un programa de computadora.",
        "copyleft": "Licencia que permite la redistribución y modificación de software siempre y cuando las mismas libertades se mantengan en las versiones modificadas.",
        "ciberseguridad": "Prácticas y tecnologías utilizadas para proteger sistemas y datos en línea.",
        "ciberataque": "Ataque malicioso realizado por personas o software en línea.",
        "piratería informática": "Actividad ilegal de copiar, distribuir o utilizar software sin permiso.",
        "bit": "La unidad más pequeña de información en una computadora, que puede tener los valores 0 o 1.",
        "byte": "Unidad de medida de almacenamiento que generalmente consta de 8 bits.",
        "navegador web": "Aplicación que se utiliza para acceder a sitios web en Internet."
    };

    for (const word in dictionary) {
        const listItem = document.createElement("li");
        listItem.textContent = word;
        wordList.appendChild(listItem);
    }

    // Función para mostrar la definición al hacer doble clic en una palabra
    wordList.addEventListener("dblclick", function (e) {
        const selectedWord = e.target.textContent;
        if (dictionary[selectedWord]) {
            definitionArea.value = dictionary[selectedWord];
        }
    });

    // Función para mostrar la definición al hacer clic en el botón
    showDefinitionButton.addEventListener("click", function () {
        const selectedWord = searchInput.value.toLowerCase();
        if (dictionary[selectedWord]) {
            definitionArea.value = dictionary[selectedWord];
        } else {
            definitionArea.value = "La palabra no se encuentra en el diccionario.";
        }
    });

    // Filtrar palabras a medida que se escribe en el cuadro de búsqueda
    searchInput.addEventListener("input", function () {
        const searchText = searchInput.value.toLowerCase();
        const words = wordList.getElementsByTagName("li");

        for (const word of words) {
            const wordText = word.textContent.toLowerCase();
            if (wordText.includes(searchText)) {
                word.style.display = "block";
            } else {
                word.style.display = "none";
            }
        }
    });
});
