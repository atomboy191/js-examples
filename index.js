var rect = require('./rectangle');
var tri = 0;

function solveRect(l,b) {
    console.log("Solving for rectangle with l = " + l + " and b =" + b);

    rect(l,b, function(err, rectangle) {
        if(err){
            console.log('ERROR: ', err.message);
        } else {
            console.log("Perimeter is: ", rectangle.perimeter(l,b));
            console.log("Area is: ", rectangle.area(l,b));
        }
     });
     console.log("this statement is after the call to rect");
}

solveRect(10,20);
solveRect(-10,20);
solveRect(10,-20);
solveRect(25,20);
