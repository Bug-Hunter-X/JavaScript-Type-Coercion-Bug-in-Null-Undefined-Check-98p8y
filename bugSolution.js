function foo(a, b) {
  if (a === null || a === undefined || b === null || b === undefined) {
    return 0;
  }
  return a + b;
}