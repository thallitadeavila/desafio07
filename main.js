var btnSomar = document.getElementById('btnSomar');
        btnSomar.addEventListener('click', somar);

        function somar() {
            var c1 = document.getElementById('txt01');
            var c2 = document.getElementById('txt02');
            var result = document.getElementById('resultado');

            
            var num1 = parseFloat(c1.value);
            var num2 = parseFloat(c2.value);

            var resultado = num1 + num2;
            result.innerText = "A soma é: " + resultado;

        }

        var btnSubtrair = document.getElementById('btnSubtrair');
        btnSubtrair.addEventListener('click', subtrair);

        function subtrair() {
            var c1 = document.getElementById('txt01');
            var c2 = document.getElementById('txt02');
            var result = document.getElementById('resultado');

            
            var num1 = parseFloat(c1.value);
            var num2 = parseFloat(c2.value);

            var resultado = num1 - num2;
            result.innerText = "A subtração é: " + resultado;
        }

        var btnMultiplicar = document.getElementById('btnMultiplicar');
        btnMultiplicar.addEventListener('click', multiplicar);

        function multiplicar() {
            var c1 = document.getElementById('txt01');
            var c2 = document.getElementById('txt02');
            var result = document.getElementById('resultado');

            
            var num1 = parseFloat(c1.value);
            var num2 = parseFloat(c2.value);

            var resultado = num1 * num2;
            result.innerText = "A multiplicação é: " + resultado;
        }

        var btnDividir = document.getElementById('btnDividir');
        btnDividir.addEventListener('click', dividir);

        function dividir() {
            var c1 = document.getElementById('txt01');
            var c2 = document.getElementById('txt02');
            var result = document.getElementById('resultado');

            
            var num1 = parseFloat(c1.value);
            var num2 = parseFloat(c2.value);

            var resultado = num1 / num2;
            result.innerText = "A divisão é: " + resultado;
        }

        var btnLimpar = document.getElementById('btnLimpar');
        btnLimpar.addEventListener('click', limpar);

        function limpar(){

            var c1 = document.getElementById('txt01');
            var c2 = document.getElementById('txt02');
            var result = document.getElementById('resultado');
            
            c1.value = "";
            c2.value = "";
            result.innerText = "Resultado";

        }