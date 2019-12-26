const print = function () {
    return console.log.apply(console, arguments);
}
module.exports = print;