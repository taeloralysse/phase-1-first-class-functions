function receivesAFunction(callback){
    console.log(callback());
}
receivesAFunction(function(){return "received"});

function returnsANamedFunction(){
    return receivesAFunction
}

function returnsAnAnonymousFunction(){
    return function(){"you got it!"};
}
