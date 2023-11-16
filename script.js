/*function potencia() {
    let n = 5;
    let pote = n;

    while (n>=1) {
            pote = Math.pow(2, n);
            n = n - 1;
            alert (pote);
        let n = parseInt(numer.value);
        let fat= n ;
        if (n<o){
            alert("numero negativo");
        }
         else if (n == 0){
            alerte ("1");
         }

         else {
            while (n>1){
                fat = fat *  (n -1)
                    n = n -1;
                
            }
         }
    }

    
}*/

let n = 5;
let soma = 0;
let pote = 0;
let fat = 5;
    while(n>=1){
        pote =  Math.pow (2,n);
        i = n;
        while (i  > 1) {
        fat = fat * (i -1);
        i = i -1;  

        }
        soma = soma + (poke * fat);
        n = n -1;

    }


