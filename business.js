const Middleware = require('./lib/Middleware');
const print = require('./lib/print')



class Main {
    constructor (opts = {}) {
        this.options = opts;
        this._ware_create = this._build_create();
        this._ware_update = this._build_update();
    }

    _build_create () {
        const _ware = new Middleware();
        _ware.use(this._base_step_1)
            .use(this._base_step_2)
            .use(this._base_step_3)
            .use(this._create_step)
        return _ware; 
    }

    _build_update () {
        const _ware = new Middleware();
        _ware.use(this._base_step_1)
            .use(this._base_step_2)
            .use(this._base_step_3)
            .use(this._update_step)
        return _ware; 
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

    _create_step (options, next) {
        print('do create', options);
        next();
        print('create end', options);
    }

    _update_step (options, next) {
        print('do update', options);
        next();
        print('update end', options);
    }

    create () {
        return this._ware_create.handleRequest(this.options);
    }

    update () {
        return this._ware_update.handleRequest(this.options);
    }

}

const main = new Main({aa: 'aa'});
main.create();
main.update();