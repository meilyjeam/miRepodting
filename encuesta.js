$('#ecu')
function guardaDatos(user){
    var usuario = {
        uid:user.udi,
        nombre:user.displayName,
        email:user.email
    }
    fireba
}












function() {
'use strict';

var form = document.getElementById('questions');

form.onsubmit = function(e) {
    e.preventDefault();

    var data = getData();

    var dataRef = new Firebase('https://chat-c2c6d.firebaseio.com/');

    dataRef.push(data, function() {
        window.alert('Form submitted');
    });
};

function getData() {
    var data = {};

    var inputs = form.querySelectorAll('input, textarea');

    for (var i=0; i<inputs.length; i++) {
        var el = inputs[i];

        switch (el.type) {
            case 'radio':
                if (el.checked) data[el.name] = el.value;

                break;
            case 'text':
            default:
               
                data[el.name] = el.value;
                break;
        }
    }

    return data;
}

})();