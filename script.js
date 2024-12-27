const words = [
    'pikachu', 'bulbasaur', 'charmander', 'squirtle', 'jigglypuff', 'meowth', 'psyduck', 'snorlax', 'dragonite', 'mewtwo', 'mew', 'eevee',
    'vaporeon', 'jolteon', 'flareon', 'espeon', 'umbreon', 'leafeon', 'glaceon', 'sylveon', 'gengar', 'lucario', 'charizard', 'pokeball',
    'great ball', 'ultra ball', 'master ball', 'rare candy', 'potion', 'hyper potion', 'full restore', 'gym badge', 'professor oak', 'team rocket',
    'ash ketchum', 'misty', 'brock', 'pikachu power', 'poke flute', 'poke mart', 'poke center', 'elite four', 'legendary', 'mythical'
    'chikorita', 'cyndaquil', 'totodile', 'feraligatr', 'lanturn', 'espeon', 'umbreon', 'kingdra', 'ho-oh', 'lugia', 'togepi', 'pichu',
    'torchic', 'mudkip', 'treeko', 'blaziken', 'swampert', 'sceptile', 'gardevoir', 'aggron', 'flygon', 'surskit', 'lotad', 'roselia', 'metagross',
    'turtwig', 'chimchar', 'piplup', 'empoleon', 'infernape', 'torterra', 'luxray', 'garchomp', 'lucario', 'dialga', 'palkia', 'giratina', 
    'electivire','snivy', 'tepig', 'oshawott', 'serperior', 'emboar', 'samurott', 'zygarde', 'reshiram', 'zekrom', 'landorus', 'thundurus', 
    'tornadus','froakie', 'chespin', 'fennekin', 'greninja', 'delphox', 'chesnaught', 'hoopa', 'zygarde', 'volcanion', 'xerneas', 'yveltal',
    'rowlet', 'litten', 'popplio', 'decidueye', 'incineroar', 'primarina', 'solgaleo', 'lunala', 'necrozma','grookey', 'scorbunny', 'sobble', 
    'rillaboom', 'cinderace', 'intellion', 'zacian', 'zamacenta', 'eternatus','pueblo paleta', 'pueblo lavanda', 'ciudad celeste', 'pueblo verde',
    'ciudad fucsia', 'ciudad azulona', 'ciudad negra', 'ciudad plateada', 'ciudad corazon', 'ciudad oculta', 'pueblo azafrán', 'pueblo huella', 
    'pueblo espiral', 'ciudad de los sueños', 'ciudad rosa', 'pueblo de los arboles', 'pueblo de la luna', 'ciudad de la torre','pueblo viento', 
    'ciudad camuflaje', 'pueblo de la granja', 'pueblo claro', 'ciudad floral', 'ciudad cristal', 'pueblo joya', 'pueblo del desierto'
];

let palabraAleatoria;
let time = 10;
let score = 0;
const randomWordElement = document.getElementById('randomWord');
const textInput = document.getElementById('text');
const timeSpan = document.getElementById('timeSpan');
const scoreSpan = document.getElementById('score');
const endGameContainer = document.getElementById('end-game-container');

// Función para obtener una palabra aleatoria
function randomWords() {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}

// Función para agregar una palabra al DOM
function addToDOM() {
    palabraAleatoria = randomWords();
    randomWordElement.innerHTML = palabraAleatoria;
}

// Evento para capturar la entrada del usuario
textInput.addEventListener('input', (e) => {
    const palabraIngresada = e.target.value;
    if (palabraIngresada === palabraAleatoria) {
        time += 3;
        e.target.value = '';
        addToDOM();
        updateScore();
    }
});

// Función para actualizar el tiempo
function actualizarTiempo() {
    const timerInterval = setInterval(() => {
        time--;
        timeSpan.innerHTML = `${time}s`;

        if (time === 0) {
            clearInterval(timerInterval);
            gameOver();
        }
    }, 1000);
}

// Función para actualizar el score
function updateScore() {
    score++;
    scoreSpan.innerHTML = score;
}

// Función para terminar el juego
function gameOver() {
    endGameContainer.innerHTML = `
        <h1>Tiempo acabado</h1>
        <p>Tu puntaje final es ${score}</p>
        <button class="retry-button" onclick="location.reload()">Reiniciar</button>
    `;
    document.querySelector('.main').style.display = 'none';
}

// Inicializar juego
addToDOM();
actualizarTiempo();
