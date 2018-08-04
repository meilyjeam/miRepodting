jQuery(document).ready(function($){
 $('#enviar').click(
     'submit',
     function(e){
         e.preventDefault();

         var  nombre = $('#encuesta #nombre').val(); 
         else {
            database.ref('/relato/').push(nombre);
            location.href="reporting.html";
             alert(nombre);
         }

         if ($('#bt_si')[0].checked==true){
            database.ref('/relato/').push("Si",object('#bt_si','#nombre'));
         }else if ($('#bt_no')[0].checked==true){
            database.ref('/relato/').push("No",object('#bt_no','#nombre'));
         }else if ($('#bt_mas')[0].checked==true){
            database.ref('/relato/').push("Talvez",object('#mas','#nombre'));
         }else
         alert('debes seleccionar una repuesta');


     });
});