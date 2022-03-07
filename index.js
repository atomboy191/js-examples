var rect = {
    perimeter: (x,y) => (x+y)*2,
    area: (x,y) => x*y,
};

function solveRect(l,b) {
    console.log("Solving for rectangle with l = " + l + " and b =" + b);
    if(l<0 || b<0){
        console.log("Dimension should be positv");
        return;
    }

    console.log("area is " + rect.perimeter(l,b) + " and area is " + rect.area(l,b)); 
}

solveRect(10,20);
solveRect(-10,20);
solveRect(10,-20);
solveRect(25,20);
