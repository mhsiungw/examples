/**
 * Dynamic import() expressions are supported in either CommonJS or ES modules
 * and would not cause a file to be treated as an ES module.
 * https://nodejs.org/api/packages.html#introduction_1
 */

async function useExternalLib() {
  const minus = await import("../condition-exports-lib/index.mjs");

  console.log(minus.default(1, 2));
}

useExternalLib();
