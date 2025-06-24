const receivesAFunction =(callback) => {callback();};

const returnsANamedFunction = () => {
    return function myFunc() {
        return "This is a named function!";
    };
};

const returnsAnAnonymousFunction = () => {
    return() => "This is an anonymous function!";
};