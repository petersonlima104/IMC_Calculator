// Função para calcular o IMC
function calculateIMC() {
  var weight = document.getElementById("weight").value;
  var height = document.getElementById("height").value;

  var imc = weight / (((height / 100) * height) / 100);
  //var imc = weight / (height * height);
  var resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";

  if (imc < 18.5) {
    resultDiv.innerHTML =
      '<div class="alert alert-warning">Seu IMC é ' +
      imc.toFixed(2) +
      " (Abaixo do peso) - O IMC ideal seria entre 18.5 e 24.9</div>";
  } else if (imc >= 18.5 && imc <= 24.9) {
    resultDiv.innerHTML =
      '<div class="alert alert-success">Seu IMC é ' +
      imc.toFixed(2) +
      " (Peso normal)</div>";
  } else if (imc >= 25 && imc <= 29.9) {
    resultDiv.innerHTML =
      '<div class="alert alert-warning">Seu IMC é ' +
      imc.toFixed(2) +
      " (Sobrepeso) - O IMC ideal seria entre 18.5 e 24.9</div>";
  } else {
    resultDiv.innerHTML =
      '<div class="alert alert-danger">Seu IMC é ' +
      imc.toFixed(2) +
      " (Obesidade) - O IMC ideal seria entre 18.5 e 24.9</div>";
  }
}

// Evento de envio do formulário
document.getElementById("imcForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Impede o envio do formulário
  calculateIMC();
});
