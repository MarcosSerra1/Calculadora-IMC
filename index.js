function capturarValor() {
    let altura = parseFloat(document.getElementById("altura").value); // valor da altura
    let peso = Number(document.getElementById("peso").value); // valor do peso
    const texto = document.getElementById('resultado');
    console.log("Valor capturado: " + altura, peso);
    // Aqui você pode fazer qualquer coisa com o valor capturado

    // agora iremos fazer o calculo do imc
    // a formula é: IMC = Peso ÷ (Altura × Altura)
    // exemplode como calcular:
    // IMC = 80 kg ÷ (1,80 m × 1,80 m) = 24,69 kg/m2 (Peso ideal)

    const imc = (peso / (altura * altura));
    console.log(imc.toFixed(2));
    texto.innerHTML = `<p>Seu IMC é: ${imc.toFixed(2)}</p>`;
    
  }