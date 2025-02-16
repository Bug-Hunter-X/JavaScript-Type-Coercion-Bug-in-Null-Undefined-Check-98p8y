function foo(a, b) {
  if (a == null || b == null) {
    return 0; //This will cause a bug
  }
  return a + b;
}