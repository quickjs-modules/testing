export function isEqual(actual, expected) {
  const type = typeof actual;
  if (type !== typeof expected) throw new Error("is not equal");

  if (type === "symbol") {
    if (actual.toString() !== expected.toString()) {
      throw new Error("is not equal");
    }
    return;
  }

  if (type !== "object") {
    if (actual !== expected) {
      throw new Error("is not equal");
    }
    return;
  }

  if (actual.length !== expected.length) throw new Error("is not euqual");

  let i = 0;
  const l = actual.length;
  for (; i < l; i++) {
    isEqual(actual[i], expected[i]);
  }
}
