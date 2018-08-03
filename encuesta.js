
function writeEncuentaData(asiste, name) {
    firebase.database().ref("/encuesta/").push({
        asiste: asiste,
        name: name,
    }, function(error){
        if (error){            
            console.log("error");
        } else{
            console.log("datos guardados")
         }
        }
    });
}
