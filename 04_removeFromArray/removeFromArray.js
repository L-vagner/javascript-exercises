const removeFromArray = function(array, ...items) {
    
    for (const item of items){
        while (array.includes(item)) {
            let i = array.indexOf(item);
            array.splice(i, 1);
        }
    }
    return array;
        
};

// Do not edit below this line
module.exports = removeFromArray;