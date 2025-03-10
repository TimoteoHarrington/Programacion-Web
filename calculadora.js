document.addEventListener('DOMContentLoaded', function() {
    const selectorCalculadora = document.getElementById('selector-calculadora');
    const camposFaena = document.getElementById('campos-faena');
    const camposInvernada = document.getElementById('campos-invernada');
    const botonCalcular = document.getElementById('boton-calcular');
    const divResultado = document.getElementById('resultado');
    const divResultadoUnit = document.getElementById('resultadoUnit');

    selectorCalculadora.addEventListener('change', function() {
        const valorSeleccionado = selectorCalculadora.value;
        if (valorSeleccionado === 'faena') {
            camposFaena.style.display = 'block';
            camposInvernada.style.display = 'none';
        } else if (valorSeleccionado === 'invernada') {
            camposFaena.style.display = 'none';
            camposInvernada.style.display = 'block';
        } else {
            camposFaena.style.display = 'none';
            camposInvernada.style.display = 'none';
        }
        divResultado.textContent = '';
        divResultadoUnit.textContent = '';
    });

    botonCalcular.addEventListener('click', function() {
        let cantidadAnimales, valorCategoria, valorKilos, valorTotal, valorUnitario;

        if (selectorCalculadora.value === 'faena') {
            cantidadAnimales = parseFloat(document.getElementById('cantidad-de-animales-faena').value);
            valorCategoria = parseFloat(document.getElementById('categoria-faena').value);
            valorKilos = parseFloat(document.getElementById('kilos-faena').value);
        } else if (selectorCalculadora.value === 'invernada') {
            cantidadAnimales = parseFloat(document.getElementById('cantidad-de-animales-invernada').value);
            valorCategoria = parseFloat(document.getElementById('categoria-invernada').value);
            valorKilos = parseFloat(document.getElementById('kilos-invernada').value);
        }

        if (isNaN(cantidadAnimales) || cantidadAnimales <= 0) {
            divResultado.textContent = 'Por favor, ingrese una cantidad válida de animales.';
            divResultadoUnit.textContent = '';
            return;
        }

        if (isNaN(valorKilos) || valorKilos <= 0) {
            divResultado.textContent = 'Por favor, ingrese un valor válido de kilos.';
            divResultadoUnit.textContent = '';
            return;
        }

        valorTotal = valorCategoria * valorKilos * cantidadAnimales;
        valorUnitario =  valorCategoria * valorKilos;

        divResultado.textContent = 'Valor aproximado total jaula: $' + valorTotal.toFixed(2);
        divResultadoUnit.textContent = 'Valor aproximado por animal: $' + valorUnitario.toFixed(2);
    });
});
