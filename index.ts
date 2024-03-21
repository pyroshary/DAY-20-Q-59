//making  program to add specific number

function makeAdder(valueToadd:number):(number)=> number{
    return function(number:number): number{return number + valueToadd}
}


let add = makeAdder(10)
console.log(add(20))