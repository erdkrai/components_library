const esbuild = require("esbuild");
const inlineImage = require("esbuild-plugin-inline-image");

esbuild
  .build({
    entryPoints: ["./src/Main.bs.mjs"],
    outfile: "index.mjs",
    minify: true,
    bundle: true,
    loader: {
      ".js": "jsx",
    },
    format: "esm",
    plugins: [inlineImage()],
  })
  .catch(() => process.exit(1));

esbuild
  .build({
    entryPoints: ["./src/Main.bs.mjs"],
    outfile: "index.js",
    minify: true,
    bundle: true,
    loader: {
      ".js": "jsx",
    },
    format: "cjs",
    plugins: [inlineImage()],
  })
  .catch(() => process.exit(1));
