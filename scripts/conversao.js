function converterOctal() {

    var decimal = Number(inputDecimal.value);

    let octal = decimal.toString(8);

    decContent.innerHTML = `Octal: ${octal}`;

    decContent.style.display = 'flex'


}

function converterHexa() {

    var decimal = Number(inputDecimal.value);

    let hexadecimal = decimal.toString(16);


    octalContent.innerHTML = `Hexa: ${hexadecimal}`;
    octalContent.style.display = 'flex'

}


function converterBin() {

    var decimal = Number(inputDecimal.value);

    let binario = decimal.toString(2);

    hexaContent.innerHTML = `Binário: ${binario}`;

    hexaContent.style.display = 'flex'

}

function Reset() {
    decContent.innerHTML = ``;
    decContent.style.display = 'none'

    octalContent.innerHTML = ``;
    octalContent.style.display = 'none'

    hexaContent.innerHTML = ``;
    hexaContent.style.display = 'none'

    inputDecimal.value = ""

}