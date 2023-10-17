import { err, out, exit } from "std";

export default function testsuite(name) {
  const tests = new Map();
  return {
    test: (desc, test) => tests.set(desc, test),
    run: () => {
      console.log(`Run suite ${name}`);
      let passed = 0;
      let failed = 0;
      for (const [desc, test] of tests.entries()) {
        try {
          test();
          passed++;
          out.puts(`  Test ${desc} ... passed\n`);
        } catch (e) {
          failed++;
          err.puts(`  Test ${desc} ... failed\n`);
        }
      }
      console.log(`${passed} passed / ${failed} failed`);
      exit(failed ? 1 : 0);
    },
  };
}
