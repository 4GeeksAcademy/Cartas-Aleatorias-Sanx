//♦ ♥ ♠ ♣
//1º asignar un aleatorio para cada palo
//2º Asignar un aleatorio con los numeros A, 2, 3, 4, 5 ,6 ,7 ,8 ,9 , 10, J, Q, K. - Si es corazon o rombo sale rojo, si es trebol o pica, negro.
//si añado las dos en el mismo no me hace falta anidar condiciones. son dos randoms con dos arrays en la misma función. Así evito anidar y cosas de esas que no se hacer.  

/*pasos:
1 - definir los valores de las cartas (palos y numeros)
2 - Obtener un simbolo aleatorio
3 - Obtener un numero aleatorio
(esto lo quiero todo fuera de funcion porque lo quiero en todas partes)
4 - hago una función para el color. El color del palo determina el color del numero. 
    Necesito los ids 
    Necesito el valor aleatorio de la carta y del palo.
    Condicional para asignar el color segun palo, y devuelvo los palos y el numero
5 - Hago una función para generar el simbolo aleatorio. Con eso se aplica lo de arriba. 
6 - opcional, hacer un boton. */


document.addEventListener('DOMContentLoaded', function () {
    const symbols = ['♦', '♥', '♠', '♣'];
    const cardValues = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];


    function getRandomSymbol() {
        const randomIndex = Math.floor(Math.random() * symbols.length);
        return symbols[randomIndex];
    }

    function getRandomCardValue() {
        const randomIndex = Math.floor(Math.random() * cardValues.length);
        return cardValues[randomIndex];
    }

    function setSymbolColor(symbol) {

        const topSymbol = document.getElementById('symbolTop');
        const bottomSymbol = document.getElementById('symbolBottom');
        const textCardElement = document.getElementById('textCard');

        const cardValue = getRandomCardValue();

        if (symbol === '♦' || symbol === '♥') {
            topSymbol.classList.add('red');
            bottomSymbol.classList.add('red');
            textCardElement.classList.add('red');
        } else {
            topSymbol.classList.add('black');
            bottomSymbol.classList.add('black');
            textCardElement.classList.add('black');
        }
        topSymbol.textContent = symbol;
        bottomSymbol.textContent = symbol;
        textCardElement.textContent = cardValue;
    }
    const randomSymbol = getRandomSymbol();
    setSymbolColor(randomSymbol, document.getElementById('textCard'));

    const changeCardButton = document.getElementById('changeCardButton');
    changeCardButton.addEventListener('click', function () {

        document.getElementById('symbolTop').classList.remove('red', 'black');
        document.getElementById('symbolBottom').classList.remove('red', 'black');
        document.getElementById('textCard').classList.remove('red', 'black');

        const randomSymbol = getRandomSymbol();
        setSymbolColor(randomSymbol);
    });
});