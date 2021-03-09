module.exports = function reverse (n) {
    n = Math.abs(n)
    let array
    let result 
    array = Array.from(String(n), Number)
    result = array.reverse().join('')
    result = ++ result - 1
    return result
}
