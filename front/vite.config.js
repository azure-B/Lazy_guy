import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    // Bind IPv4 so local probes and docs (127.0.0.1) work on Windows
    host: '127.0.0.1',
    strictPort: true,
  },
});
