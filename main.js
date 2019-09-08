var algebra = require('algebra.js/algebra');
var Equation = require('algebra.js/src/equations');


var splitTrimParse = (eqStr) => eqStr .split('=').map(exp => algebra.parse(exp.trim()));
var solveX = (equation) => equation.solveFor("x").toString();
var solveY = (equation) => equation.solveFor("y").toString();

function equations2unknowns2(eq1, eq2) {

    var firstEquation = new Equation(...splitTrimParse(eq1));

    var firstXInSecondEqString = eq2.replace('x', solveX(firstEquation));

    var secondEquation = new Equation(...splitTrimParse(firstXInSecondEqString));

    var findY = solveY(secondEquation);

    var firstYInFirstEqString = eq1.replace('y', findY);

    var findX = solveX(new Equation(...splitTrimParse(firstYInFirstEqString)))

    return {
        findX,
        findY
    }

}


var result = equations2unknowns2("x * 2 + y * 4 = 72", "x + y = 22");
console.log(result)

// function equations2unknowns2(eq1, eq2) {

//     var firstEquation = new Equation(...splitTrimParse(eq1));
//     var secondEquation = new Equation(...splitTrimParse(eq2));



//     solveX(firstEquation)
//     solveX(secondEquation)

//     var firstXInSecondEqString = eq2.replace('x', solveX(firstEquation));

//     var secondEquation = new Equation(...splitTrimParse(firstXInSecondEqString));

//     var findY = solveY(secondEquation);

//     var firstYInFirstEqString = eq1.replace('y', findY);

//     var findX = solveX(new Equation(...splitTrimParse(firstYInFirstEqString)))

//     return {
//         findX,
//         findY
//     }

// }
