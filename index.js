var form = document.querySelector('#survey-form');

var yourName = form.querySelector('#name');
var email = form.querySelector('#email');
var age = form.querySelector('#number');
var select = form.querySelector('#dropdown');
var comments = form.querySelector('#comments');
var checkboxes = [];
var radios_freq = form.querySelectorAll("input[name='frequency']")
var radios_sat = form.querySelectorAll("input[name='satisfaction']");
var radio_frequency = '';//checked radio for frequency
var radio_satisfaction = '';//checked radio for satisfaction
/*var fields = form.querySelectorAll('.field');*/

form.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log('name ' + yourName.value);
    console.log('email ' + email.value);
    console.log('age ' + age.value);
    console.log('select ' + select.value);

    /*start radio*/
    function checkRadio(radios, result) {
        for (var i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                result = radios[i].value;
            }
        }
        console.log('radio_frequency ' + result);
    }
    checkRadio(radios_freq, radio_frequency);
    checkRadio(radios_sat, radio_satisfaction);
    /*finish radio*/

    /*start checkbox*/
    var checked_checkboxes = form.querySelectorAll(
        "input[name='kindofsport']:checked"
    );

    for (var i = 0; i < checked_checkboxes.length; i++) {
        checkboxes.push(" " + checked_checkboxes[i].value);
        checked_checkboxes[i].parentElement.style.color = 'red';//change colors of checked elements
    }
    console.log('checkboxes' + checkboxes)
    /*finish checkbox*/

    console.log('comments ' + comments.value);


    /*    var errors = form.querySelectorAll('.error');
        for (var j = 0; j < errors.length; j++) {
            errors[j].remove();
        }*/

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
