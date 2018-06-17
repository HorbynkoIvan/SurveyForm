var form = document.querySelector('#survey-form');
var name = form.querySelector('#name');
var email = form.querySelector('#email');
var age = form.querySelector('#number');
var select = form.querySelector('#dropdown');
var radio = form.querySelector();
var checkbox;
var comments = form.querySelector('#comments');

var fields = form.querySelectorAll('.field');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log('name ' + name.value);
    console.log('email ' + email.value);
    console.log('age ' + age.value);
    console.log('select ' + select.value);
    console.log('radio ' + radio.value);
     console.log('checkbox ' + radio.value);
    console.log('comments ' + comments.value);

    var errors = form.querySelectorAll('.error');
    for(var j = 0; j<errors.length; j++){
        errors[j].remove();
    }

    for (var i = 0; i < fields.length; i++) {
        if (!fields[i].value) {
            console.log('field is empty' + fields[i]);
            var errore = form.createElement('div');
            errore.addClass = 'errore';
            errore.innerHTML = 'empty field';
            errore.style.color = 'red';
            fields[i].parentElement.insertBefore(errore, fields[i]);
        }
    }
})