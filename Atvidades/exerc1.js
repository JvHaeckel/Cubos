
function solucao(altitude) {

   
    if (altitude <= 20) {
        return "TROPOSFERA";
    }
    else if ( altitude <= 50) {
        return "ESTRATOSFERA";
    }
    else if ( altitude <= 80) {
        return "MESOSFERA";
    }
    else if( altitude <= 450){
        return "TERMOSFERA";
    }
    else {
        return  "EXOSFERA";
    }
}


// function solucao(altitude) {
    
//     switch(altitude){
//         case altitude <= 20 :  return 'TROPOSFERA' ;

//         case  altitude <= 50 :  return 'ESTRATOSFERA' ;

//         case  altitude <= 80 :  return 'MESOSFERA' ;

//         case  altitude <= 450 :  return 'TERMOSFERA' ;

//         case  altitude <= 900 :  return 'EXOSFERA' ;
//     }

// }
