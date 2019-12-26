const Middleware = require('../lib/Middleware');
const print = require('../lib/print');


const get_do_test_1 = function () {
    const middleware = new Middleware();

    const fn1 = (_, next) => {
        print('start fn1');
        next();
        print('end fn1')
    }
    const fn2 = (_, next) => {
        print('start fn2');
        next();
        print('end fn2')
    }
    const fn3 = (_, next) => {
        print('start fn3');
        next();
        print('end fn3')
    }
    const fn4 = (_, next) => {
        print('start fn4');
        next();
        print('end fn4')
    }

    return () => {
        middleware
            .use(fn1)
            .use(fn2)
            .use(fn3)
            .use(fn4)
            .handleRequest({cnt: 0});
    }
}


get_do_test_1()();