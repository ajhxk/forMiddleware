const Middleware = require('../lib/Middleware');
const print = require('../lib/print');


const get_do_test_1 = function () {
    const middleware = new Middleware();

    const fn1 = (_, next) => {
        setTimeout(() => {
            print('do async fn1', _);
            _.cnt++;
            next();
        }, 1000*1);
    }
    const fn2 = (_, next) => {
        setTimeout(() => {
            print('do async fn2', _);
            _.cnt++;
            next();
        }, 1000*1);
    }
    const fn3 = (_, next) => {
        setTimeout(() => {
            print('do async fn3', _);
            _.cnt++;
            next();
        }, 1000*1);
    
    }
    const fn4 = (_, next) => {
        setTimeout(() => {
            print('do async fn4', _);
            next();
        }, 1000*1);
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