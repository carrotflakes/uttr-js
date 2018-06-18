module.exports = `
function $plus(x, y) {
  if (x instanceof Array && y instanceof Array)
    return x.concat(y);
  return x + y;
}
function $equal(x, y) {
  if (x instanceof Array) {
    if (y instanceof Array && x.length === y.length) {
      for (const i in x) {
        if (!$equal(x[i], y[i]))
          return false;
      }
      return true;
    } else {
      return false;
    }
  } else if (typeof x === 'object') {
    if (typeof y === 'object' && !(y instanceof Array) && $equal(Object.keys(x), Object.keys(y))) {
      for (const key of Object.keys(x)) {
        if (!$equal(x[key], y[key]))
          return false;
      }
      return true;
    } else {
      return false;
    }
  }
  return x === y;
}
function str(x) {
  return '' + x;
}
function json(x) {
  return JSON.stringify(x);
}
function items(x) {
  return Object.entries(x);
}
function typeOf(x) {
  if (x instanceof Array)
    return 'list';
  if (x === null)
    return 'null';
  const type = typeof x;
  if (type === 'function')
    return 'closure';
  return type;
}
`;
