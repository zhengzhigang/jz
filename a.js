Function.prototype.myCall = function (obj, ...arg) {
    if (typeof this !== 'function') {
        throw Error('error')
    }
    const fn = Symbol('fn')
    obj = obj || window
    console.log(arg)
    obj[fn] = this
    let result = obj[fn](...arg)
    delete obj[fn]
    return result
}
var name = '李四'
var a = {
    name: '张三'
}
function b(c, d, e) {
    console.log(c, d, e)
    console.log(this.name)
}
var c = 3, d = 4, e = 5
b.myCall(a, c, d, e)