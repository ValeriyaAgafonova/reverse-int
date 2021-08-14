module.exports = function reverse (n) {
  n = parseFloat(n.toString().split('').reverse().join('')) * Math.sign(n);
n = Math.abs(n);
  
  return n;
}
