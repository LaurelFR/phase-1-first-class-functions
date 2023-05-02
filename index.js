function receivesAFunction(cb) {
    cb();
    return cb;
}

function returnsANamedFunction() {
    return function firstFunction() {
        console.log('This is a function');
    }
}

function returnsAnAnonymousFunction() {
    return function () {
        console.log('This is an anonymous function.');
    };
}
