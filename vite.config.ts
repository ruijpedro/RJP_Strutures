import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/SmartStruct_RJP_Android/',
  plugins: [react()],
  build: { outDir: 'dist' }
});
