await Bun.build({
  entrypoints: ['src/index.ts'],
  outdir: './dist',
  external: [
    'react',
    'react-dom',
    'react/jsx-runtime',
    'react/jsx-dev-runtime',
    'lexical',
    '@lexical/*',
  ],
})

export {}
