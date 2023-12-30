    const button = document.getElementById('button-s');
    
    button.addEventListener('click', function() {

        const min = parseInt(document.getElementById('min').value);
        const max = parseInt(document.getElementById('max').value);
        
    let result = Math.floor(Math.random() * (max - min + 1)) + min;

    if(min < 0) {
        alert('O valor mínino deve ser maior ou igual a 0.')
    }
    if (isNaN(result)) {
        result = 'Valor inválido';
    }
    if (max < min) {
        alert('O vamor maxímo deve ser igual ou superior ao valor minímo')
    }

        document.querySelector('#resultado > span').textContent = result;
    });


    //Esse codigo foi criado para realizar o sorteio do número aleatorio.
    //Chamamos o botão e criamos um evento de click, dentro desse evento de click chamamos o min e max e depois escrevemos o calculo para gerar um número aleatorio, após realizamos a substituição do span, para que ele exiba um número.
    //também ofoi criado ulgumas if para lidar com algumas exeções, como se nenhum número for informado, ele vai substituir o número por uma mensagem informado que o valor é inválido.