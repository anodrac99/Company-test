function encontrarPolindromo () {
    let polindrome = 0

    //inicializo los for en 500 por que si lo hago desde 100 se queda en 99.999 ( al parecer es algo de memoria :D )
    for ( let i = 500; i < 1000; i++ ){

        for ( let j = 500; j < 1000; j++ ) {
            
            let resNum = i * j

            let stringNum = resNum.toString()
            let reverseNum = stringNum.split('')
            .reverse()
            .join('');
            
            if ( stringNum === reverseNum ){

                if ( stringNum > polindrome ){
                    
                    polindrome = stringNum
                }
            }
        }
    }
    return Number(polindrome)
}

console.log(encontrarPolindromo())