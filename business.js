const Middleware = require('./lib/Middleware');
const print = require('./lib/print')



class Main {
    constructor (opts = {}) {
        this.options = opts;
        this._ware = this._buildware();
    }

    _buildware () {
        const _ware = new Middleware();
        _ware.use(this._base_step_1)
            .use(this._base_step_2)
            .use(this._base_step_3);
        return _ware 
    }

    _base_step_1 (options, next) {
        const stepName = '_base_step_1'
        print( `do ${stepName} opt is : `, options);
        next();
        print(`end ${stepName}`)
    }

    _base_step_2 (options, next) {
        const stepName = '_base_step_2'
        print( `do ${stepName} opt is : `, options);
        next();
        print(`end ${stepName}`)
    }

    _base_step_3 (options, next) {
        const stepName = '_base_step_3'
        print( `do ${stepName} opt is : `, options);
        next();
        print(`end ${stepName}`)
    }

    create () {
        return this._ware.handleRequest(this.options);
    }

}

new Main({a: 'aa'}).create();