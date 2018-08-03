function writeEncuestaData(asiste, name) {
    firebase.database("chat").ref("/encuesta/").push({
        siste: asiste,
        neme: name,
    }, function(error){
        if (error){
            console.log("error");
        } else{
            console.log("datos guardados")
         }

         var('#ecu').on(
        'click',
        function(e){
            console.log('aaaa')
            e.preventDefault();
            var nombre = $('.nombre').val();
            var asiste = $(".asiste").val();
    });
}