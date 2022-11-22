

var form = document.getElementById('form');
var campo = document.getElementById('url');


form.addEventListener('submit', function(e) {
    
    alert(campo.value);
    console.log(campo.value)
    const li = document.createElement('li')
    li.innerHTML = `<a href="${campo.value}">${campo.value}</a> `
    document.querySelector('ul').appendChild(li)
    // const apagar = document.createElement('button')
    // apagar.innerHTML = `<button id="" type="button">apagar</button>`
    // document.querySelector('ul').appendChild(apagar)
    // console.log(i)
    
    // impede o envio do form
    e.preventDefault();
});

function del (){
    document.getELementById('').remove();

}