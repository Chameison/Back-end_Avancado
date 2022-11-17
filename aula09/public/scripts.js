

var form = document.getElementById('form');
var campo = document.getElementById('url');

form.addEventListener('submit', function(e) {
    // alerta o valor do campo
    alert(campo.value);
    console.log(campo.value)
    const li = document.createElement('li')
    li.innerHTML = `<a href="${campo.value}">${campo.value}</a> `
    document.querySelector('ul').appendChild(li)
    // impede o envio do form
    e.preventDefault();
});