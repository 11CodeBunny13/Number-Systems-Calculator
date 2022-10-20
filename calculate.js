function getDecimal(){
    let num = document.getElementById("myNumber").value;
    let choice = document.getElementById("myBase").value;
    let decimal = 0.0;
    let valid = true;
    if(choice == "BINARY"){
        let base = 2;
        valid = isBinary(num);
        
        if(valid == false){
            document.getElementById("solution").innerHTML = "Bad Binary";
            document.getElementById("solution").style.color = "red";
        }else{
            decimal = binaryCalc(base,num);

            document.getElementById("solution").innerHTML = decimal;
            document.getElementById("solution").style.color = "green";
        }
    }else if(choice == "OCTAL"){
        let base = 8;
        valid = isOctal(num);
        if(valid == false){
            document.getElementById("solution").innerHTML = "Bad Octal";
            document.getElementById("solution").style.color = "red";
        }else{
            decimal = octalCalc(base,num);

            document.getElementById("solution").innerHTML = decimal;
            document.getElementById("solution").style.color = "green";
        }

    }else{
        let base = 16;
        valid = isHexa(num);    
        if(choice == "HEXADECIMAL" && valid == false){
            document.getElementById("solution").innerHTML = "Bad Hexadecimal";
            document.getElementById("solution").style.color = "red";
        }else{
            decimal = hexadecimalCalc(base,num);

            document.getElementById("solution").innerHTML = decimal;
            document.getElementById("solution").style.color = "green";
        }

    }
}

// Checks if num is a Binary
function isBinary(n){
    for (let i = 0; i < n.length; i ++){
        let c = n.charAt(i);
        if (c != '0' && c != '1'){
            return false;
        }
        
    }
    return true;
}
// Calculates decimal of num as a binary
function binaryCalc(b,n){
    
    let base = b;
    let num = n;
    let deci = 0.0;
    let binPower = num.length -1;
    if( num.length != base){
        base = num.length - base;
    }
    for (let i = 0; i < num.length; i ++){
        let c = n.charAt(i);
        c = c.valueOf();
        if(c == 1){
            deci = deci + (c*Math.pow(base,binPower));
            base = base - 1;
        }
        
    }
    return deci;
    
}

// Checks if num is an Octal
function isOctal(n){
    for(let i = 0; i < n.length; i++){
        let c = n.charAt(i);
        if(c < 0 || c > 7){
            return false;
        }
    }
    return true;
}
// Calculates decimal of num as an octal
function octalCalc(b,n){
    let base = b;
    let num = n;
    let deci = 0.0;
    let octPower = num.length -1;
    for (let i = 0; i < num.length; i ++){
        let c = n.charAt(i);
        c = c.valueOf();
        deci = deci + (c*Math.pow(base,octPower));
        alert(i + ": Num: "+ c + " Base: "+ base + " Power: "+octPower+ " Decimal: "+deci);
        octPower = octPower - 1;
        
    }
    return deci;

}

// Checks if num is a Hexadecimal
function isHexa(n){
    for (let i = 0; i < n.length; i++){
        let c = n.charAt(i);
        //checks if cahracter is between 9 and A or greater than F
        if ((c>9)&&(c< 'A')||(c>'F')){
            return false;
        }
    }
    return true;
}
// Calculates decimal of num as a hexadecimal
function hexadecimalCalc(b,n){
    let base = b;
    let num = n;
    let deci = 0.0;
    let hexPower = num.length -1;
    for (let i = 0; i < num.length; i ++){
        let c = n.charAt(i);
        if(c == 'A'){
            deci = deci + (10*Math.pow(base,hexPower));
        }
        else if(c == 'B'){
            deci = deci + (11*Math.pow(base,hexPower));
        }
        else if(c == 'C'){
            deci = deci + (12*Math.pow(base,hexPower));
        }
        else if(c == 'D'){
            deci = deci + (13*Math.pow(base,hexPower));
        }
        else if(c == 'E'){
            deci = deci + (14*Math.pow(base,hexPower));
        }
        else if(c == 'F'){
            deci = deci + (15*Math.pow(base,hexPower));
        }
        else{
            c = c.valueOf();
            deci = deci + (c*Math.pow(base,hexPower));
            
        }
        hexPower = hexPower-1;
        
    }
    return deci;

}