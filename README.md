# testing

`test.js`:

```javascript
import testsuite from "./modules/testing/testsuite.js";
import { isEqual } from "./modules/testing/assert.js";

const { test, run } = testsuite("my_module");

test("simple test", () => {
  isEqual(true, true);
});

run();
```

Run test file:

```
qjs test.js

Run suite my_module
  Test simple test ... passed
1 passed / 0 failed
```
