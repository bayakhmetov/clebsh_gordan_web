document.getElementById('btn').addEventListener('click', CGC);
function kronecker(x, y) {
    if (x == y) {
        return 1;
    } else {
        return 0;
    }
}
function fact(n) {
    if (Math.trunc(n)!= n) {
        return 0;
    } else {
        var p = 1;
        for (var i=2; i<=n; i++)
        p *= i;
        return p;
    }
}
function CGC() {
    let a = Number(document.getElementById('j1').value);
    let a1 = Number(document.getElementById('m1').value);
    let b = Number(document.getElementById('j2').value);
    let b1 = Number(document.getElementById('m2').value);
    let c = Number(document.getElementById('j').value);
    let c1 = Number(document.getElementById('m').value);


    let z = 0;
    let summ = 0;
    if (c>=Math.abs(a-b) && c <=Math.abs(a+b) && a>=0 && b>=0 && c>=0
    && a>=Math.abs(a1) && b>=Math.abs(b1) && c>=Math.abs(c1)
    && (a+a1)==Math.trunc(a+a1) && (b+b1)==Math.trunc(b+b1)
    && (c+c1)==Math.trunc(c+c1) && (a+b+c)==Math.trunc(a+b+c)) {
        while ( (a+b-c1-z)>=0 && (b+c-a1-z)>=0 && (a-a1-z)>=0 && (c-c1-z)>=0 && (a+b+c+1-z)>=0 ) {
                summ += (kronecker(c1, a1+b1) 
                * Math.sqrt(fact(a+a1)*fact(a-a1)*fact(c+c1)*fact(c-c1)*(2*c+1)/fact(b+b1)/fact(b-b1))
                * (-1)**(a-a1+z) *fact(a+b-c1-z) * fact(b+c-a1-z) / fact(z) / fact(a-a1-z)
                / fact(c-c1-z) / fact(a+b+c+1-z) / Math.sqrt(fact(a+b-c)*fact(a-b+c)*fact(-a+b+c)/fact(a+b+c+1)));
                z++;
        }
    }
    document.getElementById('Clebsch').value = Math.round(summ*10000000.0)/10000000.0;
}
