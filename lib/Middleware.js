class Middleware {
    constructor () {
        this.cache = [];
        // 缓存options
        this.options = null;
        this.middlewares = [];
    }

    use(fn) {
        if(typeof fn !== 'function'){
            throw 'middleware must be a function';
        }
        this.cache.push(fn);
        return this;
    }


    next(fn) {
        if(this.middlewares && this.middlewares.length > 0){
            const ware = this.middlewares.shift();
            // 传入options与next
            ware.call(this, this.options, this.next.bind(this));

        }
    }

    handleRequest(options) {
        // 复制
        this.middlewares = this.cache.map(fn => fn);
        // 缓存options
        this.options = options;
        this.next();
    }
}


module.exports = Middleware;