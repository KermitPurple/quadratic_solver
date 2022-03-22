const els = {
    'a': document.querySelector('#coef-a'),
    'b': document.querySelector('#coef-b'),
    'c': document.querySelector('#coef-c'),
    'roots': document.querySelectorAll('.root'),
};

function solveQuadratic(a, b, c){
    // quadratic formula
    //     -b +- sqrt(b^2 - 4 * a * c)
    // x = --------------------------
    //              2 * a
    let disc = math.sqrt(b * b - 4 * a * c);
    if(typeof(disc) === 'number'){
        disc =  math.complex(disc, 0);
    }
    // need to use funcs cuz complex numbers
    const calc = d => math.divide(math.subtract(d, b), 2 * a).toString();
    return [calc(disc), calc(disc.neg())];
}

function updateRoots(){
    let roots = solveQuadratic(
        parseInt(els.a.value),
        parseInt(els.b.value),
        parseInt(els.c.value),
    );
    for(let i = 0; i < 2; i++)
        els.roots[i].innerHTML = roots[i];
}

function justifyNumberInput(el){
    if(el.value === '' || parseInt(el.value) === NaN){
        el.value = '0';
    }
    updateRoots()
}

updateRoots();
