var algebra = require('algebra.js/algebra');
var Equation = require('algebra.js/src/equations');
// https://algebra.js.org

var splitTrimParse = (eqStr) => eqStr .split('=').map(exp => algebra.parse(exp.trim()));
var solveX = (equation) => equation.solveFor("x");
var solveY = (equation) => equation.solveFor("y");

function twoEquationsTwounknowns(eq1, eq2) {

    var firstEquation = new Equation(...splitTrimParse(eq1));
    var secondEquation = new Equation(...splitTrimParse(eq2));

    var findY = solveY(new Equation(solveX(firstEquation), solveX(secondEquation)));

    var findX = solveX(new Equation(solveY(firstEquation), findY));

    return {
        x : findX.toString(),
        y : findY.toString()
    }
}

// Problem 1:
// 72 fødder og 22 hoveder. Hvor mange mennesker(x) og hvor mange heste(y) 

var menAndHorses = twoEquationsTwounknowns("x * 2 + y * 4 = 72", "x + y = 22");

console.log(menAndHorses)

// Problem 2:
// 20 ben og 9 møbler. Hvor mange 2-bens-stole(x) og hvor mange 3-bens-borde(y) 

var chairsAndTables = twoEquationsTwounknowns("x * 2 + y * 3 = 20", "x + y = 9");

console.log(chairsAndTables)

// Problem 3
// et eller andet...
var something = twoEquationsTwounknowns("3 * x + 4 * y = 35", "4 * x + 2 * y = 20");

console.log(something)
