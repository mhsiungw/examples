async function useExternalLib() {
  const minus = await import("../condition-exports-lib/index.mjs");

  console.log(minus.default(1, 2));
}

useExternalLib();
