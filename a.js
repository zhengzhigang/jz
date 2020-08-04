function Queue() {
    let items = []
    this.enqueue = function(e) {
        items.push(e)
    }
    this.addFirst = function(e) {
        items.unshift(e)
    }
    this.dequeue = function() {
        return items.shift()
    }
    this.removeLast = function() {
        return items.pop()
    }
    this.isEmpty = function() {
        return items.length === 0
    }
    this.front = function() {
        return items[0]
    }
    this.clear = function() {
        items = []
    }
    this.size = function() {
        return items.length
    }
}
function reverseWords(s) {
    let left = 0
    let right = s.length - 1
    let queue = []
    let word = ''

    while(s.charAt(left) === ' ') left++
    while(s.charAt(right) === ' ') right--

    while(left <= right) {
        let char = s.charAt(left)
        if (char === ' ' && word) {
            queue.unshift(word)
            word = ''
        } else if (char !== ' ') {
            word += char
        }
        left++
    }
    queue.unshift(word)
    return queue.join(' ')
}
// console.time('@@@')
// console.log(reverseWords('  y decreasing the number of colors in the image, '))
// console.timeEnd('@@@')

function reverseWords2(s) {
    s.trim()
    let news = s.split(' ')
    news = news.filter(item => !!item)
    news.reverse()
    return news.join(' ')
}

console.time('@@@!!')
console.log(reverseWords2(a))
console.timeEnd('@@@!!')


