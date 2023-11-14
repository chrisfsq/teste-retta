function toRoman() {
    let decimal = parseInt(document.getElementById('n1').value);
    let res = document.getElementById('result');


    if (!decimal || decimal < 1 || decimal > 5000) {
       res.innerHTML = "Digite um número de 1 a 5000"
       res.style.color = "red"
       return
    }

    let result = ''

    let numerosRomanos = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    }

    for (let numeros in numerosRomanos) {
        while (decimal >= numerosRomanos[numeros]) {
            result += numeros
            decimal -= numerosRomanos[numeros]
        }
    }

    res.innerHTML = result;
    res.style.color = "light-green";

}

function toDecimal() {
    let roman = document.getElementById('n2').value.toUpperCase();
    let res = document.getElementById('result');
    let result = 0;

    if (!roman) {
        res.textContent = "Digite um número romano de I até MMMMM";
        res.style.color = "red";
        return
    }

    numerosDecimais = {
        'M': 1000,
        'CM': 900,
        'D': 500,
        'CD': 400,
        'C': 100,
        'XC': 90,
        'L': 50,
        'XL': 40,
        'X': 10,
        'IX': 9,
        'V': 5,
        'IV': 4,
        'I': 1
    }

    for (let numeral in numerosDecimais) {
        while (roman.startsWith(numeral)) {
            result += numerosDecimais[numeral];
            roman = roman.slice(numeral.length);
        }
    }

    if (roman.length > 0) {
        return res.textContent = "Número romano inválido";
    }
    

    res.innerHTML = result;
    res.style.color = "ligh-green";
}

