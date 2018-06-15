function $plus(x, y) {
  if (x instanceof Array && y instanceof Array)
    return x.concat(y);
  return x + y;
}
