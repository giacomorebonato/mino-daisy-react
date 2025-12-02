await Bun.build({
  entrypoints: ['src/index.ts'],
  outdir: './dist',
  target: 'browser',
  format: 'esm',
  external: ['react', 'react-dom', 'react/jsx-runtime', 'react/jsx-dev-runtime'],
})

export {}
