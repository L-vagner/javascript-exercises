const sumAll = function(numA, numB) {
    for (let i = 0 , len = arguments.length; i < len; i ++)
    {
        if ((arguments[i] < 0) || (!Number.isInteger(arguments[i])) || (typeof arguments[i] != "number"))
        {
            return 'ERROR';
        }
    }
    let start;
    let end;
    let sum = 0;
if (Math.min(numA, numB) == numA){
    start = numA;
    end = numB;
} else {
    start = numB;
    end = numA
}

for (start; start <= end; start ++)
{
 sum += start;
}
return sum;
};

// Do not edit below this line
module.exports = sumAll;
