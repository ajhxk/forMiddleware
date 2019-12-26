const Middleware = require('../lib/Middleware');

const do_test_1 = function () {
    const middleware = new Middleware();

    const fn1 = (_, next) => {
        console.log('fn1');
        next();
    }
    const fn2 = (_, next) => {
        console.log('fn2');
        next();
    }
    const fn3 = (_, next) => {
        console.log('fn3');
        next();
    }
    const fn4 = (_, next) => {
        console.log('fn4');
        next();
    }

    middleware
        .use(fn1)
        .use(fn2)
        .use(fn3)
        .use(fn4)
        .handleRequest();
}


do_test_1();