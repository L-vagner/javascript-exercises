const repeatString = function( word,n) {
    let val = "";
    if (n < 0)
    {
        return "ERROR";
    }
for (let i = 0; i < n; i++)
val +=word;
return val;
};

// Do not edit below this line
module.exports = repeatString;
