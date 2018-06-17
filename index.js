var form = document.querySelector('#survey-form');

var yourName = form.querySelector('#name');
var email = form.querySelector('#email');
var age = form.querySelector('#number');
var select = form.querySelector('#dropdown');
var comments = form.querySelector('#comments');

var fields = form.querySelectorAll('.field');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log('name ' + yourName.value);
    console.log('email ' + email.value);
    console.log('age ' + age.value);
    console.log('select ' + select.value);


    /*start checkbox*/
    var checked_checkboxes = form.querySelectorAll(
        "input[name='kindofsport']:checked"
    );
    var checkboxes = [];
    for (var q = 0; q < checked_checkboxes.length; q++) {
        checkboxes.push(" " + checked_checkboxes[q].value);
        checked_checkboxes[q].parentElement.style.color = 'red';//change colors of checked elements
    }
    console.log('checkboxes' + checkboxes)
    /*finish checkbox*/

    console.log('comments ' + comments.value);


    var errors = form.querySelectorAll('.error');
    for (var j = 0; j < errors.length; j++) {
        errors[j].remove();
    }

    /*    for (var i = 0; i < fields.length; i++) {
            if (!fields[i].value) {
                console.log('field is empty' + fields[i]);
                var errore = form.createElement('div');
                errore.addClass = 'errore';
                errore.innerHTML = 'empty field';
                errore.style.color = 'red';
                fields[i].parentElement.insertBefore(errore, fields[i]);
            }
        }*/
})
