export function foo() {
  return 'bar';
}

export function bar() {
  return 'foo';
}

export function baz() {
  const foo = 42;
  return `doo ${foo}`;
}
