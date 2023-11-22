import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

export default defineConfig({
  plugins: [reactRefresh()],
  esbuild: {
    jsxFactory: 'React.createElement',
    jsxFragment: 'React.Fragment',
    jsxInject: `import React from 'react'`,
  },
  server: {
    open: true,
    fs: {
      strict: true,
    },
    mimeTypes: {
      'text/jsx': 'js',
    },
  },
  resolve: {
    dedupe: ['react', 'react-dom'],
  },
})