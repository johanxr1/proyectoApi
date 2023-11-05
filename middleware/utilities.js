export function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
export function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}
