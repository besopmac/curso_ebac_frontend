document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('formSorteador').addEventListener('submit', function(e) {
    e.preventDefault();
    let maxNumber = document.getElementById('maxNumber').value;
    maxNumber = parseInt(maxNumber);

    let randomNumber = Math.floor(Math.random() * maxNumber) + 1;

    document.getElementById('resultValue').innerText = randomNumber;
    document.querySelector('.result').style.display = 'block';
  })
})