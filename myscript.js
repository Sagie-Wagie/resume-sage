const d = new Date();
let year = d.getFullYear();
document.getElementById("date").innerHTML = year;

function showAlert() {
  alert('This is an Alert?');
}
document.getElementById('btn-alert').addEventListener('click', showAlert);

document.getElementById('btn-hover').onmouseover = () => {
  document.getElementById('btn-hover').innerText = 'button :)';
};
document.getElementById('btn-hover').onmouseleave = () => {
  document.getElementById('btn-hover').innerText = 'Press This';
};
let number = 1;

document.getElementById('btn-counter').onclick = () => {
    number = number + 1;
    document.getElementById('txt-counter').innerHTML = 'Number: ' + number;

    // Check if the number is even or odd and update the class accordingly
    if (number % 2 == 0) {
        document.getElementById('txt-counter').classList.remove('odd');
        document.getElementById('txt-counter').classList.add('even');
    } else {
        document.getElementById('txt-counter').classList.remove('even');
        document.getElementById('txt-counter').classList.add('odd');
    }
}

document.addEventListener('DOMContentLoaded', function() {
  var orderedList = document.getElementById('numbers');
  for (let i = 1; i <= 100; i++) {
    var listItem = document.createElement('li');
    listItem.textContent = i % 2 === 0 ? 'even' : 'odd';
    orderedList.appendChild(listItem);
  }
});
