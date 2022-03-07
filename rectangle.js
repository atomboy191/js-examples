module.exports = (x,y,callback) => {
    if( x <= 0 || y <= 0){
        setTimeout(() => 
            callback(new Error("Rectangle's dimension should be positve " + x + ' ' + y), null),
            2000);
    } else {
        setTimeout(() =>
            callback(null, 
                {
                    perimeter: () => (x+y)*2,
                    area: () => x*y
                })
            , 5000);

    }

}

//console.log("area is " + rect.perimeter(l,b) + " and area is " + rect.area(l,b)); 


