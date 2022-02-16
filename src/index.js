module.exports = function reverse (n) {
   if (n > 0) {
     let a = [n]
     let b = a.toString().split('');
     let c = b.reverse();
     let d = c.join('');
    return d;
 }
 else if (n < 0) {
    let a = [n * -1]
    let b = a.toString().split('');
    let c = b.reverse();
    let d = c.join('');
   return d;
 }
}
