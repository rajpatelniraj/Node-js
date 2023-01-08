 // Anonymous function

//  var sum = function (a,b)
// {
//     return a+b
// }
// console.log(sum(10,20))




// callback function (very important)

function complexExp(add)
{
    console.warn(add(200,300))
}
var add = function (a,b)
{
    return a+b
}
complexExp(add)
