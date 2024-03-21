function makeAdder(valueToadd) {
    return function (number) { return number + valueToadd; };
}
var add = makeAdder(10);
console.log(add(20));
