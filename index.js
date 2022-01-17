let calcSum = () => {
    let a = document.getElementById
        ('sumA').value;
    let b = document.getElementById
        ('sumB').value;
    let sum = Number(a) + Number(b);
    document.getElementById('sumAB').innerHTML = sum;

}

let calcSub = () => {
    let a = document.getElementById
        ('subA').value;
    let b = document.getElementById
        ('subB').value;
    let sub = Number(a) - Number(b);
    document.getElementById('subAB').innerHTML = sub;
}

let calcMulti = () => {
    let a = document.getElementById
        ('multiA').value;
    let b = document.getElementById
        ('multiB').value;
    let multi = Number(a) * Number(b);
    document.getElementById('multiAB').innerHTML = multi;
}

let calcDiv = () => {
    let a = document.getElementById
        ('divA').value;
    let b = document.getElementById
        ('divB').value;
    let div = Number(a) / Number(b);
    if (b == 0) {
        document.getElementById('divAB').innerHTML = 'на ноль делить нельзя';
    }
    else {
        document.getElementById('divAB').innerHTML = div;
    }
}

