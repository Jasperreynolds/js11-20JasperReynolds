//Code Problem 11
function firstLast6(X){
    if(X[0] == 6 || X[X.length - 1] == 6){
        return true;
    }else{
        return false;
    }
}

//Code Problem 12
function has23(X){
    if(X[0] == 2 || X[0] == 3 || X[1] == 2 || X[1] ==3){
        return true;
    }else{
        return false;
    }
}

//Code Problem 13
function fix23(X){
    if(X[0] == 2 && X[1] == 3){
        return[2, 0, X[2]];
    }else if(X[1] == 2 && X[2] == 3){
        return[X[0], 2, 0];
    }else{
        return[X[0], X[1], X[2]];
    }
}

//Code Problem 14
function countYZ(string){
    var value = 0;
    string=string.toLowerCase();
    for(var i=0; i <= string.length - 1; i++) {
        if ((string[i] == "y" || string[i] == "z") && string[i+1] == " "){
            value += 1;
        }
        if ((string[i] == "y" || string[i] == "z") && i == string.length - 1){
            value += 1;
        }
    }
    return value;
}

//Code Problem 15
function endOther(str1, str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    if (str2.length >= str1.length) {
        if (str1 == str2.substring(str2.length - str1.length, str2.length)){
            return true;
        } else {
            return false;
        }
    }
    if(str2.length < str1.length){
        if(str2 == str1.substring(str1.length - str2.length, str1.length)){
            return true;
        }else{
            return false;
        }
    }
}

//Code Problem 16
function starOut(str){
    var returnWord = "";
    for(var i = 0; i < str.length; i++){
        if(str[i] != "*"){
            if(str[i+1] != "*"){
                if(str[i-1] != "*"){
                    returnWord += str[i];
                }
            }
        }
    }
    return returnWord;
}

//Code Problem 17
function getSandwich(str){
    var breadCount = 0;
    for(var i = 0; i < str.length; i++){
        if(str.substring(i, i+5) == "bread"){
            breadCount += 1;
        }
    }
    if(breadCount >= 2){
        return str.substring(str.indexOf("bread")+5, str.lastIndexOf("bread"));
    }else{
        return "";
    }
}

//Code Problem 18
function canBalance(num){
    var sum1 = 0;
    var isEqual = false;
    for (var i = 0; i < num.length; i++){
        var sum2 = 0;
        sum1 += num[i];
        for (var j = i+1; j<num.length; j++){
            sum2 += num[j];
        }
        if(sum1 == sum2){
            isEqual = true;
        }
    }
    return isEqual;
}

//Code Problem 19
function countClumps(X){
    var count = 0;
    for(var i = 0; i < X.length; i++){
        if((X[i]==X[i+1]) && (X[i] != X[i-1])){
            count ++;
        }
    }
    return count;
}

//Code Problem 20
function evenlySpaced(a,b,c) {
    if((a-b==b-c)||(a-c==c-b)||(b-c==c-a)||(b-a==a-c)||(c-a==a-b)||(c-b==b-a)){
        return true;
    }else{
        return false;
    }
}




function tester() {
    document.getElementById("output").innerHTML += firstLast6(true, false);
    document.getElementById("output").innerHTML += has23(true, false);
    document.getElementById("output").innerHTML += fix23(true, false);
    document.getElementById("output").innerHTML += countYZ('aaz yyz my');
    document.getElementById("output").innerHTML += endOther(str1, str2);
    document.getElementById("output").innerHTML += starOut(str);
    document.getElementById("output").innerHTML += getSandwich(str);
    document.getElementById("output").innerHTML += canBalance(num);
    document.getElementById("output").innerHTML += countClumps(X);
    document.getElementById("output").innerHTML += evenlySpaced(a,b,c);

}
