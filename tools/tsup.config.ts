import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/cli.ts', 'src/scipy.plugin.ts'],
  splitting: false,
  sourcemap: true,
  clean: true,
  format: ['esm'],
  dts: true,
  outExtension() {
    return {
      js: '.mjs',
    };
  },
});
